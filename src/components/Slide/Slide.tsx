import * as React from 'react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { randomFadeIn } from './fadeIns';
import { randomFadeOut } from './fadeOuts';
import { StepContext } from './StepContext';
import { NavigationContext } from './NavigationContext';
import NavKnapper from '../NavKnapper';

interface Props {
    children: ReactNode;
    prevSlide?: () => void;
    nextSlide?: () => void;
    currentSlide: boolean;
}

const SlideStyle = styled.div<{ current: boolean; seed1: number; seed2: number }>`
    height: 100vh;
    width: 100vw;
    border: 0.2rem #999 solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #555;
    animation: ${(props) => (props.current ? randomFadeIn(props.seed1) : randomFadeOut(props.seed2))} 0.5s both;
    animation-delay: ${(props) => (props.current ? '.2s' : '0')};
`;

function useAnimationSeed(currentSlide: boolean) {
    const seed = useRef({ seed1: Math.random(), seed2: Math.random() });
    useEffect(() => {
        seed.current = { seed1: Math.random(), seed2: Math.random() };
    }, [currentSlide]);

    return seed;
}

function useHide(currentSlide: boolean) {
    const [hide, setHide] = useState(true);

    useEffect(() => {
        if (currentSlide) {
            setHide(false);
        } else {
            const id = setTimeout(() => setHide(true), 500);
            return () => clearTimeout(id);
        }
    }, [currentSlide]);

    return hide;
}

function Slide(props: Props) {
    const hide = useHide(props.currentSlide);
    const seed = useAnimationSeed(props.currentSlide);

    const stepCount = useRef(0);
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = useCallback(() => {
        if (currentStep < stepCount.current - 1) {
            setCurrentStep((prevState) => prevState + 1);
            return;
        }
        props.nextSlide?.();
        return;
    }, [currentStep, props.nextSlide]);

    const handlePrev = useCallback(() => {
        if (currentStep > 0) {
            setCurrentStep((prevState) => prevState - 1);
            return;
        }
        props.prevSlide?.();
        return;
    }, [currentStep, props.prevSlide]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    handlePrev();
                    return;
                case 'ArrowRight':
                    handleNext();
                    return;
            }
        },
        [handleNext, handlePrev]
    );

    useEffect(() => {
        if (props.currentSlide) {
            window.addEventListener('keyup', handleKeyDown);
            return () => window.removeEventListener('keyup', handleKeyDown);
        }
    }, [props.currentSlide, handleKeyDown]);

    const addStep = () => {
        return stepCount.current++;
    };

    const removeStep = () => {
        return stepCount.current--;
    };

    if (hide) {
        return null;
    }

    return (
        <NavigationContext.Provider value={{ next: handleNext, prev: handlePrev }}>
            <StepContext.Provider
                value={{ currentStep, stepCount: stepCount.current, addStep, removeStep, setCurrentStep }}
            >
                <SlideStyle current={props.currentSlide} seed1={seed.current.seed1} seed2={seed.current.seed2}>
                    {props.children}
                    <NavKnapper />
                </SlideStyle>
            </StepContext.Provider>
        </NavigationContext.Provider>
    );
}

export default Slide;
