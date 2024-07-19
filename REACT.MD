# ReactJS Main Concept: Components and Props
- Các component trong reactjs đóng vai trò giống như các function trong js, nhưng chúng hoạt động độc lập và có nhiệm vụ trả về các thành phần html thông qua hàm render
- Có 2 loại component là Function component và Class component
- Tên của Component được đặt tên theo quy tắc PascalCase 
## Functional (Stateless) Components
* một function Javascript / ES6 function
* phải trả về 1 React element
* nhận props làm tham số nếu cần
~~~
function Example() {
  return ( 
    <h1>I'm a functional component!</h1>
)};
~~~
## Class (StateFull) Component
* là một class ES6, nó sẽ là một component khi nó "kế thừa" React component.
* có thể nhận props (trong hàm khởi tạo) nếu cần.
* có thể maintain data của nó với state
* phải có 1 method render() trả về 1 React element (JSX), or null
~~~
class HomePage extends React.Component(){
    render(){
        return <h1> Hello World! </h1>
    }
}
~~~ 

## Khi nào sử dụng Class Component và Function Component
Sử dụng Class Component khi:
* Cần quản lý trạng thái phức tạp của thành phần.
* Cần sử dụng các lifecycle methods như componentDidMount, componentDidUpdate,…
* Thành phần có nhiều logic xử lý khác nhau.
* Dễ dàng triển khai tính kế thừa của lập trình hướng đối tượng (OOP)

Sử dụng Function Component khi:
* Thành phần đơn giản và không cần quản lý trạng thái phức tạp.
* Muốn viết mã ngắn gọn và dễ đọc hơn.
* Ưu tiên sử dụng React Hooks để quản lý trạng thái và lifecycle thay vì các lifecycle methods của Class Component.

## Props 
* Sử dụng khi muốn gửi dữ liệu  đến Component 
* Mọi component được coi là Pure Function (hàm thuần khiết)
* Props là bất biến. Bời vì điều này được phát triển trong khái niệm về các hàm thuần khiết

## State 
State giống như một kho lưu trữ cho các component bên trong ReactJs. Nó chủ yếu sử dụng để cập nhật component khi người dùng thực hiện một số hành động như ấn nút button,nhấp phím văn bản, nhấp một phím sô 
Có thể thay đổi được 
Dùng khi dữ liệu chỉ được sử trong component hiện tại
Ví dụ:
- Dữ liệu từ API chỉ dùng trong component


## Router 
Các component chính: 
~~~
<BrowserRouter> // Quản lý các Routes của trang web
      <Routes> 
        // Render component dựa vào địa chỉ url hiện tại 
        <Route path="/" element={<MainPage />} /> 
      </Routes>
</BrowserRouter>

// Điều dẫn 
<Link to={'/'}>Home</Link> = <a href='/'></a>

// Quyết định nơi render của component nằm trong thuộc tính element
<Outlet />
~~~

### URL Parameters
Trong React Router, có thể sử dụng URL parameters để tạo các route động. Điều này rất hữu ích khi muốn hiển thị các trang khác nhau dựa trên các giá trị động trong URL     
Định nghĩa Route với URL Parameters: sử dụng dấu : trước tên của parameter trong path prop của Route
```
<Route path='invoices' element={<Invoices/>}>
  <Route path=':invoiceId'  element={<Invoice/>} />
</Route>
```
Truy cập URL Parameters trong Component: Sử dụng hook useParams từ react-router-dom để truy cập các giá trị của URL parameters
```
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return <div>User ID: {id}</div>;
}
```

## Sử dụng State Hook
Hook là gì? 
Hooks trong ReactJS là các hàm cho phép  “kết nối” với state và các tính năng vòng đời của React từ các function component mà không cần sử dụng class component12. Hooks được giới thiệu từ phiên bản React 16.8 và giúp bạn quản lý trạng thái (state), hiệu suất và các vòng đời của component một cách dễ dàng và gọn gàng hơn2.

