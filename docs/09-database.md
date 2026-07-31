# Từ Đến Database Design

> Data is the memory of the system.

---

# 1. Mục tiêu

Database là nơi lưu trữ toàn bộ dữ liệu của hệ sinh thái Từ Đến.

Thiết kế cần:

- Dễ mở rộng
- Dễ bảo trì
- Chuẩn hóa
- Hạn chế trùng lặp dữ liệu

---

# 2. Nguyên tắc thiết kế

Ưu tiên:

- Chuẩn hóa dữ liệu
- Quan hệ rõ ràng
- Không lưu dữ liệu dư thừa
- Khóa chính sử dụng UUID
- Có thời gian tạo và cập nhật

Mỗi bảng nên có:

- id
- created_at
- updated_at

---

# 3. Module Menu

## categories

Lưu danh mục sản phẩm.

Ví dụ:

- Coffee
- Tea
- Juice
- Cake

---

## products

Lưu thông tin sản phẩm.

Ví dụ:

- Espresso
- Latte
- Cappuccino

Thông tin:

- tên
- giá
- mô tả
- ảnh
- trạng thái

---

# 4. Module Customer

## customers

Thông tin khách hàng.

Ví dụ:

- tên
- email
- số điện thoại

---

## member_profiles

Thông tin thành viên.

Bao gồm:

- điểm
- hạng
- ngày tham gia

---

# 5. Module Order

## orders

Thông tin đơn hàng.

---

## order_items

Chi tiết từng sản phẩm trong đơn.

---

## payments

Thông tin thanh toán.

---

# 6. Module AI

## conversations

Danh sách cuộc hội thoại.

---

## messages

Tin nhắn của từng cuộc hội thoại.

---

## ai_knowledge

Tri thức dành cho AI.

Bao gồm:

- câu hỏi
- câu trả lời
- nguồn dữ liệu
- chủ đề

---

# 7. Module Blog

## posts

Bài viết.

---

## post_categories

Danh mục bài viết.

---

## post_tags

Thẻ bài viết.

---

# 8. Module Media

## files

Quản lý hình ảnh.

---

# 9. Module Admin

## users

Người quản trị.

---

## roles

Vai trò.

---

## permissions

Phân quyền.

---

# 10. Quan hệ dữ liệu

customers

↓

orders

↓

order_items

↓

products

--------------------------------

categories

↓

products

--------------------------------

conversations

↓

messages

--------------------------------

roles

↓

users

---

# 11. Quy tắc đặt tên

Tên bảng:

- số nhiều
- chữ thường
- snake_case

Ví dụ:

products

order_items

member_profiles

Tên cột:

snake_case

Ví dụ:

created_at

updated_at

phone_number

image_url

---

# 12. Soft Delete

Ưu tiên sử dụng:

deleted_at

Thay vì xóa dữ liệu vật lý.

---

# 13. Audit

Các bảng quan trọng nên lưu:

created_by

updated_by

deleted_by

---

# 14. Chỉ mục (Index)

Index cho:

- email
- phone
- slug
- created_at

Khi dữ liệu lớn cần đánh giá thêm.

---

# 15. Nguyên tắc cuối cùng

Không thiết kế database chỉ cho website.

Thiết kế để:

- Website
- Mobile App
- POS
- Dashboard
- AI
- CRM

cùng sử dụng một nguồn dữ liệu.