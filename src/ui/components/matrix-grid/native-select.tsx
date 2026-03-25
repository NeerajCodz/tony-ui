import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <NativeSelectBase
          className={cn(
            'flex h-10 w-full appearance-none items-center justify-between border border-[var(--mg-border)] bg-[var(--mg-surface)] px-3 py-2 text-sm font-mono shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--mg-text)] hover:border-[var(--mg-accent)] transition-colors',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </NativeSelectBase>
        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 pointer-events-none text-[var(--mg-text)]" />
      </div>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
