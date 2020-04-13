import React, { ReactNode } from 'react';
import Velkommen from '../Slides/Velkommen';
import TakkForMeg from '../Slides/TakkForMeg';
import EksempelStyling from '../Slides/EksempelStyling';
import EksempelProps from '../Slides/EksempelProps';
import Motivation from '../Slides/Motivation';
import Hvorfor1 from '../Slides/Hvorfor1';
import EksempelAnimasjon from '../Slides/EksempelAnimasjon';
import Hvordan from '../Slides/Hvordan';

export const SLIDES: ReactNode[] = [
    <Velkommen />,
    <Hvorfor1 />,
    <Hvordan />,
    <EksempelStyling />,
    <EksempelProps />,
    <EksempelAnimasjon />,
    <Motivation />,
    <TakkForMeg />,
];
