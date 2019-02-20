import {api_key, api_url, api_unit} from '../constants/api_weather';


const getApiUrlByLocation = city =>{
    return `${api_url}?q=${city}&appid=${api_key}&units=${api_unit}`;
};

export default getApiUrlByLocation;
