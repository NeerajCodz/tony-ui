import * as React from 'react';
import { TabsPrimitive } from '../_base/tabs';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'inline-flex h-12 items-center justify-center bg-[var(--th-surface)] p-1 text-[var(--th-muted)]',
      className
    )}
    style={{ ...bracketsStyle, ...style }}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-sans font-bold uppercase tracking-wider ring-offset-[var(--th-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--th-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--th-primary)] data-[state=active]:text-[var(--th-bg)] data-[state=active]:shadow-sm ',
      className
    )}
    style={{ ...bracketsStyle, '--corner': '2px', '--width': '1px', '--pip': '0px' } as React.CSSProperties}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'mt-4 ring-offset-[var(--th-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--th-primary)] focus-visible:ring-offset-2 p-4 bg-[var(--th-surface)] ',
      className
    )}
    style={{ ...bracketsStyle, ...style }}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
