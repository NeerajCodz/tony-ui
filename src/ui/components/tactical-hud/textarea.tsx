import * as React from 'react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';
import { TextareaBase } from '../_base/textarea';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: TacticalHudEffects;
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}


const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', visualType = 'outline', style, ...props }, ref) => {
    
    // Default to brackets style for outline/solid
    const useBrackets = !visualType || ['outline', 'solid'].includes(visualType);
    const componentStyle = useBrackets ? { ...bracketsStyle, ...style } : style;

    return (
      <TextareaBase
        className={cn(tacticalHudEffectsClass(effects), 
          'flex min-h-[80px] w-full bg-[var(--th-surface)]/80 px-3 py-2 text-sm placeholder:text-[var(--th-muted)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--th-primary)]',
          // Remove default border as brackets handle it
          useBrackets ? 'border-none' : 'border border-[var(--th-hex-line)]',
          className
        )}
        style={{ '--corner': '8px', ...componentStyle } as React.CSSProperties}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
