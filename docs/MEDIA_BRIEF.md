# MEDIA BRIEF — SEONGSAN VINA / PHASE 2

Ngày 07/09/2026. Phạm vi được xác nhận: Phase 2. Website hiện tại chưa được sửa; Phase 3 cần xác nhận riêng và media đủ điều kiện.

## 1. Hướng thiết kế và quy tắc

Dùng navy #1A2B55, đỏ #C8102E, nền #EEF1F7 và trắng theo CSS hiện tại; đây chưa phải brand kit chính thức được doanh nghiệp duyệt. Chữ web Be Vietnam Pro; ảnh AI không chứa chữ/logo/con dấu. Logo, số liệu, tên người, địa chỉ và pháp lý chỉ lấy từ nguồn được xác nhận. Không đổi thông điệp hiện tại.

Bố cục đề xuất: hero ảnh/video và tagline HTML hiện có; giới thiệu ảnh thật + dữ kiện đã xác nhận; dịch vụ grid 3 cột desktop/1 cột mobile; dự án gallery có caption + logo khách hàng chỉ khi được phép; quy trình infographic kèm text HTML; liên hệ bản đồ nhúng theo địa chỉ được duyệt. Ở 1024px giữ menu thu gọn để tránh lỗi đã audit.

Mobile ưu tiên poster tĩnh, video chỉ khi phù hợp kết nối; giảm chuyển động dùng poster. Không để video cản trở CTA. Trên tablet cho phép 1 cột hero nếu câu chữ bị ngắt quá nhiều. Không crop khuôn mặt/logo/chứng chỉ; hình kỹ thuật dùng contain khi cần thấy đầy đủ chi tiết.

## 2. Cách dùng prompt

Prompt dưới đây là bản có thể dán. Với asset REAL/BRAND, trước tiên cung cấp ảnh hoặc dữ liệu được duyệt vào Canva; chỉ dàn trang, không tạo ra công trình/nhân sự/chứng chỉ. AI chỉ dùng cho minh họa và phải có nhãn ngoài ảnh: “Ảnh minh họa lĩnh vực hoạt động” hoặc “Video minh họa AI — không phải cảnh quay dự án thực tế”. Không tự gắn địa phương/công trình cụ thể vào alt nếu chưa chứng minh.

Kích thước là đích mong muốn. Nếu công cụ xuất nhỏ hơn, giữ bản gốc; script không upscale. Quyền thương mại của ảnh/nhạc/template phụ thuộc tài khoản và license thực tế, không mặc định “royalty-free” là được dùng mọi mục đích.

## 3. Brief theo asset


### LOGO-MAIN-01

- Vị trí: **Toàn site / Header/footer**.

- Loại: logo; nguồn: BRAND; kích thước 512×512 px; tỷ lệ 512:512; đích: SVG gốc + PNG trong suốt; WebP/AVIF nếu cần.

- File gốc: `public/media/logos/logo-main-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Logo SEONGSAN VINA.

```text

Create a 512 x 512 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: logo SEONGSAN VINA chính thức. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 512×512, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### HERO-VIDEO-01

- Vị trí: **index.html / Hero**.

- Loại: video; nguồn: AI; kích thước 1920×1080 px; tỷ lệ 1920:1080; đích: MP4 H.264 + WebM VP9, poster JPG.

- File gốc: `public/media/videos/hero-video-01.mp4`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: 8 giây; loop, không âm thanh, tối đa 15 giây.

- Alt/caption VI: Video minh họa không gian công nghiệp và hệ thống M&E, PCCC.

```text

Create an 8-second seamless-loop industrial visualization: a contemporary industrial facility in Vietnam, steel structure, cable trays and red fire protection pipework, gentle forward camera movement, daylight. Vietnam industrial context, credible engineering, restrained navy and steel tones, subtle safety red accents, slow stable camera, natural daylight. First and last framing match. No sound, text, logos, watermark, people speaking, fire, explosions or unverified company branding. This is a conceptual illustration, not documentary project footage.

```

- Canva: layout video 16:9, editable lower thirds. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### HERO-DESKTOP-01

- Vị trí: **index.html / Hero poster desktop**.

