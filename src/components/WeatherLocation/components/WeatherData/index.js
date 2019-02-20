import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes  from 'prop-types';


const WeatherData =(props) =>(
    <div className="weather-data">
    <div className="weather-data-icon">
<WeatherIcons name={props.icon} size="3x"/>         
     </div>
     <h2 className="weather-data-temp">Actual {props.temp}º</h2>
         <h2 className="weather-data-max">Max {props.max}º</h2>
         <h2 className="weather-data-min">Min {props.min}º</h2>
 </div>
);

WeatherData.propTypes = {
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired
};

export default WeatherData;