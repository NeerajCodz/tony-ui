import * as React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/ui/components/matrix-grid/button';
import type { ButtonGroupBaseProps } from '../_base/button-group';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          className
        )}
        {...props}
      />
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
