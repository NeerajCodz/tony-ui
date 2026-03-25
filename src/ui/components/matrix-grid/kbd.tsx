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
        'pointer-events-none inline-flex h-6 select-none items-center gap-1 border border-[var(--mg-border)] bg-[var(--mg-surface)] px-2 font-mono text-[12px] font-medium text-[var(--mg-text)] shadow-sm opacity-100',
        className
      )}
      {...props}
    />
  );
});
Kbd.displayName = 'Kbd';

export { Kbd };
