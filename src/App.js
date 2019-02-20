import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
        
      <div className="App">
          <nav className="navbar-top">
            The Weather App
          </nav>
          <div className="container">
            <WeatherLocation city="Tartagal,AR" />
          </div>
      </div>      
    );
  }
}

export default App;
