import * as React from 'react';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  effects?: HoneyCombEffects;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <kbd
        className={cn(honeyCombEffectsClass(effects), 
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] px-1.5 font-["JetBrains_Mono"] text-[10px] font-medium text-[var(--text-muted)] opacity-100',
          className
        )}
        style={{ clipPath: 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))', '--corner': '2px' } as React.CSSProperties}
        ref={ref}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
