import styled from 'styled-components/macro';

const Code = styled.div<{ color?: string }>`
    padding: 0.5rem;
    background-color: #0008;
    font-family: monospace;
    color: ${(props) => props.color || 'palegoldenrod'};
`;

export default Code;
