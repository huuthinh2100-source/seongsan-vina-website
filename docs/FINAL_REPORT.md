# Bàn giao triển khai Seongsan Vina — 08/09/2026

**Đã xuất bản website và repo public. GO cho website giới thiệu và tiếp nhận lead vào DB; chưa GO cho email tự động, chuyển domain riêng và xác nhận Google indexing.** Báo cáo này ghi cả phần chưa hoàn thành, không xác nhận hoàn thành toàn bộ mục tiêu.

- Production: https://seongsan-vina-website.vercel.app
- Repo public: https://github.com/huuthinh2100-source/seongsan-vina-website
- Mã nguồn làm việc: thư mục `seongsan-vina-web`, tách khỏi workspace có hồ sơ riêng.
- Bản dịch: `/en`, `/ko`, `/zh`; 52 URL đã kiểm tra HTTP 200. Một số thân bài tham chiếu và alt giữ VI gốc.

## Thiết kế, nội dung và media

Giữ nội dung kinh doanh gốc; sửa hierarchy, khoảng cách, typography, menu tablet, focus bàn phím và reduced-motion. 16 nguồn ảnh tạo các phiên bản AVIF/WebP/JPG tại 26 vị trí. Hero dùng video Google Flow khoảng 8 giây có pause; mobile dùng poster. Gallery dùng dialog nhẹ. Ảnh/video AI ghi rõ minh họa; không gán thành ảnh dự án thực tế. OG 1200×630 dùng hình đã được người dùng đồng ý.

MEDIA_BRIEF.md và CREDITS.md ghi quy trình Canva/CapCut/Flow, nguồn và các tài sản còn cần ảnh thật. Không tuyên bố đã xuất thêm video CapCut 30–60 giây trong lần triển khai này.

## Hiệu năng

Kết quả lab Phase 3 đo local trước khi deploy, không phải dữ liệu người dùng production:

| Chỉ số | Trước | Sau Phase 3 |
|---|---:|---:|
| Mobile Performance | 66 | 99 |
| Mobile LCP | 6,03 s | 1,97 s |
| Mobile CLS | — | 0 |
| Mobile dung lượng ban đầu | — | khoảng 199 KiB |
| Desktop Performance | 98 | 100 |
| Desktop LCP | 0,89 s | 0,51 s |

Accessibility/Best Practices/SEO trong báo cáo local cuối đạt 100. Lighthouse CLI đã tạo JSON không runtimeError nhưng gặp lỗi EPERM khi dọn thư mục; điểm đọc từ báo cáo, không gọi toàn bộ lệnh CLI là exit 0. Cấu hình preview server cũng đổi giữa các lần đo, nên không quy toàn bộ chênh lệch cho code. Báo cáo/screenshot Phase 1–3 giữ tại workspace kiểm tra ban đầu.

## Kiểm thử và triển khai

- Source lint, build và kiểm tra 52 trang tĩnh đạt: H1, ID, alt, link/asset, cú pháp JS, metadata, canonical, hreflang và JSON-LD.
- GitHub Actions CI validate đạt; main chặn force-push/xóa, cho phép admin bypass. Production + Preview đã cấu hình env; repo không chứa giá trị key.
- Preview đã kiểm tra hiển thị VI/KO và chuyển ngôn ngữ; production 52 trang trả 200, asset video/OG trả 200, URL sai 404.
- Đã phát hiện và sửa header Prefer gây lỗi CORS. Sau sửa, gửi từ form production và đọc lại Supabase thành công; site=seongsan, status=Mới. Console kiểm tra không lỗi. Bản ghi QA đã xóa theo ID/tên chính xác.
- Anon không đọc lead, không được insert trực tiếp site Seongsan; gateway validation/honeypot/rate limit hoạt động. Email vẫn pending vì chưa có cấu hình gửi. Xem SUPABASE_REVIEW.md.

## Phần chủ tài khoản cần thực hiện

1. DNS: domain đã thêm vào Vercel; A record vẫn ở máy chủ cũ 36.50.55.80. Đổi record theo DOMAIN_AND_SEARCH_CONSOLE.md, kiểm tra HTTPS rồi đổi SITE_URL/redeploy.
2. Email: cấu hình RESEND_API_KEY và SEONGSAN_MAIL_FROM qua Supabase Secrets; kiểm thử nhận thư. Không gửi secret qua repo/chat.
3. Google: URL-prefix Vercel đã xác minh bằng meta thật; sitemap Thành công, 52 URL được khám phá. Domain property riêng còn cần TXT DNS; GBP cần chủ doanh nghiệp xác minh.
4. Vercel Analytics/Speed Insights: CLI yêu cầu chính chủ xác nhận trong terminal. Speed Insights được CLI báo có phí, nên chưa bật và chưa tính là hoàn thành.

Lệnh do chủ tài khoản thực hiện nếu muốn bật: `vercel project web-analytics enable seongsan-vina-website`; `vercel project speed-insights enable seongsan-vina-website` (đọc và chấp nhận phí nếu phù hợp). Yêu cầu tương tác này đến từ Vercel CLI, không phải bước xin duyệt do agent tự thêm.

SEO_KEYWORDS.md, SEO_CHECKLIST.md, GBP_CONTENT.md, OFFPAGE_CHECKLIST.md và CONTENT_PLAN.md cung cấp mapping, checklist và 8 đề cương. Theo dõi Search Console ngày 7/30/90 sau xác minh; chưa có automation được tạo và chưa có bằng chứng thứ hạng.

## Kiểm tra Google bổ sung

Rich Results Test ngày 08/09/2026 thu thập thành công, phát hiện 2 mục hợp lệ (Organization, LocalBusiness). Có cảnh báo không bắt buộc về image/priceRange; không tự thêm giá hoặc ảnh cơ sở chưa được xác thực. [Kết quả Google](https://search.google.com/test/rich-results/result?id=Sc-6jFUOU2gBjfWhEsUrGg).

Search Console URL-prefix đã xác minh bằng thẻ HTML ngày 08/09/2026; sitemap.xml gửi thành công, Google đọc thành công và khám phá 52 trang. Khám phá URL không đồng nghĩa đã index.

Yêu cầu lập chỉ mục trang chủ đã được Google chấp nhận và đưa vào hàng đợi. Yêu cầu tiếp theo cho /dich-vu-pccc bị Google từ chối do vượt hạn ngạch ngày; cần thử lại ngày mai cho PCCC, giới thiệu, năng lực, liên hệ. Không gửi lặp để vượt quota. Xem google-checks.json.

## Bổ sung kiểm tra build và URL ngôn ngữ

Build hiện xóa riêng dist sau khi kiểm tra đường dẫn để không giữ asset/trang đã bị loại khỏi source. URL cũ ?lang=vi/en/ko/zh chuyển sang đường dẫn ngôn ngữ, giữ query chiến dịch và anchor; đổi ngôn ngữ cũng giữ các thông tin này. Có kiểm thử hồi quy và kiểm tra file giả đã xóa khỏi đầu ra. Các hạng mục DNS, email, Google quota và xác nhận dịch vụ Vercel vẫn còn như trên.
