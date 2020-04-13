import * as React from 'react';
import logo from './img/logo.png';
import styled from 'styled-components/macro';
import Code from '../components/Code';

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        margin-bottom: 1rem;
    }
    height: 80%;
`;

const StyledImg = styled.img`
    margin: 10vh 0;
    background-color: white;
`;

function Velkommen() {
    return (
        <Style>
            <h1>Styling av react-componenter</h1>
            <h2>CSS in JS</h2>
            <StyledImg src={logo} alt="Styled Components logo" />
            <Code>
                npm install --save styled-components
                <br />
                npm install --save-dev @types/styled-components
            </Code>
        </Style>
    );
}

export default Velkommen;
