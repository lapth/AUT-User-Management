# Automation Test (AUT) là gì?
Trong quy trình phát triển phần mềm, Automation Test là giai đoạn cuối của việc DEV một chức năng nào đó của sản phẩm. Mỗi DEVer phải viết phần AUT cho chính chức năng của họ tạo ra để đảm bảo chức năng chạy đúng như mong muốn.

Vậy AUT là gì: nôm na nó là tự động kiểm thử sản phẩm, tức là thay vì chúng ta đi nhập các thông tin, số liệu, đi làm các bước để kiểm tra độ chính xác của ứng dụng, thì chúng ta tạo ra một sản phẩm khác để đi kiểm tra sản phẩm mình đang làm.

AUT sẽ giúp ích rất lớn trong quy trình phát triển những sản phẩm lớn có nhiều người cùng tham gia phát triển trong một thời gian dài (thường vài năm). Trong những dự án như vậy AUT sẽ được tích hợp cùng với CICD để chạy tự động, kiểm thử sản phẩm, kiểm tra lỗi regression (sản phẩm thay đổi các chức năng cũ một cách không mong muốn), ... mỗi khi có code mới được đẩy lên repository.

Hiện nay có rất nhiều framework giúp bạn làm AUT: `Selenium Framework`, `Robot Framework`, `Puppeteer Framework`, ... mỗi framework đều có những ưu nhược điểm riêng. Khi chọn một framework để sử dụng cho dự án, chúng ta cần cân nhắc đến nhiều điểm, một trong những điểm bạn có thể cân nhắc đến:

- Cộng đồng sử dụng và cộng đồng nhà phát triển: nếu là Open source framework thì những yếu tố này khá quan trong, nó đánh giá mức độ tốt xấu cũng như khả năng vá lỗi của framework đó.
- Tài liệu: tài liệu có đầy đủ không, trong quá trình phát triển bạn rất cần tham khảo tài liệu liên quan, nếu tài liệu tốt thì nó sẽ giải quyết rất nhiều vướng mắc cho dự án.
- Tính năng: framework được chọn có đủ những tính năng mà dự án đang cần không, ví dụ: tạo test suites, chạy test, report, tích hợp các hệ thống khác, ...
- Programming language: team của bạn đang mạnh về ngôn ngữ đó không? cần bao lâu để mọi người sẵn sàng làm việc với ngôn ngữ đó, ...
- Yêu cầu về môi trường làm việc: framework đó cần những gì để hoạt động, cấu hình đơn giản hay phức tạp, yêu cầu phần cứng cao không, ...
- Hỗ trợ trình duyệt nào: framework có hỗ trợ những trình duyệt bạn đang cần không?
- OS: framework chạy được trên cái hệ điều hành nào?
- Thời gian thực hiện: framework chạy các test cases, test suites có nhanh không

> Khi bạn làm AUT, ngoài những kiến thức cần thiết để viết test, một trong những thứ bạn sẽ thường xuyên dùng trong quá trình làm AUT là `locator`, một số framework sẽ gọi là `selector`.

> `locator`/`selector`: Giải thích một cách ngắn gọn đó là một kỹ thuật nhằm xác định các phần tử, thẻ html trong web page mà bạn muốn test. Bạn google với `automation test locator`, rất nhiều trang web giải thích ý nghĩa của kỹ thuật này.

# DEMO
Để hiểu một cách trực quan nhất về AUT, bạn hãy thử chạy phần DEMO này xem nó thức hiện như thế nào nhé.

Trong DEMO này mình sử dụng:
- **Puppeteer**: là framework để thực hiện AUT
- **Mocha, Chai**: là framework để chạy test.

Phần DEMO này chỉ đơn giản là code để làm AUT cho 3 chức năng: Thêm người dùng, xóa người dùng, sửa thông tin người dùng cho ứng dụng đã viết trong các bài trước, các bạn có thể tham khảo ứng dụng deploy sẵn ở đây: https://usermanagement-sample.firebaseapp.com/.

Mã nguồn DEMO gồm có:
- `puppeteer-config.js`: file cấu hình để khởi tạo Browser, page, ... dựa trên framework Puppeteer
- `selectors.js`: file chứa toàn bộ locator/selector cần thiết cho việc viết AUT. Để tìm selector, bạn có thể làm như sau: Bật Browser(`Chrome`) và đi đến trang web muốn test -> kích chuột phải lên phần tử muốn điều khiển -> chọn `Inspect` để bật DEV mode -> Phấp chuột phải lên phần tử đang được bôi sáng trong DEV mode -> copy -> `Copy selector` -> đây chính là selector bạn muốn.
- `run-usermanagement-suites.js`: file chính chứa toàn bộ test suites có trong phần DEMO này.

**Cài đặt và chạy**
```
git clone https://github.com/lapth/AUT-User-Management.git

cd AUT-User-Management

npm install

npm run test
```
