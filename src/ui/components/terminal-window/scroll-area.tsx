'use client';

import { createScrollAreaFoundation } from '../_shared/family-foundations';

const foundation = createScrollAreaFoundation('terminal-window');

export const ScrollArea = foundation.ScrollArea;
export const ScrollBar = foundation.ScrollBar;

export default ScrollArea;
