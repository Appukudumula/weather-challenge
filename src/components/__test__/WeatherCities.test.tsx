import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherCities from '../WeatherCities';

describe('WeatherCities', () => {

    test('Should render component component', () => {
        const cities = ['Melbourne', 'Sydney', ''];
        const mockFn = jest.fn();
        render(<WeatherCities cities={cities} selectedCity='Melbourne' onCitySelection={mockFn} />);
    });

    test('Should render cities passed as props', () => {
        const cities = ['Melbourne', 'Sydney', ''];
        const mockFn = jest.fn();
        render(<WeatherCities cities={cities} selectedCity='Melbourne' onCitySelection={mockFn} />);
        const ele = screen.getByTestId('Melbourne_0');
        expect(ele).toBeInTheDocument();
        expect(ele.textContent).toBe('Melbourne');
    });

    test('Should call the onCitySelection function on city click', () => {
        const cities = ['Melbourne', 'Sydney', ''];
        const mockFn = jest.fn();
        render(<WeatherCities cities={cities} selectedCity='Melbourne' onCitySelection={mockFn} />);
        const ele = screen.getByTestId('Melbourne_0');
        fireEvent.click(ele);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

});