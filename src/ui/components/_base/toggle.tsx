import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';

export interface ToggleBaseProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  variant?: string;
  size?: string;
}

export const ToggleBase = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleBaseProps
>((props, ref) => <TogglePrimitive.Root ref={ref} {...props} />);
ToggleBase.displayName = 'ToggleBase';
