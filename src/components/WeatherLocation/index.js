import React from 'react';
import WeatherData from './components/WeatherData';
import getApiUrlByLocation from '../../services/getApiUrlByLocation';
import {Grid, CircularProgress} from '@material-ui/core';

class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                city:props.city,
                icon: 'day-sunny',
                temp: 0,
                min: 0,
                max: 0,
                errorMessage: null,
                isLoading:false
            }
    }
    componentWillMount() {
        this.setState({
            isLoading:true
        });

        const url = getApiUrlByLocation(this.props.city);
        fetch(url)
        .then(response => {
            this.setState({
                isLoading:false
            });
            console.log(response);
            if(response.ok)
            {
            return response.json();
            }
            else 
            {
                throw Error("la respuesta ha sido incorrecta");
            }
        }).then(data => {
           
            console.log(data.main.temp);
            console.log("me respondio la api");
            this.setState({           
                temp: data.main.temp,
                max: data.main.temp_max,
                min: data.main.temp_min,
                errorMessage: null
            });
        }).catch(error =>{
            this.setState({
                errorMessage: error.message
            })
            console.log(error);
        });
    }

    render() {
        return <Grid>
        <div style={{display: this.state.errorMessage === null? 'none': 'block'}}>
                <h2>{this.state.errorMessage}</h2>
        </div>
            <h2>{this.state.city}</h2>
            
            {
                (!this.state.isLoading)
                ?<WeatherData                
                temp={this.state.temp}
                max={this.state.max}
                min={this.state.min}
               icon={this.state.icon}/>
               :<CircularProgress variant="indeterminate" size={80} color="secondary"></CircularProgress>
            }    
            </Grid>                   
    }
}


export default WeatherLocation;