# Redux - Saga
***Redux Saga hoạt động như một lớp trung gian giúp quản lý các side effects (như API calls, xử lý bất đồng bộ, v.v.) một cách có tổ chức và rõ ràng. Để làm rõ hơn, đây là luồng hoạt động của Redux Saga trong ứng dụng Redux:***
### Luồng Hoạt Động Cơ Bản của Redux Saga
1. User Interaction: Khi người dùng thực hiện 1 hành động hoặc 1 sự kiện, 1 action sẽ được dispatch đến Redux store.
2. Reducer xử lý Action: Reducer nhận action và cập nhật state trong store ứng với hành động nếu cần. Tuy nhiên nếu như action này yêu cầu 1 Side Effect (Như gọi API ), Reducer sẽ không trực tiếp xử lý việc đó. 
> Side effects là những tác vụ không thuần túy (impure) như gọi API, tương tác với DOM, đăng ký hoặc hủy đăng ký sự kiện, và nhiều tác vụ khác mà không thể thực hiện trực tiếp trong quá trình render
3. Saga Intercepts the Action: Saga middleware sẽ lắng nghe các action được dispatch đến store. Saga nhận 1 action nó đang theo dõi(thông qua: `take`,`takeEvery`,`takeLatest`,...) nó sẽ bắt đầu xử lý.
4. Saga Executes Side Effects: Sage sẽ sử dụng các hiệu ứng như: `call`,`fork`,`put`,`all` để thực hiện side effects.
5. Handling Side Effects: Saga có thể xử lý các side effects và sau đó dispatch một action mới để cập nhật state của ứng dụng dựa trên kết quả của side effect đó. Ví dụ, khi API trả về dữ liệu, saga có thể dispatch một action thành công hoặc thất bại để cập nhật state.
6. Reducers Update State: Khi saga dispatch action mới, reducers nhận được các action này và cập nhật state của store tương ứng. Điều này sẽ làm giao diện người dùng (UI) cập nhật dựa trên state mới.
## Kết nối Middleware Saga
`createSagaMiddleware(options)`\
Tạo 1 Redux middleware và kết nối Saga với Redux Store
```JS
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducer';
import rootSaga from './sagas';

// Tạo middleware saga
const sagaMiddleware = createSagaMiddleware();

// Cấu hình store với Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: composeWithDevTools(),
});

// Chạy saga middleware
sagaMiddleware.run(rootSaga);

export default store;
```
## Saga Effects: Call, Fork, All
- `call` Sử dụng để thực hiện một hàm hoặc một API request. Hàm này có thể là một hàm bất đồng bộ (async function). Ví dụ:
```JS
import { call } from 'redux-saga/effects';

function* fetchUser() {
  const user = yield call(api.fetchUser);
  // Xử lý dữ liệu user
}
```
- `fork` Dùng để tạo 1 saga không đồng bộ, cho phép saga cha không cần chời đợi nó hoàn thành. Ví dụ: 
```Js
import { fork } from 'redux-saga/effects';

function* watchFetchUser() {
  yield fork(fetchUser);
}
```
- `all` dùng để thực hiện nhiều saga đồng thời và chờ đợi cho tất cả saga đó hoàn thành. VÍ dụ: 
```Js
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    call(fetchUser),
    call(fetchPosts),
  ]);
}
```
## Dispatch Redux Actions từ Sagas bằng `put`
- `put` là một effect creator của Redux Saga dùng để dispatch actions từ bên trong một saga.
- `put` được gọi từ bên trong một saga để gửi actions đến Redux store sau khi xử lý side effects hoặc thực hiện các tác vụ bất đồng bộ.
> Tạo một effect mô tả hành động cần dispatch từ trong một saga, và saga middleware sẽ thực hiện việc dispatch action.

Ví dụ: 
```Js
import { put } from 'redux-saga/effects';

function* exampleSaga() {
  yield put({ type: 'ACTION_TYPE', payload: data });
}
```
## Generator Functions và Yield Returns
**Redux Saga sử dụng generator functions để điều phối các side effects. Generator functions là các hàm có thể tạm dừng và tiếp tục thực hiện từ điểm mà chúng dừng lại bằng cách sử dụng yield.**
**
> Hàm generator function trong JavaScript, được định nghĩa bằng cách sử dụng cú pháp `function*`

Ví dụ: 
```Js
function* mySaga() {
  const result = yield call(api.fetchData);
  console.log(result);
}
```
- Khi saga gặp lệnh yield call(api.fetchData), nó sẽ:
    - Gọi hàm api.fetchData: Đây là hàm thực hiện cuộc gọi API.
    - Tạm dừng saga cho đến khi Promise trả về từ api.fetchData được hoàn thành (có nghĩa là khi dữ liệu từ API đã được nhận).

- Khi API hoàn thành:
  - Saga sẽ tiếp tục thực thi từ điểm yield call(api.fetchData) và gán kết quả trả về từ API cho biến result.
  - console.log(result): In kết quả (dữ liệu từ API) ra console.

### Lợi ích của hàm generator function 
1. Quản Lý Bất Đồng Bộ
- Tạm Dừng và Tiếp Tục: Generator functions cho phép bạn tạm dừng thực thi tại một điểm (sử dụng yield) và tiếp tục từ điểm đó sau khi một giá trị hoặc Promise được giải quyết. Điều này giúp bạn dễ dàng quản lý các tác vụ bất đồng bộ mà không cần phải sử dụng các callback hàm lồng nhau hoặc Promise.then.
2. Dễ dàng tạo vòng lặp
- Tạo Iterator: Generator functions tự động trả về một iterator, cho phép bạn duyệt qua một chuỗi các giá trị. Bạn có thể sử dụng for...of hoặc phương thức next() của iterator để lấy giá trị tiếp theo. Điều này hữu ích cho việc xử lý các tập hợp dữ liệu hoặc tạo chuỗi giá trị liên tục.
3. Kiểm Soát Luồng Chương Trình
- Xử Lý Phức Tạp: Generator functions cho phép bạn điều khiển luồng chương trình một cách chi tiết hơn. Bạn có thể tạm dừng và tiếp tục thực thi tại các điểm khác nhau trong quá trình thực thi của hàm.
4. Sử Dụng Trong Redux Saga