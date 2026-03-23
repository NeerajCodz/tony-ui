import * as React from 'react';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    effects?: boolean;
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = true, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--ne-text)]/50 focus-visible:outline-none focus-visible:shadow-[0_0_15px_var(--ne-primary)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--ne-text)] font-body tracking-wide transition-all duration-300',
          getNeonGlow(effects),
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
