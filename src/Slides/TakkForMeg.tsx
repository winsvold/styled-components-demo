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
    animation: ${spin} 1s 0.5s ease-out both;
`;

function TakkForMeg() {
    return <StyledDiv>Takk for meg</StyledDiv>;
}

export default TakkForMeg;
