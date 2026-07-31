# Từ Đến Design System

> Consistency creates trust.

---

# 1. Mục tiêu

Design System giúp:

- Giao diện thống nhất
- Tăng tốc phát triển
- Dễ bảo trì
- Dễ mở rộng
- Dễ tái sử dụng

Không thiết kế lại cùng một thành phần nhiều lần.

---

# 2. Design Tokens

## Primary

#C96A2B

Cam của Từ Đến.

---

## Secondary

#294A3A

Xanh của Từ Đến.

---

## Background

#F5EBDD

---

## Surface

#FFFFFF

---

## Text

#3B2416

---

## Border

#E5E5E5

---

## Radius

Small

8px

Medium

12px

Large

16px

---

## Shadow

Chỉ sử dụng:

- shadow-sm
- shadow-md

Không sử dụng bóng quá đậm.

---

# 3. Typography

Heading

Playfair Display

Body

Geist

Code

Geist Mono

---

# 4. Spacing

Đơn vị chuẩn:

4

8

12

16

24

32

48

64

Không sử dụng spacing ngẫu nhiên.

---

# 5. Button

Các loại:

Primary

Secondary

Outline

Ghost

Danger

Loading

Disabled

Button luôn có:

- Hover
- Active
- Focus
- Disabled

---

# 6. Input

Bao gồm:

- Text
- Password
- Search
- Textarea
- Select

Luôn có:

- Label
- Placeholder
- Error
- Helper Text

---

# 7. Card

Card chuẩn gồm:

- Image
- Title
- Description
- Action

Không thêm hiệu ứng không cần thiết.

---

# 8. Navigation

Navbar

Sidebar

Breadcrumb

Footer

Pagination

---

# 9. Feedback

Toast

Alert

Dialog

Modal

Loading

Skeleton

Progress

---

# 10. Product Component

Product Card

Coffee Card

Menu Card

Combo Card

Voucher Card

---

# 11. AI Component

Chat Window

Chat Message

AI Bubble

User Bubble

Suggestion Card

Thinking Indicator

---

# 12. Member Component

Profile Card

Point Card

Level Badge

History Card

Reward Card

---

# 13. Admin Component

Dashboard Card

Statistic Card

Chart Card

Table

Filter

Search Box

---

# 14. Icon

Ưu tiên:

Lucide React

Không sử dụng nhiều bộ icon khác nhau.

---

# 15. Animation

Transition

150–250ms

Ease

ease-in-out

Animation nhẹ.

Không gây mất tập trung.

---

# 16. Responsive Breakpoint

Mobile

<768px

Tablet

768–1023px

Desktop

≥1024px

---

# 17. Component Checklist

Một Component tốt cần:

□ Có Props rõ ràng

□ Có TypeScript

□ Responsive

□ Có trạng thái Loading

□ Có trạng thái Error (nếu cần)

□ Có thể tái sử dụng

□ Dễ mở rộng

---

# 18. Nguyên tắc cuối cùng

Không tạo Component mới nếu Component cũ có thể mở rộng.

Ưu tiên tái sử dụng trước khi tạo mới.