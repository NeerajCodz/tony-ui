import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';

export interface CardProps extends CardBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)]';
    case 'solid':
      return 'bg-[var(--lg-accent)] border border-[var(--lg-accent)] text-white';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--lg-accent)] text-[var(--lg-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--lg-text)]';
    case 'inverse':
      return 'bg-[var(--lg-text)] border border-[var(--lg-bg)] text-[var(--lg-bg)]';
    case 'contrast':
      return 'bg-[#fff] border border-[#fff] text-[#000]';
    case 'soft':
      return 'bg-[rgba(124,111,255,0.08)] border border-[rgba(124,111,255,0.1)] text-[var(--lg-text)]';
    case 'neutral':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--lg-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)] shadow-xl';
    case 'flat':
      return 'bg-transparent border-none text-[var(--lg-text)] p-0';
    case 'tinted':
      return 'bg-[var(--lg-accent)]/10 border border-[var(--lg-accent)]/20 text-[var(--lg-text)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--lg-accent)] hover:underline p-0';
    case 'disabled':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'p-6 rounded-xl text-sm';
    case 'md': return 'p-8 rounded-2xl text-base';
    case 'lg': return 'p-12 rounded-3xl text-lg';
    default: return 'p-8 rounded-2xl text-base';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, type = 'default', size = 'md', clickable, ...props }, ref) => {
    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        className={cn(
          'transition-all duration-300 font-sans',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:border-[var(--lg-accent)] hover:shadow-lg hover:-translate-y-1',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardHeaderBase ref={ref} className={cn('flex flex-col space-y-2', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn('font-bold leading-tight tracking-tight font-sans text-2xl', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn('text-base text-[var(--text-secondary)] font-sans mt-2', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardContentBase ref={ref} className={cn('pt-6', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn('flex items-center pt-8', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
