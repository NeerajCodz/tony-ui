import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
import * as React from 'react';
import { CollapsiblePrimitive } from '../_base/collapsible';
import { cn } from '@/lib/utils';

type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
  effects?: TacticalHudEffects;
};

const Collapsible = React.forwardRef<React.ComponentRef<typeof CollapsiblePrimitive.Root>, CollapsibleProps>(
  ({ effects = 'on', className, ...props }, ref) => (
  <CollapsiblePrimitive.Root ref={ref} className={cn(tacticalHudEffectsClass(effects), className)} {...props} />
));
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  effects?: TacticalHudEffects;
};

const CollapsibleTrigger = React.forwardRef<React.ComponentRef<typeof CollapsiblePrimitive.CollapsibleTrigger>, CollapsibleTriggerProps>(
  ({ effects = 'on', className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger ref={ref} className={cn(tacticalHudEffectsClass(effects), className)} {...props} />
));
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
  effects?: TacticalHudEffects;
};

const CollapsibleContent = React.forwardRef<React.ComponentRef<typeof CollapsiblePrimitive.CollapsibleContent>, CollapsibleContentProps>(
  ({ effects = 'on', className, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent ref={ref} className={cn(tacticalHudEffectsClass(effects), className)} {...props} />
));
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
