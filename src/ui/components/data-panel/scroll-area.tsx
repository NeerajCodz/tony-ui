'use client';

import { createScrollAreaFoundation } from '../_shared/family-foundations';

const foundation = createScrollAreaFoundation('data-panel');

export const ScrollArea = foundation.ScrollArea;
export const ScrollBar = foundation.ScrollBar;

export default ScrollArea;
