# Từ Đến Operating Charter

> Xây từng viên gạch thật chắc, để có thể xây cả một ngôi nhà.

Tài liệu này biến triết lý thương hiệu thành cách làm việc hằng ngày. Nó là điểm chốt khi phải quyết định có làm một thay đổi, triển khai nó thế nào và khi nào được xem là xong.

---

## 1. Châm ngôn triển khai

**Giúp người dùng tiến một bước; giúp quán vận hành nhẹ đi; không tạo độ phức tạp chưa cần thiết.**

Mỗi thay đổi phải nêu được:

- Người dùng hoặc nhân viên đang gặp vấn đề gì.
- Họ sẽ đi từ trạng thái nào đến trạng thái nào.
- Phiên bản nhỏ nhất tạo được giá trị thực là gì.
- Rủi ro, dữ liệu và phần hệ thống bị ảnh hưởng.

Không bắt đầu bằng công nghệ, hiệu ứng hay một danh sách tính năng.

---

## 2. Ranh giới sản phẩm hiện tại

Từ Đến Cafe đang phát triển theo các lớp, theo đúng thứ tự ưu tiên:

1. **Hiện diện và câu chuyện thương hiệu** — trang chủ, giới thiệu, nội dung, SEO.
2. **Vận hành tại quán** — menu, QR tại bàn, giỏ hàng, đơn hàng, màn hình bếp.
3. **Nội dung và trợ lý AI** — blog, knowledge base, hội thoại có ngữ cảnh.
4. **Khách hàng thân thiết và quản trị** — chỉ mở rộng sau khi luồng đơn hàng đã ổn định.

Tầm nhìn Từ Đến OS là định hướng dài hạn, không phải phạm vi bắt buộc của phiên bản hiện tại. Không triển khai song song nhiều lớp nếu lớp trước chưa được xác minh trong thực tế.

---

## 3. Cách dùng trạng thái

Để tránh roadmap và code mâu thuẫn, chỉ dùng các trạng thái sau:

- **Planned**: đã có ý tưởng, chưa được chấp thuận để làm.
- **In progress**: đang xây hoặc đang thay đổi; chưa dùng để vận hành.
- **Implemented — needs validation**: có giao diện hoặc API, nhưng chưa đủ kiểm thử, dữ liệu thật, bảo mật và xác nhận vận hành.
- **Validated**: đã đáp ứng tiêu chí hoàn thành bên dưới và chủ dự án xác nhận.
- **Deferred**: chủ động để lại cho giai đoạn sau, có nêu lý do.

Ô checkbox `[x]` trong roadmap chỉ dùng cho trạng thái **Validated**. Sự tồn tại của route, component hay bảng dữ liệu chỉ tương ứng tối đa với **Implemented — needs validation**.

---

## 4. Tiêu chí hoàn thành của một thay đổi

Một thay đổi được xem là **Validated** khi, ở mức phù hợp với rủi ro, đã có đủ:

- Luồng chính hoạt động trên điện thoại và màn hình lớn.
- Trạng thái lỗi, rỗng và đang tải được xử lý khi có dữ liệu hoặc gọi API.
- Dữ liệu đầu vào được kiểm tra ở server; quyền truy cập không dựa vào giao diện.
- Không làm lộ khóa bí mật hay dùng quyền quản trị ở phía trình duyệt.
- Kiểm tra TypeScript, lint và build đã chạy thành công.
- Thay đổi nghiệp vụ, schema, API, UI hoặc SEO đã được ghi trong tài liệu liên quan.
- Nếu quyết định khó đảo ngược, đã thêm mục vào Decision Log.

Không cần tạo thêm quy trình nặng cho các sửa lỗi giao diện nhỏ, nhưng vẫn phải giữ được nguyên tắc thương hiệu, responsive và khả năng đọc mã.

---

## 5. Quy ước dữ liệu và API đang áp dụng

`10-database-schema.md` là thiết kế mục tiêu. Khi triển khai một bảng hay endpoint, phải ghi rõ **contract đã triển khai** nếu nó khác với thiết kế mục tiêu; không suy diễn schema từ tên component.

Hiện có các điểm cần được xem là “cần xác minh” trước khi mở rộng:

- Đơn hàng đang dùng `table_number`, `total`, `status` và `order_items.product_name`; thiết kế mục tiêu lại mô tả `total_amount` và `product_id`.
- Blog đã dùng các trường như `excerpt`, `cover_image`, `category`, `tags`, `status`, `is_deleted` và các trường SEO; schema tài liệu chưa mô tả đầy đủ.
- API chat và order chưa cùng một response envelope. Endpoint mới nên tuân thủ `11-api-standard.md`; endpoint cũ chỉ thay đổi contract khi có kế hoạch tương thích.

Trước bất kỳ migration hay refactor nào, cần chốt contract hiện hành, dữ liệu đang có và kế hoạch chuyển đổi. Không đổi tên cột hoặc đổi response API chỉ để “đẹp hơn”.

---

## 6. Nhịp làm việc cho mỗi hạng mục

1. Viết một problem statement ngắn và tiêu chí thành công.
2. Chọn lát cắt nhỏ nhất có thể phát hành hoặc kiểm chứng.
3. Xác định tài liệu bị ảnh hưởng và quyết định cần ghi log (nếu có).
4. Triển khai theo server-first, type-safe và mobile-first.
5. Kiểm tra theo tiêu chí hoàn thành.
6. Cập nhật trạng thái roadmap, changelog và tài liệu miền trước khi nhận là hoàn tất.

Với thay đổi kiến trúc, database, phân quyền, thanh toán hoặc AI có dữ liệu người dùng, phải trình bày phương án và rủi ro trước khi code.

---

## 7. Việc cần làm để đồng bộ tài liệu

Các hạng mục này là ưu tiên tài liệu kế tiếp, không mặc định là việc phải code ngay:

1. Xác minh schema Supabase thực tế rồi cập nhật `10-database-schema.md` hoặc tạo migration có kế hoạch tương thích.
2. Lập bảng endpoint đang có, request/response, xác thực và quyền trong `11-api-standard.md`.
3. Cập nhật `17-roadmap.md` theo trạng thái ở phần 3; tách “đã có bản triển khai” khỏi “đã xác minh”.
4. Gộp `07-coding-rules2.md` vào `07-coding-rules.md` rồi xoá bản trùng khi không còn tham chiếu.
5. Đổi tên `13-ui-ux-guidelines.md.md` thành `13-ui-ux-guidelines.md` khi cập nhật liên kết tham chiếu.

---

## 8. Câu hỏi quyết định cuối cùng

Trước khi nhận hoặc bắt đầu một việc, hãy hỏi:

> Việc này giúp ai đi từ đâu đến đâu, và có phải là bước nhỏ nhất đáng làm ngay không?

Nếu chưa trả lời được, quay lại làm rõ vấn đề thay vì thêm tính năng.
