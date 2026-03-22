import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';

export interface CardProps extends CardBaseProps {
  effects?: TacticalHudEffects;
}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      // No border, handled by bracketsStyle
      return 'bg-[var(--th-surface)]/80 text-[var(--th-primary)] shadow-sm';
    case 'solid':
      return 'bg-[var(--th-surface)] border border-[var(--th-primary)] text-[var(--th-primary)]';
    case 'outline':
      // No border, handled by bracketsStyle
      return 'bg-transparent text-[var(--th-primary)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--th-primary)]';
    case 'inverse':
      return 'bg-[var(--th-primary)] text-[var(--th-bg)]';
    case 'contrast':
      return 'bg-[var(--th-bg)] border border-[var(--th-secondary)] text-[var(--th-secondary)]';
    case 'soft':
      return 'bg-[var(--th-primary)]/5 border border-[var(--th-primary)]/10 text-[var(--th-primary)]';
    case 'neutral':
      return 'bg-[var(--th-surface)] border border-[var(--th-muted)] text-[var(--th-muted)]';
    case 'subtle':
      return 'bg-[var(--th-surface)]/30 border-none text-[var(--th-muted)]';
    case 'elevated':
      return 'bg-[var(--th-surface)] border border-[var(--th-primary)] text-[var(--th-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--th-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--th-secondary)]/10 border border-[var(--th-secondary)]/30 text-[var(--th-secondary)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--th-primary)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--th-bg)] border border-[var(--th-muted)]/50 text-[var(--th-muted)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--th-surface)]/80 text-[var(--th-primary)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return ' p-4 text-sm';
    case 'md': return ' p-6 text-base';
    case 'lg': return ' p-8 text-lg';
    default: return ' p-6 text-base';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, effects = 'on', type = 'default', size = 'md', clickable, style, ...props }, ref) => {
    // Apply brackets style for default and outline types
    const useBrackets = ['default', 'outline', 'destructive', 'secondary'].includes(type || '');
    const componentStyle = useBrackets ? { ...bracketsStyle, ...style } : style;

    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        style={componentStyle}
        className={cn(tacticalHudEffectsClass(effects), 
          'transition-all duration-400 relative font-sans',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:bg-[var(--th-primary)]/5 active:scale-[0.99]',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardHeaderBase ref={ref} className={cn(tacticalHudEffectsClass(effects), 'flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn(tacticalHudEffectsClass(effects), 'font-bold leading-none tracking-tight uppercase font-sans', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn(tacticalHudEffectsClass(effects), 'text-sm text-[var(--text-muted)] font-sans mt-1.5', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardContentBase ref={ref} className={cn(tacticalHudEffectsClass(effects), 'pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn(tacticalHudEffectsClass(effects), 'flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
