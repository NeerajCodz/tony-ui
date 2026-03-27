import { cn } from '@/lib/utils';
import { KbdBase } from '@/ui/components/_base/kbd';
import * as React from 'react';

const Kbd = React.forwardRef<HTMLElement, React.ComponentProps<typeof KbdBase>>(
  ({ className, ...props }, ref) => (
    <KbdBase
      ref={ref}
      className={cn('rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] px-1 font-mono font-bold text-[var(--cb-trace-lit)] uppercase tracking-widest shadow-[0_0_5px_var(--cb-trace)]', className)}
      {...props}
    />
  )
);
Kbd.displayName = 'Kbd';
export { Kbd };
