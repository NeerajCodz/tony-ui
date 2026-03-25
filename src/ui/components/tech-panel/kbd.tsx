import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { KbdBase } from '../_base/kbd';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  effects?: TechPanelEffects;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <KbdBase
        className={cn(techPanelEffectsClass(effects), 
          'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-none border border-[var(--tp-border-inner)] bg-[var(--tp-inset)] px-1.5 font-mono text-[10px] font-medium text-[var(--text-muted)] opacity-100',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
