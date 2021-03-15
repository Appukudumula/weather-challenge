import axios from 'axios';
const API_KEY = '2a2f2f70cb9a422694530534211503';

export const getWeatherForecast = async (city: string) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key${API_KEY}=&q=${city}&days=1&aqi=no&alerts=no
    `);
    return response.data;
}