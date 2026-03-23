import * as React from 'react';
import { cn } from '@/lib/utils';
import { glassInputClass, type GlassEffects } from './_effects';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: GlassEffects;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm placeholder:text-[var(--df-muted-text)]/50 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--df-text)] font-sans',
          glassInputClass(effects),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