- Loại: image; nguồn: AI; kích thước 1920×1080 px; tỷ lệ 1920:1080; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/hero-desktop-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Không gian công nghiệp với hệ thống cơ điện và PCCC — ảnh minh họa.

```text

Create a professional industrial illustration, 1920 x 1080: wide architectural view of a modern industrial facility in Vietnam with steel structure, cable trays and red fire protection pipework; subject to the right, quiet space on left. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1920×1080, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### HERO-MOBILE-01

- Vị trí: **index.html / Hero poster mobile**.

- Loại: image; nguồn: AI; kích thước 900×1200 px; tỷ lệ 900:1200; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/hero-mobile-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Không gian nhà xưởng công nghiệp — ảnh minh họa cho giao diện mobile.

```text

Create a professional industrial illustration, 900 x 1200: portrait composition showing a modern industrial building in Vietnam, steel framing and visible cable trays; central subject, calm background. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 900×1200, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-SERVICE-CONSTRUCTION

- Vị trí: **index.html / Ba chuyên môn**.

- Loại: image; nguồn: AI; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-service-construction.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thi công xây dựng công nghiệp — ảnh minh họa.

```text

Create a professional industrial illustration, 1200 x 800: industrial steel building construction in Vietnam, tidy worksite, correct PPE, credible structural geometry. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-SERVICE-ME

- Vị trí: **index.html / Ba chuyên môn**.

- Loại: image; nguồn: AI; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-service-me.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Hệ thống cơ điện M&E trong nhà xưởng — ảnh minh họa.

```text

Create a professional industrial illustration, 1200 x 800: organized electrical cable trays and industrial ventilation ducts in a factory in Vietnam. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-SERVICE-FIRE

- Vị trí: **index.html / Ba chuyên môn**.

- Loại: image; nguồn: AI; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-service-fire.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Hệ thống báo cháy và chữa cháy nhà xưởng — ảnh minh họa.

```text

Create a professional industrial illustration, 1200 x 800: properly mounted industrial fire sprinkler pipework and a fire alarm panel, realistic safe installation in Vietnam. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### VIDEO-INTRO-01

- Vị trí: **index.html / Video giới thiệu**.

- Loại: video; nguồn: MIXED; kích thước 1920×1080 px; tỷ lệ 1920:1080; đích: MP4 H.264 + WebM VP9, poster JPG.

- File gốc: `public/media/videos/video-intro-01.mp4`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: 45 giây; có phụ đề, âm thanh có quyền sử dụng.

- Alt/caption VI: Giới thiệu các lĩnh vực Xây dựng, M&E và PCCC của SEONGSAN VINA.

```text

Create an 8-second seamless-loop industrial visualization: approved company footage of construction, electrical and mechanical systems, fire protection and team coordination. Vietnam industrial context, credible engineering, restrained navy and steel tones, subtle safety red accents, slow stable camera, natural daylight. First and last framing match. No sound, text, logos, watermark, people speaking, fire, explosions or unverified company branding. This is a conceptual illustration, not documentary project footage.

```

- Canva: layout video 16:9, editable lower thirds. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-DIRECTOR-01

- Vị trí: **gioi-thieu.html / Thông điệp giám đốc**.

- Loại: image; nguồn: REAL; kích thước 800×1000 px; tỷ lệ 800:1000; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-director-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Chân dung giám đốc SEONGSAN VINA.

```text

Create a 800 x 1000 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: chân dung giám đốc do công ty cung cấp. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 800×1000, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-TEAM-01

- Vị trí: **gioi-thieu.html; nang-luc.html / Đội ngũ**.

- Loại: image; nguồn: REAL; kích thước 1600×900 px; tỷ lệ 1600:900; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-team-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Đội ngũ SEONGSAN VINA.

```text

Create a 1600 x 900 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh tập thể nhân sự do công ty cung cấp. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×900, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### INFO-ORG-01

- Vị trí: **gioi-thieu.html / Sơ đồ tổ chức**.

- Loại: icon; nguồn: BRAND; kích thước 1600×900 px; tỷ lệ 1600:900; đích: SVG gốc + PNG trong suốt; WebP/AVIF nếu cần.

- File gốc: `public/media/images/info-org-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Sơ đồ tổ chức SEONGSAN VINA.

