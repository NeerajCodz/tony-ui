import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'inline-flex h-12 items-center justify-center bg-[var(--hc-surface)] p-1 text-[var(--text-muted)] border border-[var(--hc-hex-line)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-["Barlow"] font-bold uppercase tracking-wider ring-offset-[var(--hc-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-plasma-1)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--hc-plasma-1)] data-[state=active]:text-[var(--hc-bg)] data-[state=active]:shadow-sm ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'mt-4 ring-offset-[var(--hc-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-plasma-1)] focus-visible:ring-offset-2 p-4 border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
