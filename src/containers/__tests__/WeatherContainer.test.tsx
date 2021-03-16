import React from 'react';
import { render } from '@testing-library/react';
import WeatherContainer from '../WeatherContainer';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WeatherContainer', () => {
    test('Should render the component without crash', async () => {
        const fakeResponse = {
            data: {
                current: {
                    temp: 10,
                    high: 21,
                    low:51,
                    last_updated: "2021-03-16 14:00",
                    condition:  {
                        text: '',
                        icon:''
                    }
                },
                forecast: {
                    forecastday:[
                        {
                            date: "2021-03-16",
                            day: {
                                mintemp_c: 5,
                                maxtemp_c: 20,
                                avgtemp_c: 15,
                                condition: {
                                    text: '',
                                    icon: ''
                                }
                            }
                        }
                    ]
                }
            }
        };
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(fakeResponse));
       // render(<WeatherContainer />);
    });
});
