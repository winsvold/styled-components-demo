import { createContext } from 'react';

const initialValue = {
    stepCount: 0,
    currentStep: 0,
    addStep: () => 0,
    removeStep: (): void => undefined,
    setCurrentStep: (step: number): void => undefined,
};

export const StepContext = createContext(initialValue);
