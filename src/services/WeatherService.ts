import axios from 'axios';
import CurrentWeather from '../components/CurrentWeather';
const API_KEY = '2a2f2f70cb9a422694530534211503';

export const getWeatherForecast = async (city: string) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no
    `);
    const {current, forecast } = response.data;
    return  {
        current: {
            temp: current.temp_c,
            high: current.temp_c+1,
            low: current.temp_c-1,
            condition: current.condition
        },
        forecast: {
            condition: forecast.forecastday[0].day.condition,
            mintemp_c: forecast.forecastday[0].day.mintemp_c,
            maxtemp_c: forecast.forecastday[0].day.maxtemp_c,
            avgtemp_c: forecast.forecastday[0].day.avgtemp_c
        }
    };
}