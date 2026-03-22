import * as React from 'react';
import { ButtonGroupBase } from '@/ui/components/_base/button-group';
import { cn } from '@/lib/utils';

const ButtonGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof ButtonGroupBase>>(
  ({ className, ...props }, ref) => (
    <ButtonGroupBase
      ref={ref}
      className={cn('flex gap-2', className)}
      {...props}
    />
  )
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
