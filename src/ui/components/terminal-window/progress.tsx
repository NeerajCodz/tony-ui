import * as React from 'react';
import { ProgressBase, ProgressFillBase, type ProgressBaseProps } from '../_base/progress';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface ProgressProps extends ProgressBaseProps {
  effects?: TerminalWindowEffects;
}

const Progress = React.forwardRef<React.ComponentRef<typeof ProgressBase>, ProgressProps>(
  ({ className, effects = 'on', value = 0, ...props }, ref) => (
    <ProgressBase
      ref={ref}
      value={value}
      className={cn(
        terminalWindowEffectsClass(effects),
        'relative h-4 w-full overflow-hidden rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/10',
        className
      )}
      {...props}
    >
      <ProgressFillBase
        className='h-full w-full flex-1 bg-[var(--tm-phosphor)] transition-all'
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressBase>
  )
);
Progress.displayName = 'Progress';

export { Progress };
