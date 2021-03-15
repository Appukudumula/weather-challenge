import React, { useState, useEffect } from 'react';
import WeatherCities from '../components/WeatherCities';
import WeatherInformation from '../components/WeatherInformation';
import { getWeatherForecast } from '../services/WeatherService';

const WeatherContainer = () => {
    const [cities, setCities] = useState(['Melbourne', 'Sydney', 'Brisbane']);
    const [selectedCity, setSelectedCity] = useState('Melbourne');
    const [weather, setWeather] = useState(undefined);

    useEffect(() => {
        async function getForecastData() {
            const response = await getWeatherForecast(selectedCity);
            console.log(response);
            setWeather(response);
        }
        getForecastData();
    }, [selectedCity]);


    const handleCitySelection = (city: string): void => {
        setSelectedCity(city);
    }

    return (
        <div>
            <WeatherCities cities={cities} onCitySelection={handleCitySelection} />
            <WeatherInformation weather={weather}/>
        </div>
    )
}

export default WeatherContainer;