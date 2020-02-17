import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.span`
    &::before {
        content: "\\00b0"
    }
`;

const DegreeLabel = (units) => {

    return (
        <Label>F</Label>
    );
};

DegreeLabel.propTypes = {
    units: PropTypes.string,
};

export default DegreeLabel;