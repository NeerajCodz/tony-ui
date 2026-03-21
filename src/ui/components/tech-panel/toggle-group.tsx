'use client';

import { createToggleGroupFoundation } from '../_shared/family-foundations';

const foundation = createToggleGroupFoundation('tech-panel');

export const ToggleGroup = foundation.ToggleGroup;
export const ToggleGroupItem = foundation.ToggleGroupItem;

export default ToggleGroup;
