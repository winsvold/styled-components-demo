import * as React from 'react';
import thoughtWorks from './img/thoughtworks.png';
import styled from 'styled-components/macro';
import ExternalLink from '../components/ExternalLink';

const StyledImg = styled.img`
    width: 80vmin;
`;

const Style = styled.div`
    text-align: center;
`;

const StyledLink = styled(ExternalLink)`
    margin: 1rem 0;
`;

const H1 = styled.h1`
    margin: 0;
`;

function Hvorfor2() {
    return (
        <Style>
            <H1>Hvorfor styled components?</H1>
            <StyledLink href="https://www.thoughtworks.com/radar/languages-and-frameworks">
                https://www.thoughtworks.com/radar/languages-and-frameworks
            </StyledLink>
            <StyledImg src={thoughtWorks} />
        </Style>
    );
}

export default Hvorfor2;
