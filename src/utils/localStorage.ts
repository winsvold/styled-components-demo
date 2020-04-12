export const getStoredSlide = () => window.localStorage.getItem('slide') || 0;

export const storeSlide = (slide: number) => window.localStorage.setItem('slide', slide.toString());
