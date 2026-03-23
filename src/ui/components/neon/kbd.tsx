import * as React from 'react';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  effects?: boolean;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = true, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--ne-primary)] bg-[var(--ne-bg)] px-1.5 font-mono text-[10px] font-medium text-[var(--ne-primary)] opacity-100',
          getNeonGlow(effects),
          className
        )}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
