# Từ Đến API Standard

> APIs connect every part of the ecosystem.

---

# 1. Mục tiêu

API là cầu nối giữa:

- Website
- Mobile App
- AI
- Dashboard
- POS
- CRM

Mọi API cần đơn giản, nhất quán và dễ mở rộng.

---

# 2. Nguyên tắc

Ưu tiên:

- RESTful API
- JSON
- Stateless
- Versioning khi cần

---

# 3. URL Convention

Ví dụ:

GET

/api/products

GET

/api/products/{id}

POST

/api/products

PUT

/api/products/{id}

DELETE

/api/products/{id}

---

# 4. HTTP Method

GET

Đọc dữ liệu.

POST

Tạo dữ liệu.

PUT

Cập nhật toàn bộ.

PATCH

Cập nhật một phần.

DELETE

Xóa dữ liệu.

---

# 5. Response Format

Thành công:

{
    "success": true,
    "data": {}
}

Lỗi:

{
    "success": false,
    "message": "Product not found"
}

---

# 6. HTTP Status

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

500 Internal Server Error

---

# 7. Pagination

Ví dụ:

/api/products?page=1&limit=20

---

# 8. Filter

Ví dụ:

/api/products?category=coffee

/api/products?active=true

---

# 9. Search

Ví dụ:

/api/products?search=latte

---

# 10. Sort

Ví dụ:

/api/products?sort=price

/api/products?order=desc

---

# 11. Authentication

Ưu tiên:

Supabase Auth

JWT

Role-based Access Control

---

# 12. Validation

Luôn kiểm tra:

- Required
- Type
- Length
- Permission

Không tin dữ liệu từ Client.

---

# 13. Logging

API quan trọng nên ghi log:

- User
- Time
- Action
- IP (nếu phù hợp)
- Error

---

# 14. Performance

Ưu tiên:

- Pagination
- Index
- Cache khi cần

Không trả dữ liệu dư thừa.

---

# 15. Security

Không trả về:

- Password
- Secret
- Token
- Internal Information

---

# 16. API Version

Ví dụ:

/api/v1/products

Khi thay đổi lớn sẽ tạo:

/api/v2/

---

# 17. Nguyên tắc cuối cùng

API phải ổn định.

Client có thể thay đổi.

Website có thể thay đổi.

Mobile App có thể thay đổi.

Nhưng API cần duy trì tính tương thích càng lâu càng tốt.