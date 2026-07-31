# Từ Đến Decision Log

> Good decisions build great products.

---

# 1. Mục đích

Decision Log lưu lại các quyết định quan trọng trong suốt quá trình phát triển dự án.

Tài liệu này giúp trả lời câu hỏi:

- Tại sao chúng ta chọn giải pháp này?
- Những phương án nào đã được cân nhắc?
- Vì sao các phương án khác không được chọn?
- Quyết định này ảnh hưởng đến những phần nào của hệ thống?

Decision Log không ghi thay đổi của dự án.

Decision Log ghi lại **lý do đằng sau các thay đổi**.

---

# 2. Khi nào cần ghi Decision Log

Cập nhật khi có quyết định liên quan đến:

- Kiến trúc hệ thống
- Database
- UI/UX
- Công nghệ
- SEO
- AI
- Bảo mật
- Hiệu năng
- Quy trình phát triển

Không ghi các thay đổi nhỏ như sửa lỗi giao diện hoặc đổi màu sắc.

---

# 3. Mẫu Decision

---

## Decision

**ID**

DL-001

**Ngày**

YYYY-MM-DD

**Trạng thái**

- Proposed
- Accepted
- Deprecated
- Replaced

**Chủ đề**

Ví dụ:

Backend

Database

AI

SEO

Frontend

---

### Quyết định

Mô tả ngắn gọn quyết định.

---

### Bối cảnh

Tại sao cần đưa ra quyết định này?

Vấn đề đang gặp là gì?

---

### Các phương án đã cân nhắc

Ví dụ:

Phương án A

Ưu điểm

...

Nhược điểm

...

---

Phương án B

Ưu điểm

...

Nhược điểm

...

---

### Quyết định cuối cùng

Phương án được lựa chọn.

---

### Lý do

Giải thích rõ vì sao lựa chọn.

---

### Ảnh hưởng

Các phần chịu tác động.

Ví dụ:

- Database
- API
- UI
- AI

---

### Ghi chú

Thông tin bổ sung nếu cần.

---

# 4. Decision History

## DL-001

Ngày:

2026-07-31

Chủ đề:

Backend

### Quyết định

Sử dụng Supabase làm Backend chính.

### Lý do

- PostgreSQL mạnh
- SQL chuẩn
- Row Level Security
- Tích hợp Authentication
- Phù hợp với quy mô hiện tại
- Dễ mở rộng trong tương lai

### Ảnh hưởng

- Database
- Authentication
- API

---

## DL-002

Ngày:

2026-07-31

Chủ đề:

Frontend

### Quyết định

Sử dụng Next.js App Router.

### Lý do

- SEO tốt
- Server Components
- Hiệu năng cao
- Hỗ trợ mở rộng lâu dài

---

## DL-003

Ngày:

2026-07-31

Chủ đề:

UI

### Quyết định

Thiết kế Mobile First.

### Lý do

Phần lớn khách hàng truy cập bằng điện thoại.

---

## DL-004

Ngày:

2026-07-31

Chủ đề:

AI

### Quyết định

AI ưu tiên giải thích để người học hiểu bản chất thay vì chỉ đưa đáp án.

### Lý do

Website được xây dựng đồng thời là sản phẩm và môi trường học tập.

---

# 5. Quy tắc

Một Decision phải:

- Có lý do rõ ràng
- Có ngày tạo
- Có người chịu trách nhiệm
- Có trạng thái
- Có ảnh hưởng

Không ghi quyết định cảm tính.

---

# 6. Mối quan hệ với các tài liệu khác

project.md

↓

Định hướng tổng thể

↓

roadmap.md

↓

Kế hoạch phát triển

↓

decision-log.md

↓

Vì sao chọn hướng đi

↓

changelog.md

↓

Đã thay đổi những gì

---

# 7. Nguyên tắc cuối cùng

Một quyết định tốt không chỉ đúng ở thời điểm hiện tại.

Nó cần đủ rõ ràng để sau nhiều tháng hoặc nhiều năm, bất kỳ ai đọc lại cũng hiểu được bối cảnh, lý do và tác động của quyết định đó.