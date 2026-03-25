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
        'pointer-events-none inline-flex h-8 select-none items-center gap-1 rounded-lg border border-[var(--lg-border)] bg-[var(--lg-surface)] px-2.5 font-mono text-[14px] font-medium text-[var(--lg-text)] shadow-sm opacity-100',
        className
      )}
      {...props}
    />
  );
});
Kbd.displayName = 'Kbd';

export { Kbd };
