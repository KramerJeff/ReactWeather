import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
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

const ZipCodeForm = withRouter(({history}) => {

    const [zipCode, setZipCode] = useState({value: ''});
    //const history = useHistory();

    function handleSubmit(event) {
        //history.push(path);
        //goto weather/zipCode.value
        event.preventDefault();
        console.log('handleSubmit ' + zipCode.value);
        history.push(`/weather/${zipCode.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <ZipInput
                type='text'
                placeholder='Enter zip code'
                value={zipCode.value}
                onChange={e => setZipCode({value: e.target.value})}
            />
        </form>
    );
});

ZipCodeForm.propTypes = {
}

export default ZipCodeForm;