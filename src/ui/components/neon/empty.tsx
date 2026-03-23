import * as React from 'react';

import { cn } from '@/lib/utils';

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full min-h-[200px] flex-col items-center justify-center space-y-4 rounded-none border-2 border-dashed border-[var(--ne-primary)]/50 p-8 text-center animate-in fade-in-50',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Empty.displayName = 'Empty';

const EmptyImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-20 w-20 items-center justify-center rounded-full bg-[var(--ne-primary)]/10 text-[var(--ne-primary)] shadow-[0_0_20px_var(--ne-primary)]',
      className
    )}
    {...props}
  />
));
EmptyImage.displayName = 'EmptyImage';

const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold font-display uppercase tracking-widest text-[var(--ne-primary)] drop-shadow-[0_0_5px_var(--ne-primary)]',
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
    className={cn(
      'text-sm text-muted-foreground font-body',
      className
    )}
    {...props}
  />
));
EmptyDescription.displayName = 'EmptyDescription';

export { Empty, EmptyImage, EmptyTitle, EmptyDescription };
