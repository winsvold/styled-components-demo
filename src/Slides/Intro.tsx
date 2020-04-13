import * as React from 'react';
import emtionImg from './img/emotion.png';
import cssmodulesImg from './img/cssmodules.png';
import scImg from './img/styledcomponents.png';
import legend from './img/legend.png';
import styled from 'styled-components';
import Step from '../components/Slide/Step';
import ExternalLink from '../components/ExternalLink';

const StyledImg = styled.img`
    width: 90vw;
`;

const Style = styled.div`
    text-align: center;
`;

const StyledLink = styled(ExternalLink)`
    margin: 2rem 0;
`;

function Intro() {
    return (
        <Style>
            <Step>
                <h1>Hvorfor styled components?</h1>
            </Step>
            <Step>
                <StyledLink href="https://2019.stateofcss.com/technologies/css-in-js/">
                    https://2019.stateofcss.com/technologies/css-in-js/
                </StyledLink>
                <StyledImg src={scImg} alt="styled components" />
                <StyledImg src={cssmodulesImg} alt="css modules" />
                <StyledImg src={emtionImg} alt="emotion" />
                <StyledImg src={legend} alt="legend" />
            </Step>
            <Step>
                <StyledLink href="https://www.thoughtworks.com/radar/languages-and-frameworks">
                    https://www.thoughtworks.com/radar/languages-and-frameworks
                </StyledLink>
            </Step>
        </Style>
    );
}

export default Intro;
