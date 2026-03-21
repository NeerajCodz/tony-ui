'use client';

import { createTooltipFoundation } from '../_shared/family-foundations';

const foundation = createTooltipFoundation('terminal-window');

export const Tooltip = foundation.Tooltip;
export const TooltipTrigger = foundation.TooltipTrigger;
export const TooltipContent = foundation.TooltipContent;
export const TooltipProvider = foundation.TooltipProvider;

export default Tooltip;
