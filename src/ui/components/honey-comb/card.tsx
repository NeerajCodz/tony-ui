import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, hexGridStyle, type HoneyCombEffects } from './_effects';

export interface CardProps extends CardBaseProps {
  effects?: HoneyCombEffects;
}

// Hive Frame Clip Path (Chamfered corners)
const HIVE_FRAME_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--text-primary)] shadow-sm';
    case 'solid':
      return 'bg-[var(--hc-wax)] border border-[var(--hc-accent)] text-[var(--hc-accent-bright)]';
    case 'outline':
      return 'bg-transparent border border-[var(--hc-accent)] text-[var(--hc-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)]';
    case 'inverse':
      return 'bg-[var(--hc-accent)]/20 border border-[var(--hc-bg)] text-[var(--hc-bg)]';
    case 'contrast':
      return 'bg-[var(--hc-bg)] border border-[var(--hc-queen)] text-[var(--hc-queen)]';
    case 'soft':
      return 'bg-[rgba(255,140,10,0.03)] border border-[rgba(255,160,20,0.12)] text-[var(--text-primary)]';
    case 'neutral':
      return 'bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--hc-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--text-primary)] shadow-lg';
    case 'flat':
      return 'bg-transparent border-none text-[var(--text-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--hc-accent)]/10 border border-[var(--hc-accent)]/30 text-[var(--hc-accent)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--hc-accent)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--hc-bg)] border border-[var(--hc-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--text-primary)]';
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
    // Merge custom style with clip-path, unless unstyled or link
    const componentStyle = (type !== 'unstyled' && type !== 'link')
      ? { ...style, ...hexGridStyle, clipPath: HIVE_FRAME_PATH } 
      : style;

    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        style={componentStyle}
        className={cn(honeyCombEffectsClass(effects), 
          'transition-all duration-300 relative font-["Barlow"]',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:border-[var(--hc-accent)] hover:shadow-[0_0_15px_var(--hc-accent)]/20 active:scale-[0.99]',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardHeaderBase ref={ref} className={cn(honeyCombEffectsClass(effects), 'flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn(honeyCombEffectsClass(effects), 'font-normal leading-none tracking-[0.06em] uppercase font-["Bebas_Neue"] text-[var(--hc-accent-bright)] text-2xl', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn(honeyCombEffectsClass(effects), 'text-sm text-[var(--text-muted)] font-["Barlow"] mt-1.5 uppercase tracking-wider font-semibold', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardContentBase ref={ref} className={cn(honeyCombEffectsClass(effects), 'pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn(honeyCombEffectsClass(effects), 'flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
