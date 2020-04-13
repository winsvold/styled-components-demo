import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: transparent;
    font-size: 150%;
    border: 0.2rem lightgoldenrodyellow solid;
    color: lightgoldenrodyellow;
    padding: 0.5rem 2rem;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export default StyledButton;
