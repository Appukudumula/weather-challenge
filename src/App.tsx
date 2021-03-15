import React from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Challenge</h1>
      </header>
      <main>
        <WeatherContainer />
      </main>
    </div>
  );
}

export default App;
