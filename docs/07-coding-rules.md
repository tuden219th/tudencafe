# Từ Đến Coding Rules

> Clean code is an act of respect.

---

# 1. Mục tiêu

Viết code để:

- Dễ đọc
- Dễ sửa
- Dễ mở rộng
- Dễ kiểm thử
- Dễ bảo trì

Code không chỉ dành cho máy tính.

Code dành cho con người.

---

# 2. TypeScript

Luôn sử dụng:

- TypeScript Strict Mode

Không sử dụng:

- any (trừ trường hợp thật sự cần thiết)
- @ts-ignore nếu chưa hiểu nguyên nhân

Ưu tiên:

- interface
- type
- enum (khi phù hợp)

---

# 3. Component

Một Component chỉ nên có một nhiệm vụ.

Nếu Component quá dài hoặc đảm nhiệm nhiều chức năng, hãy tách thành các Component nhỏ hơn.

Ưu tiên:

- Reusable
- Readable
- Testable

---

# 4. Function

Function nên:

- Ngắn gọn
- Tên rõ nghĩa
- Thực hiện một nhiệm vụ

Không tạo Function dài hàng trăm dòng.

---

# 5. Naming

Tên phải thể hiện đúng ý nghĩa.

Ví dụ:

Good

- ProductCard
- ChatMessage
- MenuSection

Bad

- Data1
- TestComponent
- Temp

---

# 6. Hard Code

Không hard-code dữ liệu.

Ưu tiên:

- constants
- database
- configuration

---

# 7. Duplicate

Không copy-paste code.

Nếu một đoạn code xuất hiện nhiều lần, cần xem xét tái sử dụng.

---

# 8. Styling

Ưu tiên:

- Tailwind CSS

Không viết CSS riêng nếu Tailwind đã giải quyết được.

---

# 9. Import

Sắp xếp import rõ ràng:

1. External packages
2. Internal modules
3. Components
4. Types
5. Styles

---

# 10. Comment

Comment để giải thích:

- Tại sao

Không comment để giải thích:

- Code đang làm gì

Tên biến và Function phải đủ rõ để không cần comment.

---

# 11. Git

Commit nhỏ.

Commit rõ nghĩa.

Ví dụ:

feat: add AI chat window

fix: mobile menu overflow

refactor: split Hero component

docs: update brand guideline

Không commit:

update

fix

test

...

---

# 12. Performance

Ưu tiên:

- Server Components khi phù hợp
- Lazy Loading
- Image Optimization
- Memoization khi cần

Không tối ưu quá sớm.

---

# 13. Security

Không commit:

- API Key
- Password
- Secret
- Token

Sử dụng:

.env.local

---

# 14. Review Checklist

Trước khi Commit:

□ Code chạy

□ Không lỗi TypeScript

□ Không lỗi ESLint

□ Responsive

□ Không duplicate

□ Đặt tên rõ nghĩa

□ Không còn console.log()

□ Không còn code chết

---

# 15. Nguyên tắc cuối cùng

Viết code mà sau 6 tháng quay lại vẫn hiểu.

Nếu phải giải thích quá nhiều, hãy viết lại code.