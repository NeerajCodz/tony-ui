import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  CardBase,
  CardHeaderBase,
  CardTitleBase,
  CardDescriptionBase,
  CardContentBase,
  CardFooterBase,
  type CardBaseProps,
  type CardHeaderBaseProps,
  type CardTitleBaseProps,
  type CardDescriptionBaseProps,
  type CardContentBaseProps,
  type CardFooterBaseProps
} from '@/ui/components/_base/card';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-none transition-colors',
  {
    variants: {
      type: {
        default: 'border border-[var(--br-border-dim)] bg-[var(--br-bg)] text-[var(--text-primary)]',
        solid: 'border-transparent bg-[var(--br-surface)] text-[var(--text-primary)]',
        outline: 'border border-[var(--br-border-dim)] bg-transparent text-[var(--text-primary)]',
        ghost: 'border-transparent bg-transparent text-[var(--text-primary)]',
        soft: 'border-transparent bg-[var(--br-surface)]/50 text-[var(--text-primary)]',
        subtle: 'border border-[var(--br-border-dim)] bg-[var(--br-surface)]/30 text-[var(--text-primary)]',
        neutral: 'border border-[var(--br-border-dim)] bg-[var(--br-surface)] text-[var(--text-muted)]',
        elevated: 'border border-[var(--br-border-dim)] bg-[var(--br-bg)] shadow-md',
        flat: 'border-0 bg-transparent p-0',
        tinted: 'border border-[var(--br-accent)]/20 bg-[var(--br-accent)]/5',
        link: 'cursor-pointer hover:border-[var(--br-accent)]',
        disabled: 'opacity-50 cursor-not-allowed bg-[var(--br-surface)]',
        unstyled: '',
        inverse: 'bg-[var(--text-primary)] text-[var(--br-bg)]',
        contrast: 'border-2 border-[var(--text-primary)] bg-[var(--br-bg)]',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
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
      className={cn('flex flex-col space-y-1.5 p-6 border-b border-[var(--br-border-dim)]', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleBaseProps>(
  ({ className, ...props }, ref) => (
    <CardTitleBase
      ref={ref}
      className={cn('font-mono text-2xl font-semibold leading-none tracking-tight uppercase', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionBaseProps>(
  ({ className, ...props }, ref) => (
    <CardDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--text-muted)] font-mono', className)}
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
      className={cn('flex items-center p-6 pt-0 border-t border-[var(--br-border-dim)] bg-[var(--br-surface)]/30 mt-auto', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
