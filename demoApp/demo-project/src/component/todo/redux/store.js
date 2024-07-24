import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import weatherReducer from '../../weather/reducer/reducer';
import watchFetchWeather from '../../weather/saga/fetchData';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  weatherReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchWeather);

export default store;
