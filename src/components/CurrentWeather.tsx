import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    background: linear-gradient(180deg, #FFD057 0%, rgba(240, 190, 143, 0) 100%);
    height: calc(100% - 100px);
    border-radius: 12px;
    padding: 30px;
    font-size: 16px;
`;

const Title = styled.h2  `
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    text-transform: capitalize;
    margin: 0;
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

const Temp = styled.div `
    font-size: 200px;
    font-weight: 300;
    line-height: 230px;
`;

const TempHighLow = styled.span `
    font-size: 36px;
    line-height: 41px;
`;

const Div = styled.div `
    margin-bottom: 18px;
`;

const CurrentWeather =  ({ weather } : any) => {
    return (
        <Container>
            <Title>Weather for the day</Title>
            <span>22 Feb</span>
            <FlexRow>
                <FlexColumn>
                    <Div>
                        <TempHighLow data-testid="high">{weather.high}°</TempHighLow>
                        <span>High</span>
                    </Div>
                    <Div>
                        <TempHighLow data-testid="low">{weather.low}°</TempHighLow>
                        <span>Low</span>
                    </Div>
                </FlexColumn>
                <Temp data-testid="temp">{weather.temp}°</Temp>
                <FlexColumn>
                    <img src={weather.condition.icon} alt="" />
                    <span data-testid="conditionText">{weather.condition.text}</span>
                </FlexColumn>
            </FlexRow>
        </Container>
    )
}

export default CurrentWeather;
