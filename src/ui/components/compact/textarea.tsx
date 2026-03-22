import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, visualType = 'outline', ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full border border-[var(--cp-border)] bg-[var(--cp-bg)] px-3 py-2 text-sm ring-offset-[var(--cp-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cp-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)]',
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
