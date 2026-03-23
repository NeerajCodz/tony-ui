import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';

export interface CardProps extends CardBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)]';
    case 'solid':
      return 'bg-[var(--ra-accent)] border-2 border-[var(--ra-accent)] text-white shadow-[4px_4px_0_var(--ra-shadow-accent)]';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--ra-accent)] text-[var(--ra-accent)] shadow-[4px_4px_0_var(--ra-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--ra-text)]';
    case 'inverse':
      return 'bg-[var(--ra-text)] border-2 border-[var(--ra-bg)] text-[var(--ra-bg)] shadow-[4px_4px_0_var(--ra-border)]';
    case 'contrast':
      return 'bg-[#000] border-2 border-[#fff] text-[#fff] shadow-[4px_4px_0_#fff]';
    case 'soft':
      return 'bg-[rgba(64,96,255,0.08)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] shadow-[2px_2px_0_var(--ra-shadow)]';
    case 'neutral':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] shadow-[4px_4px_0_var(--ra-shadow)]';
    case 'subtle':
      return 'bg-[var(--ra-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[8px_8px_0_var(--ra-shadow)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--ra-text)] p-0 shadow-none';
    case 'tinted':
      return 'bg-[var(--ra-accent)]/20 border-2 border-[var(--ra-accent)]/50 text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--ra-accent)] hover:underline p-0 shadow-none';
    case 'disabled':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed shadow-none';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'p-4 text-sm';
    case 'md': return 'p-6 text-base';
    case 'lg': return 'p-8 text-lg';
    default: return 'p-6 text-base';
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
          'transition-all duration-100 font-mono rounded-[4px]',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0_var(--ra-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--ra-shadow)]',
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
    <CardHeaderBase ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn('font-bold leading-none tracking-tight uppercase font-mono', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn('text-sm text-[var(--text-muted)] font-mono mt-1.5', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardContentBase ref={ref} className={cn('pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn('flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
