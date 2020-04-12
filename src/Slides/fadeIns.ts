import { keyframes } from 'styled-components';

const fadeIns = [
    keyframes`
      from {
        top: 100%
      }
    `,
    keyframes`
      from {
        transform: scale(0);
      }
    `,
    keyframes`
      from {
        transform: rotate(90deg) translateX(100%);
      }
    `,
];

export function randomFadeIn() {
    return fadeIns[Math.floor(Math.random() * fadeIns.length)];
}
