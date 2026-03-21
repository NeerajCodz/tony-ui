import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const TooltipProviderBase = TooltipPrimitive.Provider;
export const TooltipBase = TooltipPrimitive.Root;
export const TooltipTriggerBase = TooltipPrimitive.Trigger;

export interface TooltipContentBaseProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

export const TooltipContentBase = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentBaseProps
>((props, ref) => <TooltipPrimitive.Content ref={ref} {...props} />);
TooltipContentBase.displayName = 'TooltipContentBase';
