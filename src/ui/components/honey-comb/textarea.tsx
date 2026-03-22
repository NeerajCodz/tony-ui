import * as React from 'react';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: HoneyCombEffects;
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', visualType = 'outline', ...props }, ref) => {
    return (
      <textarea
        className={cn(honeyCombEffectsClass(effects), 
          'flex min-h-[80px] w-full border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] px-3 py-2 text-sm ring-offset-[var(--hc-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-plasma-1)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-["JetBrains_Mono"] text-[var(--text-primary)]',
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