```text

Create a 1600 x 900 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: sơ đồ tổ chức theo dữ liệu hiện có và xác nhận của công ty. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×900, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-CERT-01

- Vị trí: **gioi-thieu.html / Hồ sơ pháp lý và chứng chỉ**.

- Loại: image; nguồn: BRAND; kích thước 900×1200 px; tỷ lệ 900:1200; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-cert-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Chứng chỉ năng lực SEONGSAN VINA — bản được duyệt công bố.

```text

Create a 900 x 1200 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: bản quét chứng chỉ được phép công bố, không thay chữ, số hoặc con dấu. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 900×1200, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### INFO-PROCESS-01

- Vị trí: **index.html / Tiếp nhận; Khảo sát; Đề xuất; Triển khai**.

- Loại: icon; nguồn: BRAND; kích thước 1600×450 px; tỷ lệ 1600:450; đích: SVG gốc + PNG trong suốt; WebP/AVIF nếu cần.

- File gốc: `public/media/images/info-process-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Quy trình phối hợp bốn bước của SEONGSAN VINA.

```text

Create a 1600 x 450 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: four numbered steps, text kept as editable overlays: Tiếp nhận, Khảo sát, Đề xuất, Triển khai. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×450, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-FIRE-01

- Vị trí: **dich-vu-pccc.html / Tư vấn thiết kế & thẩm duyệt PCCC**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-fire-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Tư vấn thiết kế & thẩm duyệt PCCC — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Tư vấn thiết kế & thẩm duyệt PCCC. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-FIRE-02

- Vị trí: **dich-vu-pccc.html / Thi công lắp đặt hệ thống PCCC**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-fire-02.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thi công lắp đặt hệ thống PCCC — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Thi công lắp đặt hệ thống PCCC. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-FIRE-03

- Vị trí: **dich-vu-pccc.html / Bảo trì — bảo dưỡng định kỳ**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-fire-03.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bảo trì — bảo dưỡng định kỳ — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Bảo trì — bảo dưỡng định kỳ. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-FIRE-04

- Vị trí: **dich-vu-pccc.html / Cung cấp thiết bị, vật tư PCCC**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-fire-04.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Cung cấp thiết bị, vật tư PCCC — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Cung cấp thiết bị, vật tư PCCC. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-FIRE-05

- Vị trí: **dich-vu-pccc.html / Huấn luyện nghiệp vụ PCCC**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-fire-05.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Huấn luyện nghiệp vụ PCCC — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Huấn luyện nghiệp vụ PCCC. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-FIRE-06

- Vị trí: **dich-vu-pccc.html / Tiêu chuẩn — quy chuẩn áp dụng**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-fire-06.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Tiêu chuẩn — quy chuẩn áp dụng — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Tiêu chuẩn — quy chuẩn áp dụng. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-ME-01

- Vị trí: **xay-dung-me.html / Thi công xây dựng dân dụng & công nghiệp**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-me-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thi công xây dựng dân dụng & công nghiệp — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Thi công xây dựng dân dụng & công nghiệp. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-ME-02

- Vị trí: **xay-dung-me.html / Tư vấn thiết kế — thẩm tra — giám sát — QLDA**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-me-02.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Tư vấn thiết kế — thẩm tra — giám sát — QLDA — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Tư vấn thiết kế — thẩm tra — giám sát — QLDA. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-ME-03

- Vị trí: **xay-dung-me.html / Hệ thống điện & trạm biến áp**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-me-03.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Hệ thống điện & trạm biến áp — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Hệ thống điện & trạm biến áp. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-ME-04

- Vị trí: **xay-dung-me.html / Thông gió — hút bụi công nghiệp**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-me-04.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thông gió — hút bụi công nghiệp — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Thông gió — hút bụi công nghiệp. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-ME-05

- Vị trí: **xay-dung-me.html / Cấp thoát nước**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-me-05.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Cấp thoát nước — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Cấp thoát nước. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-ME-06

- Vị trí: **xay-dung-me.html / Camera an ninh & hệ thống công nghệ**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-me-06.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Camera an ninh & hệ thống công nghệ — ảnh công ty cung cấp.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật phù hợp dịch vụ: Camera an ninh & hệ thống công nghệ. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-01

