import { cn } from '@/lib/utils';
import * as React from 'react';
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NativeSelectBase
        className={cn(
          'flex h-10 w-full items-center justify-between border border-[var(--ac-border)] bg-[var(--ac-surface)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--ac-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] appearance-none',
          className
        )}
        style={{ clipPath: AC_CLIP_PATH, '--corner': '6px' } as React.CSSProperties}
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
