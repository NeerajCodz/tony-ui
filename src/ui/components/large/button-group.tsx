import * as React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/ui/components/large/button';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex rounded-2xl shadow-sm',
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
              'rounded-none border-[var(--lg-border)] focus:z-10',
              orientation === 'horizontal' && index === 0 && 'rounded-l-2xl',
              orientation === 'horizontal' &&
                index === React.Children.count(children) - 1 &&
                'rounded-r-2xl',
              orientation === 'vertical' && index === 0 && 'rounded-t-2xl',
              orientation === 'vertical' &&
                index === React.Children.count(children) - 1 &&
                'rounded-b-2xl',
              orientation === 'horizontal' && index !== 0 && '-ml-[1px]',
              orientation === 'vertical' && index !== 0 && '-mt-[1px]'
            ),
          });
        })}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
