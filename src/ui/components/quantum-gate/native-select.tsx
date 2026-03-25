import * as React from 'react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: QuantumGateEffects;
}


const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, effects = 'on', children, ...props }, ref) => {
    return (
      <NativeSelectBase
        className={cn(quantumGateEffectsClass(effects), 
          'flex h-10 w-full items-center justify-between border border-[var(--qg-border)] bg-[var(--qg-surface)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--qg-iris-1)] disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--text-primary)] appearance-none',
          className
        )}
        style={{ '--corner': '6px' } as React.CSSProperties}
        ref={ref}
        {...props}
      >
        {children}
      </NativeSelectBase>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
