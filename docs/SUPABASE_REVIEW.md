# Form liên hệ — kiểm tra ngày 08/09/2026

Endpoint riêng `seongsan-submit` đã triển khai trên project dùng chung CRM. Giữ bảng `leads`, không tạo bảng contacts trùng với danh bạ CRM và không thêm CMS ngoài phạm vi website giới thiệu.

## Bằng chứng thực thi

- GET health: 200. Email configured: false.
- Thiếu tên/số điện thoại: 400; honeypot: 200 nhưng không lưu.
- Yêu cầu thử có nhãn `[SEONGSAN QA]`: 201; đọc lại bằng quyền quản trị thấy `site=seongsan`, trạng thái `Mới`, outbox `pending`.
- REST insert trực tiếp với anon và `site=seongsan`: 401, mã PostgreSQL 42501 do RLS. Đây là kết quả từ chối thành công; không bắt buộc HTTP 403.
- Anon đọc bản ghi thử: 200, mảng rỗng.
- Đã xóa đúng bản ghi thử sau đọc lại, theo ID và tên khớp hoàn toàn. Outbox xóa theo cascade.
- RPC rate limit: lần 1–5 true, lần 6 false; thử trong transaction rồi rollback.
- Chi tiết HTTP: `backend-checks.json`. Không lưu key vào báo cáo/repo.

## Giới hạn và việc còn lại

P1 vận hành: chưa có `RESEND_API_KEY` và `SEONGSAN_MAIL_FROM` đã xác minh. Lead được lưu, nhưng email chưa được gửi. Outbox lưu trạng thái chờ; chưa có worker tự gửi lại. Cần cấu hình secret qua Supabase Dashboard → Edge Functions → Secrets, rồi kiểm thử nhận mail thực tế trước khi coi thông báo email là GO.

Turnstile chưa bật. Honeypot, giới hạn payload/độ dài và rate limit đang hoạt động. Chỉ cấu hình secret Turnstile sau khi thêm widget/site key ở frontend.

## Security advisors

- INFO: RLS không có policy ở outbox và bảng đếm giới hạn là chủ đích: chỉ service role dùng, anon/authenticated không có quyền đọc.
- WARN `is_app_user()` SECURITY DEFINER: là hàm kiểm tra thành viên dùng bởi RLS của CRM chung. Không tự bỏ quyền làm hỏng CRM; cần rà soát riêng quyền thành viên.
- WARN leaked-password protection chưa bật trong Auth của CRM. Website này không có đăng nhập khách hàng; cảnh báo cấu hình Auth vẫn còn, không tuyên bố toàn project sạch cảnh báo.
- Performance: chỉ có INFO unused indexes ở các bảng CRM dùng chung. Không xóa index chỉ vì chưa có truy vấn sử dụng trong thống kê hiện tại.

Tham chiếu: [RLS không policy](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), [SECURITY DEFINER](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [bảo vệ mật khẩu](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).
