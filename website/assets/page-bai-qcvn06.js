
var I18N = {"en":{"c.top.addr":"23 Thi Dua St., Tien Cat Ward, Viet Tri City, Phu Tho, Vietnam","c.nav.home":"Home","c.nav.about":"About Us","c.nav.fire":"Fire Protection","c.nav.cons":"Construction & M&E","c.nav.projects":"Projects","c.nav.capacity":"Capability","c.nav.news":"Insights","c.nav.contact":"Contact","c.nav.quote":"Get Quote","c.cta.quote":"Get a Free Quote","c.band.h":"Need a fire protection survey, design or maintenance service?","c.band.p":"SEONGSAN VINA engineers provide a free site survey and a quotation within 24 working hours.","c.ftr.about":"A licensed Fire Protection — Construction — M&E contractor, serving FDI factories and Vietnamese enterprises since 2021.","c.ftr.links":"Quick Links","c.ftr.services":"Services","c.ftr.contact":"Contact","c.ftr.cs":"Project case studies","c.ftr.docs":"Free downloads","c.ftr.s1":"Fire Protection Design Consulting","c.ftr.s2":"Fire System Installation","c.ftr.s3":"Fire System Maintenance","c.ftr.s4":"Fire Equipment Supply","c.ftr.s5":"Construction & M&E","c.ftr.legal":"© 2026 Seongsan Vina Joint Stock Company — Tax code 2601057075, issued by Phu Tho DPI on 09/03/2021.","c.ftr.lib":"Standards library","qc.title":"QCVN 06:2022/BXD & Amendment 1:2023 — key design points | SEONGSAN VINA","t.i.addr.p":"23 Thi Dua Street, Tien Cat Ward, Viet Tri City, Phu Tho Province, Vietnam"},"ko":{"c.top.addr":"베트남 푸토성 비엣찌시 띠엔깟동 티두아로 23번지","c.nav.home":"홈","c.nav.about":"회사소개","c.nav.fire":"소방 서비스","c.nav.cons":"건설 & M&E","c.nav.projects":"프로젝트","c.nav.capacity":"수행능력","c.nav.news":"기술자료","c.nav.contact":"문의","c.nav.quote":"견적 문의","c.cta.quote":"무료 견적 받기","c.band.h":"소방 시스템의 실사·설계·유지보수가 필요하십니까?","c.band.p":"SEONGSAN VINA 엔지니어가 무료 현장 실사 후 24시간(영업일 기준) 내 견적을 드립니다.","c.ftr.about":"2021년부터 FDI 공장과 베트남 기업을 위해 서비스하는 정식 허가 소방 — 건설 — M&E 시공사입니다.","c.ftr.links":"바로가기","c.ftr.services":"서비스","c.ftr.contact":"연락처","c.ftr.cs":"프로젝트 케이스 스터디","c.ftr.docs":"자료 다운로드","c.ftr.s1":"소방 설계 컨설팅","c.ftr.s2":"소방 시설 시공","c.ftr.s3":"소방 시스템 유지보수","c.ftr.s4":"소방 장비 공급","c.ftr.s5":"건설 & M&E","c.ftr.legal":"© 2026 Seongsan Vina 주식회사 — 사업자등록번호 2601057075 (푸토성 기획투자국, 2021.03.09 발급).","c.ftr.lib":"기준 라이브러리","qc.title":"QCVN 06:2022/BXD & 개정 1:2023 — 설계 핵심 포인트 | SEONGSAN VINA","t.i.addr.p":"베트남 푸토성 비엣찌시 띠엔깟동 티두아로 23번지"},"zh":{"c.top.addr":"越南富寿省越池市仙吉坊施竞街23号","c.nav.home":"首页","c.nav.about":"公司简介","c.nav.fire":"消防服务","c.nav.cons":"建筑与机电","c.nav.projects":"项目业绩","c.nav.capacity":"企业实力","c.nav.news":"技术资讯","c.nav.contact":"联系我们","c.nav.quote":"获取报价","c.cta.quote":"免费获取报价","c.band.h":"需要消防系统勘察、设计或维保服务吗？","c.band.p":"SEONGSAN VINA 工程师免费现场勘察，并在24个工作小时内提供报价。","c.ftr.about":"持证消防 — 建筑 — 机电承包商，自2021年起服务于FDI工厂及越南企业。","c.ftr.links":"快速链接","c.ftr.services":"服务项目","c.ftr.contact":"联系方式","c.ftr.cs":"项目案例研究","c.ftr.docs":"资料下载","c.ftr.s1":"消防设计咨询","c.ftr.s2":"消防系统施工","c.ftr.s3":"消防系统维保","c.ftr.s4":"消防设备供应","c.ftr.s5":"建筑与机电工程","c.ftr.legal":"© 2026 Seongsan Vina股份公司 — 税号2601057075，富寿省计划投资厅于2021年3月9日颁发。","c.ftr.lib":"标准资料库","qc.title":"QCVN 06:2022/BXD及修订1:2023 — 设计要点 | SEONGSAN VINA","t.i.addr.p":"越南富寿省越池市仙吉坊施竞街23号"}};
(function(){
  var LANGS=['vi','en','ko','zh'];
  function getLang(){var m=location.search.match(/[?&]lang=(vi|en|ko|zh)/);return m?m[1]:'vi';}
  function applyLang(l){
    document.documentElement.lang = l==='zh'?'zh-Hans':(l==='vi'?'vi':l);
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k=el.getAttribute('data-i18n');
      if(!el.dataset.orig) el.dataset.orig=el.innerHTML;
      if(l==='vi'){ el.innerHTML=el.dataset.orig; }
      else { var v=(I18N[l]&&I18N[l][k])||(I18N.en&&I18N.en[k]); el.innerHTML = v || el.dataset.orig; }
    });
    document.querySelectorAll('#langSwitch button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-lang')===l);});
    // propagate lang to internal links
    document.querySelectorAll('a[href]').forEach(function(a){
      var h=a.getAttribute('href');
      if(/^(https?:|tel:|mailto:|#)/.test(h)) return;
      if(!/\.html(?:[?#]|$)/.test(h)) return;
      var u=new URL(h,location.href); if(l==='vi')u.searchParams.delete('lang');else u.searchParams.set('lang',l);
      a.setAttribute('href',u.pathname.split('/').pop()+u.search+u.hash);
    });
  }
  var cur=getLang(); applyLang(cur);
  document.querySelectorAll('#langSwitch button').forEach(function(b){
    b.addEventListener('click',function(){applyLang(b.getAttribute('data-lang'));});
  });
  // mobile nav
  var nav=document.getElementById('nav'),burger=document.getElementById('burger'),x=document.getElementById('navClose');
  if(burger){burger.addEventListener('click',function(){nav.classList.add('open');});}
  if(x){x.addEventListener('click',function(e){e.preventDefault();nav.classList.remove('open');});}
  nav && nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});
  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});
  // project filter
  var pf=document.getElementById('pfilter');
  if(pf){pf.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){
    pf.querySelectorAll('button').forEach(function(o){o.classList.remove('on');}); b.classList.add('on');
    var f=b.getAttribute('data-f');
    document.querySelectorAll('[data-cat]').forEach(function(c){c.style.display=(f==='all'||c.getAttribute('data-cat')===f)?'':'none';});
  });});}
  // contact form -> mailto
  var form=document.getElementById('quoteForm');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var g=function(n){var el=form.querySelector('[name='+n+']');return el?el.value:'';};
    var body='Ho ten: '+g('name')+'%0D%0ACong ty: '+g('company')+'%0D%0ADien thoai: '+g('phone')+'%0D%0AEmail: '+g('email')+'%0D%0ADich vu: '+g('service')+'%0D%0ANoi dung: '+encodeURIComponent(g('msg'));
    location.href='mailto:seongsantm@gmail.com?subject='+encodeURIComponent('[Website] Yeu cau bao gia - '+g('name'))+'&body='+body;
  });}
})();
