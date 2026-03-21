import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export const PopoverBase = PopoverPrimitive.Root;
export const PopoverTriggerBase = PopoverPrimitive.Trigger;
export const PopoverAnchorBase = PopoverPrimitive.Anchor;

export interface PopoverContentBaseProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

export const PopoverContentBase = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentBaseProps
>((props, ref) => <PopoverPrimitive.Content ref={ref} {...props} />);
PopoverContentBase.displayName = 'PopoverContentBase';
