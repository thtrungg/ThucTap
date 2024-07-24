import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from './actions/actions';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weatherData);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest(city));
  };

  return (
    <div className="container">
      <h1>Weather Search</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <div>Temperature: {(weatherData.current.temp_c).toFixed(1)}°C</div>
          <div>Weather: {weatherData.current.condition.text}</div>
          <div>Humidity: {weatherData.current.humidity}%</div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