Một số hooks phổ biến bao gồm:
- useState: Quản lý state trong function component.
- useEffect: Thực hiện các tác vụ phụ như gọi API hoặc cập nhật DOM sau khi render.
- useContext: Sử dụng context để chia sẻ dữ liệu giữa các component mà không cần truyền props qua nhiều cấp.

### Để sử dụng State Hook trong React, bạn có thể dùng useState Hook. Đây là một Hook cơ bản giúp bạn quản lý state trong các Function Component.
Cách để sử dụng State Hook 
- Import useState từ React:
```
import React, { useState } from 'react';
```
- Khai báo state: Bạn khai báo state bằng cách gọi useState và truyền vào giá trị khởi tạo của state. useState trả về một mảng gồm hai phần tử: giá trị hiện tại của state và một hàm để cập nhật state.
```
const [count, setCount] = useState(0)
```
- Sử dụng state trong component: Bạn có thể sử dụng giá trị state trong JSX và cập nhật nó bằng cách gọi hàm cập nhật state.
```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click vào tôi</button>
    </div>
  );
}
```
- Cập nhật state: Khi bạn muốn cập nhật state, bạn gọi hàm cập nhật state với giá trị mới hoặc một hàm callback nhận giá trị hiện tại của state và trả về giá trị mới.
```
setCount(count + 1);
// Hoặc sử dụng callback function
setCount(prevCount => prevCount + 1);
```

## Sử dung useEffect 
useEffect là một Hook trong React dùng để thực hiện các side effects trong Function Component. Side effects là những tác vụ không thuần túy (impure) như gọi API, tương tác với DOM, đăng ký hoặc hủy đăng ký sự kiện, và nhiều tác vụ khác mà không thể thực hiện trực tiếp trong quá trình render. Trước khi có Hooks, các side effects thường được quản lý bằng các lifecycle methods như componentDidMount, componentDidUpdate, và componentWillUnmount trong Class Component.

## XMLHttp Request
XMLHttpRequest(XHR) đối tượng được sử dụng để tương tác với máy chủ. Bạn có thể lấy dữ liệu từ URL mà không cần phải làm mới toàn bộ trang. Điều này cho phép một trang web chỉ cập nhật một phần của trang mà không làm gián đoạn những gì người dùng đang làm
### Các phương thức request của HTTP
HTTP chỉ hỗ trợ những phương thức sau: 
- GET: phương thức này dùng để lấy thông tin từ server sử dụng URI. Và phương thức GET chỉ nên dùng để lấy thông tin mà không có ảnh hưởng khác tới dữ liệu.
- POST: phương thức này dùng để gửi dữ liệu từ client lên server.
- HEAD: tương tự như GET, nhưng phương thức này chỉ dùng để lấy thông tin dòng trạng thái và phần tiêu đề (header).
- PUT: dùng để sửa dữ liệu ở server
- DELETE: dùng để xóa dữ liệu sử dụng URI
- CONNECT: thiết lập một kênh truyền đến server sử dụng URI
- OPTIONS: miêu tả các tuỳ chọn giao tiếp đến tài nguyên trên server.
- TRACE: thực hiện một bài test lặp lại vòng lặp thông báo với đường dẫn đến tài nguyên đích trên server.
### Các status code 
Status-code là một số nguyên gồm 3 chữ số, dùng để phân loại phản hồi được gửi về từ server. Có 5 loại status-code là:
- 1xx: (100, 101) : Nó có nghĩa là yêu cầu đã được chấp nhận và tiến trình sẽ được tiếp tục.
- 2xx: (200 - 206) : Nó có nghĩa là hành động đã được nhận, hiểu và thực hiện thành công.
- 3xx: (300 - 307) : Nó có nghĩa là phải thực hiện thêm hành động để hoàn thành yêu cầu.
- 4xx: (400 - 417 ) : Nó có nghĩa là yêu cầu bị sai cú pháp hay là không thể được hoàn thành.
- 5xx: (500 - 505) : Nó có nghĩa là server không thể thực hiện được yêu cầu.
### Gửi HTTP request sử dụng XMLHttpRequest
~~~
var req = new XMLHttpRequest();
req.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=cbb1cc320e49ce9ea46821e0b5df4bea',false);
req.send(null);
console.log(req.status);
console.log(req.responseText)
~~~
__Trong JavaScript, câu lệnh để tạo mới một đối tượng XMLHttpRequest: var req = new XMLHttpRequest();__   
__Sau khi đã có đối tượng req, sử dụng phương thức open để cấu hình cho request. Với cú pháp__
~~~open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
 ~~~
 Trong đó:
