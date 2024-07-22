# Hiệu ứng Khai báo (Declarative Effects)

Trong redux-saga, các Sagas được triển khai bằng cách sử dụng các hàm Generator. Để diễn đạt logic của Saga, chúng ta `yield` các đối tượng JavaScript thuần túy từ Generator. Chúng ta gọi các đối tượng này là Hiệu ứng (Effects). Một Hiệu ứng là một đối tượng chứa thông tin để được middleware giải thích. Bạn có thể xem các Hiệu ứng như những hướng dẫn cho middleware để thực hiện một số thao tác (ví dụ: gọi một hàm bất đồng bộ, phát hành một hành động đến store, v.v.).

Để tạo ra Hiệu ứng, bạn sử dụng các hàm được cung cấp bởi thư viện trong gói `redux-saga/effects`.

Trong phần này và phần tiếp theo, chúng ta sẽ giới thiệu một số Hiệu ứng cơ bản. Và xem cách mà khái niệm này cho phép các Sagas dễ dàng được kiểm tra.

## Yield Một Promise

Các Sagas có thể `yield` các Hiệu ứng dưới nhiều hình thức. Cách dễ nhất là `yield` một Promise.

Ví dụ, giả sử chúng ta có một Saga theo dõi hành động `PRODUCTS_REQUESTED`. Đối với mỗi hành động phù hợp, nó bắt đầu một tác vụ để lấy danh sách sản phẩm từ máy chủ.

```js
import { takeEvery } from 'redux-saga/effects'
import Api from './path/to/api'

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}

function* fetchProducts() {
  const products = yield Api.fetch('/products')
  console.log(products)
}
```

Trong ví dụ trên, chúng ta gọi trực tiếp Api.fetch từ bên trong Generator (Trong các hàm Generator, bất kỳ biểu thức nào ở bên phải của yield đều được đánh giá và sau đó kết quả được yield cho caller).

Api.fetch('/products') kích hoạt một yêu cầu AJAX và trả về một Promise sẽ được giải quyết với phản hồi đã giải quyết, yêu cầu AJAX sẽ được thực thi ngay lập tức. Đơn giản và theo cách thường thấy, nhưng...

Giả sử chúng ta muốn kiểm tra generator trên:

```javascript
const iterator = fetchProducts()
assert.deepEqual(iterator.next().value, ??) // chúng ta mong đợi gì?
```
Chúng ta muốn kiểm tra kết quả của giá trị đầu tiên được yield bởi generator. Trong trường hợp của chúng ta, đó là kết quả của việc chạy Api.fetch('/products'), đây là một Promise. Việc thực thi dịch vụ thực tế trong các bài kiểm tra không phải là một phương pháp khả thi hay thực tế, vì vậy chúng ta phải giả lập hàm Api.fetch, tức là chúng ta sẽ phải thay thế hàm thực tế bằng một cái giả mà không thực sự thực hiện yêu cầu AJAX nhưng chỉ kiểm tra rằng chúng ta đã gọi Api.fetch với các tham số đúng ('/products' trong trường hợp của chúng ta).

Việc giả lập làm cho việc kiểm tra trở nên khó khăn hơn và ít đáng tin cậy hơn. Mặt khác, các hàm trả về giá trị dễ kiểm tra hơn, vì chúng ta có thể sử dụng một phương pháp so sánh đơn giản để kiểm tra kết quả. Đây là cách viết các bài kiểm tra đáng tin cậy nhất.


(...) equal(), theo bản chất, trả lời hai câu hỏi quan trọng nhất mà mỗi bài kiểm tra đơn vị phải trả lời, nhưng hầu hết không làm:

Kết quả thực tế là gì?
Kết quả mong đợi là gì?
Nếu bạn kết thúc một bài kiểm tra mà không trả lời được hai câu hỏi đó, bạn không có một bài kiểm tra đơn vị thực sự. Bạn có một bài kiểm tra lỏng lẻo, nửa vời.

