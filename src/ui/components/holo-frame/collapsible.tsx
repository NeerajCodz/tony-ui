import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import * as React from 'react';
import { CollapsiblePrimitive } from '../_base/collapsible';
type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
  effects?: HoloFrameEffects;
};

const Collapsible = ({ effects = 'on', className, ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root className={holoFrameEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> & {
  effects?: HoloFrameEffects;
};

const CollapsibleTrigger = ({ effects = 'on', className, ...props }: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger className={holoFrameEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> & {
  effects?: HoloFrameEffects;
};

const CollapsibleContent = ({ effects = 'on', className, ...props }: CollapsibleContentProps) => (
  <CollapsiblePrimitive.CollapsibleContent className={holoFrameEffectsClass(effects) + (className ? ` ${className}` : '')} {...props} />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
