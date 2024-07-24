// exampleSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';

// Worker saga: sẽ được gọi khi một hành động FETCH_DATA được phát ra
function* fetchData(action) {
}

// Watcher saga: sẽ phát hiện hành động FETCH_DATA và gọi worker saga
export default function* watchExampleSaga() {
}
