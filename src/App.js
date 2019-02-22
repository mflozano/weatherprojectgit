import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red'


const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#558b2f',
      dark:'#255d00',
      light:'#85bb5c'
    },
    secondary:red
  },
  typography:{useNextVariants: true}
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
      <Grid container direction="column" className="App">
          <nav className="navbar-top">
            The Weather App
          </nav>
          <div className="container">
            <WeatherLocation city="Tartagal,AR" />
          </div>
      </Grid>      
      </MuiThemeProvider>
    );
  }
}

export default App;
