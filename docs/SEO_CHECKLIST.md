# Checklist bàn giao — 08/09/2026

| Hạng mục | Trạng thái và bằng chứng |
|---|---|
| Repo public + CI | ✅ GitHub huuthinh2100-source/seongsan-vina-website; CI validate đạt |
| Bảo vệ main | ✅ bắt buộc validate, chặn force push/xóa; admin vẫn được bypass |
| 13 trang × 4 ngôn ngữ | ✅ 52 HTML, URL riêng, canonical/hreflang/x-default; check-build đạt; HTTP 52/52 đạt 200 |
| Dịch nội dung đầy đủ | ⏳ các dictionary hiện có đã xuất HTML; một số bài và alt vẫn giữ VI |
| Title/description | ✅ riêng từng trang/ngôn ngữ, giới hạn 60/155 |
| H1/alt/link nội bộ | ✅ kiểm tra source và build đạt |
| JSON-LD | ✅ Organization/LocalBusiness/WebSite/BreadcrumbList, parse hợp lệ; ⏳ chưa chạy Rich Results Test của Google |
| OG/Twitter | ✅ 1200×630, metadata riêng; dùng chung ảnh minh họa thương hiệu |
| Sitemap/robots/404 | ✅ đã xuất bản; URL sai trả 404 |
| Favicons/manifest | ✅ có source và bước build |
| Form Supabase | ✅ gửi từ trình duyệt production, đọc lại DB đúng site; RLS/rate limit; đã dọn dữ liệu thử |
| Email thông báo | ⏳ chưa có Resend key/sender; không tuyên bố đã gửi email |
| Domain riêng | ⏳ đã gắn domain; DNS vẫn trỏ máy chủ cũ, chủ DNS cần chuyển |
| Analytics | ⏳ Vercel yêu cầu chính chủ xác nhận tương tác |
| Speed Insights | ⏳ CLI cảnh báo tính phí; chưa bật |
| Search Console/indexing | ⏳ chưa có token/property xác minh; hướng dẫn đã viết |
| Business Profile/off-page | ✅ bản nháp/checklist; ⏳ chủ doanh nghiệp xác minh và đăng |
| Kế hoạch nội dung | ✅ 8 đề cương, chưa xuất bản bài chưa kiểm chứng |
| Thứ hạng Google | ⏳ chưa có dữ liệu, không cam kết đứng đầu |

Việc cần tài khoản chủ sở hữu: DNS; Resend sender/key; xác minh Google/GBP; xác nhận Analytics và cân nhắc phí Speed Insights. Xem DOMAIN_AND_SEARCH_CONSOLE.md, SUPABASE_REVIEW.md và GBP_CONTENT.md.
