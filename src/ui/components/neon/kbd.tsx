import * as React from 'react';

import { cn } from '@/lib/utils';

const Kbd = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <kbd
    ref={ref}
    className={cn(
      'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--ne-primary)] bg-[var(--ne-bg)] px-1.5 font-mono text-[10px] font-medium text-[var(--ne-text)] opacity-100 shadow-[0_0_5px_var(--ne-primary)]',
      className
    )}
    {...props}
  />
));
Kbd.displayName = 'Kbd';

export { Kbd };
