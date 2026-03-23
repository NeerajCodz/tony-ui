import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';

export interface CardProps extends CardBaseProps {}

// Angular Corner Clip Path
const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] shadow-sm';
    case 'solid':
      return 'bg-[var(--ac-accent-dim)] border-2 border-[var(--ac-accent)] text-[var(--ac-edge-light)]';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--ac-accent)] text-[var(--ac-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)]';
    case 'inverse':
      return 'bg-[var(--ac-edge-light)] border-2 border-[var(--ac-bg)] text-[var(--ac-bg)]';
    case 'contrast':
      return 'bg-[var(--ac-bg)] border-2 border-[var(--ac-danger)] text-white';
    case 'soft':
      return 'bg-[var(--ac-accent)]/10 border-2 border-[var(--ac-accent)]/20 text-[var(--text-primary)]';
    case 'neutral':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--ac-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--text-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--ac-accent)]/20 border-2 border-[var(--ac-accent)]/30 text-[var(--ac-edge-light)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--ac-accent)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--ac-bg)] border-2 border-[var(--ac-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return '[--corner:8px] p-4 text-sm';
    case 'md': return '[--corner:12px] p-6 text-base';
    case 'lg': return '[--corner:18px] p-8 text-lg';
    default: return '[--corner:12px] p-6 text-base';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, type = 'default', size = 'md', clickable, style, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled or link
    const componentStyle = (type !== 'unstyled' && type !== 'link')
      ? { ...style, clipPath: AC_CLIP_PATH } 
      : style;

    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        style={componentStyle}
        className={cn(
          'transition-all duration-300 relative font-mono',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:border-[var(--ac-accent)] hover:shadow-[0_0_20px_rgba(0,200,255,0.1)] active:scale-[0.99]',
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
