import * as React from 'react';
import { cn } from '@/lib/utils';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex w-full items-center space-x-2', className)}
      {...props}
    />
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
        'flex h-10 items-center border border-[var(--mg-border)] bg-[var(--mg-surface)] px-3 text-sm text-[var(--mg-text-dim)] font-mono',
        className
      )}
      {...props}
    />
  );
});
InputGroupText.displayName = 'InputGroupText';

export { InputGroup, InputGroupText };
