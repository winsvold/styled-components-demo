import * as React from 'react';
import logo from './img/logo.png';
import styled from 'styled-components/macro';
import ExternalLink from '../components/ExternalLink';

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
    margin: 5vh 0;
    background-color: white;
`;

function Velkommen() {
    return (
        <Style>
            <h1>Styling av react-componenter</h1>
            <h2>CSS in JS</h2>
            <StyledImg src={logo} alt="Styled Components logo" />
            <ExternalLink href="https://github.com/styled-components/styled-components">
                https://github.com/styled-components/styled-components
            </ExternalLink>
        </Style>
    );
}

export default Velkommen;
