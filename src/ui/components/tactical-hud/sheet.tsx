'use client';

import { createSheetFoundation } from '../_shared/family-foundations';

const foundation = createSheetFoundation('tactical-hud');

export const Sheet = foundation.Sheet;
export const SheetPortal = foundation.SheetPortal;
export const SheetOverlay = foundation.SheetOverlay;
export const SheetTrigger = foundation.SheetTrigger;
export const SheetClose = foundation.SheetClose;
export const SheetContent = foundation.SheetContent;
export const SheetHeader = foundation.SheetHeader;
export const SheetFooter = foundation.SheetFooter;
export const SheetTitle = foundation.SheetTitle;
export const SheetDescription = foundation.SheetDescription;

export default Sheet;
