import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface IconButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: string;
  size?: string;
}

export const IconButtonBase = React.forwardRef<HTMLButtonElement, IconButtonBaseProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} {...props} />;
  }
);
IconButtonBase.displayName = 'IconButtonBase';
