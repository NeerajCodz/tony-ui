'use client';

import React, { forwardRef } from 'react';
import * as TabsPrimitives from '@radix-ui/react-tabs';
import type { VariantColors } from '../../types/common';

const AngularCornerTabs = TabsPrimitives.Root;

const AngularCornerTabsList = forwardRef<React.ElementRef<typeof TabsPrimitives.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, type, style, ...props }, ref) => {
    let bg = colors?.base || '#e5e7eb';
    let border = colors?.border || 'transparent';
    if (type === 'inverse') {
      const temp = bg;
      bg = border;
      border = temp;
    } else if (type === 'contrast') {
      bg = colors?.base || '#000000';
      border = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      bg = colors?.muted || bg;
      border = colors?.border ? `${colors.border}40` : border;
    }
    return (
        <TabsPrimitives.List
            ref={ref}
            className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
            style={{
                backgroundColor: bg,
                border: `0 solid ${border}`,
                borderRadius: '0',
                fontFamily: 'inherit',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
                ...style
            }}
            {...props}
        />
    );
  }
);
AngularCornerTabsList.displayName = 'AngularCornerTabsList';

const AngularCornerTabsTrigger = forwardRef<React.ElementRef<typeof TabsPrimitives.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, type, style, ...props }, ref) => {
    let fg = colors?.foreground || 'currentColor';
    let accent = colors?.accent || colors?.base || 'currentColor';
    if (type === 'inverse') {
      fg = colors?.base || 'currentColor';
    } else if (type === 'contrast') {
      fg = colors?.foreground || '#ffffff';
      accent = fg;
    }
    return (
        <TabsPrimitives.Trigger
            ref={ref}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
            style={{
                color: fg,
                fontFamily: 'inherit',
                borderRadius: '0',
                ...style
            }}
            {...props}
        />
    );
  }
);
AngularCornerTabsTrigger.displayName = 'AngularCornerTabsTrigger';

const AngularCornerTabsContent = forwardRef<React.ElementRef<typeof TabsPrimitives.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <TabsPrimitives.Content
      ref={ref}
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      style={{
          fontFamily: 'inherit',
          ...style
      }}
      {...props}
    />
  )
);
AngularCornerTabsContent.displayName = 'AngularCornerTabsContent';

export {
  AngularCornerTabs as Tabs,
  AngularCornerTabsList as TabsList,
  AngularCornerTabsTrigger as TabsTrigger,
  AngularCornerTabsContent as TabsContent,
};
