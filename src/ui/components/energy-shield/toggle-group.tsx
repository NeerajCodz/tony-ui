'use client';

import { createToggleGroupFoundation } from '../_shared/family-foundations';

const foundation = createToggleGroupFoundation('energy-shield');

export const ToggleGroup = foundation.ToggleGroup;
export const ToggleGroupItem = foundation.ToggleGroupItem;

export default ToggleGroup;
