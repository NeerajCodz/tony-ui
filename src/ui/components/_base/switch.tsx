import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export interface SwitchBaseProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}

export const SwitchBase = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchBaseProps
>((props, ref) => <SwitchPrimitive.Root ref={ref} {...props} />);
SwitchBase.displayName = 'SwitchBase';

export const SwitchThumbBase = SwitchPrimitive.Thumb;
