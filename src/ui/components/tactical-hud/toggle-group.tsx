'use client';

import { createToggleGroupFoundation } from '../_shared/family-foundations';

const foundation = createToggleGroupFoundation('tactical-hud');

export const ToggleGroup = foundation.ToggleGroup;
export const ToggleGroupItem = foundation.ToggleGroupItem;

export default ToggleGroup;
