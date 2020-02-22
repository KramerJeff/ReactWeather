import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ZipInput = styled.input`
    background-color: #E96E50;
    border: none;
    border-radius: 5px;
    color: #E5E5E5;
    height: 23px;
    margin-left: 1rem;
    text-indent: 0.5rem;
    &::placeholder {
        color: #E5E5E5;
    }
`;

const ZipCodeInput = (props) => {
    return (
        <ZipInput 
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