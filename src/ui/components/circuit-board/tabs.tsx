import * as React from 'react';
import { TabsBase, TabsListBase, TabsTriggerBase, TabsContentBase } from '@/ui/components/_base/tabs';
import { cn } from '@/lib/utils';

const Tabs = TabsBase;

const TabsList = React.forwardRef<React.ElementRef<typeof TabsListBase>, React.ComponentPropsWithoutRef<typeof TabsListBase>>(
  ({ className, ...props }, ref) => (
    <TabsListBase
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-none bg-[var(--cb-soldermask)] p-1 text-[var(--cb-trace-dim)] border border-[var(--cb-trace)]',
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsTriggerBase>, React.ComponentPropsWithoutRef<typeof TabsTriggerBase>>(
  ({ className, ...props }, ref) => (
    <TabsTriggerBase
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-trace-lit)] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--cb-trace-dim)]/20 data-[state=active]:text-[var(--cb-trace-lit)] data-[state=active]:shadow-[0_0_10px_var(--cb-trace)] font-mono uppercase tracking-widest',
        className
      )}
      {...props}
    />
  )
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsContentBase>, React.ComponentPropsWithoutRef<typeof TabsContentBase>>(
  ({ className, ...props }, ref) => (
    <TabsContentBase
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-trace-lit)] focus-visible:ring-offset-2 font-mono',
        className
      )}
      {...props}
    />
  )
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
