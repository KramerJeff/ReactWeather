import React from 'react';
import PropTypes from 'prop-types';
import DegreeLabel from './DegreeLabel';
const Temperature = ({temp, feels_like, temp_min, temp_max}) => {

    return (
        <div>
            <p>Temp: {temp} <DegreeLabel/></p>
            <p>Feels like: {feels_like}</p>
            <p>Temp min: {temp_min}</p>
            <p>Temp max: {temp_max}</p>
            {/* <p>Testing</p>
            <p>Temp2: {Object.keys(props.main)}</p> */}
        </div>
    );
};

Temperature.propTypes = {
    temp: PropTypes.number,
    feels_like: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
}

export default Temperature;
