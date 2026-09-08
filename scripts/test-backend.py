from pathlib import Path
import json,urllib.request,urllib.error,uuid
cfg=dict(l.split('=',1) for l in Path('.env.local').read_text(encoding='utf-8').splitlines() if '=' in l);key=cfg['SUPABASE_ANON_KEY'];headers={'Authorization':'Bearer '+key,'apikey':key,'Content-Type':'application/json','Origin':'https://seongsan-vina-website.vercel.app'}
def call(url,body=None,method=None):
 req=urllib.request.Request(url,data=json.dumps(body).encode() if body is not None else None,headers=headers,method=method)
 try:
  with urllib.request.urlopen(req,timeout=30) as r:return r.status,json.loads(r.read() or b'null')
 except urllib.error.HTTPError as e:return e.code,json.loads(e.read() or b'null')
endpoint=cfg['LEAD_ENDPOINT'];results={}
results['health']=call(endpoint)
results['invalid']=call(endpoint,{'name':'','phone':'x'})
results['honeypot']=call(endpoint,{'website':'bot'})
name='[SEONGSAN QA] '+str(uuid.uuid4());results['valid']=call(endpoint,{'name':name,'phone':'0000000000','email':'qa@example.com','message':'Synthetic QA. No customer enquiry.','test':True})
results['direct_rest_rejected']=call(cfg['SUPABASE_URL']+'/rest/v1/leads',{'name':name+' direct','phone':'0000000000','site':'seongsan','source':'website'})
if results['valid'][0]==201:
 lead=results['valid'][1]['id'];results['anonymous_read']=call(cfg['SUPABASE_URL']+'/rest/v1/leads?id=eq.'+lead+'&select=id')
Path('docs/backend-checks.json').write_text(json.dumps(results,indent=2),encoding='utf-8');print(json.dumps(results))
