import * as React from 'react';
import { NativeSelectBase } from '../_base/native-select';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
    effects?: boolean;
  }

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, effects = true, ...props }, ref) => {
    return (
      <div className="relative">
        <NativeSelectBase
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] px-3 py-2 text-sm placeholder:text-[var(--ne-text)]/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--ne-text)] appearance-none font-body tracking-wide',
            getNeonGlow(effects),
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </NativeSelectBase>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--ne-primary)]">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
