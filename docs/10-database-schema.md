# Từ Đến Database Schema

> Design before building.

---

# 1. Mục tiêu

Tài liệu này mô tả toàn bộ cấu trúc Database của hệ thống.

Đây là nguồn tham chiếu chính trước khi tạo bảng trong Supabase.

---

# 2. Quy ước

Primary Key

- UUID

Foreign Key

- UUID

Timestamp

- created_at
- updated_at

Soft Delete

- deleted_at (khi cần)

Audit

- created_by
- updated_by

---

# 3. Module Menu

## categories

| Column | Type | Description |
|---------|------|-------------|
| id | UUID | Primary Key |
| name | TEXT | Tên danh mục |
| slug | TEXT | URL Slug |
| description | TEXT | Mô tả |
| image_url | TEXT | Hình ảnh |
| sort_order | INTEGER | Thứ tự hiển thị |
| is_active | BOOLEAN | Trạng thái |
| created_at | TIMESTAMP | Ngày tạo |
| updated_at | TIMESTAMP | Ngày cập nhật |

---

## products

| Column | Type |
|---------|------|
| id | UUID |
| category_id | UUID |
| name | TEXT |
| slug | TEXT |
| short_description | TEXT |
| description | TEXT |
| price | NUMERIC |
| image_url | TEXT |
| is_featured | BOOLEAN |
| is_active | BOOLEAN |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

Relation

categories (1)

↓

products (N)

---

# 4. Module Customer

## customers

| Column | Type |
|---------|------|
| id | UUID |
| full_name | TEXT |
| phone | TEXT |
| email | TEXT |
| avatar_url | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

## member_profiles

| Column | Type |
|---------|------|
| id | UUID |
| customer_id | UUID |
| points | INTEGER |
| level | TEXT |
| birthday | DATE |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

Relation

customers (1)

↓

member_profiles (1)

---

# 5. Module Order

## orders

| Column | Type |
|---------|------|
| id | UUID |
| customer_id | UUID |
| order_number | TEXT |
| total_amount | NUMERIC |
| status | TEXT |
| payment_status | TEXT |
| created_at | TIMESTAMP |

---

## order_items

| Column | Type |
|---------|------|
| id | UUID |
| order_id | UUID |
| product_id | UUID |
| quantity | INTEGER |
| price | NUMERIC |

---

# 6. Module AI

## conversations

| Column | Type |
|---------|------|
| id | UUID |
| user_id | UUID |
| title | TEXT |
| created_at | TIMESTAMP |

---

## messages

| Column | Type |
|---------|------|
| id | UUID |
| conversation_id | UUID |
| role | TEXT |
| content | TEXT |
| created_at | TIMESTAMP |

---

## ai_knowledge

| Column | Type |
|---------|------|
| id | UUID |
| category | TEXT |
| title | TEXT |
| content | TEXT |
| source | TEXT |
| is_active | BOOLEAN |
| created_at | TIMESTAMP |

---

# 7. Module Blog

## posts

- id
- title
- slug
- summary
- content
- cover_image
- published_at
- created_at

---

## post_categories

- id
- name
- slug

---

## post_tags

- id
- name
- slug

---

# 8. Module Admin

## admin_users

- id
- email
- full_name
- role
- created_at

---

## roles

- id
- name
- description

---

## permissions

- id
- code
- description

---

# 9. Quan hệ tổng thể

categories

↓

products

↓

order_items

↓

orders

↓

customers

--------------------------------

customers

↓

member_profiles

--------------------------------

conversations

↓

messages

--------------------------------

roles

↓

admin_users

---

# 10. Quy tắc đặt tên

Table

snake_case

Ví dụ

products

member_profiles

order_items

Column

snake_case

Ví dụ

image_url

created_at

phone_number

Boolean

Bắt đầu bằng:

is_

has_

Ví dụ

is_active

is_featured

has_image

---

# 11. Nguyên tắc mở rộng

Không sửa cấu trúc cũ nếu có thể mở rộng bằng bảng mới.

Ưu tiên:

Additive Change

Thay vì:

Breaking Change

---

# 12. Version

Version

v1.0

Cập nhật khi Database thay đổi lớn.