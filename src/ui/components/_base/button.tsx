import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: string;
  size?: string;
}

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} {...props} />;
  }
);
ButtonBase.displayName = 'ButtonBase';
