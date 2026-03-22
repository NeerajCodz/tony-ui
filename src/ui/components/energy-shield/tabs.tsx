import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'inline-flex h-12 items-center justify-center bg-[var(--es-surface)] p-1 text-[var(--text-muted)] border border-[var(--es-hex-line)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-sans font-bold uppercase tracking-wider ring-offset-[var(--es-bg)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-plasma-1)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--es-plasma-1)] data-[state=active]:text-[var(--es-bg)] data-[state=active]:shadow-sm ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'mt-4 ring-offset-[var(--es-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-plasma-1)] focus-visible:ring-offset-2 p-4 border border-[var(--es-hex-line)] bg-[var(--es-surface)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
