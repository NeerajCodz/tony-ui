import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface InputProps extends InputBaseProps {
  effects?: TerminalWindowEffects;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, effects = 'on', type, ...props }, ref) => {
    return (
      <InputBase
        type={type}
        className={cn(terminalWindowEffectsClass(effects), 
          'flex h-10 w-full rounded-none border border-b-2 border-t-0 border-r-0 border-l-0 border-[var(--tm-phosphor)]/50 bg-transparent px-3 py-2 text-sm text-[var(--tm-phosphor)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--tm-phosphor-dim)] focus-visible:outline-none focus-visible:border-b-[var(--tm-phosphor)] focus-visible:bg-[var(--tm-phosphor)]/5 disabled:cursor-not-allowed disabled:opacity-50 font-mono tracking-widest',
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