- Vị trí: **du-an.html; index.html nếu trùng dự án / Thi công hệ thống đường ống hút bụi công nghiệp**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thi công hệ thống đường ống hút bụi công nghiệp — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Thi công hệ thống đường ống hút bụi công nghiệp. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-02

- Vị trí: **du-an.html; index.html nếu trùng dự án / Thi công lắp đặt quạt đẩy khí lò nung**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-02.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thi công lắp đặt quạt đẩy khí lò nung — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Thi công lắp đặt quạt đẩy khí lò nung. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-03

- Vị trí: **du-an.html; index.html nếu trùng dự án / Bảo trì toàn diện hệ thống PCCC nhà máy**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-03.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bảo trì toàn diện hệ thống PCCC nhà máy — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Bảo trì toàn diện hệ thống PCCC nhà máy. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-04

- Vị trí: **du-an.html; index.html nếu trùng dự án / Sửa chữa, thay thế thiết bị hệ thống PCCC**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-04.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Sửa chữa, thay thế thiết bị hệ thống PCCC — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Sửa chữa, thay thế thiết bị hệ thống PCCC. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-05

- Vị trí: **du-an.html; index.html nếu trùng dự án / Bảo dưỡng PCCC & thay thế hệ thống đầu báo cháy**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-05.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bảo dưỡng PCCC & thay thế hệ thống đầu báo cháy — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Bảo dưỡng PCCC & thay thế hệ thống đầu báo cháy. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-06

- Vị trí: **du-an.html; index.html nếu trùng dự án / Bảo trì hệ thống PCCC khách sạn Việt Trì Garden**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-06.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bảo trì hệ thống PCCC khách sạn Việt Trì Garden — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Bảo trì hệ thống PCCC khách sạn Việt Trì Garden. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-07

- Vị trí: **du-an.html; index.html nếu trùng dự án / Cải tạo, chống thấm bể nước PCCC**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-07.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Cải tạo, chống thấm bể nước PCCC — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Cải tạo, chống thấm bể nước PCCC. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-PROJECT-08

- Vị trí: **du-an.html; index.html nếu trùng dự án / Cải tạo văn phòng nhà máy**.

- Loại: image; nguồn: REAL; kích thước 1600×1067 px; tỷ lệ 1600:1067; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-project-08.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Cải tạo văn phòng nhà máy — ảnh công trình được duyệt.

```text

Create a 1600 x 1067 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh đúng công trình: Cải tạo văn phòng nhà máy. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×1067, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-CASE-01

- Vị trí: **case-study.html / Giai đoạn 1**.

- Loại: image; nguồn: REAL; kích thước 1600×900 px; tỷ lệ 1600:900; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-case-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Khảo sát hiện trạng hệ thống PCCC — ảnh công trình được duyệt.

```text

Create a 1600 x 900 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật khảo sát hiện trạng của công trình nêu trong case study. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×900, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-CASE-02

- Vị trí: **case-study.html / Giai đoạn 2**.

- Loại: image; nguồn: REAL; kích thước 1600×900 px; tỷ lệ 1600:900; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-case-02.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thi công bảo trì hệ thống PCCC — ảnh công trình được duyệt.

```text

Create a 1600 x 900 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật thi công bảo trì của công trình nêu trong case study. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×900, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-CASE-03

- Vị trí: **case-study.html / Giai đoạn 3**.

- Loại: image; nguồn: REAL; kích thước 1600×900 px; tỷ lệ 1600:900; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-case-03.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Chạy thử và bàn giao hệ thống PCCC — ảnh công trình được duyệt.

```text

Create a 1600 x 900 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: ảnh thật chạy thử và bàn giao của công trình nêu trong case study. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1600×900, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### VIDEO-CASE-01

- Vị trí: **case-study.html / Video nghiệm thu**.

- Loại: video; nguồn: REAL; kích thước 1920×1080 px; tỷ lệ 1920:1080; đích: MP4 H.264 + WebM VP9, poster JPG.

- File gốc: `public/media/videos/video-case-01.mp4`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: 45 giây; có phụ đề, âm thanh có quyền sử dụng.

- Alt/caption VI: Video chạy thử hệ bơm PCCC tại công trình được duyệt.

