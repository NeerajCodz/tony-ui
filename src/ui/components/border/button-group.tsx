import * as React from 'react';
import { ButtonGroupBase } from '@/ui/components/_base/button-group';
import { cn } from '@/lib/utils';

const ButtonGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof ButtonGroupBase>>(
  ({ className, ...props }, ref) => (
    <ButtonGroupBase
      ref={ref}
      className={cn('flex -space-x-px [&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button]:relative [&>button:focus-visible]:z-10', className)}
      {...props}
    />
  )
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
