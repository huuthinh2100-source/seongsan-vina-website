/* Media interactions keep the original website copy and translation dictionaries intact. */
(()=>{
 'use strict';
 const words={vi:{pause:'Dừng video',play:'Phát video',zoom:'Xem ảnh lớn',prev:'Ảnh trước',next:'Ảnh sau',close:'Đóng',gallery:'Ảnh minh họa',note:'Ảnh minh họa — không phải bằng chứng thi công dự án thực tế.'},en:{pause:'Pause video',play:'Play video',zoom:'Enlarge image',prev:'Previous',next:'Next',close:'Close',gallery:'Illustration gallery',note:'Illustration — not evidence of actual project work.'},ko:{pause:'영상 일시정지',play:'영상 재생',zoom:'이미지 확대',prev:'이전',next:'다음',close:'닫기',gallery:'참고 이미지',note:'참고 이미지이며 실제 프로젝트 시공 증빙이 아닙니다.'},zh:{pause:'暂停视频',play:'播放视频',zoom:'放大图片',prev:'上一张',next:'下一张',close:'关闭',gallery:'示意图片',note:'图片仅作示意，不作为实际项目施工证明。'}};
 const t=k=>(words[document.documentElement.lang]||words.vi)[k];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),compact=matchMedia('(max-width:1279px)');
 const nav=document.querySelector('#nav'),burger=document.querySelector('#burger');
 if(nav&&burger){
  const background=[...document.querySelectorAll('main,footer,.topbar,.float')];let lastOpen=false;
  function sync(){const open=compact.matches&&nav.classList.contains('open');burger.setAttribute('aria-expanded',String(open));background.forEach(e=>e.inert=open);document.body.style.overflowY=open?'hidden':'';if(open&&!lastOpen)requestAnimationFrame(()=>{if(nav.classList.contains('open'))nav.querySelector('a').focus();});lastOpen=open;}
  burger.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();nav.classList.toggle('open');sync();},true);
  new MutationObserver(sync).observe(nav,{attributes:true,attributeFilter:['class']});
  nav.addEventListener('keydown',e=>{if(!compact.matches||!nav.classList.contains('open'))return;if(e.key==='Tab'){const links=[...nav.querySelectorAll('a,button')].filter(x=>x.getClientRects().length);const first=links[0],last=links[links.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
  document.addEventListener('keydown',e=>{if(e.key==='Tab'&&compact.matches&&nav.classList.contains('open')&&document.activeElement===burger){e.preventDefault();const links=nav.querySelectorAll('a');links[e.shiftKey?links.length-1:0].focus();}});
  nav.querySelector('#navClose')?.addEventListener('click',()=>burger.focus());
  compact.addEventListener('change',()=>{nav.classList.remove('open');sync();});sync();
 }
 const video=document.querySelector('#hero-video'),pause=document.querySelector('#hero-pause'),videoNote=document.querySelector('.hero-video-note');let stopped=false,loaded=false;
 function allowed(){const c=navigator.connection;return !compact.matches&&!reduced.matches&&!c?.saveData&&!['slow-2g','2g'].includes(c?.effectiveType);}
 function setVideoLabels(){if(pause)pause.textContent=t(video?.paused?'play':'pause');}
 async function start(){if(!video||!allowed()||stopped||document.hidden)return;if(!loaded){video.poster=video.dataset.poster;video.querySelectorAll('source[data-src]').forEach(s=>s.src=s.dataset.src);video.load();loaded=true;}try{await video.play();}catch{video.classList.remove('is-playing');}}
 if(video&&pause){
  video.addEventListener('playing',()=>{video.classList.add('is-playing');pause.hidden=false;if(videoNote)videoNote.hidden=false;setVideoLabels();});
  video.addEventListener('pause',setVideoLabels);video.addEventListener('error',()=>{video.classList.remove('is-playing');pause.hidden=true;if(videoNote)videoNote.hidden=true;});
  pause.addEventListener('click',()=>{if(video.paused){stopped=false;start();}else{stopped=true;video.pause();}setVideoLabels();});
  function policyChange(){if(!allowed()){video.pause();video.classList.remove('is-playing');pause.hidden=true;if(videoNote)videoNote.hidden=true;}else start();}
  reduced.addEventListener('change',policyChange);compact.addEventListener('change',policyChange);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else start();});
  if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true});
 }
 let dialog,photo,caption,note,group=[],index=0,opener;
 function makeDialog(){
  dialog=document.createElement('dialog');dialog.className='gallery-dialog';dialog.setAttribute('aria-label',t('gallery'));
  const toolbar=document.createElement('div');toolbar.className='gallery-toolbar';
  for(const [key,action] of [['prev',()=>show(index-1)],['next',()=>show(index+1)],['close',()=>dialog.close()]]){const b=document.createElement('button');b.type='button';b.dataset.label=key;b.textContent=t(key);b.addEventListener('click',action);toolbar.append(b);}
  const figure=document.createElement('figure');photo=document.createElement('img');caption=document.createElement('figcaption');note=document.createElement('p');note.className='gallery-note';note.textContent=t('note');figure.append(photo,caption,note);dialog.append(toolbar,figure);document.body.append(dialog);
  dialog.addEventListener('close',()=>{opener?.focus();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(index+1);}if(e.key==='ArrowLeft'){e.preventDefault();show(index-1);}});
 }
 function show(n){index=(n+group.length)%group.length;const btn=group[index],img=btn.querySelector('img');photo.src=btn.dataset.full;photo.alt=img.alt;caption.textContent=`${index+1} / ${group.length} — ${btn.closest('figure')?.querySelector('figcaption')?.textContent||img.alt}`;}
 document.querySelectorAll('.media-zoom').forEach(btn=>{btn.setAttribute('aria-label',t('zoom')+': '+btn.querySelector('img').alt);btn.addEventListener('click',()=>{opener=btn;group=[...btn.closest('.gal,.service-grid').querySelectorAll('.media-zoom')];if(!dialog)makeDialog();show(group.indexOf(btn));dialog.showModal();});});
 new MutationObserver(()=>{setVideoLabels();document.querySelectorAll('.media-zoom').forEach(b=>b.setAttribute('aria-label',t('zoom')+': '+b.querySelector('img').alt));if(dialog){dialog.setAttribute('aria-label',t('gallery'));dialog.querySelectorAll('[data-label]').forEach(b=>b.textContent=t(b.dataset.label));note.textContent=t('note');}}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 if(!reduced.matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('media-arrived');observer.unobserve(e.target);}},{threshold:.12});document.querySelectorAll('.service-tile,.gal figure').forEach(el=>observer.observe(el));}
})();
