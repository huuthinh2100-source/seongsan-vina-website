# Audit website Seongsan Vina

Audit ban đầu ngày 07/09/2026; đối chiếu bàn giao ngày 08/09/2026. Bản tổng hợp này chuyển các phát hiện từ workspace kiểm tra sang repo public. Điểm ban đầu là đánh giá chuyên môn, không phải điểm hiện tại sau sửa. Không dùng ảnh AI để xác nhận dự án, nhân sự hoặc năng lực thực tế.

## Stack và kiểm kê

Nguồn là 13 trang HTML/CSS/JavaScript tĩnh. Repo hiện có Node 24, Sharp và Cheerio để tối ưu media, sinh metadata và 52 trang VI/EN/KO/ZH. Chạy `npm ci`, cấu hình `.env.local` từ `.env.example`, `npm run build`, rồi `python scripts/preview.py`. Form Liên hệ đi qua Supabase Edge Function vào bảng leads; form Tài liệu mở bản nháp email để người dùng tự gửi.

[Danh mục 13 trang và section](PAGE_INVENTORY.md) và [văn bản gốc](TEXT_CONTENT.md) là bản lưu trước sửa. Đọc mã trong `website/` để xem nội dung hiện tại; các điều chỉnh pháp lý và FAQ đã được ghi riêng trong [báo cáo bàn giao](FINAL_REPORT.md).

## Điểm ban đầu và căn cứ

| Nhóm | Điểm /10 | Căn cứ lúc audit |
|---|---:|---|
| Nội dung, thông điệp | 6 | Có ba lĩnh vực, trang năng lực và CTA; số liệu dự án, NAP và pháp lý chưa được kiểm chứng đầy đủ |
| Ảnh, video | 5 | Có media AI có nhãn, thiếu ảnh công trình thật, chưa có picture/srcset, video case study chỉ là placeholder |
| UX/UI, responsive | 7 | Phân cấp và CTA rõ; menu 1024 px chèn logo/cắt CTA; còn lỗi thứ tự heading |
| Hiệu năng | 6 | Mobile Performance 66, LCP 6,03 s; desktop 98, LCP 0,89 s |
| SEO kỹ thuật | 4 | Có title, description và H1; description trùng, thiếu canonical/hreflang/schema/OG/sitemap/robots |

Không phát hiện P0 trong phạm vi ban đầu; đây không phải chứng nhận an toàn toàn hệ thống.

## Vấn đề, tác động và trạng thái

| ID / mức | Vấn đề và tác động | Nguyên nhân, hướng sửa và kết quả |
|---|---|---|
| A01 P1 | LCP mobile 6,03 s, chậm nội dung chính | Font/CSS/ảnh đầu trang; tối ưu đã đạt LCP 1,97 s trong phép đo local Phase 3 |
| A02 P1 | Description trùng trên 13 trang, một số title quá dài | Đã sinh metadata riêng cho 52 URL, kiểm tra build giới hạn 60/155 |
| A03 P1 | Thiếu metadata/schema/sitemap/robots | Đã triển khai SEO; tên miền riêng và thứ hạng vẫn chưa hoàn tất |
| A04 P1 cần xác minh | Số liệu nhân sự/case study và tham chiếu pháp luật chưa đủ bằng chứng | Cần hồ sơ doanh nghiệp và chuyên môn đối chiếu; bản dịch không chứng minh các số liệu đúng |
| A05 P1 | Form ghi trực tiếp REST, chưa chứng minh RLS/chống spam | Đã dùng gateway, rate limit, honeypot, kiểm tra ghi DB và quyền anon; email còn thiếu cấu hình |
| A06 P1 | Thiếu ảnh dự án thật và video nghiệm thu | Đã bỏ biểu tượng phát giả; giữ nhãn minh họa. Chưa có video nghiệm thu để công bố |
| A07 P2 | Heading nhảy cấp, ảnh hưởng điều hướng hỗ trợ | Đã sửa hierarchy, kết quả Accessibility local cuối 100 trong phạm vi đo |
| A08 P2 | Ảnh không có biến thể responsive, lặp visual | Đã tích hợp 16 nguồn ảnh tại 26 vị trí với AVIF/WebP/JPG; hero có poster/fallback |
| A09 P2 | Dịch bằng JS/query, URL và metadata chưa riêng | Đã sinh 52 HTML và canonical/hreflang; 156 phép đo bố cục EN/KO/ZH không tràn ngang; chưa có người bản ngữ nghiệm thu |
| A10 P2 | Người dùng có thể kỳ vọng tài liệu tải ngay | Luồng email có hướng dẫn và trạng thái rõ; chưa có bằng chứng tự động giao tài liệu |
| A11 P2 | Thiếu bảng truy vết media | Có CREDITS.md; ảnh minh họa không thay chứng cứ quyền công bố ảnh công trình thật |
| A12 P1 | Menu 1024 px chèn logo, cắt nút báo giá | Đã giữ menu thu gọn dưới 1280 px và kiểm tra responsive |

