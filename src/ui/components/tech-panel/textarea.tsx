import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { TextareaBase } from '../_base/textarea';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: TechPanelEffects;
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', visualType = 'outline', ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(techPanelEffectsClass(effects), 
          'flex min-h-[80px] w-full border border-[var(--tp-border-inner)] bg-[var(--tp-inset)] px-3 py-2 text-sm ring-offset-[var(--tp-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] rounded-none',
          className
        )}
        style={{ } as React.CSSProperties}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
