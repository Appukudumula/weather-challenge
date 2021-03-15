import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

type WeatherInformationProps = {
    current: any,
    forecast: any
};

const WeatherInformation = ({ weather }: WeatherInformationProps ) => {
    return (
        <div>
            <CurrentWeather current ={weather.current} />
            <WeatherForecast />
        </div>
    )
}

export default WeatherInformation;
