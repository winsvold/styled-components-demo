import React, { useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import Slide from '../components/Slide/Slide';
import Progress from '../components/Progress';
import { getStoredSlide, storeSlide } from '../utils/localStorage';
import { SLIDES } from './SLIDES';
import { useMouse } from 'react-use';
import HighlightMouse from '../components/HighlightMouse';
import { style } from '../utils/style';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 140%;
  }
  body {
    margin: 0;
    background-color: ${style.color.background};
    color: ${style.color.text};
    font-family: 'Raleway', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
    transition: 0s;
    filter: drop-shadow(0 0 .3rem gold);
  }
`;

function App() {
    const [currentSlide, setCurrentSlide] = useState(+getStoredSlide());
    const ref = useRef<HTMLDivElement>(null);
    const mouse = useMouse(ref);

    useEffect(() => {
        storeSlide(currentSlide);
    }, [currentSlide]);

    const prevSlide = currentSlide <= 0 ? undefined : () => setCurrentSlide((prevState) => prevState - 1);
    const nextSlide =
        currentSlide >= SLIDES.length - 1 ? undefined : () => setCurrentSlide((prevState) => prevState + 1);

    return (
        <div ref={ref}>
            <GlobalStyle />
            {SLIDES.map((content, index) => (
                <Slide key={index} currentSlide={index === currentSlide} prevSlide={prevSlide} nextSlide={nextSlide}>
                    {content}
                </Slide>
            ))}
            <Progress value={currentSlide + 1} max={SLIDES.length} />
            <HighlightMouse mouse={mouse} />
        </div>
    );
}

export default App;
