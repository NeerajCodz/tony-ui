import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'inline-flex h-10 items-center justify-center rounded-none bg-[var(--tm-bg)] border border-[var(--tm-phosphor)] p-1 text-[var(--tm-phosphor-dim)]',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'inline-flex items-center justify-center whitespace-nowrap rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tm-phosphor)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--tm-phosphor)] data-[state=active]:text-[var(--tm-bg)] data-[state=active]:shadow-sm uppercase font-mono tracking-wider',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tm-phosphor)] focus-visible:ring-offset-2 border border-[var(--tm-phosphor)] p-4 bg-[var(--tm-phosphor)]/5',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
