import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import ZipCodeInput from './ZipCodeInput';

const Navigation = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/weather">Weather</Link>
                </li>
            </ul>
            <ZipCodeInput onKeyDown={props.onKeyDown}/>
        </nav>
    );
};

Navigation.propTypes = {
    onKeyDown: PropTypes.func,
};

export default Navigation;