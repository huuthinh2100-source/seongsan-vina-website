# Bàn giao triển khai Seongsan Vina — 08/09/2026

**Đã xuất bản website và repo public. GO cho website giới thiệu và tiếp nhận lead vào DB; chưa GO cho email tự động, chuyển domain riêng và xác nhận Google indexing.** Báo cáo này ghi cả phần chưa hoàn thành, không xác nhận hoàn thành toàn bộ mục tiêu.

- Production: https://seongsan-vina-website.vercel.app
- Repo public: https://github.com/huuthinh2100-source/seongsan-vina-website
- Mã nguồn làm việc: thư mục `seongsan-vina-web`, tách khỏi workspace có hồ sơ riêng.
- Bản dịch: `/en`, `/ko`, `/zh`; 52 URL đã kiểm tra HTTP 200. Một số thân bài tham chiếu giữ VI gốc; alt ảnh đã được dịch EN/KO/ZH.

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

## Bổ sung ngôn ngữ cho media

Đã dịch 25 mô tả ảnh hiện có cùng nhãn mở ảnh, menu, video và bản đồ sang EN/KO/ZH. Giữ nguyên nghĩa, giữ nhãn minh họa ở các ảnh được gắn nhãn đó trong nguồn. Kiểm tra đầu ra không còn alt ảnh tiếng Việt trên 39 trang ngoại ngữ. Đây chưa phải xác nhận đã dịch toàn bộ thân bài.

## Trang Tài liệu — bổ sung bản dịch và sửa yêu cầu email

Đã dịch phần giới thiệu, danh mục 7 nhóm tài liệu, biểu mẫu và placeholder của trang Tài liệu sang EN/KO/ZH. Giữ 8 giá trị option tiếng Việt làm dữ liệu gửi, giữ mã văn bản/tiêu chuẩn trong nguồn; bản dịch không xác nhận hiệu lực pháp lý hiện hành của các tham chiếu cũ.

Biểu mẫu Tài liệu hiện là luồng mở bản nháp email, khác form Liên hệ lưu Supabase. Đã sửa tiêu đề nhầm báo giá thành yêu cầu tài liệu, mã hóa toàn bộ Unicode/ký tự đặc biệt trong subject/body, thêm hướng dẫn gửi bản nháp và link mở lại. Chưa xác nhận email đã gửi hay tài liệu đã được giao tự động. Test ký tự &, #, dấu tiếng Việt và chuỗi giống header email đạt; source lint/build/52 trang đạt.

## Case study — bản dịch nội dung đầy đủ

Đã dịch tám phần nội dung, tiêu đề, bảng thông tin dự án và CTA của case study sang EN/KO/ZH. Kiểm tra không còn đoạn thân bài chưa có bản dịch; giữ nguyên số liệu, tên Fabinno Vina, mã tiêu chuẩn và nhãn ảnh minh họa. Nội dung tiếng Việt được giữ nguyên (chỉ khác khoảng trắng cuối file). Bản dịch phản ánh nội dung nguồn, không phải bằng chứng độc lập xác minh kết quả dự án hoặc hiệu lực các tham chiếu pháp lý cũ.

Đã bỏ biểu tượng phát ở ô video nghiệm thu chưa có file phát. Chưa có video nghiệm thu thực tế để giao. Lint, build 52 trang, kiểm tra liên kết/metadata/JS, kiểm thử router và yêu cầu tài liệu đều đạt. Các bài pháp lý và thư viện vẫn còn phần nội dung tiếng Việt cần xử lý tiếp.

## Bài QCVN 06 — bản dịch EN/KO/ZH

Đã bổ sung bản dịch toàn bộ thân bài, thông tin tác giả/ngày cập nhật, CTA và nhãn nguồn. Giữ nguyên nội dung nguồn tiếng Việt, mốc cập nhật tháng 7/2026, mã văn bản và URL tài liệu. Kiểm tra độ phủ các đoạn ngoài dictionary cũ đạt; build 52 trang, lint, router và luồng yêu cầu tài liệu đạt.

