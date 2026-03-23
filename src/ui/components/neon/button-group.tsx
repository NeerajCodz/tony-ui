import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: cn(
                child.props.className,
                'rounded-none first:rounded-l-none last:rounded-r-none',
                orientation === 'horizontal'
                  ? 'border-r-0 last:border-r-2 focus:relative'
                  : 'border-b-0 last:border-b-2 w-full focus:relative'
              ),
            } as any);
          }
          return child;
        })}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
