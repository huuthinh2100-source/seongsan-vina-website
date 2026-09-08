# Media đầu vào — SEONGSAN VINA

Đây là khu vực chuẩn bị của Phase 2, chưa được website phục vụ. Không thả hồ sơ nội bộ hoặc credential vào đây. Chỉ nộp media được phép công bố.

## Quy trình

1. Lấy prompt/kịch bản theo mã asset trong `../../docs/MEDIA_BRIEF.md` (từ thư mục dự án: `docs/MEDIA_BRIEF.md`).

2. Xuất file gốc theo bảng dưới: PNG/JPG cho ảnh, MP4/MOV cho video, SVG/PNG cho logo. Dùng tên chữ thường, không dấu. Mỗi basename chỉ có một bản gốc; không đồng thời giữ cùng tên .png và .jpg.

3. Ghi tác giả, nguồn, điều khoản, ngày và người duyệt trong `CREDITS.md` ở gốc dự án. Không coi file có sẵn là đã duyệt.

4. Chạy `npm ci`, sau đó `npm run media:optimize`. Cần Node >=22 và FFmpeg có libx264/libvpx-vp9. Nếu FFmpeg không có trong PATH, đặt biến môi trường FFMPEG_PATH tới ffmpeg.exe.

5. Script xuất vào `public/media/optimized/run-<timestamp>/`; manifest liệt kê file, size, kích thước, hash nguồn, trạng thái. Thư mục đích phải mới để tránh ghi đè media đã duyệt.

6. Xem ảnh ở các kích thước, nghe/xem video MP4 và WebM, kiểm tra poster/subtitle và license. Chỉ Phase 3 mới tích hợp vào `website/assets/media/`.

## Lệnh PowerShell

```powershell

npm ci

npm run media:optimize

# Nếu dùng một file cụ thể:

node scripts/optimize-media.js --input public/media/images/hero-desktop-01.png

# Video hero được cắt tối đa 15 giây và bỏ âm thanh:

node scripts/optimize-media.js --input public/media/videos/hero-video-01.mp4 --hero

```

Trong batch, video tên `hero-*` tự áp dụng chế độ hero. Video khác giữ track âm thanh đầu tiên nếu có; script không tự cắt intro về 45s, cần dựng đúng thời lượng ở CapCut. Không tự xử lý SVG, animated/multipage images. SVG giữ vector, phải kiểm tra thủ công. PNG trong suốt giữ alpha ở WebP/AVIF, JPG fallback nền trắng. Metadata ảnh và video được loại bỏ; không upscale ảnh, giữ tỷ lệ gốc.

## Bảng tên file

