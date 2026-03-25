import * as React from 'react';
import { TabsPrimitive } from '../_base/tabs';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'inline-flex h-12 items-center justify-center bg-[var(--hf-surface)] p-1 text-[var(--hf-text)] border border-[var(--hf-border-dim)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-sans font-bold uppercase tracking-wider ring-offset-[var(--hf-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--hf-border-main)] data-[state=active]:text-[var(--hf-bg)] data-[state=active]:shadow-sm ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'mt-4 ring-offset-[var(--hf-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] focus-visible:ring-offset-2 p-4 border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
