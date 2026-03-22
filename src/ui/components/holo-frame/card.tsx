import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

export interface CardProps extends CardBaseProps {
  effects?: HoloFrameEffects;
}

const getVisualTypeStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'default':
      return 'bg-[rgba(12,16,28,0.55)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] shadow-lg backdrop-blur-md';
    case 'solid':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-main)] text-[var(--hf-text)] shadow-md';
    case 'outline':
      return 'bg-transparent border border-[var(--hf-border-main)] text-[var(--hf-border-main)] backdrop-blur-sm';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--hf-text)]';
    case 'inverse':
      return 'bg-[var(--hf-border-main)]/20 border border-[var(--hf-border-main)] text-[var(--hf-text)] backdrop-blur-md';
    case 'contrast':
      return 'bg-[var(--hf-bg)] border border-[var(--hf-chromatic-r)] text-white';
    case 'soft':
      return 'bg-[var(--hf-surface)]/30 border border-[var(--hf-border-dim)]/30 text-[var(--hf-text)] backdrop-blur-sm';
    case 'neutral':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)]';
    case 'subtle':
      return 'bg-[var(--hf-surface)]/50 border-none text-[var(--hf-text)] backdrop-blur-sm';
    case 'elevated':
      return 'bg-[rgba(12,16,28,0.75)] border border-[var(--hf-border-main)]/50 text-[var(--hf-text)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl';
    case 'flat':
      return 'bg-transparent border-none text-[var(--hf-text)] p-0';
    case 'tinted':
      return 'bg-[var(--hf-border-main)]/10 border border-[var(--hf-border-main)]/30 text-[var(--hf-text)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--hf-border-main)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--hf-bg)] border border-[var(--hf-border-dim)]/50 text-[var(--hf-text)] opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return 'bg-[rgba(12,16,28,0.55)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] backdrop-blur-md';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return ' p-4 text-sm rounded-lg';
    case 'md': return ' p-6 text-base rounded-xl';
    case 'lg': return ' p-8 text-lg rounded-2xl';
    default: return ' p-6 text-base rounded-xl';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, effects = 'on', type = 'default', size = 'md', clickable, style, ...props }, ref) => {
    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        style={style}
        className={cn(holoFrameEffectsClass(effects), 
          'transition-all duration-300 relative font-sans overflow-hidden',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:border-[var(--hf-border-main)] hover:shadow-[0_0_20px_rgba(0,200,255,0.1)] active:scale-[0.99]',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardHeaderBase ref={ref} className={cn(holoFrameEffectsClass(effects), 'flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn(holoFrameEffectsClass(effects), 'font-bold leading-none tracking-tight font-sans', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn(holoFrameEffectsClass(effects), 'text-sm text-[var(--hf-text)]/70 font-sans mt-1.5', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardContentBase ref={ref} className={cn(holoFrameEffectsClass(effects), 'pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn(holoFrameEffectsClass(effects), 'flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