_Tạo Mô Tả Cuộc Gọi Hàm_

Những gì chúng ta thực sự cần làm là đảm bảo rằng tác vụ fetchProducts yield một cuộc gọi với hàm đúng và các tham số đúng.

Thay vì gọi hàm bất đồng bộ trực tiếp từ bên trong Generator, chúng ta có thể chỉ yield một mô tả của cuộc gọi hàm. Tức là, chúng ta sẽ yield một đối tượng trông giống như:

```javascript
// Hiệu ứng -> gọi hàm Api.fetch với `./products` là đối số
{
  CALL: {
    fn: Api.fetch,
    args: ['/products']
  }
}
```
Nói cách khác, Generator sẽ yield các đối tượng thuần túy chứa các hướng dẫn, và middleware redux-saga sẽ chịu trách nhiệm thực hiện các hướng dẫn đó và trả về kết quả của việc thực hiện chúng cho Generator. Cách này, khi kiểm tra Generator, tất cả những gì chúng ta cần làm là kiểm tra rằng nó yield hướng dẫn mong đợi bằng cách thực hiện một so sánh đơn giản trên đối tượng được yield ra.

Vì lý do này, thư viện cung cấp một cách khác để thực hiện các cuộc gọi bất đồng bộ.

```javascript
import { call } from 'redux-saga/effects'

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // ...
}
```
Bây giờ chúng ta sử dụng hàm call(fn, ...args). Sự khác biệt so với ví dụ trước là giờ đây chúng ta không thực hiện cuộc gọi fetch ngay lập tức, thay vào đó, call tạo ra một mô tả của hiệu ứng. Giống như trong Redux bạn sử dụng các hàm tạo hành động để tạo ra một đối tượng thuần túy mô tả hành động sẽ được thực thi bởi Store, call tạo ra một đối tượng thuần túy mô tả cuộc gọi hàm. Middleware redux-saga sẽ chịu trách nhiệm thực hiện cuộc gọi hàm và tiếp tục Generator với phản hồi đã giải quyết.

Điều này cho phép chúng ta dễ dàng kiểm tra Generator ngoài môi trường Redux. Bởi vì call chỉ là một hàm trả về một đối tượng thuần túy.

```javascript
import { call } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// mong đợi một hướng dẫn gọi
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts nên `yield` một hiệu ứng call(Api.fetch, './products')"
)
```
Bây giờ chúng ta không cần phải giả lập bất kỳ điều gì, và một bài kiểm tra so sánh cơ bản là đủ.

Lợi ích của các cuộc gọi khai báo là chúng ta có thể kiểm tra toàn bộ logic bên trong một Saga bằng cách lặp qua Generator và thực hiện một bài kiểm tra deepEqual trên các giá trị được yield liên tiếp. Đây là một lợi ích thực sự, vì các thao tác bất đồng bộ phức tạp của bạn không còn là các hộp đen, và bạn có thể kiểm tra chi tiết logic hoạt động của chúng bất kể mức độ phức tạp của nó.

Gọi Phương Thức Đối Tượng
call cũng hỗ trợ việc gọi các phương thức đối tượng, bạn có thể cung cấp một ngữ cảnh this cho các hàm được gọi bằng cách sử dụng dạng sau:

```javascript
yield call([obj, obj.method], arg1, arg2, ...) // như thể chúng ta đã gọi obj.method(arg1, arg2 ...)
apply là một bí danh cho dạng gọi phương thức
```

```javascript
yield apply(obj, obj.method, [arg1, arg2, ...])
```
call và apply rất phù hợp cho các hàm trả về kết quả Promise. Một hàm khác cps có thể được sử dụng để xử lý các hàm kiểu Node (ví dụ: fn(...args, callback) nơi callback có dạng (error, result) => ()). cps là viết tắt của Continuation Passing Style.