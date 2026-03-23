import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-display uppercase text-[var(--ne-primary)]',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-display uppercase text-[var(--ne-primary)]',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight font-display uppercase text-[var(--ne-primary)]',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight font-display uppercase text-[var(--ne-primary)]',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight font-display uppercase text-[var(--ne-primary)]',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight font-display uppercase text-[var(--ne-primary)]',
      p: 'leading-7 [&:not(:first-child)]:mt-6 font-body',
      blockquote: 'mt-6 border-l-2 pl-6 italic border-[var(--ne-primary)] text-[var(--ne-primary)]/80',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2 font-body',
      inlineCode:
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-[var(--ne-primary)]',
      lead: 'text-xl text-muted-foreground font-body',
      large: 'text-lg font-semibold font-body',
      small: 'text-sm font-medium leading-none font-body',
      muted: 'text-sm text-muted-foreground font-body',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  effects?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, effects = true, ...props }, ref) => {
    const Comp = as || (variant && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'li'].includes(variant) ? variant : 'div') as any;
    
    // Only apply glow to headings and code by default
    const shouldGlow = effects && variant && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inlineCode', 'blockquote'].includes(variant);

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }), shouldGlow && getNeonGlow(true, 'text'))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
