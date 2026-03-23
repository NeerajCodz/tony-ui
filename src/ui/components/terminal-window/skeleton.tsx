import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'animate-pulse rounded-none bg-[var(--tm-phosphor)]/20', className)}
      {...props}
    />
  );
});
Skeleton.displayName = 'Skeleton';

export { Skeleton };
