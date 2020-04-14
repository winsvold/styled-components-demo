import * as React from 'react';
import styled from 'styled-components/macro';
import { useContext } from 'react';
import NavigationContext from './Slide/NavigationContext';

export const StyledButton = styled.button`
    background-color: transparent;
    border: 0.2rem white solid;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    &:hover {
        opacity: 0.6;
    }
`;

const NyKnapp = styled(StyledButton)`
    border-color: gold;
`;

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    position: absolute;
    bottom: 0;
`;

function NavKnapper() {
    const context = useContext(NavigationContext);

    return (
        <Layout>
            <StyledButton onClick={context.prev}>Forrige</StyledButton>
            <NyKnapp onClick={context.next}>Neste</NyKnapp>
        </Layout>
    );
}

export default NavKnapper;
