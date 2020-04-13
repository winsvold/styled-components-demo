import { State as UseMouseState } from 'react-use/lib/useMouse';
import styled from 'styled-components';

const MouseHighlight = styled.div<{ mouse: UseMouseState }>`
    position: fixed;
    top: ${(props) => props.mouse.docY}px;
    left: ${(props) => props.mouse.docX}px;
    transform: translate(-50%, -50%);
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: yellow;
    box-shadow: 0 0 0.5rem #0008;
    opacity: 0.3;
    z-index: 1000;
    pointer-events: none;
`;

export default MouseHighlight;
