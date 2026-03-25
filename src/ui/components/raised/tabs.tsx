import * as React from 'react';
import { TabsPrimitive } from '../_base/tabs';
import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-12 items-center justify-center rounded-[4px] bg-[var(--ra-surface)] p-1 text-[var(--text-muted)] border-2 border-[var(--ra-border)] shadow-[4px_4px_0_var(--ra-shadow)]',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-[2px] px-4 py-2 text-sm font-medium ring-offset-[var(--ra-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--ra-accent)] data-[state=active]:text-white font-mono uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 ring-offset-[var(--ra-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] focus-visible:ring-offset-2 rounded-[4px] p-4 bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] shadow-[4px_4px_0_var(--ra-shadow)] font-mono',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
