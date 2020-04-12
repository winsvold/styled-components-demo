import React, { ReactNode, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Slide from '../components/Slide';
import Velkommen from '../Slides/Velkommen';
import Intro from '../Slides/Intro';
import Takkformeg from '../Slides/Takk for meg';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 140%;
  }
  body {
    margin: 0;
    background-color: #555;
    color: white;
    font-family: 'Raleway', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

const slides: ReactNode[] = [<Velkommen />, <Intro />, <Takkformeg />];

const StyledProgress = styled.progress`
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
`;

const initialValue = window.localStorage.getItem('slide');

function App() {
    const [currentSlide, setCurrentSlide] = useState(initialValue ? +initialValue : 0);

    useEffect(() => {
        window.localStorage.setItem('slide', currentSlide.toString());
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
            <StyledProgress value={currentSlide + 1} max={slides.length} />
        </div>
    );
}

export default App;
