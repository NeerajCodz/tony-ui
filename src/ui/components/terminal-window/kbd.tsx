import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  effects?: TerminalWindowEffects;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(terminalWindowEffectsClass(effects), 
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] px-1.5 font-mono text-[10px] font-medium text-[var(--tm-phosphor)] shadow-[2px_2px_0px_var(--tm-phosphor)] opacity-100',
          className
        )}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
