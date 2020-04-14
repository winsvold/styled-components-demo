import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Style = styled.div<{ vis: boolean }>`
    position: absolute;
    top: 20%;
    animation: ${spin} 2s linear infinite;
    background-color: ${(props) => (props.vis ? 'yellow' : 'blue')};
`;

function EksempelAnimasjon() {
    return (
        <Style vis={false}>
            <h1>Eksempel, animasjon</h1>
        </Style>
    );
}

export default EksempelAnimasjon;
