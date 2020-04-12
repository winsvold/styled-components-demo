import * as React from 'react';
import { ReactNode, useContext, useState } from 'react';
import { StepContext } from './StepContext';
import styled, { css } from 'styled-components';
import { useMount, useUnmount } from 'react-use';

interface Props {
    children: ReactNode;
}

const Style = styled.div<{ show: boolean }>`
    ${(props) =>
        !props.show &&
        css`
            opacity: 0;
            transform: scale(0.8);
        `};
    transition: 0.3s;
`;

function Step(props: Props) {
    const context = useContext(StepContext);
    const [stepNumber, setStepNumber] = useState<undefined | number>();

    useMount(() => {
        setStepNumber(context.addStep());
    });

    useUnmount(() => {
        context.removeStep();
    });

    return <Style show={stepNumber !== undefined && context.currentStep >= stepNumber}>{props.children}</Style>;
}

export default Step;
