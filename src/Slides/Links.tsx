import * as React from 'react';
import styled from 'styled-components/macro';
import ExternalLink from '../components/ExternalLink';

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > * {
        margin-bottom: 1rem;
    }
`;

function Links() {
    return (
        <Style>
            <ExternalLink href="https://github.com/styled-components/styled-components">Github</ExternalLink>
            <ExternalLink href="https://www.npmjs.com/package/styled-components">NPM</ExternalLink>
            <ExternalLink href="https://2019.stateofcss.com/technologies/css-in-js/">State of css</ExternalLink>
            <ExternalLink href="https://medium.com/@piggyslasher/the-state-of-css-css-in-js-how-styled-components-is-solving-the-problems-weve-had-for-decades-d8abbc8bc148">
                How styled-components is solving the problems we’ve had for decades
            </ExternalLink>
            <ExternalLink href="https://www.thoughtworks.com/radar/languages-and-frameworks">
                Thought Works
            </ExternalLink>
        </Style>
    );
}

export default Links;
