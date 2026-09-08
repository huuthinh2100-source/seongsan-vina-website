# Seongsan Vina website

Website giới thiệu Công ty Cổ phần Seongsan Vina: PCCC, Xây dựng và M&E. HTML/CSS/JavaScript tĩnh, chuẩn bị media bằng Sharp/FFmpeg.

## Chạy local

Node 24 và npm. `npm ci`, sao chép `.env.example` thành `.env.local`, sau đó `npm run lint` và `npm run build`. Xem bản build bằng `python scripts/preview.py`.

## Cấu trúc và cấu hình

- `website/`: source website; `scripts/`: build/validation/media; `dist/`: bản build, không commit.
- `public/media/README.md`: quy trình chuẩn bị ảnh/video; `docs/MEDIA_BRIEF.md`: brief theo vị trí; `CREDITS.md`: nguồn và giới hạn sử dụng.
- `SUPABASE_URL`, `SUPABASE_ANON_KEY`: cấu hình client public; không phải quyền quản trị. Inject lúc build, không commit giá trị. `LEAD_ENDPOINT`: endpoint nhận form; `SITE_URL`: domain canonical dùng ở bước SEO.
- Không đưa service-role key, token quản trị, mật khẩu hoặc hồ sơ nội bộ vào source hay public assets.

## Kiểm tra và deploy

`npm run lint` kiểm tra H1/title/alt, ID trùng, link nội bộ, cú pháp JS và mẫu credential. `npm run media:check` kiểm tra script media; `npm run build` xuất dist. CI chạy cả ba trên pull request và main.

Vercel dùng `vercel.json`: build `npm run build`, output `dist`. Cấu hình env riêng trên Preview/Production rồi deploy preview, kiểm tra và promote production. Cần kiểm thử form thật, DNS/HTTPS và indexing trên môi trường đích.

Ảnh/video AI luôn là minh họa. Thư mục này không chứa hồ sơ pháp lý công ty hoặc bản sao lưu workspace. Các PDF đang có trong `tai-lieu-vb` là văn bản quy phạm dùng làm tài liệu tham khảo, không phải hồ sơ nội bộ.

## Bàn giao

Website: https://seongsan-vina-website.vercel.app. Xem [audit và so sánh trước/sau](docs/AUDIT.md), [báo cáo bàn giao](docs/FINAL_REPORT.md) và [SEO checklist](docs/SEO_CHECKLIST.md) để phân biệt phần đã kiểm thử với DNS/email/Google còn chờ chủ tài khoản.