- method: Phương thức yêu cầu HTTP sử dụng, chẳng hạn như "GET", "POST", "PUT", "DELETE", v.v. Bị bỏ qua đối với các URL không phải HTTP(S).

- url : Một chuỗi hoặc bất kỳ đối tượng nào khác có trình tạo chuỗi — bao gồm một URL đối tượng cung cấp URL của tài nguyên để gửi yêu cầu tới.

- async Không bắt buộc : Tham số Boolean tùy chọn, mặc định là true, cho biết có thực hiện thao tác không đồng bộ hay không. Nếu giá trị này là false, send()phương thức sẽ không trả về cho đến khi nhận được phản hồi. Nếu true, thông báo về giao dịch đã hoàn tất được cung cấp bằng trình lắng nghe sự kiện. Giá trị này phải đúng nếu multipartthuộc tính là true, nếu không sẽ ném ra ngoại lệ
- user:  Không bắt buộc
Tên người dùng tùy chọn dùng cho mục đích xác thực; theo mặc định, đây là giá nulltrị.

- password:  Không bắt buộc
Mật khẩu tùy chọn dùng cho mục đích xác thực; theo mặc định, đây là giá nulltrị.

__Lúc này, request mới được cấu hình. Để gửi request này đến server, sẽ sử dụng phương thức send với đối số là body của request__   
Phương thức send: 
~~~
send()
send(body)
~~~
Phương pháp này send() gửi yêu cầu tới máy chủ.

- Nếu yêu cầu không đồng bộ (mặc định), phương pháp này sẽ trả về ngay khi yêu cầu được gửi và kết quả được phân phối bằng sự kiện. Nếu yêu cầu đồng bộ, phương pháp này sẽ không trả về cho đến khi phản hồi đến.

- send() chấp nhận một tham số tùy chọn cho phép bạn chỉ định nội dung yêu cầu; điều này chủ yếu được sử dụng cho các yêu cầu như PUT. Nếu phương thức yêu cầu là GET hoặc HEAD, tham body số sẽ bị bỏ qua và nội dung yêu cầu được đặt thành null

Thông số body\
Một khối dữ liệu sẽ được gửi trong yêu cầu XHR. Khối dữ liệu này có thể là:
- A Document, trong trường hợp đó, thông điệp sẽ được tuần tự hóa trước khi gửi đi.
- XMLHttpRequestBodyInitTheo đặc tả Fetch, An có thể là a Blob, an ArrayBuffer, a TypedArray, a DataView, a FormData, a URLSearchParamshoặc một chuỗi ký tự hoặc đối tượng.
- null

