import { cn } from '@/lib/utils';
import * as React from 'react';
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}


const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NativeSelectBase
        className={cn(
          'flex h-10 w-full items-center justify-between border border-[var(--dp-border)] bg-[var(--dp-surface)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--dp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] appearance-none',
          className
        )}
        style={{ '--corner': '6px' } as React.CSSProperties}
        ref={ref}
        {...props}
      >
        {children}
      </NativeSelectBase>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
