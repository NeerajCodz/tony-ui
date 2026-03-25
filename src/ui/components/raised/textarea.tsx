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
          'flex min-h-[80px] w-full rounded-[4px] border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] px-3 py-2 text-sm ring-offset-[var(--ra-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[var(--ra-accent)] focus-visible:shadow-[4px_4px_0_var(--ra-shadow)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--ra-text)] font-mono shadow-[2px_2px_0_var(--ra-shadow)] transition-all',
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
