import * as React from 'react';
import { TabsPrimitive } from '../_base/tabs';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'inline-flex h-12 items-center justify-center bg-[var(--tp-inset)] p-1 text-[var(--text-muted)] border border-[var(--tp-border-inner)] rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-display font-bold uppercase tracking-wider ring-offset-[var(--tp-bg)] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--tp-panel)] data-[state=active]:text-[var(--tp-accent)] data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-[var(--tp-border-inner)]',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'mt-4 ring-offset-[var(--tp-bg)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] p-4 border border-[var(--tp-border-outer)] bg-[var(--tp-panel)]',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
