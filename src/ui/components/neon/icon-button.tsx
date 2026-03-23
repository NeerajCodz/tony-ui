import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        className={cn('rounded-full shadow-[0_0_10px_var(--ne-primary)]', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
