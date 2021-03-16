import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    background-color: #21678E;
    padding: 24px;
    border-radius: 12px;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
`;

const FlexRow = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FlexColumn = styled.div `
    display: flex;
    flex-direction: column;
`;

const Label = styled.div `
    font-weight: 500;
`

const Temp = styled.span `
    font-size: 48px;
`;

const ForecastData = styled.span `
    display: flex;
    align-items: center;
`;

const WeatherForecast = ({ weather }: any) => {
    return (
        <Container>
            <FlexRow>
            <FlexColumn>
                    <Label>Forecast for tomorrow</Label>
                    <span data-testid="date">23 Feb</span>
            </FlexColumn>
            <div>
                <Temp data-testid="temp">{weather.avgtemp_c}°</Temp>
            </div>
            <ForecastData>
                <span data-testid="conditionText">{weather.condition.text}</span>
                <img src={`http://${weather.condition.icon}`} alt="" />
            </ForecastData>
           </FlexRow>
        </Container>
    )
}

export default WeatherForecast;