import * as React from 'react';
import { cn } from '@/lib/utils';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full items-center space-x-1 rounded-[4px] border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] p-1 shadow-[4px_4px_0_var(--ra-shadow)] focus-within:border-[var(--ra-accent)] focus-within:shadow-[2px_2px_0_var(--ra-shadow)] transition-all',
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
           // We need to remove border and ring from children inputs/buttons to make them seamless
           return React.cloneElement(child as React.ReactElement<any>, {
             className: cn(
               (child.props as any).className,
               'border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent rounded-[2px] active:translate-x-0 active:translate-y-0'
             )
           })
        }
        return child;
      })}
    </div>
  );
});
InputGroup.displayName = 'InputGroup';

export { InputGroup };
