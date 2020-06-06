import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import ZipCodeForm from './ZipCodeForm';

const NavContainer = styled.nav`
    display: flex;
    background-color: #4E4D49;
    height: 75px;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin-left: 1rem;
    color: #E96E50;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
`;

const Navigation = (props) => {
    return (
        <NavContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <ZipCodeForm/>
        </NavContainer>
    );
};

Navigation.propTypes = {
    onKeyDown: PropTypes.func,
};

export default Navigation;