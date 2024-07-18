import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=cbb1cc320e49ce9ea46821e0b5df4bea');
                console.log(response);
                setWeatherData(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, []);

    return (
        <div>
            {weatherData ? (
                <div>
                    <h1>Weather Ha Noi</h1>
                    <div>Temperature: {(weatherData.main.temp - 273.15).toFixed()}°C</div>
                    <div>Weather: {weatherData.weather[0].description}</div>
                    <div>Humidity: {weatherData.main.humidity}</div>

                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}

export default Weather;
