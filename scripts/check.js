'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{load}=require('cheerio');const root=path.resolve(__dirname,'..'),site=path.join(root,'website');let errors=[];let pages=0;
function walk(p){return fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);}
for(const p of walk(site)){
 if(p.endsWith('.js')){try{new vm.Script(fs.readFileSync(p,'utf8'),{filename:path.basename(p)});}catch(e){errors.push(e.message);}}
 if(!p.endsWith('.html'))continue;pages++;const $=load(fs.readFileSync(p,'utf8'));if($('h1').length!==1)errors.push(path.basename(p)+': requires one H1');if(!$('title').text().trim())errors.push(path.basename(p)+': missing title');
 const ids=new Set();$('[id]').each((_,e)=>{const id=$(e).attr('id');if(ids.has(id))errors.push(path.basename(p)+': duplicate id '+id);ids.add(id);});
 $('img').each((_,e)=>{if($(e).attr('alt')===undefined)errors.push(path.basename(p)+': missing image alt');});
 $('[src],[href],[srcset],[data-full],[data-src],[poster],[data-poster]').each((_,e)=>{const n=$(e);let refs=['src','href','data-full','data-src','poster','data-poster'].map(a=>n.attr(a)).filter(Boolean);if(n.attr('srcset'))refs.push(...n.attr('srcset').split(',').map(x=>x.trim().split(/\s+/)[0]));for(const ref of refs){if(/^(?:[a-z]+:|\/\/|#)/i.test(ref))continue;const v=decodeURIComponent(ref.split(/[?#]/)[0]);const target=v.startsWith('/')?path.join(site,v):path.resolve(path.dirname(p),v);if(v&&!fs.existsSync(target))errors.push(path.basename(p)+': missing '+v);}});
}
for(const dir of ['website','scripts'])for(const p of walk(path.join(root,dir))){if(!/\.(js|html|json)$/.test(p))continue;const s=fs.readFileSync(p,'utf8');if(/eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}|gh[pousr]_[A-Za-z0-9]{20,}|sb_secret_[A-Za-z0-9_-]{15,}/.test(s))errors.push(path.relative(root,p)+': possible embedded credential');}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`PASS: ${pages} pages, H1/title/alt/IDs, local references, JS syntax and embedded credential scan.`);
