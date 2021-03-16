import React from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer';
import styled from 'styled-components';

const Container = styled.div  `
  max-width: 830px;
  height: 701px;
  margin: 0 auto;
  border: 19px solid #000;
  padding: 65px;
  box-sizing: border-box;
`

function App() {
  return (
    <Container className="App">
        <WeatherContainer />
    </Container>
  );
}

export default App;
