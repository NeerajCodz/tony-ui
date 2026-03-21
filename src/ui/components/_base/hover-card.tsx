import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

export const HoverCardBase = HoverCardPrimitive.Root;
export const HoverCardTriggerBase = HoverCardPrimitive.Trigger;

export interface HoverCardContentBaseProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {}

export const HoverCardContentBase = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentBaseProps
>((props, ref) => <HoverCardPrimitive.Content ref={ref} {...props} />);
HoverCardContentBase.displayName = 'HoverCardContentBase';
