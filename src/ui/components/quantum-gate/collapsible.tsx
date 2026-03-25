import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import * as React from 'react';
import { CollapsiblePrimitive } from '../_base/collapsible';
type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
  effects?: QuantumGateEffects;
};

const Collapsible = ({ effects = 'on', className, ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root className={quantumGateEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  effects?: QuantumGateEffects;
};

const CollapsibleTrigger = ({ effects = 'on', className, ...props }: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger className={quantumGateEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
  effects?: QuantumGateEffects;
};

const CollapsibleContent = ({ effects = 'on', className, ...props }: CollapsibleContentProps) => (
  <CollapsiblePrimitive.CollapsibleContent className={quantumGateEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
