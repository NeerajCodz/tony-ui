import { cn } from '@/lib/utils';
import { TabsBase, TabsContentBase, TabsListBase, TabsTriggerBase } from '@/ui/components/_base/tabs';
import * as React from 'react';

const Tabs = TabsBase;

const TabsList = React.forwardRef<React.ComponentRef<typeof TabsListBase>, React.ComponentPropsWithoutRef<typeof TabsListBase>>(
  ({ className, ...props }, ref) => (
    <TabsListBase
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-none bg-muted p-1 text-muted-foreground border border-[var(--br-border-dim)]',
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<React.ComponentRef<typeof TabsTriggerBase>, React.ComponentPropsWithoutRef<typeof TabsTriggerBase>>(
  ({ className, ...props }, ref) => (
    <TabsTriggerBase
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm font-mono data-[state=active]:border-b-2 data-[state=active]:border-[var(--br-accent)]',
        className
      )}
      {...props}
    />
  )
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<React.ComponentRef<typeof TabsContentBase>, React.ComponentPropsWithoutRef<typeof TabsContentBase>>(
  ({ className, ...props }, ref) => (
    <TabsContentBase
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono',
        className
      )}
      {...props}
    />
  )
);
TabsContent.displayName = 'TabsContent';

export { Tabs,TabsContent,TabsList,TabsTrigger };
