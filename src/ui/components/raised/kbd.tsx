import * as React from 'react';
import { cn } from '@/lib/utils';
import { KbdBase } from '../_base/kbd';

const Kbd = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <KbdBase
      ref={ref}
      className={cn(
        'pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded-[2px] border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] px-1.5 font-mono text-[12px] font-bold text-[var(--ra-text)] shadow-[2px_2px_0_var(--ra-shadow)] opacity-100 uppercase tracking-wide',
        className
      )}
      {...props}
    />
  );
});
Kbd.displayName = 'Kbd';

export { Kbd };
