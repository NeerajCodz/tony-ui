import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import * as React from 'react';
import { CollapsiblePrimitive } from '../_base/collapsible';
type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
  effects?: EnergyShieldEffects;
};

const Collapsible = ({ effects = 'on', className, ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root className={energyShieldEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  effects?: EnergyShieldEffects;
};

const CollapsibleTrigger = ({ effects = 'on', className, ...props }: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger className={energyShieldEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
  effects?: EnergyShieldEffects;
};

const CollapsibleContent = ({ effects = 'on', className, ...props }: CollapsibleContentProps) => (
  <CollapsiblePrimitive.CollapsibleContent className={energyShieldEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
