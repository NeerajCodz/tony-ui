'use client';

import React, { forwardRef } from 'react';
import * as TabsPrimitives from '@radix-ui/react-tabs';
import type { VariantColors } from '../../types/common';

const BorderTabs = TabsPrimitives.Root;

const BorderTabsList = forwardRef<React.ElementRef<typeof TabsPrimitives.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => {
    const bg = colors?.base || '#e5e7eb';
    const border = colors?.border || 'transparent';
    return (
        <TabsPrimitives.List
            ref={ref}
            className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
            style={{
                backgroundColor: bg,
                border: `2px solid ${border}`,
                borderRadius: '0',
                fontFamily: 'inherit',
                clipPath: 'none',
                ...style
            }}
            {...props}
        />
    );
  }
);
BorderTabsList.displayName = 'BorderTabsList';

const BorderTabsTrigger = forwardRef<React.ElementRef<typeof TabsPrimitives.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => {
    const fg = colors?.foreground || 'currentColor';
    const accent = colors?.accent || colors?.base || 'currentColor';
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
BorderTabsTrigger.displayName = 'BorderTabsTrigger';

const BorderTabsContent = forwardRef<React.ElementRef<typeof TabsPrimitives.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => (
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
BorderTabsContent.displayName = 'BorderTabsContent';

export {
  BorderTabs as Tabs,
  BorderTabsList as TabsList,
  BorderTabsTrigger as TabsTrigger,
  BorderTabsContent as TabsContent,
};
