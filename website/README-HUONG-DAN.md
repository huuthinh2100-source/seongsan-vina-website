# SEONGSAN VINA — hướng dẫn bản website cải tiến 07/09/2026

Bản này gồm 13 trang HTML, thư mục assets dùng chung và tai-lieu-vb. Phải giữ đủ cấu trúc thư mục khi sao chép/đưa lên hosting.

## Xem tại máy

Mở index.html bằng trình duyệt để xem nhanh. Để kiểm tra đầy đủ video/phụ đề và điều hướng, mở PowerShell tại thư mục website rồi chạy:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Truy cập http://127.0.0.1:8765 . Server chỉ lắng nghe máy hiện tại. Dừng bằng Ctrl+C.

## Nội dung và tài nguyên

- index.html: trang chủ đã thiết kế lại, 3 dịch vụ, 3 dự án, quy trình, video.
- Các trang hiện có: gioi-thieu, dich-vu-pccc, xay-dung-me, du-an, nang-luc, tin-tuc, lien-he, case-study, tai-lieu, thu-vien-tieu-chuan, bai-nd105, bai-qcvn06.
- assets/redesign.css: giao diện cải tiến dùng chung.
- assets/enhancements.js: nội dung mới bốn ngôn ngữ, trạng thái menu và tương tác bổ sung.
- assets/base-*.css và assets/site-*.js: giao diện/chức năng cũ đã tách khỏi HTML, gồm bản dịch cũ và tích hợp CRM trên trang liên hệ.
- assets/industrial-film.mp4: video minh họa AI bằng Google Flow, 8 giây, 1280x720. Ảnh/video minh họa không đại diện cho dự án thực tế.

## Biểu mẫu liên hệ

Trang Liên hệ hiện kết nối CRM Supabase, có fallback email chủ động khi không xác nhận được phản hồi. Bản sửa đã kiểm tra HTTP 201/503 giả lập tại server local riêng; chưa xác nhận CRM thật lưu dữ liệu hoặc gửi thông báo. Không coi nút hiển thị hay kiểm thử giả lập là nghiệm thu backend. Khóa anon phía trình duyệt không thay thế các chính sách RLS/rate limit của máy chủ.

## Trước công bố

Rà soát hồ sơ/chứng chỉ hiện hành, quyền sử dụng ảnh và tên khách hàng, bản dịch, nội dung pháp lý, CRM đầu cuối, hosting/SSL/backup và hiệu năng production. Website vẫn là bản tĩnh; chưa có CMS và chưa đáp ứng toàn bộ đề cương.

Báo cáo, bản sao lưu nguyên trạng, bằng chứng kiểm thử và mã tái tạo nằm tại thư mục cấp trên: review-2026-09-07. Không đưa thư mục review hoặc hồ sơ công ty gốc lên public hosting.

## Phase 3 — 08/09/2026

Dùng ảnh/video minh họa có sẵn theo xác nhận của người dùng. Ảnh responsive được phục vụ từ assets/media; hero video chỉ tự phát trên màn hình đủ rộng, không reduced-motion/tiết kiệm dữ liệu. Mobile dùng ảnh. Có gallery và điều khiển video bằng bàn phím. Giữ nguyên nội dung gốc.

Preview có hàng đợi kết nối phù hợp kiểm thử: từ gốc workspace chạy `python scripts/preview.py`, mở http://127.0.0.1:8770. Server chỉ phục vụ website/, không phục vụ toàn workspace.

Mã tương tác mới: assets/media.js; CSS: assets/media.css. Trang chủ nhúng CSS critical để giảm lượt tải; sau sửa CSS chạy `python scripts/sync-landing-css.py` tại gốc workspace. Các trang dùng assets/page-<ten-trang>.js chứa đúng bản dịch cần cho trang đó; các dictionary gốc giữ trong assets/site-*.js để đối chiếu. Thay đổi nội dung/i18n ở phase sau cần đồng bộ đúng dictionary, không tự chạy lại các migration Phase 3.

Chi tiết kiểm tra và giới hạn: ../docs/PHASE3_REPORT.md. SEO production, GitHub, CRM thật và hosting vẫn thuộc các phase sau. Không coi điểm SEO Lighthouse 100 là đã được Google lập chỉ mục.
