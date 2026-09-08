'use strict';
const fs=require('node:fs'),path=require('node:path'),{load}=require('cheerio');
const mediaTranslations=require('./media-translations.json');
const documentTranslations=require('./document-translations.json');
const labels={en:['Industry construction & fire protection','About us','Capabilities','Fire protection services','Industrial construction & M&E','Projects','Factory fire system maintenance','Knowledge centre','Decree 105/2025 on fire protection','QCVN 06 fire safety regulation','Technical standards library','Documents & checklists','Contact & quotation'],ko:['산업 건설 및 소방','회사 소개','시공 역량','소방 서비스','산업 건설 및 기계전기','프로젝트','공장 소방 시스템 유지보수','기술 자료 및 소식','소방 시행령 105/2025','화재 안전 규정 QCVN 06','기술 표준 자료실','문서 및 점검표','문의 및 견적'],zh:['工业建设与消防','公司介绍','施工能力','消防服务','工业建设与机电','项目经验','工厂消防系统维护','知识中心','消防法令105/2025','消防安全规范QCVN 06','技术标准资料库','文件与检查清单','联系与报价']};
const slugs=['index','gioi-thieu','nang-luc','dich-vu-pccc','xay-dung-me','du-an','case-study','tin-tuc','bai-nd105','bai-qcvn06','thu-vien-tieu-chuan','tai-lieu','lien-he'];
const descriptions={en:t=>t+' at Seongsan Vina. Contact +84 919 942 230 to discuss your project requirements.',ko:t=>'Seongsan Vina '+t+'. 프로젝트 요구사항 상담: +84 919 942 230.',zh:t=>'Seongsan Vina'+t+'。请致电 +84 919 942 230，洽谈您的项目需求。'};
module.exports=function(dest){
 const base=(process.env.SITE_URL||'https://seongsan-vina-website.vercel.app').replace(/\/$/,'');
 const copy=JSON.parse(fs.readFileSync(path.join(dest,'assets/enhancements.js'),'utf8').match(/^const COPY=(.*);\r?\n/)[1]);
 const all=[];const pathFor=(slug,lang)=> (lang==='vi'?'':'/'+lang)+(slug==='index'?(lang==='vi'?'/':''):'/'+slug);
 for(const [i,slug] of slugs.entries()){
  const src=fs.readFileSync(path.join(dest,slug+'.html'),'utf8');
  const jsFile=path.join(dest,'assets/page-'+slug+'.js');let js=fs.readFileSync(jsFile,'utf8');
  const dict=JSON.parse(js.match(/var I18N = (.*);\r?\n/)[1]);
  js=js.replace("return m?m[1]:'vi';","return m?m[1]:(['en','ko','zh'].includes(location.pathname.split('/')[1])?location.pathname.split('/')[1]:'vi');");
  fs.writeFileSync(jsFile,js);
  for(const lang of ['vi','en','ko','zh']){
   const $=load(src),url=base+pathFor(slug,lang);all.push(url);$('html').attr('lang',lang==='zh'?'zh-Hans':lang);
   if(lang!=='vi'){
    const languageIndex=['en','ko','zh'].indexOf(lang);
    if(slug==='tai-lieu'){
     $('option:not([value])').each((_,e)=>$(e).attr('value',$(e).text()));
     $('main').find('*').contents().each((_,node)=>{if(node.type!=='text'||$(node.parent).closest('[data-i18n],[data-copy],script,style,svg').length)return;const value=node.data.trim(),translated=documentTranslations[value]?.[languageIndex];if(translated)node.data=node.data.replace(value,translated);});
     $('[placeholder]').each((_,e)=>{const n=$(e),translated=documentTranslations[n.attr('placeholder')]?.[languageIndex];if(translated)n.attr('placeholder',translated);});
    }
    const translate=value=>mediaTranslations[value]?.[languageIndex]||value;
    $('figcaption').each((_,e)=>{const n=$(e),value=n.text();if(mediaTranslations[value])n.text(translate(value));});
    $('[alt],[aria-label],[title]').each((_,e)=>{const n=$(e);for(const attribute of ['alt','aria-label','title']){const value=n.attr(attribute);if(!value)continue;const prefix='Xem ảnh lớn: ';n.attr(attribute,value.startsWith(prefix)?['View larger image: ','이미지 확대: ','查看大图：'][languageIndex]+translate(value.slice(prefix.length)):translate(value));}});
    $('meta[property="og:image:alt"]').attr('content',translate($('meta[property="og:image:alt"]').attr('content')));
    $('[data-i18n]').each((_,e)=>{let n=$(e),v=dict[lang]?.[n.attr('data-i18n')]||dict.en?.[n.attr('data-i18n')];if(v)n.html(v);});
    $('[data-copy]').each((_,e)=>{let n=$(e),v=copy[lang]?.[n.attr('data-copy')];if(v)n.html(v);});
    const title=labels[lang][i]+' | Seongsan Vina',desc=descriptions[lang](labels[lang][i]);if(title.length>60||desc.length>155)throw Error('Localized metadata too long '+slug+lang);
    $('title').text(title);$('meta[name="description"]').attr('content',desc);$('meta[property="og:title"],meta[name="twitter:title"]').attr('content',title);$('meta[property="og:description"],meta[name="twitter:description"]').attr('content',desc);
    // Original reference articles contain Vietnamese text beyond the supplied translation dictionary.
    if(['case-study','bai-nd105','bai-qcvn06','thu-vien-tieu-chuan'].includes(slug))$('main').prepend($('<p>').attr({class:'wrap'}).text({en:'The reference content below is retained in its original Vietnamese.',ko:'아래 참고 자료는 베트남어 원문으로 제공됩니다.',zh:'以下参考内容保留越南语原文。'}[lang]));
   }
   $('meta[property="og:locale"]').attr('content',{vi:'vi_VN',en:'en_US',ko:'ko_KR',zh:'zh_CN'}[lang]);
   $('link[rel="canonical"]').attr('href',url);$('meta[property="og:url"]').attr('content',url);
   $('script[type="application/ld+json"]').each((_,e)=>{const data=JSON.parse($(e).text());for(const item of data['@graph']||[]){if(item['@type']==='BreadcrumbList'){item.itemListElement[0].item=base+pathFor('index',lang);item.itemListElement[1].item=url;item.itemListElement[1].name=$('title').text().split(' | ')[0];}}$(e).text(JSON.stringify(data).replace(/</g,'\\u003c'));});
   for(const l of ['vi','en','ko','zh'])$('head').append($('<link>').attr({rel:'alternate',hreflang:l==='zh'?'zh-Hans':l,href:base+pathFor(slug,l)}));
   $('head').append($('<link>').attr({rel:'alternate',hreflang:'x-default',href:base+pathFor(slug,'vi')}));
   $('[src],[href],[poster],[data-src],[data-full],[data-poster],[srcset]').each((_,e)=>{
    const n=$(e);for(const a of ['src','href','poster','data-src','data-full','data-poster']){let v=n.attr(a);if(!v||/^(?:[a-z]+:|\/|#)/i.test(v))continue;
     const m=v.match(/^([\w-]+)\.html(?:\?[^#]*)?(#.*)?$/);if(a==='href'&&m&&slugs.includes(m[1]))v=pathFor(m[1],lang)+(m[2]||'');else v='/'+v;n.attr(a,v);
    }
    if(n.attr('srcset'))n.attr('srcset',n.attr('srcset').split(',').map(x=>{let v=x.trim();return v.startsWith('/')?v:'/'+v;}).join(', '));
   });
   $('head').prepend('<script defer src="/assets/language-router.js"></script>');
   const out=path.join(dest,lang==='vi'?'':lang,slug+'.html');fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,$.html());
  }
 }
 fs.writeFileSync(path.join(dest,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+all.map(url=>'<url><loc>'+url+'</loc></url>').join('')+'</urlset>');
 console.log('Built 52 static pages using supplied translations; reference-body Vietnamese is retained.');
};
