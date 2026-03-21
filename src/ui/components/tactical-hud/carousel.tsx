'use client';

import { createCarouselFoundation } from '../_shared/family-foundations';

const foundation = createCarouselFoundation('tactical-hud');

export const Carousel = foundation.Carousel;
export const CarouselContent = foundation.CarouselContent;
export const CarouselItem = foundation.CarouselItem;
export const CarouselPrevious = foundation.CarouselPrevious;
export const CarouselNext = foundation.CarouselNext;

export default Carousel;
