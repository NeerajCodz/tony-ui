import * as React from 'react';
import { FileQuestion } from 'lucide-react';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: boolean;
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, children, effects = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center p-8 text-center text-[var(--ne-text)]/50',
          className
        )}
        {...props}
      >
        <div className={cn(
          "mb-4 rounded-full bg-[var(--ne-primary)]/10 p-3",
          getNeonGlow(effects)
        )}>
          <FileQuestion className="h-6 w-6 text-[var(--ne-primary)]" />
        </div>
        {children}
      </div>
    );
  }
);
Empty.displayName = 'Empty';

const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { effects?: boolean }
>(({ className, effects = true, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold font-display uppercase tracking-widest text-[var(--ne-primary)]',
      getNeonGlow(effects, 'text'),
      className
    )}
    {...props}
  />
));
EmptyTitle.displayName = 'EmptyTitle';

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground font-body', className)}
    {...props}
  />
));
EmptyDescription.displayName = 'EmptyDescription';

export { Empty, EmptyTitle, EmptyDescription };
