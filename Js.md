# tạo mảng mới:
    var number = []; // tạo mảng rỗng 
    var number = [1,2,3,4]; // tạo mảng gồm 4 ký tự 
    console.log(number.length); // in ra độ dài của mảng = 4
# array method 
## .push() Thêm phần tử vào cuối mảng và trả về độ dài mảng đó
    ' number.push(6); ' // 5
## .pop() Xóa phần tử ở cuối mảng và trả về phần tử đã xóa
    ' number.pop();' // 4 
## .shift() Xóa phần tử ở đầu mảng và trả về phần tử đã xóa 
    ' number.shift();' // 1 
## .splice(start, deleteCount, item1, item2, /* …, */ itemN) Chèn hoặc xóa nhiều phần tử start index bắt đầu deleteCount 0 k xóa 1 xóa 
    ' number.splice(2,1,'thu 2'); '
    // [1,2,'thu 2',4]
## .includes() Trả về true hoặc false, kiểm tra sự tồn tại của phần tử trong mảng
    ' number.includes(4);' //false
## .indexOf() Trả về giá trị index của giá trị cần tìm , nếu không tìm thấy trả về -1
    ' number.indexOf(5);' // -1
    'number.indexOf(3);' // 2
## .join() Phương thức nối các phần tử thành 1 chuỗi. Nhận đối số là điểm nối giữa các phần tử
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    days.join('-');
    // Sunday-Monday-Tuesday-Wednesday-Thursday-Friday

## .filter lặp các phần tử trong mảng và trả về 1 mảng mới thỏa mãn điều kiện bên trong 
    var number = [1,3,4,13,3,34,5,36,78];
    var isEven = number.filter(number => number % 2 ===0);
    console.log(isEven); 
    // [ 4, 34, 36, 78 ] 
## .find trả về phần tử đầu tiên tìm được thỏa mãn điều kiện 
    var days = ['thu hai', 'thu ba','thu tu','thu nam'];
    console.log(days.find(day => day.length === 6)); 
    // tra ve gia tri co 6 phan tu  thu ba 
## .map() trả về mảng mới với điều kiện đã cho 
    var numbers = [1,3,4,13,3,34,5,36,78];
    console.log(numbers.map(number => number * 2));
    // [
    2,  6,  8,  26, 6,
    68, 10, 72, 156
    ]
## .reduce() 
    var numbers = [1,3,4,13,3,34,5,36,78];
    const total = numbers.reduce((total,number) => {
        if(number >= 10)
            total = total + number;
        return total;
    });
    console.log(total);
    // 162 
## .from() 

## .slice Phương thức này cho phép bạn cắt một mảng nhỏ từ mảng ban đầu với 2 tham số đầu vào là index của 2 vị trí trong mảng ban đầu
'const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4));
// output: Array ["camel", "duck"] '

# Các cách copy 1 Array 
## Sử dụng .slice() không truyền đối số 
## Sử dụng .map() không truyền đối số 
    var numbers = [1,3,4,13,3,34,5,36,78];
    var copy = numbers.map(number => number);
    var copy2 = number.slice();
    console.log('copy numbers: ' + copy);
## Sử dụng spread operator  
    const numbers = [1, 2, 3, 4, 5];
    const copy = [...numbers];

    console.log(copy);    // > Array [1, 2, 3, 4, 5]
    console.log(numbers); // > Array [1, 2, 3, 4, 5] 

