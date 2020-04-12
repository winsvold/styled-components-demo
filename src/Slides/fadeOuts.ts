import { keyframes } from 'styled-components';

const fadeOuts = [
    keyframes`
      to {
        top: -100%
      }
    `,
    keyframes`
      to {
        transform: scale(10);
        opacity: 0;
      }
    `,
    keyframes`
      to {
        transform: rotate(-180deg) translateX(100%);
      }
    `,
];

export function randomFadeOut() {
    return fadeOuts[Math.floor(Math.random() * fadeOuts.length)];
}
