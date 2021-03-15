import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

const WeatherInformation = () => {
    return (
        <div>
            <CurrentWeather />
            <WeatherForecast />
        </div>
    )
}

export default WeatherInformation;
