import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '../_base/item';
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
          'flex items-center gap-2 rounded-[2px] p-2 transition-transform active:translate-x-[2px] active:translate-y-[2px] hover:bg-[var(--ra-surface)] font-mono',
          className
        )}
        {...props}
      />
    );
  }
);
Item.displayName = 'Item';

export { Item };
