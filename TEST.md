# TESTING
## JET
Jest là một trình chạy thử nghiệm JavaScript, nghĩa là một thư viện javascript để tạo, và để kiểm tra các thục tục hay hàm trong js. Jest là một package có sẵn trong NPM, bạn có thể cài đặt nó trong bất kỳ dự án JavaScript nào. Jest là một trong những trình chạy thử nghiệm phổ biến nhất hiện nay và đang là lựa chọn mặc định cho các dự án React. Để biết thêm chi tiết liên hệ chính chủ jest.

### TDD và BDD là gì
**1. TDD (Test Driven Development) là một quy trình viết mã kiểm thử trước rồi sau đó mới đó mới viết mã logic. Hiểu nôm na là viết quy trình thiết kế hệ thống trước sau đó mới thực hiện code.**

**2. BDD(Behavior Driven Development) nói một cách đơn giản là hiểu ngược lại với TDD đó là viết mã logic nghiệp vụ trước, sau đó mới viết mã kiểm thử. Tóm lại là viết xong mới viết test. Vậy thôi. Đây là cách hiểu của người viết.**

## Enzyme
Enzyme rất hữu dụng trong test React, giúp kiểm tra đầu ra của các component của bạn dễ dàng hơn. Bạn cũng có thể thao tác, duyệt qua và trong một số cách mô phỏng thời gian chạy cho đầu ra. API của Enzyme có nghĩa là trực quan và linh hoạt bằng cách bắt chước API của jQuery để thao tác và truyền tải DOM. Đây là trang chủ của Enzyme

## Basic React-testing-library
React Testing Library (RTL) là một thư viện hỗ trợ kiểm thử cho các ứng dụng React. Nó giúp kiểm thử các thành phần (components) của React theo cách giống như cách người dùng cuối sử dụng. Dưới đây là tổng quan cơ bản về React Testing Library và cách bắt đầu sử dụng nó:

**Các tính năng chính của React Testing Library**
1. Kiểm thử từ góc nhìn người dùng: RTL khuyến khích kiểm thử các thành phần từ góc nhìn của người dùng bằng cách truy vấn các phần tử DOM như người dùng (ví dụ: getByText, getByRole, getByLabelText).
2. Nhẹ nhàng: Cung cấp một tập hợp nhỏ các tiện ích tập trung vào kiểm thử các thành phần mà không phụ thuộc vào chi tiết triển khai.
3. Tương thích: Hoạt động tốt với các công cụ kiểm thử phổ biến như Jest.
4. Khuyến khích thực hành tốt: Khuyến khích các thực hành kiểm thử tốt bằng cách không sử dụng kiểm thử nông (shallow rendering) và khuyến khích kiểm thử toàn bộ thành phần.

**Cách sử dụng cơ bản**
1. Cài đặt
   `npm install @testing-library/react @testing-library/jest-dom`
2. Viết một bài kiểm thử cơ bản: Giả sử chúng ta có một thành phần Button đơn giản.
```JS
   import React from 'react';

   const Button = ({ label, onClick }) => (
      <button onClick={onClick}>{label}</button>
   );
   export default Button;
```
3. Viết kiểm thử
```JS
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
``` 

Giải thích
- render: Hiển thị thành phần React vào DOM ảo.
- screen: Cung cấp quyền truy cập vào các phần tử DOM được hiển thị.
- fireEvent: Giả lập các sự kiện người dùng như click.
- expect: Phần của thư viện assertion của Jest để thực hiện các khẳng định về trạng thái của DOM.
- 
Các truy vấn 
RTL cung cấp các phương thức truy vấn khác nhau để tìm phần tử:
- getByText: Tìm phần tử bằng nội dung văn bản.
- getByRole: Tìm phần tử bằng vai trò ARIA.
- getByLabelText: Tìm phần tử bằng văn bản của nhãn liên kết với nó.

## Integration Test
- Integration Testing là công việc kiểm thử tích hợp 1 nhóm các module riêng lẻ với nhau cùng với các Unit Test riêng lẻ trong từng module.
- Một dự án phần mềm điển hình bao gồm nhiều module phần mềm, được code bởi nhiều người khác nhau. Tích hợp thử nghiệm tập trung vào kiểm tra truyền dữ liệu giữa các module.

### Tại sao Integration Testing là cần thiết
Mặc dù mỗi module đều được unit test nhưng các lỗi vẫn còn tồn tại với các lý do khác nhau:

- Một Module nói chung được thiết kế bởi một lập trình viên có hiểu biết và logic lập trình có thể khác với các lập trình viên khác. Kiểm thử tích hợp là cần thiết để đảm bảo tính hợp nhất của phần mềm.
- Tại thời điểm phát triển module vẫn có thể có thay đổi trong spec của khách hàng, những thay đổi này có thể không được kiểm tra ở giai đoạn unit test trước đó.
- Giao diện và cơ sở dữ liệu của các module có thể chưa hoàn chỉnh khi được ghép lại
- Khi tích hợp hệ thống các module có thể không tương thích với cấu hình chugn của hệ thống
- Thiếu các xử lý ngoại lệ có thể xảy ra

### Intergration test case
Kiểm thử tích hợp khác với các trường hợp kiểm tra khác, nó tập trung chủ yếu vào các giao diện & lưu lượng dữ liệu / thông tin giữa các module. Ưu tiên được trao cho các liên kết tích hợp chứ không phải là các đơn vị chức năng.

***Cách tiếp cận / phương pháp / chiến lược của intergration test***
1. Phương pháp tiếp cận Big Bang
Tại đây tất cả các thành phần được tích hợp cùng 1 lúc, sau đó sẽ tiến hành kiểm thử.
      *Ưu điểm:* Thuận tiện với các dự án nhỏ
      *Nhược điểm:*
   - Khó khăn trogn việc phát hiện bug.
   - Có thể bỏ qua các bug giao diện nhỏ trong quá trình tìm bug
   - Mât thời gian dành cho tích hợp hệ thống nên làm giảm thời gian dành cho test.
   - Vì các module được kiểm thử cùng 1 lúc nên các module có nguy cơ bị cô lập trong quá trình kiểm thử
2. Phương pháp tiếp cận Incremental
Trong phương pháp này, kiểm tra được thực hiện bằng cách kết hợp hai hay nhiều module có liên quan một cách hợp lý. Sau đó, các phân hệ liên quan khác được thêm vào và kiểm tra sự hoạt động đúng đắn. Quá trình tiếp tục cho đến khi tất cả các module được tham gia và thử nghiệm thành công.  
Quá trình này được thực hiện bằng cách sử dụng các chương trình giả gọi là Stub and Driver. Sơ khai và trình điều khiển không thực hiện toàn bộ logic lập trình các module nhưng chỉ mô phỏng giao tiếp dữ liệu với các module được gọi.
Stub: Được gọi bởi Module dưới Test.
Driver: Gọi Module để được kiểm tra.
Phương pháp Incremental được thực hiện bởi hai phương pháp khác nhau:
   1. Chiến lược Bottom Up
   2. Top down Integration:

***Các bước thực hiện test tích hợp***
- Chuẩn bị Integration Test Plan
- Thiết kế các kịch bản thử nghiệm, trường hợp, và Script (Test Scenarios, Cases, and Scripts ).
- Thực hiện kiểm tra theo test case đã viết
- Theo dõi & tái kiểm tra các lỗi ở trên.
- Bước 3 và 4 được lặp đi lặp lại cho đến khi hoàn thành Integration là thành công.