## Lighthouse trước và sau

Đã đọc lại năm JSON gốc để trích số đo, thời gian, URL, phiên bản và SHA-256 tại [bằng chứng Lighthouse](lighthouse/phase1-phase3-measurements.json). Đây là phép đo lab localhost lịch sử, không phải đo lại production hoặc dữ liệu Core Web Vitals người dùng thật.

| Trang / chế độ | Performance trước → sau | A/BP/SEO sau | LCP trước → sau | CLS sau | Byte tải sau |
|---|---|---|---|---|---:|
| Trang chủ mobile | 66 → 99 | 100/100/100 | 6,028 → 1,965 s | 0 | 204190 |
| Trang chủ desktop | 98 → 100 | 100/100/100 | 0,885 → 0,508 s | 0,000224 | 1227772 |
| PCCC mobile | Chưa đo → 100 | 100/100/100 | Chưa đo → 1,675 s | 0 | 228554 |

Các trường hợp sau đạt ngân sách LCP <2,5 s, CLS <0,1, tải đầu <2 MB. CLI gặp EPERM khi dọn tệp tạm sau xuất báo cáo; các JSON không có runtimeError. Không gọi toàn bộ lệnh là exit 0. Preview server thay đổi giữa các lần đo, vì vậy không quy toàn bộ cải thiện cho mã giao diện. Tải ban đầu không bằng dung lượng toàn website.

## Media cần bổ sung

| Vị trí | Loại / kích thước đề xuất | Tình trạng |
|---|---|---|
| Hero, ba dịch vụ | Ảnh 1920×1080 và 1200×800; video nền ≤15 s | Đã tích hợp media minh họa, video Flow khoảng 8 s |
| Giới thiệu, năng lực | Chân dung 800×1000, đội ngũ 1600×900, chứng chỉ 900×1200 | Chỉ dùng người thật/hồ sơ được phép công khai; không tạo giả |
| Dự án và case study | Ảnh thật 1200×800, gallery 1600×900 | Cần ảnh đúng công trình và quyền công bố; media AI chỉ minh họa |
| Case study nghiệm thu | Video thật 30–60 s, 1920×1080 và poster | Chưa có file thật để phát |
| Tin tức, pháp lý | Thumbnail 1200×675, infographic có nguồn | Giữ tham chiếu có nguồn; không biến minh họa thành chứng cứ pháp lý |
| Tài liệu | Bìa 900×1200 và PDF được phép phân phối | Không tạo nút tải giả khi thiếu tệp |
| Liên hệ | Ảnh văn phòng 1200×800, bản đồ xác nhận | NAP cần doanh nghiệp xác nhận nhất quán với GBP |
| Chia sẻ mạng xã hội | OG 1200×630 | Đã có ảnh thương hiệu minh họa |

[MEDIA_BRIEF.md](MEDIA_BRIEF.md) chứa mã asset, prompt, tỷ lệ, định dạng, alt, gợi ý Canva và kịch bản CapCut; [CREDITS.md](../CREDITS.md) ghi nguồn media. Brief 30–60 s không được báo cáo thành video đã sản xuất.

## Kết luận và các thông tin còn thiếu

GO cho website giới thiệu trên URL Vercel và luồng lead vào DB trong phạm vi đã kiểm chứng. Chưa đủ bằng chứng hoàn tất toàn bộ yêu cầu: còn cấu hình email, DNS tên miền riêng, xác nhận dịch vụ Vercel, dữ liệu indexing/ranking, hồ sơ xác nhận các tuyên bố năng lực và media dự án thật.

Các câu hỏi audit về repo public, quyền tiếp tục và dùng ảnh AI đã được người dùng giải quyết; không yêu cầu xác nhận lại. Những dữ liệu thực sự chưa có được liệt kê trong [SEO checklist](SEO_CHECKLIST.md) và [báo cáo bàn giao](FINAL_REPORT.md). Không gửi khóa bí mật qua repo hoặc chat.
