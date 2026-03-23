import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full bg-[var(--mg-surface)] border border-[var(--mg-border)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--mg-text-dim)] focus-visible:outline-none focus-visible:border-[var(--mg-accent)] focus-visible:shadow-[0_0_10px_var(--mg-accent)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--mg-text)] font-mono tracking-wide transition-all duration-200',
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
