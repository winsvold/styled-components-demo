import styled from 'styled-components';

interface Props {
    value: number;
    max: number;
}

const Progress = styled.div<Props>`
    width: 60vw;
    height: 0.3rem;
    background-color: black;
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    &::after {
        content: '';
        height: 100%;
        width: ${(props) => (props.value * 100) / props.max}%;
        background-color: gold;
        position: absolute;
        left: 0;
    }
`;

export default Progress;
