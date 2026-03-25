import * as React from 'react';
import { cn } from '@/lib/utils';
import type { InputGroupBaseProps } from '../_base/input-group';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full items-center space-x-2 rounded-2xl border border-[var(--lg-border)] bg-[var(--lg-surface)] p-1 focus-within:ring-2 focus-within:ring-[var(--lg-accent)] focus-within:ring-offset-2 ring-offset-[var(--lg-bg)]',
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
               'border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent rounded-xl'
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
