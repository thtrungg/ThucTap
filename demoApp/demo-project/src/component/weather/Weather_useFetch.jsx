import React, { useState, useEffect } from 'react';

function Weather_useFetch() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getData() {
      const url = "https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=cbb1cc320e49ce9ea46821e0b5df4bea";
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json)
        setWeatherData(json);
      } catch (error) {
        console.log(error)
      }
    }

    getData();
  }, []); 


  return (
    <div>Weather use Fetch
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

export default Weather_useFetch;
