'use strict';
const fs=require('node:fs'),path=require('node:path');const root=path.resolve(__dirname,'..');
try{process.loadEnvFile(path.join(root,'.env.local'));}catch(e){if(e.code!=='ENOENT')throw e;}
const dest=path.resolve(root,'dist');
if(path.dirname(dest)!==root||path.basename(dest)!=='dist')throw new Error('Unsafe build output path');
fs.rmSync(dest,{recursive:true,force:true});
fs.mkdirSync(dest,{recursive:true});fs.cpSync(path.join(root,'website'),dest,{recursive:true,filter:p=>!p.endsWith('.md')});
const config={supabaseUrl:process.env.SUPABASE_URL||'',supabaseAnonKey:process.env.SUPABASE_ANON_KEY||'',leadEndpoint:process.env.LEAD_ENDPOINT||''};
fs.writeFileSync(path.join(dest,'assets/runtime-config.js'),'window.SITE_CONFIG='+JSON.stringify(config).replace(/</g,'\\u003c')+';');
for(const file of fs.readdirSync(dest).filter(p=>p.endsWith('.html'))){const p=path.join(dest,file);let html=fs.readFileSync(p,'utf8');html=html.replace('</head>','<script defer src="assets/runtime-config.js"></script></head>');fs.writeFileSync(p,html);}
require('./seo')(dest);
require('./build-i18n')(dest);
console.log('Built static website in dist; runtime configuration contains public client values only.');
