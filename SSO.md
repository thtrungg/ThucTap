## SSO là gì 
**Đăng nhập đơn (SSO) là giải pháp xác thực cho phép người dùng đăng nhập vào nhiều ứng dụng và trang web nhờ khả năng xác thực người dùng một lần**
## Tại sao SSO lại quan trọng?
**Tăng cường bảo mật mật khẩu**   
Khi không sử dụng SSO, ta sẽ phải nhớ nhiều mật khẩu cho các trang web khác nhau. Điều này có thể dẫn đến một số thói quen bảo mật không được khuyến nghị, chẳng hạn như sử dụng mật khẩu đơn giản hoặc sử dụng cùng một mật khẩu cho các tài khoản khác nhau. Bên cạnh đó, người dùng có thể quên hoặc nhập sai thông tin chứng thực của họ khi đăng nhập vào một dịch vụ.     
SSO giúp hạn chế việc quên mật khẩu và khuyến khích người dùng tạo một mật khẩu mạnh có thể được sử dụng cho nhiều trang web.   

**Cải thiện năng suất**     
Nhân viên thường sử dụng nhiều ứng dụng doanh nghiệp yêu cầu phải xác thực riêng biệt. Việc nhập tên người dùng và mật khẩu theo cách thủ công trong mọi ứng dụng tốn nhiều thời gian và thiếu hiệu quả.    
SSO hợp lý hóa quy trình xác thực người dùng cho các ứng dụng doanh nghiệp và giúp truy cập các tài nguyên được bảo vệ dễ dàng hơn

**Giảm chi phí**    
Việc triển khai SSO làm giảm việc quên mật khẩu, từ đó giảm các tài nguyên hỗ trợ trong việc xử lý các yêu cầu đặt lại mật khẩu.    

**Nâng cao khả năng bảo mật**   
Bằng cách giảm thiểu số lượng mật khẩu cho mỗi người dùng, SSO tạo điều kiện thuận lợi cho việc kiểm tra quyền truy cập của người dùng và cung cấp khả năng kiểm soát quyền truy cập mạnh mẽ cho tất cả các loại dữ liệu    

**Cung cấp trải nghiệm khách hàng tốt hơn**    
Các nhà cung cấp ứng dụng đám mây sử dụng SSO để cung cấp cho người dùng cuối trải nghiệm đăng nhập và quản lý thông tin chứng thực liền mạch. Người dùng quản lý ít mật khẩu hơn mà vẫn có thể truy cập an toàn vào thông tin và ứng dụng họ cần.

## SSO hoạt động như thế nào?
**SSO xác lập tín nhiệm giữa ứng dụng hoặc dịch vụ với nhà cung cấp dịch vụ bên ngoài, còn được gọi là nhà cung cấp danh tính (IdP). Việc này được thực hiện thông qua một loạt các bước xác thực, xác nhận và giao tiếp giữa ứng dụng và dịch vụ SSO tập trung.**

Quy trình SSO như sau: 
- Khi người dùng đăng nhập vào một ứng dụng, ứng dụng sẽ tạo mã thông báo SSO và gửi yêu cầu xác thực đến dịch vụ SSO. 
- Dịch vụ sẽ kiểm tra xem người dùng đã được xác thực trước đó trong hệ thống hay chưa. Nếu đã xác thực, dịch vụ sẽ gửi một phản hồi xác nhận xác thực đến ứng dụng để cấp quyền truy cập cho người dùng. 
- Nếu người dùng không có thông tin chứng thực đã xác minh, dịch vụ SSO sẽ chuyển hướng người dùng đến hệ thống đăng nhập trung tâm và nhắc người dùng gửi tên người dùng và mật khẩu của họ.
- Sau khi gửi, dịch vụ xác mình thông tin chứng thực của người dùng và gửi phản hồi tích cực cho ứng dụng. 
- Nếu không, người dùng sẽ nhận được thông báo lỗi và phải nhập lại thông tin chứng thực. Nhiều lần đăng nhập không thành công có thể dẫn đến việc dịch vụ chặn người dùng thử đăng nhập lại trong một khoảng thời gian cố định. 