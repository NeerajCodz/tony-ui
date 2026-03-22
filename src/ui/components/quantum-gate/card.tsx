import * as React from 'react';
import { CardBase, CardHeaderBase, CardTitleBase, CardDescriptionBase, CardContentBase, CardFooterBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

export interface CardProps extends CardBaseProps {
  effects?: QuantumGateEffects;
}

// Quantum Gate Folded Clip Path
const QG_CLIP_PATH = 'polygon(var(--fold, 20px) 0%, 100% 0%, 100% calc(100% - var(--fold, 20px)), calc(100% - var(--fold, 20px)) 100%, 0% 100%, 0% var(--fold, 20px))';

// Iridescent shimmer animation style
const IRIDESCENT_BG = `
  before:absolute before:inset-0 before:-z-10 before:bg-[conic-gradient(from_var(--angle,0deg),var(--qg-iris-1),var(--qg-iris-2),var(--qg-iris-3),var(--qg-iris-4),var(--qg-iris-1))] 
  before:opacity-[var(--iris-opacity,0.12)] before:transition-opacity before:duration-300
`;

const getVisualTypeStyles = (visualType: string = 'default') => {
  const base = "relative overflow-hidden before:content-[''] " + IRIDESCENT_BG;

  switch (visualType) {
    case 'default':
      return cn(base, 'bg-(--qg-surface) border border-(--qg-border) text-[rgba(200,180,255,0.8)] before:opacity-10');
    case 'solid':
      return cn(base, 'bg-[rgba(102,0,255,0.15)] border border-(--qg-iris-1) text-(--text-primary) before:opacity-25');
    case 'outline':
      return cn(base, 'bg-transparent border border-(--qg-iris-2) text-(--qg-iris-2) before:opacity-5');
    case 'ghost':
      return cn(base, 'bg-transparent border-none text-(--text-secondary) before:opacity-0');
    case 'inverse':
      return cn(base, 'bg-(--qg-iris-1)/20 border-none text-(--qg-bg) before:opacity-40');
    case 'contrast':
      return cn(base, 'bg-[#000] border border-(--qg-iris-3) text-white before:opacity-20');
    case 'soft':
      return cn(base, 'bg-[rgba(102,0,255,0.05)] border border-[rgba(102,0,255,0.2)] text-[rgba(180,160,220,0.7)] before:opacity-5');
    case 'neutral':
      return cn(base, 'bg-(--qg-surface) border border-(--qg-border)/50 text-(--text-secondary) before:opacity-10');
    case 'subtle':
      return cn(base, 'bg-(--qg-surface)/50 border-none text-(--text-secondary) before:opacity-5');
    case 'elevated':
      return cn(base, 'bg-(--qg-surface) border border-(--qg-border) text-(--text-primary) shadow-[0_4px_20px_rgba(0,0,0,0.5)] before:opacity-15');
    case 'flat':
      return 'bg-transparent border-none text-(--text-primary) p-0';
    case 'tinted':
      return cn(base, 'bg-(--qg-iris-1)/20 border border-(--qg-iris-1)/30 text-(--qg-iris-2) before:opacity-20');
    case 'link':
      return 'bg-transparent border-none text-(--qg-iris-1) hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-(--qg-bg) border border-(--qg-border)/50 text-(--text-muted) opacity-50 cursor-not-allowed';
    case 'unstyled':
      return '';
    default:
      return cn(base, 'bg-(--qg-surface) border border-(--qg-border) text-(--text-primary) before:opacity-10');
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return ' p-4 text-sm [--fold:10px]';
    case 'md': return ' p-6 text-base [--fold:20px]';
    case 'lg': return ' p-8 text-lg [--fold:30px]';
    default: return ' p-6 text-base [--fold:20px]';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, effects = 'on', type = 'default', size = 'md', clickable, style, ...props }, ref) => {
    // Apply folded clip-path, unless unstyled or link
    const componentStyle = (type !== 'unstyled' && type !== 'link' && type !== 'flat')
      ? { ...style, clipPath: QG_CLIP_PATH } 
      : style;

    return (
      <CardBase
        ref={ref}
        type={type}
        size={size}
        clickable={clickable}
        style={componentStyle}
        className={cn(quantumGateEffectsClass(effects), 
          'transition-all duration-400 relative font-sans',
          getVisualTypeStyles(type),
          getSizeStyles(size),
          clickable && 'cursor-pointer hover:border-(--qg-iris-1) hover:shadow-[0_0_20px_rgba(102,0,255,0.2)] active:scale-[0.99] hover:before:opacity-30',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardHeaderBase ref={ref} className={cn(quantumGateEffectsClass(effects), 'flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement> & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardTitleBase ref={ref} className={cn(quantumGateEffectsClass(effects), 'font-bold leading-none tracking-tight uppercase font-sans bg-linear-to-br from-(--qg-iris-2) to-(--qg-iris-1) bg-clip-text text-transparent', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardDescriptionBase ref={ref} className={cn(quantumGateEffectsClass(effects), 'text-sm text-(--text-muted) font-sans mt-1.5', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardContentBase ref={ref} className={cn(quantumGateEffectsClass(effects), 'pt-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <CardFooterBase ref={ref} className={cn(quantumGateEffectsClass(effects), 'flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
