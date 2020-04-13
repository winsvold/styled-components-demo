import React, { ReactNode } from 'react';
import Velkommen from '../Slides/Velkommen';
import Links from '../Slides/Links';
import Takkformeg from '../Slides/Takk for meg';
import EksempelStyling from '../Slides/EksempelStyling';
import EksempelProps from '../Slides/EksempelProps';
import Motivation from '../Slides/Motivation';
import Intro from '../Slides/Intro';
import EksempelAnimasjon from '../Slides/EksempelAnimasjon';

export const SLIDES: ReactNode[] = [
    <Velkommen />,
    <Intro />,
    <EksempelStyling />,
    <EksempelProps />,
    <EksempelAnimasjon />,
    <Motivation />,
    <Links />,
    <Takkformeg />,
];