```text

Create a 1920 x 1080 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: cảnh quay thật chạy thử hệ bơm và nghiệm thu đúng công trình nêu trong case study. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: layout video 16:9, editable lower thirds. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-EQUIPMENT-01

- Vị trí: **nang-luc.html / Năng lực thiết bị**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-equipment-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Thiết bị phục vụ thi công của SEONGSAN VINA.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: thiết bị thực tế thuộc quyền sử dụng của công ty. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### IMG-OFFICE-01

- Vị trí: **lien-he.html / Thông tin liên hệ**.

- Loại: image; nguồn: REAL; kích thước 1200×800 px; tỷ lệ 1200:800; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/img-office-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Văn phòng SEONGSAN VINA.

```text

Create a 1200 x 800 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: văn phòng công ty tại địa chỉ được xác nhận hiện hành. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×800, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### BANNER-ND105

- Vị trí: **bai-nd105.html / Ảnh đầu bài và thẻ tin**.

- Loại: banner; nguồn: AI; kích thước 1200×675 px; tỷ lệ 1200:675; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/banner-nd105.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bài Nghị định 105 và Luật PCCC — ảnh minh họa.

```text

Create a professional industrial illustration, 1200 x 675: generic industrial engineering documentation on a clean desk, no legible text or legal document reproduction. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1200×675, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### BANNER-QCVN06

- Vị trí: **bai-qcvn06.html / Ảnh đầu bài và thẻ tin**.

- Loại: banner; nguồn: AI; kích thước 1200×675 px; tỷ lệ 1200:675; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/banner-qcvn06.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bài QCVN 06 — ảnh minh họa.

```text

Create a professional industrial illustration, 1200 x 675: generic industrial engineering documentation on a clean desk, no legible text or legal document reproduction. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1200×675, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### BANNER-NEWS

- Vị trí: **tin-tuc.html / Ảnh đầu bài và thẻ tin**.

- Loại: banner; nguồn: AI; kích thước 1200×675 px; tỷ lệ 1200:675; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/banner-news.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Trung tâm kiến thức — ảnh minh họa.

```text

Create a professional industrial illustration, 1200 x 675: generic industrial engineering documentation on a clean desk, no legible text or legal document reproduction. Vietnam context, realistic engineering geometry and safe equipment, restrained navy #1A2B55 and steel tones with subtle red #C8102E, natural daylight, clean composition. No text, lettering, logo, watermark, fabricated certificate or company identification. Do not portray this as a real SEONGSAN project.

```

- Canva: custom-size layout 1200×675, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### VIDEO-WORKSITE-01

- Vị trí: **tin-tuc.html / Video tại công trình**.

- Loại: video; nguồn: REAL; kích thước 1920×1080 px; tỷ lệ 1920:1080; đích: MP4 H.264 + WebM VP9, poster JPG.

- File gốc: `public/media/videos/video-worksite-01.mp4`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: 45 giây; có phụ đề, âm thanh có quyền sử dụng.

- Alt/caption VI: Video thi công tại công trình được duyệt của SEONGSAN VINA.

```text

Create a 1920 x 1080 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: cảnh quay hiện trường do công ty cung cấp, mỗi đoạn có caption đúng công trình. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: layout video 16:9, editable lower thirds. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### COVER-DOCUMENT-01

- Vị trí: **tai-lieu.html / Bìa tài liệu**.

- Loại: banner; nguồn: BRAND; kích thước 900×1200 px; tỷ lệ 900:1200; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/cover-document-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Bìa tài liệu kỹ thuật được phép phân phối.

```text

Create a 900 x 1200 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: bìa chuẩn cho từng tài liệu thật, tiêu đề phải lấy đúng tên tài liệu và giữ editable. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 900×1200, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### ICON-LIBRARY-01

- Vị trí: **thu-vien-tieu-chuan.html / Các nhóm tiêu chuẩn**.

- Loại: icon; nguồn: BRAND; kích thước 64×64 px; tỷ lệ 64:64; đích: SVG gốc + PNG trong suốt; WebP/AVIF nếu cần.

- File gốc: `public/media/images/icon-library-01.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Nhóm tài liệu kỹ thuật.

```text

Create a 64 x 64 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: four simple outline icons: fire protection, construction, electrical engineering, environment; no text. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 64×64, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-BAI-ND105

- Vị trí: **Toàn site / bai-nd105.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-bai-nd105.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang bai-nd105.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của bai-nd105.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-BAI-QCVN06

