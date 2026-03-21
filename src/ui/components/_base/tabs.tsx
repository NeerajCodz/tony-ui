import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const TabsBase = TabsPrimitive.Root;

export interface TabsListBaseProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

export const TabsListBase = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListBaseProps
>((props, ref) => <TabsPrimitive.List ref={ref} {...props} />);
TabsListBase.displayName = 'TabsListBase';

export interface TabsTriggerBaseProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

export const TabsTriggerBase = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerBaseProps
>((props, ref) => <TabsPrimitive.Trigger ref={ref} {...props} />);
TabsTriggerBase.displayName = 'TabsTriggerBase';

export interface TabsContentBaseProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

export const TabsContentBase = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentBaseProps
>((props, ref) => <TabsPrimitive.Content ref={ref} {...props} />);
TabsContentBase.displayName = 'TabsContentBase';
