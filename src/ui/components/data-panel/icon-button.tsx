import { cn } from '@/lib/utils';
import * as React from 'react';
import { Button, ButtonProps } from './button';

export interface IconButtonProps extends ButtonProps {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn('aspect-square p-0', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
