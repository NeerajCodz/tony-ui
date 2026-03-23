import * as React from 'react';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    effects?: boolean;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, effects = true, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--ne-text)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--ne-text)] font-body tracking-wide transition-shadow',
          getNeonGlow(effects),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
