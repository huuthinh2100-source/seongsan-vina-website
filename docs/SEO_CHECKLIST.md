# Checklist bàn giao — 08/09/2026

| Hạng mục | Trạng thái và bằng chứng |
|---|---|
| Repo public + CI | ✅ GitHub huuthinh2100-source/seongsan-vina-website; CI validate đạt |
| Bảo vệ main | ✅ bắt buộc validate, chặn force push/xóa; admin vẫn được bypass |
| 13 trang × 4 ngôn ngữ | ✅ 52 HTML, URL riêng, canonical/hreflang/x-default; check-build đạt; HTTP 52/52 đạt 200 |
| Dịch nội dung đầy đủ | ⏳ các dictionary hiện có đã xuất HTML; alt ảnh và nhãn media đã dịch EN/KO/ZH; một số thân bài vẫn giữ VI |
| Title/description | ✅ riêng từng trang/ngôn ngữ, giới hạn 60/155 |
| H1/alt/link nội bộ | ✅ kiểm tra source và build đạt |
| JSON-LD | ✅ Organization/LocalBusiness/WebSite/BreadcrumbList, parse hợp lệ; ✅ Google Rich Results Test phát hiện 2 mục hợp lệ; cảnh báo tùy chọn image/priceRange chưa có |
| OG/Twitter | ✅ 1200×630, metadata riêng; dùng chung ảnh minh họa thương hiệu |
| Sitemap/robots/404 | ✅ đã xuất bản; URL sai trả 404 |
| Favicons/manifest | ✅ có source và bước build |
| Form Supabase | ✅ gửi từ trình duyệt production, đọc lại DB đúng site; RLS/rate limit; đã dọn dữ liệu thử |
| Email thông báo | ⏳ chưa có Resend key/sender; không tuyên bố đã gửi email |
| Domain riêng | ⏳ đã gắn domain; DNS vẫn trỏ máy chủ cũ, chủ DNS cần chuyển |
| Analytics | ⏳ Vercel yêu cầu chính chủ xác nhận tương tác |
| Speed Insights | ⏳ CLI cảnh báo tính phí; chưa bật |
| Search Console/indexing | ✅ URL-prefix đã xác minh; sitemap Thành công, 52 URL được Google khám phá; ✅ request index trang chủ được nhận; ⏳ Google hết quota khi gửi PCCC, 4 trang còn lại chờ ngày mai |
| Business Profile/off-page | ✅ bản nháp/checklist; ⏳ chủ doanh nghiệp xác minh và đăng |
| Kế hoạch nội dung | ✅ 8 đề cương, chưa xuất bản bài chưa kiểm chứng |
| Thứ hạng Google | ⏳ chưa có dữ liệu, không cam kết đứng đầu |

Việc cần tài khoản chủ sở hữu: DNS; Resend sender/key; DNS cho Domain property và xác minh GBP; xác nhận Analytics và cân nhắc phí Speed Insights. Xem DOMAIN_AND_SEARCH_CONSOLE.md, SUPABASE_REVIEW.md và GBP_CONTENT.md.