- Vị trí: **Toàn site / bai-qcvn06.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-bai-qcvn06.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang bai-qcvn06.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của bai-qcvn06.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-CASE-STUDY

- Vị trí: **Toàn site / case-study.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-case-study.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang case-study.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của case-study.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-DICH-VU-PCCC

- Vị trí: **Toàn site / dich-vu-pccc.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-dich-vu-pccc.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang dich-vu-pccc.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của dich-vu-pccc.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-DU-AN

- Vị trí: **Toàn site / du-an.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-du-an.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang du-an.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của du-an.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-GIOI-THIEU

- Vị trí: **Toàn site / gioi-thieu.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-gioi-thieu.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang gioi-thieu.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của gioi-thieu.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-INDEX

- Vị trí: **Toàn site / index.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-index.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang index.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của index.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-LIEN-HE

- Vị trí: **Toàn site / lien-he.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-lien-he.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang lien-he.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của lien-he.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-NANG-LUC

- Vị trí: **Toàn site / nang-luc.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-nang-luc.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang nang-luc.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của nang-luc.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-TAI-LIEU

- Vị trí: **Toàn site / tai-lieu.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-tai-lieu.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang tai-lieu.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của tai-lieu.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-THU-VIEN-TIEU-CHUAN

- Vị trí: **Toàn site / thu-vien-tieu-chuan.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-thu-vien-tieu-chuan.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang thu-vien-tieu-chuan.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của thu-vien-tieu-chuan.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-TIN-TUC

- Vị trí: **Toàn site / tin-tuc.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-tin-tuc.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang tin-tuc.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của tin-tuc.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


### OG-XAY-DUNG-ME

- Vị trí: **Toàn site / xay-dung-me.html / Ảnh chia sẻ mạng xã hội**.

- Loại: banner; nguồn: BRAND; kích thước 1200×630 px; tỷ lệ 1200:630; đích: WebP + AVIF + JPG fallback.

- File gốc: `public/media/images/og-xay-dung-me.png`; SVG chính thức được nhận riêng cho logo/icon.

- Thời lượng: không áp dụng.

- Alt/caption VI: Ảnh chia sẻ trang xay-dung-me.

```text

Create a 1200 x 630 professional layout for SEONGSAN VINA using ONLY supplied, approved material for this asset: template sử dụng logo chính thức và title của xay-dung-me.html làm lớp chữ editable, không tạo chứng nhận hay lời hứa mới. Navy #1A2B55, red #C8102E, pale #EEF1F7 and white. Preserve all source facts, people's identities, technical details and original document text. Do not invent projects, personnel, certificates, client logos or numerical claims. Keep headings as editable text layers. If source material is absent, show an explicit placeholder labeled CHỜ MEDIA THỰC TẾ.

```

- Canva: custom-size layout 1200×630, ảnh tràn khung hoặc contain theo nội dung; chữ và logo ở lớp riêng. Đây là mô tả template cần tìm/tạo, không phải template đã kiểm tra hoặc link đã có.


## 4. Kịch bản CapCut VIDEO-INTRO-01 — 45 giây

Giữ nội dung từ homepage; các câu dưới đây là text overlay, không thêm số liệu marketing mới. Timeline 1920×1080, 24fps; fade 6–8 frame, không dùng nháy sáng/zoom mạnh. Safe margin 96px ngang, 60px dọc.

|Thời gian|Cảnh|Text overlay lấy từ web|Âm thanh / chuyển cảnh|
|---|---|---|---|
|0–5s|Nhà xưởng; HERO-VIDEO-01 nếu dùng phải ghi nhãn AI|Xây nền vững chắc. Kết nối vận hành.|Fade-in; nhạc instrumental được cấp quyền|
|5–13s|Công trường thật đã duyệt|Xây dựng công nghiệp|Cắt theo nhịp chậm|
|13–21s|Điện, thông gió, đường ống thật|Cơ điện M&E|Giữ 2–3 cảnh ổn định|
|21–29s|Thiết bị PCCC, bảo trì thật|Phòng cháy chữa cháy|Không dựng cảnh thử nguy hiểm|
|29–37s|Nhân sự phối hợp / sơ đồ 4 bước|Tiếp nhận · Khảo sát · Đề xuất · Triển khai|Text lần lượt, không đổi ý|
|37–45s|Logo chính thức trên nền navy/trắng|Cùng trao đổi về công trình của anh/chị.|Fade-out; chỉ thêm liên hệ đã được duyệt|

