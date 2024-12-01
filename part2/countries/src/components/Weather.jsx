import axios from "axios"
import { useState, useEffect } from "react"

const Weather = ({country}) => {
    const [weatherData, setWeatherData] = useState(null)
    const capitalName = country.capital

    // console.log(capital);

    useEffect(() => {
        
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${capitalName}&appid=${import.meta.env.VITE_API_KEY}`)
            .then( response => {
                const tempKelvin = response.data.main.temp
                const tempCelsius = (tempKelvin - 273.15).toFixed(2)
                const windSpeed = response.data.wind.speed
                const icon = response.data.weather[0].icon
                const iconSourse = `https://openweathermap.org/img/wn/${icon}@2x.png`

                setWeatherData({
                    temp: tempCelsius,
                    windSpeed: windSpeed,
                    iconSourse: iconSourse,
                })
                // console.log(response);
                // console.log(response.data.weather[0].icon);

            })
            
        }, [])
        
        return (
            <div>
                <h2>Weather in {capitalName} </h2>
                {weatherData ? (
                    <div>
                        <p>temperature {weatherData.temp} Celsius</p>
                        <img src={weatherData.iconSourse} alt={`Weather icon of ${capitalName}`} style={{width: '100px', height: '100px', }} />

                        <p>wind {weatherData.windSpeed} m/s</p>
                    </div>
                ): (
                    <p>Loading weather data...</p>
                )}
            </div>
        )
}

export default Weather