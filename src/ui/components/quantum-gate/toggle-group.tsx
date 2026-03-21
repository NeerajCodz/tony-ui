'use client';

import { createToggleGroupFoundation } from '../_shared/family-foundations';

const foundation = createToggleGroupFoundation('quantum-gate');

export const ToggleGroup = foundation.ToggleGroup;
export const ToggleGroupItem = foundation.ToggleGroupItem;

export default ToggleGroup;