__Kết quả trả về__\
Kết quả trả về có nhiều thuộc tính, nhưng quan trọng nhất là 2 thuộc tính:
- status: chính là status-code. Kết quả trả về là 200, chứng tỏ request thành công.
- responseText: là nội dung phản hồi từ server. Trong trường hợp này, kết quả trả về là một chuỗi JSON.
### XMLHttpRequest với request bất đồng bộ
Trong ví dụ trên sử dụng request đồng bộ. Việc này dẫn đến khi request quá lâu chờ phản hồi từ server thì chương trình các tác vụ khác phải dừng lại    
Do đó, nên sử dụng request bất đồng bộ (chỉ sử dụng đồng bộ khi xử lý những yêu cầu nhanh)    
Như đã nói ở trên khi sử dụng bất đồng bộ, chúng ta thay đối số async trong phương thức __open()__ thành __true__ 
~~~
var req = new XMLHttpRequest();
    req.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=cbb1cc320e49ce9ea46821e0b5df4bea',true)
    req.onload = function(){
        if(req.status !== 200){
            console.error(`Error ${req.status} + ${req.statusText}`)
        }else{
            console.log(req.status);
            console.log(req.responseText);
        }
    }
    req.send(null)
~~~
Ngoài ra còn phải dùng phương thức __onload__ và truyền hàm callback - hàm này thực hiện khi có thông tin từ server

## Sử dụng API Fetch
Fetch là sự thay thế hiện đại cho XMLHttpRequest: không giống như XMLHttpRequest, sử dụng callback, Fetch dựa trên promise

Với Fetch API, thực hiện yêu cầu bằng cách gọi fetch(), có sẵn dưới dạng hàm toàn cục trong cả hai ngữ cảnh window và worker. Truyền cho nó một Request đối tượng hoặc một chuỗi chứa URL để lấy, cùng với một đối số tùy chọn để cấu hình yêu cầu.

Hàm fetch()trả về a Promise được thực hiện bằng một Response đối tượng biểu diễn phản hồi của máy chủ. Sau đó, có thể kiểm tra trạng thái yêu cầu và trích xuất nội dung phản hồi ở nhiều định dạng khác nhau, bao gồm văn bản và JSON, bằng cách gọi phương thức thích hợp trên phản hồi.
~~~
 async function getData() {
      const url = "https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=cbb1cc320e49ce9ea46821e0b5df4bea";
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json)
        setWeatherData(json);
      } catch (error) {
        console.log(error)
      }
    }
~~~
Chúng ta khai báo một chuỗi chứa URL rồi gọi fetch(), truyền URL mà không có tùy chọn bổ sung nào.

Hàm này fetch()sẽ từ chối lời hứa khi có một số lỗi, nhưng không từ chối nếu máy chủ phản hồi với trạng thái lỗi như 404: vì vậy chúng ta cũng kiểm tra trạng thái phản hồi và đưa ra thông báo nếu không ổn.

 Nếu không, chúng ta sẽ lấy nội dung phần thân phản hồi dưới dạng JSON bằng cách gọi phương json()thức Response, và ghi lại một trong các giá trị của nó. Lưu ý rằng giống như fetch()chính nó, json()là không đồng bộ, cũng như tất cả các phương thức khác để truy cập nội dung phần thân phản hồi.

## I18n với react-i18next
__React-i18next là một framework internationalization (quốc tế hóa) mạnh mẽ cho Reactjs/Reactnative dựa trên i18next. Các mô-đun cung cấp nhiều thành phần như__ : để xác nhận rằng các bản dịch cần thiết được tải hoặc nội dung của bạn được hiển thị khi ngôn ngữ thay đổi
### Thêm internationalization
Để i18next cấu hình sẵn trong tất cả các component, phải bọc component App bằng component I18nextProvider.
~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import {I18nextProvider} from 'react-i18next';
    import i18next from 'i18next';

    i18next.init({
        interpolation: { escapeValue: false }, 
    });

    ReactDOM.render(
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>,
        document.getElementById('root')
    );

~~~
Trong bước tiếp theo, chúng ta phải bọc các component bằng hàm translate(), tự động thêm hàm t () vào các thuộc tính của component. Ta có thể truyền một namespace mặc định vào hàm translate()
~~~
    import { translate, Trans } from 'react-i18next';

    // ... definition of App class ...

    export default translate('common')(App);  
~~~