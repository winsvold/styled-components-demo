import styled from 'styled-components/macro';

const Progress = styled.div<{ value: number; max: number }>`
    position: fixed;
    bottom: 0.5rem;
    left: 50vw;
    transform: translateX(-50%);
    width: 60vw;
    height: 0.3rem;
    background-color: #333;
    border-radius: 0.15rem;
    overflow: hidden;
    opacity: 0.7;
    &::after {
        content: '';
        width: ${(props) => (props.value * 100) / props.max}%;
        background-color: gold;
        position: absolute;
        height: 100%;
        transition: 0.7s;
    }
`;

export default Progress;