Đối chiếu riêng hai mốc hiệu lực: [Thông tư 06/2022/TT-BXD](https://vanban.chinhphu.vn/?classid=1&docid=207059&pageid=27160&typegroupid=6) ghi 16/01/2023; [Thông tư 09/2023/TT-BXD](https://congbao.chinhphu.vn/van-ban/thong-tu-so-09-2023-tt-bxd-40285.htm) ghi 01/12/2023. Đối chiếu này không phải kiểm toán toàn bộ nội dung pháp lý của bài hoặc xác nhận mọi tham chiếu còn hiệu lực tại ngày đọc. Trang kiến thức, bài Nghị định 105 và thư viện còn phần nội dung chưa dịch.

## Bài Nghị định 105 — làm rõ phạm vi thủ tục và mốc thời gian

Đọc trực tiếp trang 3 Phụ lục I.1 của Nghị quyết 66.18/2026/NQ-CP được Báo Chính phủ cung cấp: phần C, Mục 2 liệt kê ba thủ tục không thực hiện. Đã sửa cách viết dễ hiểu thành bỏ toàn bộ nghiệm thu; tách mốc hiệu lực 01/7/2026 của Nghị quyết với mốc dừng tiếp nhận 20/6/2026 trong thông báo Công an Tuyên Quang. Link nguồn chính thức được đặt ngay trong bài.

Đã bỏ kết luận áp dụng chung rằng mọi hồ sơ tiếp nhận trước 20/6/2026 tiếp tục xử lý theo quy định cũ. Nguồn hiện có chưa đủ để kết luận cho mọi địa phương/tình trạng hồ sơ; bài hướng người đọc đối chiếu cơ quan đang giải quyết. Đây là sửa nội dung có rủi ro hiểu sai, chưa phải kiểm toán pháp lý toàn bài. Bản dịch đầy đủ bài Nghị định 105 còn đang thực hiện.

## Bài Nghị định 105 — hoàn thiện bản dịch

Đã dịch đầy đủ phần thân bài, danh mục năm việc cần làm, CTA tải tài liệu và nhãn nguồn sang EN/KO/ZH; phần giải thích phạm vi ba thủ tục và hai mốc thời gian cũng được dịch. Bỏ thông báo giữ nguyên thân bài tiếng Việt trên ba bản dịch này. Giữ mã văn bản, số liệu, liên kết nguồn và nội dung tiếng Việt hiện có.

Kiểm tra độ phủ tất cả đoạn ngoài dictionary cũ, mã văn bản/số liệu và đối chiếu danh sách URL nguồn đều đạt. Lint, build 52 trang, kiểm tra metadata/liên kết/JS, router và yêu cầu tài liệu đạt. Đây là xác nhận triển khai bản dịch, không mở rộng kết luận kiểm toán pháp lý ở mục trước. Nội dung trang Kiến thức và Thư viện tiêu chuẩn vẫn chưa dịch hết.

## Thư viện tiêu chuẩn — hoàn thiện bản dịch

Đã dịch toàn bộ mô tả danh mục thuộc bốn lĩnh vực, nhãn trạng thái, nút tải/tra cứu, nguồn và ghi chú sang EN/KO/ZH. Mã văn bản, URL tải và mốc rà soát danh mục 07/2026 được giữ nguyên. Nhãn Nghị quyết 66.18 được sửa đồng bộ thành ba thủ tục hành chính trong lĩnh vực PCCC, phù hợp phần giải thích đã đối chiếu ở bài phân tích.

Đối chiếu tất cả đoạn văn không có data-i18n, mã tiêu chuẩn và danh sách URL nguồn đạt; lint, build 52 trang, kiểm tra cấu trúc/liên kết, router và yêu cầu tài liệu đạt. Dịch danh mục không chứng minh hiệu lực hiện hành hoặc nội dung mọi tiêu chuẩn được dẫn. Trang Kiến thức còn phần chưa dịch; tên riêng người và địa danh được giữ theo nguồn.

## Trang Kiến thức — hoàn thiện bản dịch và sửa FAQ FM-200

Đã dịch các thẻ tin, mô tả dự án, danh mục bài/video/công nghệ/ngành, câu hỏi và câu trả lời FAQ sang EN/KO/ZH. Kiểm tra độ phủ toàn bộ đoạn thân bài ngoài dictionary cũ đạt; URL nguồn giữ nguyên, bổ sung nguồn FM-200. Nhãn Nghị quyết 66.18 đồng bộ thành ba thủ tục hành chính PCCC.

FAQ FM-200 được sửa vì câu cũ dùng mức 7–9% và trễ 30 giây như một bảo đảm an toàn chung. Bản mới nêu nồng độ, thời gian phơi nhiễm và điều kiện sử dụng; hướng tới SDS, hướng dẫn nhà sản xuất và thiết kế được phê duyệt. [Tài liệu Chemours](https://www.chemours.de/-/media/files/fire-extinguishants/fm-200-push-bulletin.pdf?rev=29223f52b4664637ab349e8a7fa6f92e) yêu cầu hiểu SDS, tuân thủ giới hạn phơi nhiễm và cảnh báo nguy cơ khi hít ở nồng độ cao. Không thêm thông số thiết kế chung cho mọi phòng.

Lint, build 52 trang, check-build, router và yêu cầu tài liệu đạt. Hoàn thiện bản dịch không chứng minh hiệu lực mọi tham chiếu hoặc độ phù hợp của các ví dụ tính toán trong FAQ cho từng công trình; phần rà soát nội dung kỹ thuật tổng thể vẫn cần tiếp tục.

## Đối chiếu yêu cầu gốc — FAQ schema

Đã bổ sung FAQPage từ năm câu hỏi/đáp thực sự hiển thị trên trang Kiến thức, sau bước dịch. Mỗi bản VI/EN/KO/ZH có URL, inLanguage và nội dung tương ứng. Không thêm câu trả lời ẩn hoặc FAQ vào trang không có hỏi đáp. Check-build đối chiếu schema với nội dung trang; thử làm lệch một câu trả lời trong dist khiến kiểm tra thất bại như mong đợi, rồi khôi phục bản đúng.

[Google Search Central](https://developers.google.com/search/updates) thông báo FAQ rich results ngừng xuất hiện từ 07/05/2026 và gỡ tài liệu vào 15/06/2026. FAQPage vẫn là kiểu dữ liệu [Schema.org](https://schema.org/FAQPage), nhưng không được báo cáo là đã có FAQ rich result hoặc yêu cầu Rich Results Test công nhận kiểu đã ngừng hỗ trợ.

DNS kiểm tra lại vẫn là 36.50.55.80. Việc bổ sung schema không giải quyết phần tên miền, cấu hình email hoặc xác nhận dịch vụ Vercel còn thiếu. Lint/build/check-build/router/document-request đạt.

## Responsive sau dịch — Thư viện và Kiến thức

Phát hiện hai lỗi ở EN/360 px: nhóm nút tải vượt mép thẻ Thư viện do flex không xuống dòng; cột FAQ trang Kiến thức rộng hơn vùng nội dung khoảng 4 px do kích thước tối thiểu của grid. Đã cho nhóm nút co giãn/xuống dòng, giữ chiều cao chạm tối thiểu 44 px, cho cột co về đúng chiều rộng và ngắt chuỗi dài khi cần.

Kiểm tra trình duyệt local trên 24 tổ hợp: hai trang × EN/KO/ZH × 360/768/1024/1440 px, không còn document overflow hoặc nút vượt thẻ. Mở FAQ FM-200 ở EN/360 px: câu trả lời hiển thị và không tràn ngang. Ảnh và số đo lưu trong `docs/screenshots/i18n/`; phạm vi này không thay cho kiểm tra mọi trang/ngôn ngữ. Lint/build/check-build đạt.
