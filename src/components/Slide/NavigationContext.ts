import { createContext } from 'react';

const initialState = {
    next: (): void => undefined,
    prev: (): void => undefined,
};

export const NavigationContext = createContext(initialState);

export default NavigationContext;
