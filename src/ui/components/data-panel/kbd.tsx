import * as React from 'react';
import { cn } from '@/lib/utils';
import { KbdBase } from '../_base/kbd';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => {
    return (
      <KbdBase
        className={cn(
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--dp-border)] bg-[var(--dp-surface)] px-1.5 font-mono text-[10px] font-medium text-[var(--text-muted)] opacity-100',
          className
        )}
        style={{ clipPath: 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))', '--corner': '2px' } as React.CSSProperties}
        ref={ref}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
