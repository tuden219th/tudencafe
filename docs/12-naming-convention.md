# Từ Đến Naming Convention

> Good names make good software.

---

# 1. Mục tiêu

Đặt tên thống nhất giúp:

- Dễ đọc
- Dễ tìm kiếm
- Dễ bảo trì
- Dễ mở rộng

Không cần đoán ý nghĩa của tên.

---

# 2. Quy tắc chung

Tên phải:

- Rõ nghĩa
- Đầy đủ
- Thống nhất
- Không viết tắt nếu không phổ biến

Ví dụ:

Good

CustomerProfile

OrderHistory

CoffeeMenu

Bad

CP

Data1

Temp

Test

AAA

---

# 3. File

## React Component

PascalCase

Ví dụ

Hero.tsx

ProductCard.tsx

ChatWindow.tsx

AIMessage.tsx

---

## Hook

camelCase

Bắt đầu bằng use

Ví dụ

useChat.ts

useMenu.ts

useOrders.ts

---

## Utility

camelCase

Ví dụ

formatPrice.ts

formatDate.ts

slugify.ts

generateId.ts

---

## Constant

camelCase

Ví dụ

coffeeMenu.ts

appConfig.ts

routes.ts

---

# 4. Component

PascalCase

Ví dụ

Hero

MenuSection

Footer

ChatMessage

OrderSummary

---

# 5. Function

camelCase

Ví dụ

getProducts()

createOrder()

calculateTotal()

sendMessage()

---

# 6. Variable

camelCase

Ví dụ

userName

totalPrice

currentOrder

selectedCategory

---

# 7. Constant

UPPER_SNAKE_CASE

Ví dụ

MAX_UPLOAD_SIZE

DEFAULT_LANGUAGE

APP_NAME

API_TIMEOUT

---

# 8. Database

Table

snake_case

Ví dụ

products

customers

orders

member_profiles

order_items

Column

snake_case

Ví dụ

created_at

updated_at

phone_number

image_url

---

# 9. Boolean

Luôn bắt đầu bằng:

is_

has_

can_

should_

Ví dụ

isActive

hasImage

canDelete

shouldRefresh

Database

is_active

has_image

---

# 10. Route

kebab-case

Ví dụ

/menu

/about-us

/order-history

/coffee-story

---

# 11. API

Plural

Ví dụ

/api/products

/api/orders

/api/customers

/api/messages

---

# 12. CSS

Không đặt class tùy ý nếu đã dùng Tailwind.

Ưu tiên Utility Class.

---

# 13. Git Branch

feature/

fix/

hotfix/

refactor/

docs/

Ví dụ

feature/menu-page

feature/ai-chat

fix/mobile-navbar

docs/database

---

# 14. Git Commit

Theo Conventional Commits

Ví dụ

feat: add menu page

fix: resolve mobile layout issue

docs: update project document

refactor: split hero section

style: improve spacing

chore: update dependencies

---

# 15. Environment Variables

UPPER_SNAKE_CASE

Ví dụ

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

OPENAI_API_KEY

VERCEL_URL

---

# 16. Không nên sử dụng

Không đặt tên như:

test

temp

new

old

abc

demo

data

component1

Nếu bắt buộc sử dụng tạm thời, phải đổi trước khi commit.

---

# 17. Nguyên tắc cuối cùng

Nếu một người mới đọc tên file, tên biến hoặc tên hàm mà không cần mở code vẫn hiểu chức năng của nó, thì đó là một cái tên tốt.