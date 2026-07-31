# Từ Đến System Architecture

> Build for the future.

---

# 1. Mục tiêu

Website của Từ Đến không chỉ là Landing Page.

Đây là trung tâm của toàn bộ hệ sinh thái số.

Mọi chức năng trong tương lai đều được xây dựng trên cùng một nền tảng.

---

# 2. Kiến trúc tổng thể

```

Internet

↓

tudencafe.com

↓

Next.js Application

↓

Supabase

↓

PostgreSQL

↓

Storage / Auth / Realtime

```

---

# 3. Các phân hệ

Website gồm các phân hệ chính:

```

Website

├── Home
├── About
├── Menu
├── Coffee Story
├── Blog
├── AI Assistant
├── Contact

```

```

Order

├── QR Order
├── Cart
├── Checkout
├── Payment

```

```

Member

├── Login
├── Profile
├── Loyalty
├── Voucher
├── Order History

```

```

Kitchen

├── Kitchen Display
├── Queue
├── Order Status

```

```

Admin

├── Dashboard
├── Products
├── Orders
├── Customers
├── Members
├── AI Knowledge
├── Reports

```

---

# 4. Frontend

Sử dụng:

- Next.js
- React
- TypeScript
- Tailwind CSS

Ưu tiên:

- Server Components
- App Router
- Responsive Design

---

# 5. Backend

Sử dụng:

- Supabase

Bao gồm:

- Database
- Authentication
- Storage
- Realtime
- Edge Functions (khi cần)

---

# 6. Database

Database sử dụng PostgreSQL.

Dữ liệu được tổ chức theo từng module.

Ví dụ:

- Products
- Categories
- Orders
- Members
- Conversations
- Messages
- Blog
- Knowledge Base

---

# 7. AI

AI là một thành phần của hệ thống.

Không phải một tính năng độc lập.

AI có thể hỗ trợ:

- Khách hàng
- Nhân viên
- Chủ quán
- Quản trị viên

---

# 8. Kiến trúc Component

```

Page

↓

Section

↓

Component

↓

UI Component

```

Ví dụ:

```

Home Page

↓

Hero Section

↓

HeroCard

↓

Button

```

Component nhỏ.

Dễ tái sử dụng.

---

# 9. Luồng dữ liệu

```

User

↓

UI

↓

API

↓

Supabase

↓

Database

↓

API

↓

UI

↓

User

```

Luôn tách biệt:

- UI
- Business Logic
- Data

---

# 10. Nguyên tắc mở rộng

Hệ thống cần có khả năng mở rộng:

- Thêm Module
- Thêm AI
- Thêm POS
- Thêm Mobile App
- Thêm Dashboard

Mà không cần thay đổi kiến trúc cốt lõi.

---

# 11. Kiến trúc thư mục

```

app/

components/

lib/

hooks/

services/

types/

utils/

constants/

public/

docs/

```

Mỗi thư mục có một trách nhiệm rõ ràng.

---

# 12. Nguyên tắc cuối cùng

Kiến trúc không được thiết kế cho hôm nay.

Kiến trúc phải phục vụ ít nhất 3–5 năm phát triển của Từ Đến.