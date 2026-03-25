import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import * as React from 'react';
import { CollapsiblePrimitive } from '../_base/collapsible';
type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
  effects?: TechPanelEffects;
};

const Collapsible = ({ effects = 'on', className, ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root className={techPanelEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  effects?: TechPanelEffects;
};

const CollapsibleTrigger = ({ effects = 'on', className, ...props }: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger className={techPanelEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
  effects?: TechPanelEffects;
};

const CollapsibleContent = ({ effects = 'on', className, ...props }: CollapsibleContentProps) => (
  <CollapsiblePrimitive.CollapsibleContent className={techPanelEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
