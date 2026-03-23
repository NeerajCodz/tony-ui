import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: TerminalWindowEffects;
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, children, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(terminalWindowEffectsClass(effects), 
          'flex h-full w-full flex-col items-center justify-center space-y-4 rounded-none border border-dashed border-[var(--tm-phosphor)] p-8 text-center bg-[var(--tm-bg)] text-[var(--tm-phosphor)]',
          className
        )}
        {...props}
      >
        <div className='font-mono'>{children}</div>
      </div>
    );
  }
);
Empty.displayName = 'Empty';

export { Empty };
