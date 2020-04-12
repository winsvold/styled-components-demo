import styled from 'styled-components';

const Progress = styled.div<{ value: number; max: number }>`
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 0.3rem;
    background-color: #333;
    border-radius: 0.15rem;
    overflow: hidden;
    opacity: 0.7;
    &::after {
        width: ${(props) => (props.value * 100) / props.max}%;
        background-color: gold;
        position: absolute;
        left: 0;
        content: '';
        height: 100%;
        transition: 0.7s;
    }
`;

export default Progress;
