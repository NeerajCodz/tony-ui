import { cn } from '@/lib/utils';
import { IconButtonBase, type IconButtonBaseProps } from '@/ui/components/_base/icon-button';
import { buttonVariants } from '@/ui/components/circuit-board/button';
import * as React from 'react';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonBaseProps>(
  ({ className, visualType, size, ...props }, ref) => {
    return (
      <IconButtonBase
        ref={ref}
        className={cn(buttonVariants({ visualType, size, className }), 'h-10 w-10 p-0')}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
