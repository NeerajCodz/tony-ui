import * as React from 'react';
import { cn } from '@/lib/utils';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center space-x-0', className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: cn(
              child.props.className,
              'rounded-none first:rounded-l-none last:rounded-r-none focus:relative z-10'
            ),
          } as any);
        }
        return child;
      })}
    </div>
  );
});
InputGroup.displayName = 'InputGroup';

const InputGroupText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex h-10 items-center border-2 border-[var(--ne-primary)] bg-[var(--ne-primary)]/10 px-3 text-sm text-[var(--ne-text)] font-body',
        className
      )}
      {...props}
    />
  );
});
InputGroupText.displayName = 'InputGroupText';

export { InputGroup, InputGroupText };
