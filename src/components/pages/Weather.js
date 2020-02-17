import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import Temperature from '../atoms/Temperature';
//import {API_KEY, API_URL_BASE} from './constants';

import PropTypes from 'prop-types';

const API_KEY = '8aa8b8755ccf4a8b09bd7de2e72561df';
const API_URL_BASE = 'api.openweathermap.org/data/2.5/';

const Weather = () => {
    let {zipcode} = useParams();
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        fetch(`http://${API_URL_BASE}weather?zip=${zipcode},us&appid=${API_KEY}&units=imperial`)
        .then(response => response.json())
        .then(
            (result) => {
                setWeatherData(result);
            },
            (error) => {
                console.error(`Something went horribly wrong ${API_URL_BASE} ${API_KEY}`);
                console.error(error);
            }
        );
    }, [zipcode]);

    return (
        <div>
            {zipcode && <h1>{weatherData.name} ({zipcode})</h1>}
            {zipcode && 
                <Temperature
                    {...weatherData.main}
                
                />
            }
        </div>
    );
};

Weather.propTypes = {

};

export default Weather;
