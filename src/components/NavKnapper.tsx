import * as React from 'react';
import StyledButton from './Button';
import styled from 'styled-components/macro';
import { useContext } from 'react';
import NavigationContext from './Slide/NavigationContext';

const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    bottom: 0;
`;

const LitenKnapp = styled(StyledButton)`
    font-size: 1rem;
    padding: 0.5rem 1rem;
`;

function NavKnapper() {
    const context = useContext(NavigationContext);

    return (
        <StyledFlex>
            <LitenKnapp onClick={context.prev}>Forrige</LitenKnapp>
            <LitenKnapp onClick={context.next}>Neste</LitenKnapp>
        </StyledFlex>
    );
}

export default NavKnapper;
