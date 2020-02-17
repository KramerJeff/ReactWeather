import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ZipCodeInput = (props) => {
    return (
        <input 
            type='text'
            placeholder='Enter zip code'
            onChange={props.onKeyDown}
        />
    );
};

ZipCodeInput.propTypes = {
    onKeyDown: PropTypes.func,
}

export default ZipCodeInput;