import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: TechPanelEffects;
}


const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, effects = 'on', children, ...props }, ref) => {
    return (
      <select
        className={cn(techPanelEffectsClass(effects), 
          'flex h-10 w-full items-center justify-between border border-[var(--tp-border-inner)] bg-[var(--tp-inset)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] appearance-none rounded-none',
          className
        )}
        style={{ } as React.CSSProperties}
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
