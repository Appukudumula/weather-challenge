import React from 'react';
import styled from 'styled-components';

type WeatherCitiesProps = {
    cities: string[],
    selectedCity: string,
    onCitySelection: (city: string) => void
}

const CitiesRow = styled.div `
    display: flex;
    justify-content: space-around;
`

const City = styled.div<{active: boolean}> `
    width: 177px;
    height: 50px;
    background: ${props => (props.active ? '#000': '#fff')};
    color: ${props => (props.active ? '#fff': '#000')};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    z-index: 2;
    position: relative;
    border: 1px solid #000;
`

const WeatherCities = ({cities, selectedCity, onCitySelection} : WeatherCitiesProps) => {
    return (
        <CitiesRow>
            {cities.map((city:string, index:number) => (
                <City data-testid={`${city}_${index}`} active={selectedCity === city} onClick={() => onCitySelection(city)} key={index}>{city}</City>
            ))}
        </CitiesRow>
    )
}

export default WeatherCities;