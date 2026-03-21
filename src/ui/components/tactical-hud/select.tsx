'use client';

import { createSelectFoundation } from '../_shared/family-foundations';

const foundation = createSelectFoundation('tactical-hud');

export const Select = foundation.Select;
export const SelectGroup = foundation.SelectGroup;
export const SelectValue = foundation.SelectValue;
export const SelectTrigger = foundation.SelectTrigger;
export const SelectContent = foundation.SelectContent;
export const SelectLabel = foundation.SelectLabel;
export const SelectItem = foundation.SelectItem;
export const SelectSeparator = foundation.SelectSeparator;
export const SelectScrollUpButton = foundation.SelectScrollUpButton;
export const SelectScrollDownButton = foundation.SelectScrollDownButton;

export default Select;
