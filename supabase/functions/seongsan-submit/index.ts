import "jsr:@supabase/functions-js/edge-runtime.d.ts";
const origins = ['https://seongsan-vina-website.vercel.app'];
const allowed = (o:string|null) => !o || origins.includes(o) || /^https:\/\/seongsan-vina-website-[a-z0-9-]+\.vercel\.app$/.test(o) || /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(o);
function headers(req:Request) {return {'Access-Control-Allow-Origin':allowed(req.headers.get('origin'))?(req.headers.get('origin')||origins[0]):origins[0],'Access-Control-Allow-Headers':'authorization, apikey, content-type, x-client-info','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Vary':'Origin','Content-Type':'application/json','Cache-Control':'no-store'};}
function json(req:Request,value:unknown,status=200){return new Response(JSON.stringify(value),{status,headers:headers(req)});}
async function hash(s:string){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(x=>x.toString(16).padStart(2,'0')).join('');}
Deno.serve(async(req:Request)=>{
 if(!allowed(req.headers.get('origin')))return json(req,{ok:false,error:'Origin not allowed'},403);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:headers(req)});
 if(req.method==='GET')return json(req,{ok:true,service:'seongsan-submit',emailConfigured:!!(Deno.env.get('RESEND_API_KEY')&&Deno.env.get('SEONGSAN_MAIL_FROM'))});
 if(req.method!=='POST')return json(req,{ok:false,error:'Method not allowed'},405);
 const base=Deno.env.get('SUPABASE_URL')||'',key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||Deno.env.get('SUPABASE_SECRET_KEY')||'';
 if(!base||!key)return json(req,{ok:false,error:'Service unavailable'},503);
 const auth:Record<string,string>={apikey:key,'Content-Type':'application/json'};if(!key.startsWith('sb_'))auth.Authorization='Bearer '+key;
 async function rest(route:string,body:unknown,method='POST',extra:Record<string,string>={}){const r=await fetch(base+'/rest/v1/'+route,{method,headers:{...auth,...extra},body:JSON.stringify(body),signal:AbortSignal.timeout(8000)});if(!r.ok)throw new Error('Database request failed: '+r.status);return r;}
 try{
  const reader=req.body?.getReader();if(!reader)return json(req,{ok:false,error:'Missing body'},400);let size=0;const chunks:Uint8Array[]=[];
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>16384){await reader.cancel();return json(req,{ok:false,error:'Payload too large'},413);}chunks.push(value);}
  const raw=new Uint8Array(size);let pos=0;for(const c of chunks){raw.set(c,pos);pos+=c.length;}let d:Record<string,unknown>;try{d=JSON.parse(new TextDecoder().decode(raw));}catch{return json(req,{ok:false,error:'Invalid JSON'},400);}
  if(!d||typeof d!=='object'||Array.isArray(d))return json(req,{ok:false,error:'Invalid payload'},400);
  if(d.website)return json(req,{ok:true});
  const limits:Record<string,number>={name:200,phone:30,email:200,company:200,service:200,message:5000};const values:Record<string,string>={};
  for(const [field,max] of Object.entries(limits)){const value=d[field]??'';if(typeof value!=='string'||value.length>max)return json(req,{ok:false,error:'Invalid field: '+field},400);values[field]=value.trim();}
  if(!values.name||!/^[+0-9().\s-]{8,30}$/.test(values.phone)||(values.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)))return json(req,{ok:false,error:'Invalid contact details'},400);
  const ip=req.headers.get('cf-connecting-ip')||req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';
  const ipHash=await hash('seongsan:'+ip+':'+key.slice(-24));const rate=await rest('rpc/check_website_submission_limit',{p_ip_hash:ipHash,p_limit:5,p_window_seconds:3600});if((await rate.json())!==true)return json(req,{ok:false,error:'Too many requests'},429);
  const turnstile=Deno.env.get('TURNSTILE_SECRET_KEY');if(turnstile){const r=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret:turnstile,response:typeof d.turnstileToken==='string'?d.turnstileToken:'',remoteip:ip}),signal:AbortSignal.timeout(5000)});const check=await r.json();if(!check.success)return json(req,{ok:false,error:'Challenge failed'},400);}
  const test=d.test===true&&values.name.startsWith('[SEONGSAN QA]');
  const inserted=await rest('leads',{...values,site:'seongsan',source:'website',status:'Mới',notes:test?'Automated Seongsan QA test; safe to remove after verification':null},'POST',{Prefer:'return=representation'});const [lead]=await inserted.json();
  let notification='pending';try{await rest('seongsan_notification_outbox',{lead_id:lead.id});}catch{console.error('Outbox enqueue failed for saved lead');}
  const resend=Deno.env.get('RESEND_API_KEY'),from=Deno.env.get('SEONGSAN_MAIL_FROM');
  if(resend&&from&&!test){try{const mail=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+resend,'Content-Type':'application/json','Idempotency-Key':'seongsan-'+lead.id},body:JSON.stringify({from,to:['soengsanjsc@gmail.com'],subject:'Yêu cầu tư vấn mới — Seongsan Vina',text:Object.entries(values).map(([k,v])=>k+': '+v).join('\n')}),signal:AbortSignal.timeout(5000)});if(mail.ok){notification='sent';await rest('seongsan_notification_outbox?lead_id=eq.'+lead.id,{status:'sent',sent_at:new Date().toISOString()},'PATCH');}}catch{console.error('Lead saved; email pending');}}
  return json(req,{ok:true,id:lead.id,notification},201);
 }catch(e){console.error(e instanceof Error?e.message:'Submission failed');return json(req,{ok:false,error:'Receipt could not be confirmed'},503);}
});
