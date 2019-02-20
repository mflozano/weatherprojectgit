import React from 'react';
import WeatherData from './components/WeatherData';
import getApiUrlByLocation from '../../services/getApiUrlByLocation';


class WeatherLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                city:props.city,
                icon: 'day-sunny',
                temp: 25,
                min: 18,
                max: 28,
                errorMessage: null
            }
    }
    componentWillMount() {
        const url = getApiUrlByLocation(this.props.city);
        fetch(url).then(response => {
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
        return <div className="weather-location">
        <div style={{display: this.state.errorMessage === null? 'none': 'block'}}>
                <h2>{this.state.errorMessage}</h2>
        </div>
            <h2>{this.state.city}</h2>
            <WeatherData
                temp={this.state.temp}
                max={this.state.max}
                min={this.state.min}
                icon={this.state.icon}
            />
        </div>
    }
}


export default WeatherLocation;