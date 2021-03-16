import React, { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import WeatherCities from '../components/WeatherCities';
import WeatherInformation from '../components/WeatherInformation';
import { getWeatherForecast } from '../services/WeatherService';

const WeatherContainer = () => {
    const [cities, setCities] = useState(['Melbourne', 'Sydney', 'Brisbane']);
    const [selectedCity, setSelectedCity] = useState('Melbourne');
    const [weather, setWeather] = useState<any>(undefined);

    useEffect(() => {
        async function getForecastData() {
            const response = await getWeatherForecast(selectedCity);
            setWeather(response);
        }
        getForecastData();
    }, [selectedCity]);


    const handleCitySelection = (city: string): void => {
        setSelectedCity(city);
    }

    return (
        <>
            <WeatherCities data-testid="cities" cities={cities} selectedCity={selectedCity} onCitySelection={handleCitySelection} />
            {weather && (
                <WeatherInformation current={weather.current} forecast={weather.forecast} />
            )}
        </>
    )
}

export default WeatherContainer;