|Mã|Thư mục|Tên file gốc|Kích thước đích|
|---|---|---|
|LOGO-MAIN-01|logos|logo-main-01.png|512×512|
|HERO-VIDEO-01|videos|hero-video-01.mp4|1920×1080|
|HERO-DESKTOP-01|images|hero-desktop-01.png|1920×1080|
|HERO-MOBILE-01|images|hero-mobile-01.png|900×1200|
|IMG-SERVICE-CONSTRUCTION|images|img-service-construction.png|1200×800|
|IMG-SERVICE-ME|images|img-service-me.png|1200×800|
|IMG-SERVICE-FIRE|images|img-service-fire.png|1200×800|
|VIDEO-INTRO-01|videos|video-intro-01.mp4|1920×1080|
|IMG-DIRECTOR-01|images|img-director-01.png|800×1000|
|IMG-TEAM-01|images|img-team-01.png|1600×900|
|INFO-ORG-01|images|info-org-01.png|1600×900|
|IMG-CERT-01|images|img-cert-01.png|900×1200|
|INFO-PROCESS-01|images|info-process-01.png|1600×450|
|IMG-FIRE-01|images|img-fire-01.png|1200×800|
|IMG-FIRE-02|images|img-fire-02.png|1200×800|
|IMG-FIRE-03|images|img-fire-03.png|1200×800|
|IMG-FIRE-04|images|img-fire-04.png|1200×800|
|IMG-FIRE-05|images|img-fire-05.png|1200×800|
|IMG-FIRE-06|images|img-fire-06.png|1200×800|
|IMG-ME-01|images|img-me-01.png|1200×800|
|IMG-ME-02|images|img-me-02.png|1200×800|
|IMG-ME-03|images|img-me-03.png|1200×800|
|IMG-ME-04|images|img-me-04.png|1200×800|
|IMG-ME-05|images|img-me-05.png|1200×800|
|IMG-ME-06|images|img-me-06.png|1200×800|
|IMG-PROJECT-01|images|img-project-01.png|1600×1067|
|IMG-PROJECT-02|images|img-project-02.png|1600×1067|
|IMG-PROJECT-03|images|img-project-03.png|1600×1067|
|IMG-PROJECT-04|images|img-project-04.png|1600×1067|
|IMG-PROJECT-05|images|img-project-05.png|1600×1067|
|IMG-PROJECT-06|images|img-project-06.png|1600×1067|
|IMG-PROJECT-07|images|img-project-07.png|1600×1067|
|IMG-PROJECT-08|images|img-project-08.png|1600×1067|
|IMG-CASE-01|images|img-case-01.png|1600×900|
|IMG-CASE-02|images|img-case-02.png|1600×900|
|IMG-CASE-03|images|img-case-03.png|1600×900|
|VIDEO-CASE-01|videos|video-case-01.mp4|1920×1080|
|IMG-EQUIPMENT-01|images|img-equipment-01.png|1200×800|
|IMG-OFFICE-01|images|img-office-01.png|1200×800|
|BANNER-ND105|images|banner-nd105.png|1200×675|
|BANNER-QCVN06|images|banner-qcvn06.png|1200×675|
|BANNER-NEWS|images|banner-news.png|1200×675|
|VIDEO-WORKSITE-01|videos|video-worksite-01.mp4|1920×1080|
|COVER-DOCUMENT-01|images|cover-document-01.png|900×1200|
|ICON-LIBRARY-01|images|icon-library-01.png|64×64|
|OG-BAI-ND105|images|og-bai-nd105.png|1200×630|
|OG-BAI-QCVN06|images|og-bai-qcvn06.png|1200×630|
|OG-CASE-STUDY|images|og-case-study.png|1200×630|
|OG-DICH-VU-PCCC|images|og-dich-vu-pccc.png|1200×630|
|OG-DU-AN|images|og-du-an.png|1200×630|
|OG-GIOI-THIEU|images|og-gioi-thieu.png|1200×630|
|OG-INDEX|images|og-index.png|1200×630|
|OG-LIEN-HE|images|og-lien-he.png|1200×630|
|OG-NANG-LUC|images|og-nang-luc.png|1200×630|
|OG-TAI-LIEU|images|og-tai-lieu.png|1200×630|
|OG-THU-VIEN-TIEU-CHUAN|images|og-thu-vien-tieu-chuan.png|1200×630|
|OG-TIN-TUC|images|og-tin-tuc.png|1200×630|
|OG-XAY-DUNG-ME|images|og-xay-dung-me.png|1200×630|

## Trạng thái

58 mục trong brief là nhu cầu/biến thể theo vị trí, không phải 58 media đã sản xuất. Placeholder có ghi rõ ở `placeholders/`; không tự dùng cho production. Tệp thử pipeline nằm trong `docs/media-qa/`, không thuộc bộ media đã duyệt.

## Bộ ưu tiên để bắt đầu tích hợp

HERO-DESKTOP-01, HERO-MOBILE-01; ba IMG-SERVICE-*; LOGO-MAIN-01; HERO-VIDEO-01 nếu muốn dùng video nền. Ảnh dự án/đội ngũ/chứng chỉ chỉ tích hợp sau khi có nguồn thật được duyệt.