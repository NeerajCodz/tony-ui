import { cn } from '@/lib/utils';
import * as React from 'react';
import { CardBase, CardContentBase, CardDescriptionBase, CardFooterBase, CardHeaderBase, CardTitleBase, type CardBaseProps } from '../_base/card';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface CardProps extends CardBaseProps {
  effects?: EnergyShieldEffects;
}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-primary)] shadow-sm';
    case 'solid':
      return 'bg-[var(--es-plasma-2)] border border-[var(--es-plasma-1)] text-[var(--es-plasma-2)]';
    case 'outline':
      return 'bg-transparent border border-[var(--es-plasma-1)] text-[var(--es-plasma-1)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)]';
    case 'inverse':
      return 'bg-[var(--es-plasma-2)] border border-[var(--es-bg)] text-[var(--es-bg)]';
    case 'contrast':
      return 'bg-[var(--es-bg)] border border-[var(--es-plasma-3)] text-white';
    case 'soft':
      return 'bg-[var(--es-plasma-1)]/10 border border-[var(--es-plasma-1)]/20 text-[var(--text-primary)]';
    case 'neutral':
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--es-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--text-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--es-plasma-1)]/20 border border-[var(--es-plasma-1)]/30 text-[var(--es-plasma-2)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--es-plasma-1)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--es-bg)] border border-[var(--es-hex-line)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--es-surface)] border border-[var(--es-hex-line)] text-[var(--text-primary)]';
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
      ? { ...style } 
      : style;

    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        style={componentStyle}
        className={cn(energyShieldEffectsClass(effects), 
          'transition-all duration-400 relative font-mono',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:border-[var(--es-plasma-1)] hover:shadow-[0_0_20px_rgba(0,200,255,0.1)] active:scale-[0.99]',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardHeaderBase ref={ref} className={cn(energyShieldEffectsClass(effects), 'flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn(energyShieldEffectsClass(effects), 'font-bold leading-none tracking-tight uppercase font-sans', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn(energyShieldEffectsClass(effects), 'text-sm text-[var(--text-muted)] font-mono mt-1.5', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardContentBase ref={ref} className={cn(energyShieldEffectsClass(effects), 'pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn(energyShieldEffectsClass(effects), 'flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle };
