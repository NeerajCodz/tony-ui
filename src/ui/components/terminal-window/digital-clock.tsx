import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';
import type { DigitalClockBaseProps } from '../_base/digital-clock';

export interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  time?: Date;
  effects?: TerminalWindowEffects;
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, time = new Date(), effects = 'on', ...props }, ref) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
      <div
        ref={ref}
        className={cn(terminalWindowEffectsClass(effects), 
          'flex items-center justify-center rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-4 font-mono text-4xl font-bold tracking-widest text-[var(--tm-phosphor)]',
          className
        )}
        {...props}
      >
        <span>{hours}</span>
        <span className='animate-pulse'>:</span>
        <span>{minutes}</span>
        <span className='animate-pulse'>:</span>
        <span>{seconds}</span>
      </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
