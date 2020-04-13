import * as React from 'react';
import styled from 'styled-components/macro';
import Code from '../components/Code';
import Step from '../components/Slide/Step';

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        margin-bottom: 1rem;
    }
`;

function Hvordan() {
    return (
        <Style>
            <Step>
                <h1>Hvordan?</h1>
            </Step>
            <Step>
                <Code>
                    npm i styled-components
                    <br />
                    npm i @types/styled-components
                </Code>
            </Step>
        </Style>
    );
}

export default Hvordan;
