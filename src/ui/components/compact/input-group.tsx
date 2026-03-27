import { cn } from '@/lib/utils';
import * as React from 'react';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center space-x-2', className)}
      {...props}
    />
  );
});
InputGroup.displayName = 'InputGroup';

export { InputGroup };
