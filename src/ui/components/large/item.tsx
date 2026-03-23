import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(
          'flex items-center gap-2 rounded-xl p-2 transition-colors hover:bg-[var(--lg-surface)]',
          className
        )}
        {...props}
      />
    );
  }
);
Item.displayName = 'Item';

export { Item };
