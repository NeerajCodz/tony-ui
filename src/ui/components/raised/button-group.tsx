import * as React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/ui/components/raised/button';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex rounded-[4px] shadow-[4px_4px_0_var(--ra-shadow)] border-2 border-[var(--ra-border)] bg-[var(--ra-surface)]',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          return React.cloneElement(child as React.ReactElement<ButtonProps>, {
            className: cn(
              (child.props as any).className,
              'rounded-none border-0 shadow-none hover:shadow-none focus:shadow-none active:translate-x-0 active:translate-y-0 active:bg-[var(--ra-accent)]/20',
              orientation === 'horizontal' && index !== React.Children.count(children) - 1 && 'border-r-2 border-[var(--ra-border)]',
              orientation === 'vertical' && index !== React.Children.count(children) - 1 && 'border-b-2 border-[var(--ra-border)]'
            ),
          });
        })}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
