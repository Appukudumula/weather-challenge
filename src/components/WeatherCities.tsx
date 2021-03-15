import React from 'react';

type WeatherCitiesProps = {
    cities: string[],
    onCitySelection: (city: string) => void
}

const WeatherCities = ({cities, onCitySelection} : WeatherCitiesProps) => {
    console.log('cities: ', cities);
    return (
        <div>
            {cities.map((city:string, index:number) => (
                <div onClick={() => onCitySelection(city)} key={index}>{city}</div>
            ))}
        </div>
    )
}

export default WeatherCities;