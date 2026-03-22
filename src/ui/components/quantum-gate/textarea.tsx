import * as React from 'react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: QuantumGateEffects;
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', visualType = 'outline', ...props }, ref) => {
    return (
      <textarea
        className={cn(quantumGateEffectsClass(effects), 
          'flex min-h-[80px] w-full border border-(--qg-border) bg-(--qg-surface) px-3 py-2 text-sm ring-offset-(--qg-bg) placeholder:text-(--text-muted) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--qg-iris-1) focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans text-(--text-primary)',
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
