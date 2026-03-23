import * as React from 'react';
import { cn } from '@/lib/utils';
import { glassInputClass, type GlassEffects } from './_effects';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  effects?: GlassEffects;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, effects = 'on', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--df-muted-text)]/50 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--df-text)] font-sans',
          glassInputClass(effects),
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
