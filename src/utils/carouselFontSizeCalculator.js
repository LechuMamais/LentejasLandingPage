import { getViewPortHeight, getViewPortWidth } from "./viewportWidthHeight";

export const CarouselTextFontSizeCalculator = (text, windowSize = {
    windowWidth: getViewPortWidth(),
    windowHeight: getViewPortHeight(),
}, corrector = 1.3
) => {
    const breakValue = 5.5;

    let fontValue =
        (windowSize.windowWidth / Math.max(...text.map((t) => t.length))) * corrector;

    let cociente = windowSize.windowHeight / fontValue;

    return cociente < breakValue * corrector
        ? CarouselTextFontSizeCalculator(text, windowSize, corrector - 0.1)
        : fontValue;
};