Nhạc: dùng file công ty có quyền hoặc thư viện có điều khoản cho web thương mại; lưu tên track, URL nguồn, license/biên nhận trong CREDITS. Không khẳng định một track bất kỳ là “không bản quyền”. Mức mix tham khảo nhạc nền -24 đến -18 LUFS khi có lời; nghe và chỉnh thực tế. Có thể xuất bản không nhạc nếu chưa rõ quyền.

VIDEO-CASE-01 và VIDEO-WORKSITE-01 dùng cùng khung 45s nhưng bắt buộc toàn bộ cảnh dự án thật: 0–5s giới thiệu công trình đã duyệt; 5–15s hiện trạng; 15–30s công việc; 30–40s kiểm tra/chạy thử; 40–45s kết quả đã có hồ sơ. Không dùng số liệu 40% hoặc kết quả nghiệm thu chưa xác nhận. Không ghi một video AI là “video nghiệm thu”.

Xuất master 1080p MP4 chất lượng cao; subtitle .srt UTF-8 và project CapCut nếu chia sẻ được. Hero xuất riêng ≤15s không nhạc; không cắt intro thành hero nếu có chữ dày hoặc montage gây mất tập trung.

## 5. Canva — cách dựng nhanh

- Banner: custom size 1920×1080 hoặc 1200×630; tìm từ khóa “industrial company banner”, sau đó dùng màu hiện tại. Đặt hình, logo và chữ ở lớp riêng; không tạo chữ bên trong ảnh AI.

- Hồ sơ năng lực: template corporate capability statement, khổ A4. Chỉ dàn trang bản đã duyệt; không rút gọn chứng chỉ bằng cách thay số/ngày.

- Ảnh đội ngũ ghép: grid portrait đều nhau, khoảng cách 24–32px; tên/chức vụ dùng text editable đã duyệt. Không AI tạo người.

- Ảnh dự án: 3:2, một caption ngắn ngoài ảnh. Không làm nét AI để “tạo lại” thiết bị bị thiếu trong ảnh chứng minh.

- OG: 1200×630; logo trên trái, title lấy từ trang, tối đa 2–3 dòng, không gắn số liệu mới.

## 6. Placeholder và chờ nguồn thật

Các SVG trong `public/media/placeholders/` được tạo mới bằng vector, có mã asset và dòng “CHỜ MEDIA ĐƯỢC DUYỆT”. Chúng không chứa stock ảnh. SVG không phải tài nguyên cuối và chưa tích hợp vào website. Media AI đang có trong website vẫn giữ nhãn minh họa; Phase 2 không biến chúng thành ảnh dự án.

## 7. Bàn giao và kiểm tra trước Phase 3

1. Thả file gốc đúng tên trong `public/media/images`, `videos`, `logos` theo README.

2. Ghi nguồn/quyền dùng/người duyệt vào CREDITS.md; file chưa đủ bằng chứng giữ trạng thái pending.

3. Chạy script tối ưu, xem manifest và kiểm tra hình/âm thanh; không chỉ dựa vào exit code.

4. Duyệt asset theo section, chữ/alt và tỉ lệ crop. Sau xác nhận Phase 3 mới đưa bản tối ưu vào document root `website/assets/media/`. `public/` hiện là khu vực chuẩn bị; Python server đang phục vụ `website/` nên chưa tự phục vụ `public/`.

5. Nếu muốn dùng AI tạm cho hero/dịch vụ, anh cần duyệt rõ tài nguyên minh họa nào được dùng; dự án/nhân sự/chứng chỉ vẫn cần nguồn thật.

## 8. Tài liệu kỹ thuật

Script tham chiếu tài liệu chính thức: [Sharp output](https://sharp.pixelplumbing.com/api-output/) và [FFmpeg CLI](https://ffmpeg.org/ffmpeg.html), kiểm tra ngày 07/09/2026. Sharp resize/encode ảnh; FFmpeg xuất video và poster.