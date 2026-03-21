import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export const CollapsibleBase = CollapsiblePrimitive.Root;
export const CollapsibleTriggerBase = CollapsiblePrimitive.Trigger;

export interface CollapsibleContentBaseProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {}

export const CollapsibleContentBase = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentBaseProps
>((props, ref) => <CollapsiblePrimitive.Content ref={ref} {...props} />);
CollapsibleContentBase.displayName = 'CollapsibleContentBase';
