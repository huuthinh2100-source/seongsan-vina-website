from pathlib import Path
from bs4 import BeautifulSoup
root=Path(__file__).resolve().parents[1]/'website'
p=root/'index.html';s=BeautifulSoup(p.read_text(encoding='utf-8'),'html.parser');style=s.find('style',id='landing-critical-css')
if not style:raise SystemExit('Landing critical style block not found; no files changed.')
style.string='\n'.join((root/'assets'/n).read_text(encoding='utf-8-sig') for n in ['base-ebc9eea912f5.css','redesign.css','media.css'])
p.write_text(str(s),encoding='utf-8')
