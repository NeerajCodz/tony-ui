import * as React from 'react';
import { InputGroupBase } from '@/ui/components/_base/input-group';
import { cn } from '@/lib/utils';

const InputGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof InputGroupBase>>(
  ({ className, ...props }, ref) => (
    <InputGroupBase
      ref={ref}
      className={cn('flex items-center space-x-2', className)}
      {...props}
    />
  )
);
InputGroup.displayName = 'InputGroup';

export { InputGroup };