# Bất đồng bộ và cách xử lý
## Đồng bộ là gì? 
Là cách lập trình mà các câu lệnh chạy tuần tự nhau, lệnh này chạy xong thì đến lệnh tiếp theo do đó đến 1 hiện tượng là IO blocking. IO blocking là hiện tượng khi 1 tác vụ thực hiện quá lâu và trình duyệt có thể không phản ứng lại với các sự kiện UI.
## Bất đồng bộ là gì ?
Là cách lập trình mà các tác vụ có thể chạy không theo tuần tự, lệnh này chạy trước có thể kết thúc sau câu lệnh sau.
Bất đồng bộ không làm chương trình chạy nhanh hơn, đúng ra nó chỉ tránh lãng phí thời gian chời đợi vô ích các tác vụ IO, network 
Bất đồng bộ có 2 loại :
- Đơn luồng 
- Đa luồng (Có thể thực hiện nhiều công việc cùng 1 lúc, 1 công việc thuộc 1 thread)
## Kỹ thuật không đồng bộ 
### Callback
Callback là kỹ thuật truyền 1 function vào 1 function khác làm đối số, và khi function kia thực thi xong nó sẽ gọi lại thằng callback được truyền vào 
Có 2 dang callback: 
- Callback bình thường : callback truyền cho hàm đồng bộ 
- Async callback : là callback được truyền cho một hàm bất đồng bộ 
### Callback hell 
Callback hell trong JavaScript, còn được gọi là “pyramid of doom” hoặc “hadouken”, là một tình huống phổ biến trong lập trình bất đồng bộ với JavaScript. Trong callback hell, các hàm callback được lồng vào nhau sâu và rộng, dẫn đến mã nguồn khó đọc, khó bảo trì và dễ gây lỗi
Để tránh xảy ra callback hell ta có thể áp dụng các cách sau: 
- Sử dụng thư viện Async.js 
- Sử dụng Promises
- Sử dụng Asyns/Await 
### Promise
- Promise cung cấp một cơ chế để xử lý các tác vụ bất đồng bộ một cách đồng bộ và dễ dàng hơn, giúp cho code trở nên dễ đọc và dễ bảo trì hơn.
- Khởi tạo Promise bằng từ khóa new Promise(). Các tác vụ bất đồng bộ được thực hiện trong phần exuctor của Promise. Nếu kết quả của tác vụ đó thành công ta có thể sử dụng hàm resolve() để trả về kết quả; nếu thất bại chúng ta dùng hàm reject() để trả về lỗi.
- Sau khi Promise được khởi tạo, ta có thể sử dụng phương thức .then() để xử lý kết quả thành công và sử dụng .catch() để xử lý lỗi
- Những trạng thái của Promise: 
    - Pending: Trang thái ban đầu của Promise, khi 1 Promise được tạo nhưng chưa trả về kết quả hay lỗi 
    - Fullfilled: Promise được xử lý thành công và trả về 1 giá trị kết quả. Sử dụng phương thức .then() để xử lý kết quả thành công 
    - Rejected: Promise bị từ chối và trả về 1 lỗi. Khi Promise ở trạng thái này,sử dụng .catch() để xử lý lỗi
- Cách viết 1 Promise trong Js
' const myPromise = new Promise ((resolve,reject)=>{
    // code thực hiện tác vụ bất đồng bộ
    if(/* tác vụ thành công */){
        resolve(/* giá trị trả về*/);
    }else {
        reject(/* lỗi trả về */)
    }
}) '
- Ưu điểm Promise:
    - Error handing : Cho phép xử lý lỗi hiệu quả, giúp kiểm soát các trường hợp ngoại lệ
    - Câu lệnh điều kiện: Sử dụng if/else hoặc then/catch để kiểm tra kết quả của Promise
    - Giá trị trung gian: Cho phép truyền giá trị từ 1 hàm này sang 1 hàm khác dễ dàng 
    -Error Stack: Khi xảy ra lỗi, Promise cung cấp thông tin chi tiết về ngăn xếp lỗi 
    - Dễ dàng cho việc Debug

### Async/Awai 
- Async / Await là một tính năng Js được dự đoán từ lâu, giúp làm việc với các chức năng không đồng bộ thú vị hơn và dễ hiểu hơn nhiều. Nó được xây dựng dựa trên Promise và tương thích với tất cả các API dựa trên Promise hiện có.
- Từ khóa : Async - Khai báo : 
    - Chuyển 1 function thành 1 Promise 
    - Các chức nắng Async cho phép sử dụng await 
