import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WeatherService', () => {
    it('should fetch ', () => {
        const data = {};
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    });
});