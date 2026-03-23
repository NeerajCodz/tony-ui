import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const Typography = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted' }
>(({ className, variant = 'p', ...props }, ref) => {
  const Component = variant === 'p' || variant === 'lead' || variant === 'large' || variant === 'small' || variant === 'muted' ? 'p' : variant;

  return (
    <Component
      ref={ref as any}
      className={cn(
        variant === 'h1' && 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-display uppercase text-[var(--ne-primary)] drop-shadow-[0_0_10px_var(--ne-primary)]',
        variant === 'h2' && 'scroll-m-20 border-b border-[var(--ne-primary)] pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-display uppercase text-[var(--ne-primary)] drop-shadow-[0_0_8px_var(--ne-primary)]',
        variant === 'h3' && 'scroll-m-20 text-2xl font-semibold tracking-tight font-display uppercase text-[var(--ne-primary)] drop-shadow-[0_0_6px_var(--ne-primary)]',
        variant === 'h4' && 'scroll-m-20 text-xl font-semibold tracking-tight font-display uppercase text-[var(--ne-primary)] drop-shadow-[0_0_4px_var(--ne-primary)]',
        variant === 'p' && 'leading-7 [&:not(:first-child)]:mt-6 font-body text-[var(--ne-text)]',
        variant === 'blockquote' && 'mt-6 border-l-2 border-[var(--ne-primary)] pl-6 italic text-[var(--ne-text)]',
        variant === 'code' && 'relative rounded bg-[var(--ne-primary)]/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-[var(--ne-primary)] shadow-[0_0_5px_var(--ne-primary)]',
        variant === 'lead' && 'text-xl text-muted-foreground font-body',
        variant === 'large' && 'text-lg font-semibold font-body text-[var(--ne-text)]',
        variant === 'small' && 'text-sm font-medium leading-none font-body text-[var(--ne-text)]',
        variant === 'muted' && 'text-sm text-muted-foreground font-body',
        className
      )}
      {...props}
    />
  );
});
Typography.displayName = 'Typography';

export { Typography };
