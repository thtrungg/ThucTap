import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_WEATHER_REQUEST, fetchWeatherSuccess, fetchWeatherFailure } from './actions';

const API_KEY = 'c1cb5474b5994233804162536243005';
const API_URL = 'http://api.weatherapi.com/v1/forecast.json';

function fetchWeatherApi(city) {
  return fetch(`${API_URL}?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

function* fetchWeatherSaga(action) {
  try {
    const data = yield call(fetchWeatherApi, action.payload);
    yield put(fetchWeatherSuccess(data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* watchFetchWeather() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga);
}

export default watchFetchWeather;
