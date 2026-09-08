'use strict';
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { createHash } = require('node:crypto');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const imageTypes = new Set(['.jpg','.jpeg','.png','.webp','.avif','.tif','.tiff']);
const videoTypes = new Set(['.mp4','.mov','.m4v','.webm']);
function run(exe,args) {
  return new Promise((resolve,reject)=>{
    const p=spawn(exe,args,{shell:false,windowsHide:true}); let log='';
    p.stderr.on('data',chunk=>{log=(log+chunk.toString()).slice(-12000);});
    p.on('error',reject);p.on('close',code=>code===0?resolve(log):reject(new Error(`Process exited ${code}: ${log}`)));
  });
}
async function main(){
  const args=process.argv.slice(2);let input,out,hero=false;
  for(let i=0;i<args.length;i++){
    if(args[i]==='--help'){console.log('node scripts/optimize-media.js [--input file] [--out NEW-directory] [--hero]\nDefault: originals in public/media/{images,videos,logos}; output optimized/run-TIMESTAMP.\nImages: WebP, AVIF and JPEG, no upscale. SVG is intentionally left for manual review.\nHero: max 15 seconds, silent. Other videos retain optional audio. Set FFMPEG_PATH if ffmpeg is not in PATH.');return;}
    if(args[i]==='--hero'){hero=true;continue;}
    if(['--input','--out'].includes(args[i]) && args[i+1] && !args[i+1].startsWith('--')){const flag=args[i++];if(flag==='--input')input=path.resolve(args[i]);else out=path.resolve(args[i]);continue;}
    throw new Error(`Unknown or incomplete argument: ${args[i]}`);
  }
  if(hero&&!input)throw new Error('--hero requires --input; batch mode detects hero-* video names.');
  let files=[]; const skipped=[];
  if(input)files=[input];else for(const dir of ['images','videos','logos']){
    const base=path.join(root,'public/media',dir);
    for(const ent of await fs.readdir(base,{withFileTypes:true}))if(ent.isFile())files.push(path.join(base,ent.name));
  }
  const jobs=[];const names=new Set();
  for(const file of files){
    const ext=path.extname(file).toLowerCase();
    if(!imageTypes.has(ext)&&!videoTypes.has(ext)){if(input)throw new Error('Unsupported input. SVG stays vector and requires manual review.');skipped.push(path.relative(root,file));continue;}
    const st=await fs.lstat(file);if(!st.isFile()||st.isSymbolicLink())throw new Error('Input must be a regular file.');
    const name=path.basename(file,ext).toLowerCase().replace(/[^a-z0-9-]/g,'-');
    if(names.has(name))throw new Error(`Duplicate asset basename: ${name}. Rename originals to unique asset IDs.`);names.add(name);
    jobs.push({file,name,ext,hero:videoTypes.has(ext)&&(hero||name.startsWith('hero-'))});
  }
  if(!jobs.length){console.log('No raster image/video originals found. Add originals using public/media/README.md. Nothing generated.');return;}
  if(jobs.some(j=>videoTypes.has(j.ext)))await run(process.env.FFMPEG_PATH||'ffmpeg',['-version']);
  out=out||path.join(root,'public/media/optimized','run-'+new Date().toISOString().replace(/[:.]/g,'-'));
  // A new directory prevents accidental replacement of approved media or source files.
  await fs.mkdir(path.dirname(out),{recursive:true});await fs.mkdir(out,{recursive:false});
  const report={createdAt:new Date().toISOString(),status:'running',tool:{sharp:sharp.versions.sharp},skipped,assets:[]};
  try{
    for(const job of jobs){
      const item={id:job.name,source:path.relative(root,job.file),sha256:createHash('sha256').update(await fs.readFile(job.file)).digest('hex'),hero:job.hero,outputs:[]};
      if(imageTypes.has(job.ext)){
        const meta=await sharp(job.file).metadata();
        if((meta.pages||1)>1)throw new Error('Animated/multipage image needs manual export: '+job.name);
        const width=[5,6,7,8].includes(meta.orientation)?meta.height:meta.width;
        if(!width)throw new Error('Cannot determine image dimensions.');
        const widths=[...new Set([480,768,1200,1600,1920].filter(w=>w<width).concat(Math.min(width,1920)))];
        for(const w of widths)for(const format of ['webp','avif','jpeg']){
          const filename=`${job.name}-${w}.${format==='jpeg'?'jpg':format}`;
          let pipe=sharp(job.file).rotate().resize({width:w,withoutEnlargement:true});
          if(format==='jpeg')pipe=pipe.flatten({background:'#ffffff'});
          const info=await pipe.toFormat(format,{quality:format==='avif'?50:80,...(format==='avif'?{effort:4}:{})}).toFile(path.join(out,filename));
          item.outputs.push({file:filename,width:info.width,height:info.height,bytes:info.size,format});
        }
      }else{
        const ffmpeg=process.env.FFMPEG_PATH||'ffmpeg';const base=['-hide_banner','-loglevel','error','-nostdin','-n','-i',job.file];
        const trim=job.hero?['-t','15']:[];
        const scale="scale=w='min(1920,iw)':h='min(1080,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2,setsar=1,fps=24";
        for(const ext of ['mp4','webm']){
          const dest=path.join(out,job.name+'.'+ext);
          const codec=ext==='mp4'?['-c:v','libx264','-preset','medium','-crf','26','-pix_fmt','yuv420p','-movflags','+faststart']:['-c:v','libvpx-vp9','-crf','34','-b:v','0','-row-mt','1'];
          const audio=job.hero?['-an']:['-map','0:a:0?', '-c:a',ext==='mp4'?'aac':'libopus','-b:a','128k'];
          await run(ffmpeg,[...base,...trim,'-map','0:v:0','-vf',scale,...codec,...audio,'-threads','2','-map_metadata','-1',dest]);
          item.outputs.push({file:path.basename(dest),bytes:(await fs.stat(dest)).size,format:ext});
        }
        const poster=path.join(out,job.name+'-poster.jpg');
        await run(ffmpeg,[...base,'-map','0:v:0','-vf',scale,'-frames:v','1','-q:v','2',poster]);
        const meta=await sharp(poster).metadata();item.outputs.push({file:path.basename(poster),format:'jpeg',width:meta.width,height:meta.height,bytes:(await fs.stat(poster)).size});
      }
      report.assets.push(item);console.log(`OK ${job.name}: ${item.outputs.length} outputs`);
    }
    report.status='complete';
  }catch(e){report.status='failed';report.error=e.message;throw e;}
  finally{await fs.writeFile(path.join(out,'manifest.json'),JSON.stringify(report,null,2));console.log('Manifest: '+path.join(out,'manifest.json'));}
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
