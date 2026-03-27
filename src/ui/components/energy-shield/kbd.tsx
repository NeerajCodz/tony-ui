import { cn } from '@/lib/utils';
import * as React from 'react';
import { KbdBase } from '../_base/kbd';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  effects?: EnergyShieldEffects;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <KbdBase
        className={cn(energyShieldEffectsClass(effects), 
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--es-hex-line)] bg-[var(--es-surface)] px-1.5 font-mono text-[10px] font-medium text-[var(--text-muted)] opacity-100',
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
