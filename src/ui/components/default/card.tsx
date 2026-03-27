import { cn } from '@/lib/utils';
import * as React from 'react';
import { CardBase, CardContentBase, CardDescriptionBase, CardFooterBase, CardHeaderBase, CardTitleBase, type CardBaseProps } from '../_base/card';

export interface CardProps extends CardBaseProps {}

const getTypeStyles = (type: string = 'default') => {
    switch (type) {
        case 'default':
            return 'rounded-lg border border-[var(--df-border)] bg-[var(--df-surface)] text-[var(--df-text)] shadow-sm';
        case 'elevated':
            return 'rounded-lg border-none bg-[var(--df-surface)] text-[var(--df-text)] shadow-md';
        case 'flat':
            return 'rounded-lg border-none bg-[var(--df-surface)] text-[var(--df-text)]';
        case 'outline':
            return 'rounded-lg border border-[var(--df-border)] bg-transparent text-[var(--df-text)]';
        case 'soft':
            return 'rounded-lg border-none bg-[var(--df-accent)]/10 text-[var(--df-text)]';
        case 'solid':
            return 'rounded-lg border-none bg-[var(--df-accent)] text-white';
        default:
            return 'rounded-lg border border-[var(--df-border)] bg-[var(--df-surface)] text-[var(--df-text)] shadow-sm';
    }
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, type = 'default', size = 'md', clickable, ...props }, ref) => {
    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        className={cn(
          getTypeStyles(type),
          clickable && 'cursor-pointer transition-colors hover:bg-[var(--df-surface)]/80 hover:border-[var(--df-border)]/80',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardHeaderBase
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <CardTitleBase
      ref={ref}
      className={cn('font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <CardDescriptionBase
      ref={ref}
      className={cn('text-sm text-[var(--df-muted)]', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardContentBase
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardFooterBase
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';
