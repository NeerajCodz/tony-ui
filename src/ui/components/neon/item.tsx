import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center gap-2 p-2 rounded-md hover:bg-[var(--ne-primary)]/10 transition-colors',
      className
    )}
    {...props}
  />
));
Item.displayName = 'Item';

export { Item };
