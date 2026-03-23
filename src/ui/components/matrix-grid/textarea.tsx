import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full border border-[var(--mg-border)] bg-[var(--mg-surface)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--mg-text-dim)] focus-visible:outline-none focus-visible:border-[var(--mg-accent)] focus-visible:shadow-[0_0_10px_var(--mg-accent)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--mg-text)] font-mono tracking-wide transition-all duration-200',
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
