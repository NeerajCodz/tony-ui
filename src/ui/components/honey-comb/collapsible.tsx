import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
  effects?: HoneyCombEffects;
};

const Collapsible = ({ effects = 'on', className, ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root className={honeyCombEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  effects?: HoneyCombEffects;
};

const CollapsibleTrigger = ({ effects = 'on', className, ...props }: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger className={honeyCombEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
  effects?: HoneyCombEffects;
};

const CollapsibleContent = ({ effects = 'on', className, ...props }: CollapsibleContentProps) => (
  <CollapsiblePrimitive.CollapsibleContent className={honeyCombEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
