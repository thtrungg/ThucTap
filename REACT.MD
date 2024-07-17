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
* Sử dụng khi muốn gửi dữ liệu đến Component 
* Mọi component được coi là Pure Function (hàm thuần khiết)
* Props là bất biến. Bời vì điều này được phát triển trong khái niệm về các hàm thuần khiết