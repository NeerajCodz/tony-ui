import * as React from 'react';
import { ButtonGroupBase, type ButtonGroupBaseProps } from '../_base/button-group';
import { cn } from '@/lib/utils';

export interface ButtonGroupProps extends ButtonGroupBaseProps {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', attached = true, ...props }, ref) => (
    <ButtonGroupBase
      ref={ref}
      orientation={orientation}
      attached={attached}
      className={cn(
        'inline-flex gap-1',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        attached &&
          orientation === 'horizontal' &&
          '[&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:not(:first-child)]:-ml-px',
        attached &&
          orientation === 'vertical' &&
          '[&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:first-child]:rounded-b-none [&>button:last-child]:rounded-t-none [&>button:not(:first-child)]:-mt-px',
        className
      )}
      {...props}
    />
  )
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
export default ButtonGroup;