- Await - Tạm dùng thực thi các chức năng không đồng bộ 
    - Khi đặt trước Promise, await sẽ đợi cho đến khi Promise kết thúc và trả về kết quả 
    - Await chỉ làm việc với Promise, không hoạt động với callback 
    - Await chỉ sử dụng bên trong các function async 

# Higher-order functions (HOF)
## HOF là gì 
- Là hàm có khả năng nhận đầu vào là 1 hoặc nhiều hàm khác hoặc trả về 1 hàm khác 
- Các hàm trong Js như map,filter,reduce,... là ví dụ tiêu biểu cho HOF 
- Ví dụ:Ta có thể khai báo như này
~~~
    function tinhtoan (a) {
        return function add(b) {
            return a + b
        }
    }

    const add10 = tinhtoan(10);
    const add20 = tinhtoan(20);

    add10(5); //15
    add10(10); //20

    add20(5); //25
    add20(10); //30
~~~

## Lợi ích của HOF 
- Tái sử dụng : Cho phép các hàm linh hoạt và có tính tái sử dụng giải quyết các vấn đề khác nhau mà không cần viết lại code nhiều lần 
- Tách biệt dữ liệu và logic, đơn giản hóa việc viết mã
- Nhiều hàm HOF được tạo ra để hỗ trợ lập trình. Ví dụ như các hàm map, filter… và rất nhiều hàm khác.
## Currying 
- Currying là 1 kỹ thuật giúp bạn có thể gọi 1 phần hàm của mình để tạo ra một hàm hoàn toàn mới, hàm mới này sẽ bớt đi một số tham số so với hàm trước đó 

## Closure 
- Closures cho phép lồng các function vào nhau, và cấp quyền cho function con, để function con có toàn quyền truy cập vào tất cả các biến và function được định nghĩa bên trong function cha. 
- Tuy nhiên, function cha không có quyền truy cập đến các biến và function được định nghĩa bên trong function con. Điều này tạo nên một dạng bảo mật khép kín cho các biến của function con.
-Bên cạnh đó, vì function con có quyền truy cập đến scope của function cha, các biến và function được định nghĩa bên trong function cha sẽ vẫn tồn tại dù việc thực thi function cha đã kết thúc.
~~~
function viTien(soTien){
    let tienCuaToi = soTien;
    return {
        xem:function(){
            console.log('Ban co: ' + tienCuaToi + '$')
        },
        napTien: function(tienNap){
            return tienCuaToi += tienNap ;
        },
        rutTien: function(tienRut){
            if(tienRut > tienCuaToi){
                console.log("Khong du tien trong tai khoan");
            }else{
                return tienCuaToi - tienRut;
            }
        }
    }
}

const Trung = viTien(20)
Trung.xem()
Trung.napTien(20)
Trung.xem()
Trung.napTien(20)
Trung.xem()
Trung.rutTien(70)
Trung.rutTien(20)
Trung.xem()

// Ban co: 20$
// Ban co: 40$
// Ban co: 60$
// Khong du tien trong tai khoan
// Ban co: 40$
~~~
# Functional Programming 
## Định nghĩa
Functional Programming là 1 dạng mô hình lập trình (Lập trình hàm). FP là 1 phương pháp lập trình dựa trên các hàm toán học, tránh việc thay đổi giá trị của dữ liệu. 
## Ưu điểm của FP
- Dễ dàng gỡ lỗi: Các hàm thuần túy (pure functions) luôn cho ra cùng kết quả với cùng đầu vào. Điều này giúp kiểm tra lỗi trong mã nguồn nhanh chóng.
- Đánh giá lười biếng (lazy evaluation): FP áp dụng khái niệm đánh giá lười biếng, chỉ tính toán khi cần thiết. Điều này tối ưu hiệu suất và tài nguyên.
- Hỗ trợ lập trình song song: FP thích hợp cho việc lập trình đa luồng và đa tiến trình.
- Dễ đọc và hiểu: Các hàm thuần túy không thay đổi trạng thái, giúp mã nguồn trở nên dễ hiểu và sử dụng.
## Pure funtion 
- Định nghĩa hàm thuần khiết 
    - Hàm luôn trả về cùng một kết quả nếu được truyền vào các tham số không đổi. Nó không hề phụ thuộc vào bất kỳ trạng thái hoặc dữ liệu nào, cũng như những sự thay đổi trong khi chương trình đang được chạy. Nó chỉ phụ thuộc vào các tham số đầu vào của nó. 
    ' function tinhtong(a +b){
        return a + b;
    }'
