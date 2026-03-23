import * as React from 'react';

import { cn } from '@/lib/utils';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full items-center',
        '[&>:first-child:not(:last-child)]:rounded-r-none',
        '[&>:last-child:not(:first-child)]:rounded-l-none',
        '[&>:not(:first-child):not(:last-child)]:rounded-none',
        className
      )}
      {...props}
    />
  );
});
InputGroup.displayName = 'InputGroup';

const InputLeftAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex h-10 items-center border border-r-0 border-[var(--ne-primary)] bg-[var(--ne-primary)]/10 px-3 text-sm text-[var(--ne-text)]',
        className
      )}
      {...props}
    />
  );
});
InputLeftAddon.displayName = 'InputLeftAddon';

const InputRightAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex h-10 items-center border border-l-0 border-[var(--ne-primary)] bg-[var(--ne-primary)]/10 px-3 text-sm text-[var(--ne-text)]',
        className
      )}
      {...props}
    />
  );
});
InputRightAddon.displayName = 'InputRightAddon';

export { InputGroup, InputLeftAddon, InputRightAddon };
