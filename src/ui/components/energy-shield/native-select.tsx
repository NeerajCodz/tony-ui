import * as React from 'react';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: EnergyShieldEffects;
}


const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, effects = 'on', children, ...props }, ref) => {
    return (
      <select
        className={cn(energyShieldEffectsClass(effects), 
          'flex h-10 w-full items-center justify-between border border-[var(--es-hex-line)] bg-[var(--es-surface)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--es-plasma-1)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] appearance-none',
          className
        )}
        style={{ '--corner': '6px' } as React.CSSProperties}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
