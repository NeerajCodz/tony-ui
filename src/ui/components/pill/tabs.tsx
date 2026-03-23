import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-12 items-center justify-center bg-[var(--ac-surface)] p-1 text-[var(--text-muted)] border border-[var(--ac-border)] [--corner:6px]',
      className
    )}
    style={{ clipPath: AC_CLIP_PATH } as React.CSSProperties}
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
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-mono font-bold uppercase tracking-wider ring-offset-[var(--ac-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--ac-accent)] data-[state=active]:text-[var(--ac-bg)] data-[state=active]:shadow-sm [--corner:4px]',
      className
    )}
    style={{ clipPath: AC_CLIP_PATH } as React.CSSProperties}
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
      'mt-4 ring-offset-[var(--ac-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac-accent)] focus-visible:ring-offset-2 p-4 border border-[var(--ac-border)] bg-[var(--ac-surface)] [--corner:10px]',
      className
    )}
    style={{ clipPath: AC_CLIP_PATH } as React.CSSProperties}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
