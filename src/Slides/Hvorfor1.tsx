import * as React from 'react';
import emtionImg from './img/emotion.png';
import cssmodulesImg from './img/cssmodules.png';
import scImg from './img/styledcomponents.png';
import legend from './img/legend.png';
import styled from 'styled-components';
import Step from '../components/Slide/Step';
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

function Hvorfor1() {
    return (
        <Style>
            <Step>
                <H1>Hvorfor styled components?</H1>
            </Step>
            <Step>
                <h3>State of CSS</h3>
                <StyledLink href="https://2019.stateofcss.com/technologies/css-in-js/">
                    https://2019.stateofcss.com/technologies/css-in-js/
                </StyledLink>
                <StyledImg src={scImg} alt="styled components" />
                <StyledImg src={cssmodulesImg} alt="css modules" />
                <StyledImg src={emtionImg} alt="emotion" />
                <StyledImg src={legend} alt="legend" />
            </Step>
        </Style>
    );
}

export default Hvorfor1;
