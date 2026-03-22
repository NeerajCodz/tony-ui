import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

// Quantum Gate Folded Clip Path
const QG_CLIP_PATH = 'polygon(var(--fold, 20px) 0%, 100% 0%, 100% calc(100% - var(--fold, 20px)), calc(100% - var(--fold, 20px)) 100%, 0% 100%, 0% var(--fold, 20px))';

// Iridescent shimmer animation style
const IRIDESCENT_BG = `
  before:absolute before:inset-0 before:-z-10 before:bg-[conic-gradient(from_var(--angle,0deg),var(--qg-iris-1),var(--qg-iris-2),var(--qg-iris-3),var(--qg-iris-4),var(--qg-iris-1))] 
  before:opacity-[var(--iris-opacity,0.12)] before:transition-opacity before:duration-300
`;

// Helper for hover/active states of iridescence
const getIridescentEffects = (visualType: string | null | undefined, effects: QuantumGateEffects = 'on') => {
  if (effects === 'off') return '';
  
  // Base classes for the iridescent animation
  // Note: --angle animation requires CSS @property or JS, simplified here to static or hover transition
  // We can simulate the effect with a spin animation on the pseudo-element if we want
  
  const base = "relative overflow-hidden before:content-[''] " + IRIDESCENT_BG;
  
  switch (visualType) {
    case 'default':
      return cn(base, 'before:opacity-10 hover:before:opacity-25 active:before:opacity-40');
    case 'solid':
      return cn(base, 'before:opacity-25 hover:before:opacity-40 active:before:opacity-60');
    case 'outline':
      return cn(base, 'before:opacity-5 hover:before:opacity-15 active:before:opacity-25');
    case 'ghost':
      return cn(base, 'before:opacity-0 hover:before:opacity-10');
    case 'inverse':
      return cn(base, 'before:opacity-40 hover:before:opacity-60');
    case 'contrast':
      return cn(base, 'before:opacity-20 hover:before:opacity-40');
    default:
      return cn(base, 'before:opacity-10 hover:before:opacity-25');
  }
};

export const buttonVariants = cva(
  'font-sans font-bold uppercase tracking-wide transition-all duration-400 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--qg-iris-1) focus-visible:ring-offset-2 focus-visible:ring-offset-(--qg-bg) disabled:opacity-50 disabled:pointer-events-none z-0',
  {
    variants: {
      visualType: {
        default: 'bg-(--qg-surface) border border-(--qg-border) text-[rgba(200,180,255,0.8)] hover:text-white',
        solid: 'bg-[rgba(102,0,255,0.15)] border border-(--qg-iris-1) text-white hover:bg-[rgba(102,0,255,0.25)]',
        outline: 'bg-transparent border border-(--qg-iris-2) text-(--qg-iris-2) hover:bg-(--qg-iris-1)/5',
        ghost: 'bg-transparent border-none text-(--qg-iris-2) hover:bg-(--qg-surface)',
        inverse: 'bg-(--qg-iris-1)/30 border-none text-(--qg-bg) font-extrabold hover:bg-(--qg-iris-1)/40',
        contrast: 'bg-black border border-(--qg-iris-3) text-(--qg-iris-3) hover:bg-[#111]',
        soft: 'bg-[rgba(102,0,255,0.05)] border border-[rgba(102,0,255,0.2)] text-[rgba(180,160,220,0.7)]',
        neutral: 'bg-(--qg-surface) border border-(--qg-border)/20 text-[rgba(200,180,255,0.6)]',
        subtle: 'bg-(--qg-surface)/50 border-none text-[rgba(200,180,255,0.6)]',
        elevated: 'bg-(--qg-surface) border border-(--qg-border)/30 text-[rgba(200,180,255,0.8)] shadow-lg',
        flat: 'bg-transparent border-none text-[rgba(200,180,255,0.8)]',
        tinted: 'bg-(--qg-iris-1)/10 border border-(--qg-iris-1)/30 text-(--qg-iris-2)',
        link: 'bg-transparent border-none text-(--qg-iris-1) hover:underline hover:text-(--qg-iris-2) p-0 h-auto clip-path-none',
        disabled: 'bg-(--qg-bg) border border-(--qg-border)/20 text-(--text-muted) opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-6 px-3 text-[10px] [--fold:8px]',
        sm: 'h-8 px-4 text-xs [--fold:12px]',
        md: 'h-10 px-6 text-sm [--fold:16px]',
        lg: 'h-12 px-8 text-base [--fold:20px]',
        xl: 'h-[56px] px-10 text-lg [--fold:24px]',
        icon: 'h-10 w-10 p-0 [--fold:10px]',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {
  effects?: QuantumGateEffects;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, effects = 'on', visualType, size, style, ...props }, ref) => {
    // Apply folded clip-path
    const componentStyle = (visualType !== 'link' && visualType !== 'unstyled') 
      ? { ...style, clipPath: QG_CLIP_PATH } 
      : style;

    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(quantumGateEffectsClass(effects), 
          buttonVariants({ visualType, size }),
          getIridescentEffects(visualType, effects),
          className
        )}
        style={componentStyle}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
