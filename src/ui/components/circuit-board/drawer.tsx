'use client';

import { createDrawerFoundation } from '../_shared/family-foundations';

const foundation = createDrawerFoundation('circuit-board');

export const Overlay = foundation.Overlay;
export const Content = foundation.Content;
export const Title = foundation.Title;
export const Description = foundation.Description;

export default foundation;
