import { cn } from '@/lib/utils';
import * as React from 'react';
import { TabsBase, TabsContentBase, TabsListBase, TabsTriggerBase, type TabsBaseProps } from '../_base/tabs';

export interface TabsProps extends TabsBaseProps {}

export const Tabs = TabsBase;

export const TabsList = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TabsListBase>>(
  ({ className, ...props }, ref) => (
    <TabsListBase
      ref={ref}
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-[var(--df-surface)] p-1 text-[var(--df-muted)]',
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof TabsTriggerBase>>(
  ({ className, visualType = 'default', ...props }, ref) => (
    <TabsTriggerBase
      ref={ref}
      visualType={visualType}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-[var(--df-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-[var(--df-bg)] data-[state=active]:text-[var(--df-text)] data-[state=active]:shadow-sm',
        className
      )}
      {...props}
    />
  )
);
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TabsContentBase>>(
  ({ className, ...props }, ref) => (
    <TabsContentBase
      ref={ref}
      className={cn(
        'mt-2 ring-offset-[var(--df-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  )
);
TabsContent.displayName = 'TabsContent';