## Composition function
- Composition là cơ chế kết hợp nhiều hàm để xây dựng hàm phức tạp hơn 
~~~
const users = [
  { name: "A", age: 14 },
  { name: "B", age: 18 }, 
  { name: "C", age: 22 },
];

const filter = (cb, arr) => arr.filter(cb);
const map = (cb, arr) => arr.map(cb);

var inR = map(u => u.name, filter(u => u.age > 14, users));
console.log(inR)
// [ 'B', 'C' ]
~~~
## Share state 
Trong Functional Programming (FP), việc chia sẻ trạng thái (shared state) là một vấn đề thường gặp. Mục tiêu là chia sẻ dữ liệu mà không làm mất tính thuần túy (purity) của mã nguồn

## Side effects
- Là các hiệu ứng phụ tác động và làm biến đổi trạng thái state bên ngoài chương trình
- Side effects là công cụ hoàn hảo, hỗ trợ người dùng thay đổi giá trị và thuộc tính của biến và hiển thị trạng thái dữ liệu ra phía ngoài màn hình. Bên cạnh đó, nó cũng cung cấp chức năng thu thập, quản lý và gửi thông tin lưu trữ về hệ cơ sở dữ liệu (database) hoàn toàn tự động.
- Mặc dù vậy, việc lạm dụng hiệu ứng phụ có thể khiến phần mềm tự động mặc định thay đổi trạng thái cho tất cả các hàm nhập vào. Điều này chính là nguyên nhân dẫn đến một số lỗi chương trình không mong muốn.

## So sánh OOP và FP
- Khái niệm và định nghĩa:
    - FP: Sử dụng hàm làm đơn vị thao tác chính. FP tập trung vào việc đánh giá biểu thức và phát triển cấu trúc mã chương trình mà không thay đổi trạng thái.
    - OOP: Sử dụng đối tượng làm chìa khóa. OOP biểu diễn thế giới thực bằng các đối tượng và hỗ trợ tính trừu tượng, đa hình, đóng gói và kế thừa.
- Ưu điểm:
    - FP: Dễ kiểm tra, dễ đọc, hỗ trợ trừu tượng hóa dữ liệu và hành vi.
    - OOP: Tích hợp dữ liệu và hành vi, hỗ trợ kế thừa và đa hình.

# ES6 hay dùng 
## Biến let và const 
-const được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.
-let khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.
## Arrow functions
Arrow functions là dạng viết ngắn gọn cho một hàm trong ES6. Một arrow function được hình thành bơi một danh sách các parameter ( ... ), theo sau là => để đánh đấu sau nó là body function
~~~ 
const addition = (a, b) => a + b; 
~~~
## Default Function Parameters
Cho phép set giá trị mặc định cho parameters khi khai báo hàm ES6 allows you to set default parameters in function definitions 
~~~
const getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500)
~~~
## Spread / Rest Operator
Spread cho phép duyệt qua lần lượt các phần tử và có thể sử dụng để truyền vào các method như là các đối số. Nó được biểu thị đơn giản bằng 3 dấu chấm: ...
~~~
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
const arr3 = [...arr, ...arr2];
console.log(arr);  // [ 1, 2, 3 ]
console.log(arr2);  // [ 4, 5 ]
console.log(arr3); // [ 1, 2, 3, 4, 5 ]
~~~


