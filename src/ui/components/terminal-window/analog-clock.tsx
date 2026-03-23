import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
  time?: Date;
  effects?: TerminalWindowEffects;
}

const AnalogClock = React.forwardRef<HTMLDivElement, AnalogClockProps>(
  ({ className, time = new Date(), effects = 'on', ...props }, ref) => {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    return (
      <div
        ref={ref}
        className={cn(terminalWindowEffectsClass(effects), 
          'relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[var(--tm-phosphor)] bg-[var(--tm-bg)]',
          className
        )}
        {...props}
      >
        {/* Hour Hand */}
        <div
          className='absolute bottom-1/2 left-1/2 h-[30%] w-1 -translate-x-1/2 origin-bottom bg-[var(--tm-phosphor)]'
          style={{ transform: \otate(\deg)\ }}
        />
        {/* Minute Hand */}
        <div
          className='absolute bottom-1/2 left-1/2 h-[40%] w-0.5 -translate-x-1/2 origin-bottom bg-[var(--tm-phosphor)]'
          style={{ transform: \otate(\deg)\ }}
        />
        {/* Second Hand */}
        <div
          className='absolute bottom-1/2 left-1/2 h-[45%] w-px -translate-x-1/2 origin-bottom bg-[var(--tm-red)]'
          style={{ transform: \otate(\deg)\ }}
        />
        {/* Center Dot */}
        <div className='absolute z-10 h-2 w-2 rounded-full bg-[var(--tm-phosphor)]' />
      </div>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
