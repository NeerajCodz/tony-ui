import * as React from 'react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { TextareaBase } from '../_base/textarea';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: HoloFrameEffects;
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', visualType = 'outline', ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(holoFrameEffectsClass(effects), 
          'flex min-h-[80px] w-full border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] px-3 py-2 text-sm ring-offset-[var(--hf-bg)] placeholder:text-[var(--hf-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--hf-text)]',
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
