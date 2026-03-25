import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/ui/components/large/button';
import type { IconButtonBaseProps } from '../_base/icon-button';

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn('rounded-2xl', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
