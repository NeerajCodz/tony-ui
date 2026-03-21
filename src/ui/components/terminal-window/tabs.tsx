'use client';

import { createTabsFoundation } from '../_shared/family-foundations';

const foundation = createTabsFoundation('terminal-window');

export const Tabs = foundation.Tabs;
export const TabsList = foundation.TabsList;
export const TabsTrigger = foundation.TabsTrigger;
export const TabsContent = foundation.TabsContent;

export default Tabs;
