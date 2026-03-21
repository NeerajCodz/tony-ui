'use client';

import { createCarouselFoundation } from '../_shared/family-foundations';

const foundation = createCarouselFoundation('terminal-window');

export const Carousel = foundation.Carousel;
export const CarouselContent = foundation.CarouselContent;
export const CarouselItem = foundation.CarouselItem;
export const CarouselPrevious = foundation.CarouselPrevious;
export const CarouselNext = foundation.CarouselNext;

export default Carousel;
