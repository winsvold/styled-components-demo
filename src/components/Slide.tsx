import * as React from 'react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { randomFadeIn } from '../Slides/fadeIns';
import { randomFadeOut } from '../Slides/fadeOuts';

interface Props {
    children: ReactNode;
    prevSlide?: () => void;
    nextSlide?: () => void;
    currentSlide: boolean;
}

const SlideStyle = styled.div<{ current: boolean; hide: boolean }>`
    height: 100vh;
    width: 100vw;
    border: 0.2rem #999 solid;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.hide ? 'none' : 'flex')};
    animation: ${(props) => (props.current ? randomFadeIn() : randomFadeOut())} 0.5s both;
    animation-delay: ${(props) => (props.current ? '.2s' : '0')};
`;

function Slide(props: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [hide, setHide] = useState(true);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    props.prevSlide?.();
                    return;
                case 'ArrowRight':
                    props.nextSlide?.();
                    return;
            }
        },
        [props.nextSlide, props.prevSlide]
    );

    useEffect(() => {
        if (props.currentSlide) {
            setHide(false);
        } else {
            const id = setTimeout(() => setHide(true), 500);
            return () => clearTimeout(id);
        }
    }, [props.currentSlide]);

    useEffect(() => {
        if (props.currentSlide) {
            window.addEventListener('keyup', handleKeyDown);
            return () => window.removeEventListener('keyup', handleKeyDown);
        }
    }, [props.currentSlide, handleKeyDown]);

    return (
        <SlideStyle hide={hide} ref={ref} current={props.currentSlide}>
            {props.children}
        </SlideStyle>
    );
}

export default Slide;
