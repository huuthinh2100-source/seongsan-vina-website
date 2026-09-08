'use strict';
const fs=require('node:fs'),path=require('node:path'),{load}=require('cheerio');
const pages={
 'index':['PCCC, xây dựng và cơ điện | Seongsan Vina','Khám phá dịch vụ xây dựng công nghiệp, cơ điện M&E và PCCC của Seongsan Vina. Liên hệ trao đổi phạm vi công trình.'],
 'gioi-thieu':['Giới thiệu doanh nghiệp | Seongsan Vina','Tìm hiểu Seongsan Vina và các lĩnh vực xây dựng công nghiệp, cơ điện, PCCC. Liên hệ để nhận thông tin doanh nghiệp.'],
 'nang-luc':['Hồ sơ năng lực nhà thầu | Seongsan Vina','Tham khảo năng lực và phạm vi dịch vụ Seongsan Vina. Liên hệ nhận hồ sơ hiện hành phù hợp với yêu cầu mời thầu.'],
 'dich-vu-pccc':['Dịch vụ PCCC cho nhà máy | Seongsan Vina','Tư vấn thiết kế, thi công và bảo trì hệ thống PCCC cho nhà máy. Liên hệ Seongsan Vina để trao đổi nhu cầu khảo sát.'],
 'xay-dung-me':['Xây dựng công nghiệp và M&E | Seongsan Vina','Dịch vụ xây dựng nhà xưởng và cơ điện M&E cho công trình công nghiệp. Liên hệ Seongsan Vina để làm rõ phạm vi triển khai.'],
 'du-an':['Dự án và kinh nghiệm thi công | Seongsan Vina','Tham khảo danh mục dự án theo hồ sơ Seongsan Vina. Liên hệ để đối chiếu hồ sơ tham chiếu phù hợp với công trình.'],
 'case-study':['Bảo trì PCCC nhà máy FDI | Seongsan Vina','Tìm hiểu tình huống bảo trì hệ thống PCCC tại nhà máy đang vận hành. Liên hệ Seongsan Vina để trao đổi phương án phù hợp.'],
 'tin-tuc':['Kiến thức PCCC và cơ điện | Seongsan Vina','Đọc các bài viết về PCCC, cơ điện và vận hành công trình. Liên hệ Seongsan Vina để trao đổi yêu cầu cụ thể.'],
 'bai-nd105':['Nghị định 105/2025 về PCCC | Seongsan Vina','Tham khảo bài viết về Nghị định 105/2025/NĐ-CP và công tác chuẩn bị PCCC. Xem văn bản gốc và liên hệ trao đổi.'],
 'bai-qcvn06':['QCVN 06 về an toàn cháy | Seongsan Vina','Tham khảo bài viết về QCVN 06:2022/BXD và Sửa đổi 1:2023. Đối chiếu văn bản hiện hành khi áp dụng cho công trình.'],
 'thu-vien-tieu-chuan':['Thư viện tiêu chuẩn PCCC | Seongsan Vina','Tra cứu các văn bản, quy chuẩn và tiêu chuẩn kỹ thuật được tập hợp. Xem nguồn gốc và kiểm tra hiệu lực trước khi áp dụng.'],
 'tai-lieu':['Tài liệu và checklist PCCC | Seongsan Vina','Tham khảo tài liệu và checklist PCCC, cơ điện cho công trình. Liên hệ Seongsan Vina để trao đổi nhu cầu hỗ trợ.'],
 'lien-he':['Liên hệ và nhận báo giá | Seongsan Vina','Gửi nhu cầu xây dựng, cơ điện hoặc PCCC đến Seongsan Vina. Gọi 0919 942 230 hoặc điền biểu mẫu để trao đổi về công trình.']
};
module.exports=function(dest){
 const base=(process.env.SITE_URL||'https://seongsan-vina-website.vercel.app').replace(/\/$/,'');
 const org={'@type':['Organization','LocalBusiness'],'@id':base+'/#organization',name:'Công ty Cổ phần Seongsan Vina',alternateName:['SEONGSAN VINA JSC','Seongsan Vina'],url:base,telephone:'+84919942230',email:'seongsantm@gmail.com',taxID:'2601057075',logo:base+'/assets/30391f36ccc6c0dc.webp',address:{'@type':'PostalAddress',streetAddress:'23 Thi Đua, Tiên Cát',addressLocality:'Việt Trì',addressRegion:'Phú Thọ',addressCountry:'VN'},sameAs:['https://zalo.me/0919942230']};
 for(const [slug,[title,description]] of Object.entries(pages)){
  if(title.length>60||description.length>155)throw Error('SEO length: '+slug);
  const file=path.join(dest,slug+'.html'),$=load(fs.readFileSync(file,'utf8')),url=base+(slug==='index'?'/':'/'+slug);
  $('title').text(title).removeAttr('data-i18n');$('meta[name="description"]').attr('content',description);
  $('link[rel="canonical"],meta[property^="og:"],meta[name^="twitter:"],script[type="application/ld+json"]').remove();
  const head=$('head');head.append($('<link>').attr({rel:'canonical',href:url}));
  head.append($('<meta>').attr({name:'google-site-verification',content:'MYaoB9e0imzun6nPQxk0MQeQ4MeYvkYqyE1lmJ9l1pk'}));
  const tags={'og:type':'website','og:site_name':'Seongsan Vina','og:title':title,'og:description':description,'og:url':url,'og:locale':'vi_VN','og:image':base+'/assets/og-seongsan.jpg','og:image:width':'1200','og:image:height':'630','og:image:alt':'Minh họa lĩnh vực công nghiệp Seongsan Vina'};
  for(const [property,content] of Object.entries(tags))head.append($('<meta>').attr({property,content}));
  for(const [name,content] of Object.entries({'twitter:card':'summary_large_image','twitter:title':title,'twitter:description':description,'twitter:image':base+'/assets/og-seongsan.jpg'}))head.append($('<meta>').attr({name,content}));
  head.append('<link rel="manifest" href="/site.webmanifest"><link rel="apple-touch-icon" sizes="180x180" href="/assets/icon-180.png"><link rel="icon" type="image/png" sizes="32x32" href="/assets/icon-32.png">');$('link[rel="icon"][href$=".webp"]').attr('type','image/webp');
  const graph=[org,{'@type':'WebSite','@id':base+'/#website',url:base,name:'Seongsan Vina',inLanguage:'vi',publisher:{'@id':org['@id']}}];
  if(slug!=='index')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Trang chủ',item:base+'/'},{'@type':'ListItem',position:2,name:title.split(' | ')[0],item:url}]});
  head.append('<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')+'</script>');
  fs.writeFileSync(file,$.html());
 }
 fs.writeFileSync(path.join(dest,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+base+'/sitemap.xml\n');
 fs.writeFileSync(path.join(dest,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(pages).map(s=>'<url><loc>'+base+(s==='index'?'/':'/'+s)+'</loc></url>').join('')+'</urlset>');
 fs.writeFileSync(path.join(dest,'site.webmanifest'),JSON.stringify({name:'Seongsan Vina',short_name:'Seongsan',lang:'vi',start_url:'/',display:'browser',background_color:'#ffffff',theme_color:'#1A2B55',icons:[192,512].map(n=>({src:'/assets/icon-'+n+'.png',sizes:n+'x'+n,type:'image/png'}))}));
 fs.writeFileSync(path.join(dest,'404.html'),'<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Không tìm thấy trang | Seongsan Vina</title><main style="font-family:system-ui;max-width:640px;margin:15vh auto;padding:24px;color:#1a2b55"><p>SEONGSAN VINA · 404</p><h1>Không tìm thấy trang</h1><p>Đường dẫn có thể đã thay đổi. Hãy trở về trang chủ hoặc liên hệ để được hỗ trợ.</p><a href="/">Về trang chủ</a> · <a href="/lien-he">Liên hệ</a></main></html>');
 console.log('SEO: 13 unique titles/descriptions, canonical, social cards, JSON-LD, sitemap and 404.');
};
