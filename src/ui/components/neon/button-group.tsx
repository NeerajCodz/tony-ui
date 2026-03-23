import * as React from 'react';

import { cn } from '@/lib/utils';
import { ButtonProps } from './button';

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'inline-flex -space-x-px rounded-none',
      '[&>:first-child]:rounded-l-none',
      '[&>:last-child]:rounded-r-none',
      '[&>:not(:first-child):not(:last-child)]:rounded-none',
      className
    )}
    {...props}
  />
));
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
