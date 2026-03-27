import { cn } from '@/lib/utils';
import { CardBase, CardContentBase, CardDescriptionBase, CardFooterBase, CardHeaderBase, CardTitleBase, type CardBaseProps, type CardContentBaseProps, type CardDescriptionBaseProps, type CardFooterBaseProps, type CardHeaderBaseProps, type CardTitleBaseProps } from '@/ui/components/_base/card';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const cardVariants = cva(
  'rounded-none overflow-hidden font-mono relative',
  {
    variants: {
      type: {
        default: 'border-2 border-[var(--cb-trace)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] shadow-[0_0_10px_rgba(0,0,0,0.5)]',
        solid: 'border-transparent bg-[var(--cb-trace-lit)] text-[var(--cb-bg)] shadow-[0_0_15px_var(--cb-trace-lit)]',
        outline: 'border-2 border-[var(--cb-trace-lit)] bg-transparent text-[var(--cb-trace-lit)] hover:bg-[var(--cb-trace-dim)]/5',
        ghost: 'border-transparent bg-transparent text-[var(--cb-trace-lit)] hover:bg-[var(--cb-soldermask)]',
        soft: 'border-transparent bg-[var(--cb-trace)]/10 text-[var(--cb-trace-lit)]',
        subtle: 'border border-[var(--cb-trace-dim)] bg-[var(--cb-soldermask)]/80 text-[var(--cb-trace-dim)]',
        neutral: 'border border-[var(--cb-trace-dim)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-dim)]',
        elevated: 'border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] shadow-[0_0_20px_var(--cb-trace)]',
        flat: 'border-0 bg-transparent p-0 text-[var(--cb-trace-lit)]',
        tinted: 'border border-[var(--cb-trace)] bg-[var(--cb-trace)]/5 text-[var(--cb-trace-lit)]',
        link: 'cursor-pointer hover:border-[var(--cb-trace-lit)] hover:shadow-[0_0_10px_var(--cb-trace-lit)] transition-all',
        disabled: 'opacity-50 cursor-not-allowed border-dashed border-[var(--cb-trace-dim)]',
        unstyled: '',
        inverse: 'bg-[var(--cb-trace-lit)] text-[var(--cb-bg)]',
        contrast: 'border-4 border-[var(--cb-trace-lit)] bg-[var(--cb-bg)] text-[var(--cb-trace-lit)]',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      }
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
    },
  }
);

export interface CardProps extends CardBaseProps, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, type, size, ...props }, ref) => (
    <CardBase
      ref={ref}
      type={type}
      size={size}
      className={cn(cardVariants({ type, size, className }))}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderBaseProps>(
  ({ className, ...props }, ref) => (
    <CardHeaderBase
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6 border-b border-[var(--cb-trace)] bg-[var(--cb-bg)]/20', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleBaseProps>(
  ({ className, ...props }, ref) => (
    <CardTitleBase
      ref={ref}
      className={cn('font-mono text-2xl font-bold leading-none tracking-wider uppercase text-[var(--cb-trace-lit)] drop-shadow-[0_0_5px_var(--cb-trace-lit)]', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionBaseProps>(
  ({ className, ...props }, ref) => (
    <CardDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--cb-trace-dim)] font-mono uppercase tracking-widest opacity-80', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardContentBaseProps>(
  ({ className, ...props }, ref) => (
    <CardContentBase
      ref={ref}
      className={cn('p-6 pt-6', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterBaseProps>(
  ({ className, ...props }, ref) => (
    <CardFooterBase
      ref={ref}
      className={cn('flex items-center p-6 pt-0 border-t border-[var(--cb-trace)] bg-[var(--cb-bg)]/20 mt-auto', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle };
