import React, { useEffect, useState } from 'react';

function Weather_useXHR() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(()=>{
        var req = new XMLHttpRequest();
        req.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=cbb1cc320e49ce9ea46821e0b5df4bea',true)
        req.responseType = 'json'
        req.onload = function(){
            if(req.status !== 200){
                console.error(`Error ${req.status} + ${req.statusText}`)
            }else{
                setWeatherData(req.response);
            }
        }
        req.send(null)
    },[])


return (
    <div>
        {weatherData ? (
                <div className='container'>
                    <h1>DAILY</h1>
                    <div>Temperature: {(weatherData.main.temp - 273.15).toFixed()}°C</div>
                    <div>Weather: {weatherData.weather[0].description}</div>
                    <div>Humidity: {weatherData.main.humidity}</div>

                </div>
            ) : (
                <div>Loading</div>
            )}
    </div>
  )
}

export default Weather_useXHR