import { cn } from '@/lib/utils';
import * as React from 'react';
import { KbdBase } from '../_base/kbd';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => {
    return (
      <KbdBase
        className={cn(
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--cp-border)] bg-[var(--cp-bg)] px-1.5 font-mono text-[10px] font-medium text-[var(--text-muted)] opacity-100',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
