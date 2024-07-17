# Cơ chế xác thực OAuth2
OAuth2 là phương thức chứng thực, cần triển khai ở cả hai phía Server và Client.
## **OAth2 có 4 loại roles:**
    - Resource Owner: Chủ sở hữu của dữ liệu muốn chia sẻ
    - Resource Server: Server chứa thông tin dữ liệu cần chia sẻ. Server này có khả năng nhận và trả lời các yêu cầu truy xuất dữ liệu 
    - Client: Chương trình, ứng dụng muốn sử dụng tài nguyên được chia sẻ 
    - Authorization Server: Đối tượng quyết định việc cấp quyền truy cập vào dữ liệu cho client 
## **OAuth2 có 4 loại grant type:**
* **Resource Owner Password Credentials** : nên sử dụng cho những ứng dụng thực sự được tin tưởng vì nó trực tiếp xử lý thông tin đăng nhập của người dùng.

    Quy trình bao gồm các bước sau:
    - Ứng dụng đưa ra một form cho phép người dùng nhập thông tin đăng nhập (ví dụ: username/password).
    - Ứng dụng gửi thông tin đăng nhập cùng thông tin định danh của mình lên authorization server. Authorizaion server xác thực thông tin, trả lại access token và refresh token (nếu có).
    - Ứng dụng sử dụng access token truy cập tài nguyên trên resource server
* **Authorization Code**: sử dụng cho những ứng dụng có độ tin cậy không cao (ứng dụng của bên thứ 3 yêu cầu truy cập vào hệ thống của bạn)

    Quy trình bao gồm các bước sau:
    - Ứng dụng gửi một link đến authorization server cho người dùng để bắt đầu quá trình nhận authorization_code. Link này bao gồm các thông tin cho phép authorization server định danh và response lại cho ứng dụng.
    - Người dụng điền thông tin đăng nhập.
    - Thông tin đăng nhập được gửi đến authorization server.
    - Authorization server xác thực thông tin của đăng nhập và redirects người dùng đến redirect_uri của ứng dụng cùng với một authorization_code.
    - Ứng dụng request đến authorization server cùng authorization_code để nhận access token cùng refresh token (nếu có).
    - Ứng dụng sử dụng access token truy cập tài nguyên trên resource server.
* **Implicit and Client Credentials**
    - Phương thức này thường được sử dụng trong các ứng dụng mobile hay các ứng dụng chạy trên web, nơi mà thông tin bí mật của client không thể lưu trữ bảo mật.
    - Flow của grant này rất giống với Authorization Code ngoại trừ phần liên quan đến authorization_code. Do lo ngại bảo mật, trong flow này, ứng dụng sẽ không nhận authorization_code từ Authorization server, thay vào đó, Authorization server sẽ trả trực tiếp access token cho ứng dụng. Loại grant này không hỗ trợ refresh_token.

## Token là gì?
- Token là một thông tin cần thiết hay còn gọi là công cụ để truy cập giao diện tài nguyên (API)
- Token bao gồm: UID(danh tính duy nhất của người dùng), thời gian,ký hiệu (chữ ký, một vài chữ số đầu tiên của token được nén thành một chuỗi thập lục phân có độ dài nhất định bằng thuật toán Hashing hay còn gọi là băm)
- Tại sao lại sử dụng token
    - Server không trạng thái và khả năng mở rộng tốt 
    - Hỗ trợ cho thiết bị di động tốt về vấn đề get resource
    - Tính bảo mật
    - Hỗ trợ các cuộc gọi chéo tên miền hay application

## Refresh Token là gì?
Refresh token thực chất nó cũng chính là một token. Nhưng nó khác với Token Auth của JWT về chức năng đó là Refresh Token chỉ có một nhiệm vụ duy nhất đó là đề lấy một token mới, nếu token được cấp phát cho user hết hạn.

## Access Token là gì?
Là đoạn mã sinh ra ngẫu nhiên được sử dụng bí mật cho mỗi người dùng, ứng dụng khi thực hiện các thao tác quan trọng hay truy cập vào tài khoản người dùng.

# JWT
**JSON Web Token (JWT) là 1 tiêu chuẩn mở (RFC 7519) định nghĩa cách thức truyền tin an toàn giữa các thành viên bằng 1 đối tượng JSON. Thông tin này có thể được xác thực và đánh dấu tin cậy nhờ vào "chữ ký" của nó. Phần chữ ký của JWT sẽ được mã hóa lại bằng HMAC hoặc RSA.
Như vậy, Bảo mật JWT là phuơng pháp xác thực quyền truy cập (Authentication) bằng JSON Web Token.**
 

### JWT trên bao gồm 3 phần ngăn cách nhau bằng dấu chấm 
* Header: Lưu thông tin thuật toán mã hóa, kiểu mã hóa

        {
            "alg": "HS256",
            "typ": "JWT"
        }
* Payload: Lưu thông tin của chủ thể 

        {
            "sub": "1234567890",
            "name": "John Doe",
            "iat": 1516239022
        }
* Signature: Phần chữ ký được tạo bằng cách kết hợp 2 phần Header + Payload, rồi mã hóa nó lại bằng 1 giải thuật encode nào đó

        HMACSHA256(
            base64UrlEncode(header) + "." +
            base64UrlEncode(payload),
            your-256-bit-secret
        ) 

### Sơ lược về luồng xử lý
- User thực hiện login bằng cách gửi id/password hay sử dụng các tài khoản mạng xã hội lên phía Authentication Server (Server xác thực)
- Authentication Server tiếp nhận các dữ liệu mà User gửi lên để phục vụ cho việc xác thực người dùng. Trong trường hợp thành công, Authentication Server sẽ tạo một JWT và trả về cho người dùng thông qua response.
- Người dùng nhận được JWT do Authentication Server vừa mới trả về làm "chìa khóa" để thực hiện các "lệnh" tiếp theo đối với Application Server.
- Application Server trước khi thực hiện yêu cầu được gọi từ phía User, sẽ verify JWT gửi lên. Nếu OK, tiếp tục thực hiện yêu cầu được gọi.