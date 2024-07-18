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
Hooks trong ReactJS là các hàm cho phép bạn “kết nối” với state và các tính năng vòng đời của React từ các function component mà không cần sử dụng class component12. Hooks được giới thiệu từ phiên bản React 16.8 và giúp bạn quản lý trạng thái (state), hiệu suất và các vòng đời của component một cách dễ dàng và gọn gàng hơn2.

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