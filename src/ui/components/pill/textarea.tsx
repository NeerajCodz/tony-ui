import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  visualType?: 'solid' | 'outline' | 'ghost' | 'soft' | 'neon';
}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, visualType = 'outline', ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full border border-[var(--ac-border)] bg-[var(--ac-surface)] px-3 py-2 text-sm ring-offset-[var(--ac-bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)]',
          className
        )}
        style={{ clipPath: AC_CLIP_PATH, '--corner': '8px' } as React.CSSProperties}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
