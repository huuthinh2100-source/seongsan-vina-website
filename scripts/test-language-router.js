'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const code=fs.readFileSync(require('node:path').join(__dirname,'../website/assets/language-router.js'),'utf8');
function run(href,language){
 let target,listener;const location={href,replace:v=>{target=v;},assign:v=>{target=v;}};
 vm.runInNewContext(code,{URL,location,document:{addEventListener:(_,fn)=>{listener=fn;}}});
 if(language&&listener)listener({target:{closest:()=>({dataset:{lang:language}})},preventDefault(){},stopImmediatePropagation(){}});
 return target;
}
assert.equal(run('https://example.com/index.html?lang=en&utm_source=test#film'),'/en?utm_source=test#film');
assert.equal(run('https://example.com/ko/lien-he?lang=vi'),'/lien-he');
assert.equal(run('https://example.com/en/?campaign=launch#main','zh'),'/zh?campaign=launch#main');
assert.equal(run('https://example.com/zh/nang-luc.html','vi'),'/nang-luc');
assert.equal(run('https://example.com/?lang=unknown'),undefined);
console.log('PASS: legacy query migration, language switching, campaign/hash preservation and unsupported language handling.');
