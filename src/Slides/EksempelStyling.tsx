import * as React from 'react';
import styled from 'styled-components/macro';

const Style = styled.div`
    position: absolute;
    top: 20%;
`;

function EksempelStyling() {
    return (
        <Style>
            <h1>Eksempel, styling</h1>
        </Style>
    );
}

export default EksempelStyling;
