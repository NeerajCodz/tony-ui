import * as React from 'react';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: EnergyShieldEffects;
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', visualType = 'outline', ...props }, ref) => {
    return (
      <textarea
        className={cn(energyShieldEffectsClass(effects), 
          'flex min-h-[80px] w-full border border-[var(--es-hex-line)] bg-[var(--es-surface)] px-3 py-2 text-sm ring-offset-[var(--es-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-plasma-1)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)]',
          className
        )}
        style={{ '--corner': '8px' } as React.CSSProperties}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
