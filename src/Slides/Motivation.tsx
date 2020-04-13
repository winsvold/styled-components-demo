import * as React from 'react';
import Step from '../components/Slide/Step';
import styled from 'styled-components/macro';
import ExternalLink from '../components/ExternalLink';

const Style = styled.div`
    max-width: 40rem;
    padding: 2rem;
    li {
        margin-bottom: 2rem;
    }
    strong {
        font-weight: bold;
    }
`;

const OverflødigStyling = styled.span`
    filter: blur(5px);
`;

function Motivation() {
    return (
        <Style>
            <Step>
                <h1>Motivation</h1>
                <ExternalLink href="https://styled-components.com/docs/basics#motivation">
                    https://styled-components.com/docs/basics#motivation
                </ExternalLink>
            </Step>
            <ul>
                <Step>
                    <li>
                        <strong>Automatic critical CSS</strong>: styled-components keeps track of which components are
                        rendered on a page and injects their styles and nothing else, fully automatically. Combined with
                        code splitting, this means your users load the least amount of code necessary.
                    </li>
                </Step>
                <Step>
                    <li>
                        <strong>No class name bugs</strong>: styled-components generates unique class names for your
                        styles. You never have to worry about duplication, overlap or misspellings.
                    </li>
                </Step>
                <Step>
                    <li>
                        <strong>Painless maintenance</strong>: you never have to hunt across different files to find the
                        styling affecting your component, so maintenance is a piece of cake no matter how big your
                        codebase is.
                    </li>
                </Step>
                <Step>
                    <li>
                        <strong>Easier deletion of CSS</strong>
                        <OverflødigStyling>
                            : it can be hard to know whether a class name is used somewhere in your codebase.
                            styled-components makes it obvious, as every bit of styling is tied to a specific component.
                            If the component is unused (which tooling can detect) and gets deleted, all its styles get
                            deleted with it.
                        </OverflødigStyling>
                    </li>
                </Step>
                <Step>
                    <li>
                        <strong>Simple dynamic styling</strong>: adapting the styling of a component based on its props
                        or a global theme is simple and intuitive without having to manually manage dozens of classes.
                    </li>
                </Step>
                <Step>
                    <li>
                        <strong>Automatic vendor prefixing</strong>: write your CSS to the current standard and let
                        styled-components handle the rest.
                    </li>
                </Step>
            </ul>
        </Style>
    );
}

export default Motivation;
