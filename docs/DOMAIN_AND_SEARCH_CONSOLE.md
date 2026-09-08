# Domain và Search Console

## Domain — trạng thái đã kiểm tra 08/09/2026

`seongsanvina.com` và `www.seongsanvina.com` đã gắn vào project Vercel. DNS hiện do `ns1..ns4.zonedns.vn` quản lý; A record vẫn là `36.50.55.80`, nên truy cập tên miền riêng chưa chuyển sang website mới.

Chủ tài khoản DNS cần đăng nhập nhà cung cấp và thay A record của `@` sang **76.76.21.21** (giá trị Vercel CLI trả về cho domain này). Với `www`, dùng CNAME chính xác hiển thị tại Project → Settings → Domains. Không thay MX/TXT email, không đổi nameserver toàn zone khi chưa sao lưu cấu hình mail.

Sau DNS: chạy `vercel domains inspect seongsanvina.com`, kiểm tra chứng chỉ HTTPS và redirect www → non-www; đổi `SITE_URL` ở cả Preview/Production thành `https://seongsanvina.com`, build/deploy lại để canonical, sitemap, OG và JSON-LD đồng bộ. Đến lúc đó, canonical hiện hành vẫn là URL Vercel đang truy cập được.

## Search Console — URL-prefix đã xác minh bằng thẻ HTML ngày 08/09/2026

1. Mở [Search Console](https://search.google.com/search-console) bằng tài khoản Google quản trị doanh nghiệp.
2. Add property → Domain → `seongsanvina.com`.
3. Sao chép TXT **do chính Google cấp** vào DNS, giữ các TXT cũ; bấm Verify sau khi DNS cập nhật.
4. Với URL-prefix property thay thế: dùng URL production đang hoạt động; Google cấp file HTML hoặc meta verification. Chỉ đưa đúng mã thật vào site, không tạo mã giả. Build đã có thẻ meta do Google cấp và URL-prefix https://seongsan-vina-website.vercel.app/ đã xác minh thành công. Domain property của tên miền riêng vẫn cần TXT DNS.
5. Gửi `sitemap.xml`; URL Inspection → Test Live URL → Request Indexing cho trang chủ, giới thiệu, PCCC, năng lực và liên hệ.
6. Kiểm tra trạng thái Pages, Sitemaps, Core Web Vitals. HTTP 200 và sitemap hợp lệ không chứng minh Google đã index.

## Theo dõi

- Ngày 7: kiểm tra sitemap đọc được, canonical Google chọn và lý do trang bị loại.
- Ngày 30: xem impression/click/CTR truy vấn thương hiệu; sửa title/description theo dữ liệu thật.
- Ngày 90: đối chiếu nhóm dịch vụ/địa phương; bổ sung nội dung và liên kết nội bộ.

Đây là lịch bàn giao, chưa tạo automation theo dõi hoặc thông báo định kỳ.

Kết quả phiên triển khai: sitemap Thành công, Google khám phá 52 URL; request index trang chủ được nhận. Google báo vượt hạn ngạch ngày ở trang PCCC; gửi lại 4 trang chính vào ngày hôm sau.
