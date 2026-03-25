import * as React from 'react';
import { cn } from '@/lib/utils';
import { TextareaBase } from '../_base/textarea';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    visualType?: string;
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, visualType = 'default', ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(
          'flex min-h-[120px] w-full rounded-2xl border border-[var(--lg-border)] bg-[var(--lg-surface)] px-6 py-4 text-base ring-offset-[var(--lg-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lg-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--lg-text)] font-sans',
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
