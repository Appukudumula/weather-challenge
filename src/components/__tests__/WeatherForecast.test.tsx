import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherForecast from '../WeatherForecast';

describe('WeatherForecast', () => {

    beforeEach(() => {
        const weather = {
            avgtemp_c: 15,
            condition: {
                text: 'Cloudy and windy',
                icon: ''
            }
        }
        render(<WeatherForecast weather={weather}/>);
    });

    test('Should render props passed to the component', () => {
        const textNode = screen.getByTestId('conditionText');
        expect(textNode.textContent).toBe('Cloudy and windy');
    });

    test('Should render props passed to the component', () => {
        const tempNode = screen.getByTestId('temp');
        expect(tempNode.textContent).toBe('15°');
    });
});
