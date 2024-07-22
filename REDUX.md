# REDUX
## Redux là gì 
- Redux là pattern và thư viện để quản lý và cập nhật state ứng dụng, sử dụng các sự kiện được gọi là "actions" (hành động). Nó đóng vai trò là một kho lưu trữ tập trung cho state cần được sử dụng trên toàn bộ ứng dụng của bạn, với các quy tắc đảm bảo rằng state chỉ có thể được cập nhật theo một cách dự đoán được.
## Vì sao nên sử dụng Redux? 
- Quản lý Global state 
    - Các components tại mọi nơi trong ứng dụng có thể truy xuất và cập nhật
    - Giải quyết vấn đề của React khi muốn truyền dữ liệu từ cha vào các con cháu
- Vì sao phải sử dụng Redux toolkit?
    - Giải quyết các vấn đề đối với Redux core
        - Việc cấu hình (config) Redux phức tạp
        - Phải cài đặt thủ công nhiều Packages để Redux làm việc hiệu quả
        - Redux yêu cầu nhiều boilerplate code
- Khi nào nên sử dụng Redux
    - Dự án có số lượng state lớn và các state được sử dụng ở nhiều nơi
    - State được cập nhật thường xuyên 
    - Logic code cập nhật state phức tạp 
    - Ứng dụng có số lượng code lớn có nhiều người làm chung 
    - Cần debug và muốn xem các state được cập nhật tại bất kì khoảng thời gian nào
## Các thành phần của Redux
Có 3 thành phần của Redux: Actions, Store, Reducers
    - Actions đơn giản là các events. Chúng là cách mà chúng ta send data từ app đến Redux store. Những data này có thể là từ sự tương tác của user vs app, API calls hoặc cũng có thể là từ form submission.
    - Actions được gửi bằng cách sử dụng store.dispatch() method, chúng phải có một type property để biểu lộ loại action để thực hiện. Chúng cũng phải có một payload chứa thông tin. Actions được tạo thông qua một action creator.
    - Reducers là các function nguyên thủy chúng lấy state hiện tại của app, thực hiện một action và trả về một state mới. Những states này được lưu như những objects và chúng định rõ cách state của một ứng dụng thay đổi trong việc phản hồi một action được gửi đến store.
    - Store lưu trạng thái ứng dụng và nó là duy nhất trong bất kỳ một ứng dụng Redux nào. Bạn có thể access các state được lưu, update state, và đăng ký or hủy đăng ký các listeners thông qua helper methods.
## Luồng hoạt động của Redux 
![](https://images.viblo.asia/3eca7a19-82be-4c9f-8bfc-cbeac838106b.png)
