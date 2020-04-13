import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const spin = keyframes`
  from {
    transform: rotate(920deg);
    opacity: 0;
    font-size: 500%;
  }
`;

const StyledDiv = styled.div`
    animation: ${spin} 1s ease-out;
`;

const Style = styled.div``;

function Takkformeg() {
    return (
        <Style>
            <StyledDiv>Takk for meg alle sammen!</StyledDiv>
        </Style>
    );
}

export default Takkformeg;
