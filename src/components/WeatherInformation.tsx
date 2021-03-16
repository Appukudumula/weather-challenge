import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import styled from 'styled-components';

type WeatherInformationProps = {
    current: any,
    forecast: any
};

const Container = styled.div `
    margin-top: 40px;
    height: 401px;
    border-radius: 8px;
`

const WeatherInformation = ({ current, forecast }: WeatherInformationProps ) => {
    return (
        <Container>
            <CurrentWeather weather ={current} />
            <WeatherForecast weather ={forecast} />
        </Container>
    )
}

export default WeatherInformation;
