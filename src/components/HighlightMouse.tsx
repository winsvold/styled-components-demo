import { State as UseMouseState } from 'react-use/lib/useMouse';
import styled from 'styled-components/macro';

interface Props {
    mouse: UseMouseState;
}

const MouseHighlight = styled.div.attrs((props: Props) => ({
    style: {
        top: props.mouse.docY,
        left: props.mouse.docX,
    },
}))<Props>`
    position: fixed;
    transform: translate(-50%, -50%);
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: yellow;
    box-shadow: 0 0 0.5rem #000c;
    opacity: 0.2;
    z-index: 1000;
    pointer-events: none;
`;

export default MouseHighlight;
