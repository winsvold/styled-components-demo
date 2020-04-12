import React, { ReactNode, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Slide from '../components/Slide/Slide';
import Velkommen from '../Slides/Velkommen';
import Intro from '../Slides/Intro';
import Takkformeg from '../Slides/Takk for meg';
import Progress from '../components/Progress';
import { getStoredSlide, storeSlide } from '../utils/localStorage';

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
`;

const slides: ReactNode[] = [<Velkommen />, <Intro />, <Takkformeg />];

function App() {
    const [currentSlide, setCurrentSlide] = useState(+getStoredSlide());

    useEffect(() => {
        storeSlide(currentSlide);
    }, [currentSlide]);

    const prevSlide = currentSlide <= 0 ? undefined : () => setCurrentSlide((prevState) => prevState - 1);
    const nextSlide =
        currentSlide >= slides.length - 1 ? undefined : () => setCurrentSlide((prevState) => prevState + 1);

    return (
        <div>
            <GlobalStyle />
            {slides.map((content, index) => (
                <Slide currentSlide={index === currentSlide} prevSlide={prevSlide} nextSlide={nextSlide}>
                    {content}
                </Slide>
            ))}
            <Progress value={currentSlide + 1} max={slides.length} />
        </div>
    );
}

export default App;
