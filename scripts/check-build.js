'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{load}=require('cheerio');
const root=path.resolve(__dirname,'../dist');let errors=[],count=0,canonicals=new Set();
for(const lang of ['','en','ko','zh'])for(const file of fs.readdirSync(path.join(root,lang)).filter(f=>f.endsWith('.html')&&f!=='404.html')){
 count++;const id=lang+'/'+file,$=load(fs.readFileSync(path.join(root,lang,file),'utf8'));const canonical=$('link[rel=canonical]').attr('href');
 if(!canonical||canonicals.has(canonical))errors.push(id+': duplicate/missing canonical');canonicals.add(canonical);
 if($('h1').length!==1||$('link[hreflang]').length!==5)errors.push(id+': H1/hreflang');
 if($('title').text().length>60||$('meta[name=description]').attr('content').length>155)errors.push(id+': metadata length');
 $('script[type="application/ld+json"]').each((_,e)=>JSON.parse($(e).text()));
 $('[src],[href],[srcset],[data-src],[poster],[data-full],[data-poster]').each((_,e)=>{const n=$(e),refs=['src','href','data-src','poster','data-full','data-poster'].map(a=>n.attr(a)).filter(Boolean);if(n.attr('srcset'))refs.push(...n.attr('srcset').split(',').map(x=>x.trim().split(/\s+/)[0]));for(const ref of refs){if(/^(?:[a-z]+:|\/\/|#)/i.test(ref))continue;const v=ref.split(/[?#]/)[0];let target=path.join(root,v);if(!fs.existsSync(target)&&!fs.existsSync(target+'.html'))errors.push(id+': missing '+ref);}});
}
for(const file of fs.readdirSync(path.join(root,'assets')).filter(f=>f.endsWith('.js')))new vm.Script(fs.readFileSync(path.join(root,'assets',file),'utf8'));
if(count!==52)errors.push('Expected 52 pages; got '+count);
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log('PASS: 52 built pages, unique canonical, hreflang, metadata lengths, JSON-LD, JS syntax and asset/link resolution.');
