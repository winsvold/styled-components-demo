import styled from 'styled-components';

const ExternalLink = styled.a.attrs({ target: '_blank' })`
    color: white;
    transition: 0.3s;
    display: inline-block;
    &:hover {
        transform: scale(1.1);
    }
`;

export default ExternalLink;
