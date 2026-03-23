import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: TerminalWindowEffects;
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, effects = 'on', ...props }, ref) => {
    return (
      <div className={cn(terminalWindowEffectsClass(effects), 'relative')}>
        <select
          className={cn(
            'flex h-10 w-full appearance-none items-center justify-between rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] px-3 py-2 text-sm placeholder:text-[var(--tm-phosphor-dim)] focus:outline-none focus:ring-1 focus:ring-[var(--tm-phosphor)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--tm-phosphor)]',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--tm-phosphor)]'>
          <svg className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
