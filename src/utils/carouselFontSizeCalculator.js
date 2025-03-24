import { getViewPortHeight, getViewPortWidth } from "./viewportWidthHeight";

export const CarouselTextFontSizeCalculator = (text, corrector = 1.3) => {
    const breakValue = 5.5;

    let fontValue =
        (getViewPortWidth() / Math.max(text.length)) * corrector;

    let cociente = getViewPortHeight() / fontValue;

    return cociente < breakValue * corrector
        ? CarouselTextFontSizeCalculator(text, corrector - 0.1)
        : fontValue;
};