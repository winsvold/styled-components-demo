import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import Slide from '../components/Slide/Slide';
import Progress from '../components/Progress';
import { getStoredSlide, storeSlide } from '../utils/localStorage';
import { SLIDES } from './SLIDES';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 140%;
  }
  body {
    margin: 0;
    background-color: #444;
    color: white;
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

    useEffect(() => {
        storeSlide(currentSlide);
    }, [currentSlide]);

    const prevSlide = currentSlide <= 0 ? undefined : () => setCurrentSlide((prevState) => prevState - 1);
    const nextSlide =
        currentSlide >= SLIDES.length - 1 ? undefined : () => setCurrentSlide((prevState) => prevState + 1);

    return (
        <div>
            <GlobalStyle />
            {SLIDES.map((content, index) => (
                <Slide currentSlide={index === currentSlide} prevSlide={prevSlide} nextSlide={nextSlide}>
                    {content}
                </Slide>
            ))}
            <Progress value={currentSlide + 1} max={SLIDES.length} />
        </div>
    );
}

export default App;
