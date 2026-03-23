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
          'flex h-12 w-full rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--ne-text)]/50 focus-visible:outline-none focus-visible:shadow-[0_0_15px_var(--ne-primary)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--ne-text)] font-body tracking-wide transition-all duration-300 shadow-[0_0_5px_var(--ne-primary)]',
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
