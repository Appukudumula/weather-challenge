import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CurrentWeather from '../CurrentWeather';

describe('CurrentWeather', () => {

    beforeEach(() => {
        const weather= {
            high: 29,
            low: 10,
            temp: 17,
            condition: {
                text: 'Mostly clear, Patchy rain possible',
                icon: ''
            }
        };
        render(<CurrentWeather weather={weather} />)
    });

    test('Should render the props passed without crash', () => {
        const highTextNode = screen.getByTestId('high');
        const lowTextNode = screen.getByTestId('low');
        const tempTextNode = screen.getByTestId('temp');
        const conditionTextNode = screen.getByTestId('conditionText');
        expect(highTextNode.textContent).toBe('29°');
        expect(lowTextNode.textContent).toBe('10°');
        expect(tempTextNode.textContent).toBe('17°');
        expect(conditionTextNode.textContent).toBe('Mostly clear, Patchy rain possible');
    });
});