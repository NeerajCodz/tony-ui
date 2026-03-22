import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

// Energy Shield Hexagonal Clip Path
const ES_CLIP_PATH = 'polygon(5% 25%, 5% 75%, 50% 100%, 95% 75%, 95% 25%, 50% 0%)';

// Plasma glow effect classes - applied based on effects prop
const getPlasmaEffects = (visualType: string | null | undefined, effects: EnergyShieldEffects = 'on') => {
  if (effects === 'off') return '';
  
  switch (visualType) {
    case 'default':
      return '[filter:drop-shadow(0_0_4px_var(--es-plasma-1))] hover:[filter:drop-shadow(0_0_8px_var(--es-plasma-1))_drop-shadow(0_0_12px_var(--es-plasma-2))]';
    case 'solid':
      return '[filter:drop-shadow(0_0_4px_var(--es-plasma-1))] hover:[filter:drop-shadow(0_0_12px_var(--es-plasma-2))_drop-shadow(0_0_20px_var(--es-plasma-1))]';
    case 'outline':
      return '[filter:drop-shadow(0_0_4px_var(--es-plasma-1))] hover:[filter:drop-shadow(0_0_8px_var(--es-plasma-1))]';
    case 'ghost':
      return 'hover:[filter:drop-shadow(0_0_4px_var(--es-plasma-1))]';
    case 'inverse':
      return '[filter:drop-shadow(0_0_4px_var(--es-plasma-1))] hover:[filter:drop-shadow(0_0_16px_var(--es-plasma-1))]';
    case 'contrast':
      return '[filter:drop-shadow(0_0_4px_var(--es-plasma-3))] hover:[filter:drop-shadow(0_0_12px_var(--es-plasma-3))]';
    case 'soft':
      return 'hover:[filter:drop-shadow(0_0_6px_rgba(0,170,255,0.3))]';
    case 'elevated':
      return '[filter:drop-shadow(0_0_4px_var(--es-plasma-1))] hover:[filter:drop-shadow(0_0_16px_var(--es-plasma-1))_drop-shadow(0_4px_24px_rgba(0,170,255,0.2))]';
    default:
      return '';
  }
};

export const buttonVariants = cva(
  'font-sans font-bold uppercase tracking-wide transition-all duration-400 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-plasma-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg)] disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--es-surface)] border border-[var(--es-hex-line)]/30 text-[var(--text-primary)] hover:border-[var(--es-plasma-1)] active:bg-[var(--es-bg)]',
        solid: 'bg-[rgba(0,170,255,0.15)] border border-[var(--es-plasma-2)] text-[var(--es-plasma-2)] hover:bg-[rgba(0,170,255,0.25)] active:brightness-125',
        outline: 'bg-transparent border border-[var(--es-plasma-1)] text-[var(--es-plasma-1)] hover:bg-[var(--es-plasma-1)]/5 active:bg-[var(--es-plasma-1)]/10',
        ghost: 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--es-surface)] hover:text-[var(--es-plasma-1)] active:bg-[var(--es-surface)]/80',
        inverse: 'bg-[var(--es-plasma-1)]/30 border border-[var(--es-glow-inner)] text-[var(--es-bg)] font-bold hover:opacity-90 active:opacity-80',
        contrast: 'bg-[#000] border border-[var(--es-plasma-3)] text-[var(--es-plasma-3)] hover:bg-[#0a0014] active:bg-[#14002a]',
        soft: 'bg-[rgba(0,100,200,0.06)] border border-[rgba(0,170,255,0.1)] text-[var(--text-secondary)] hover:bg-[rgba(0,100,200,0.1)] active:bg-[rgba(0,100,200,0.15)]',
        neutral: 'bg-[var(--es-surface)] border border-[var(--es-hex-line)]/20 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--es-hex-line)]/50',
        subtle: 'bg-[var(--es-surface)]/50 border-none text-[var(--text-secondary)] hover:bg-[var(--es-surface)] hover:text-[var(--text-primary)]',
        elevated: 'bg-[var(--es-surface)] border border-[var(--es-hex-line)]/30 text-[var(--text-primary)] shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:border-[var(--es-plasma-1)]',
        flat: 'bg-transparent border-none text-[var(--text-primary)] hover:bg-[var(--es-surface)]/50',
        tinted: 'bg-[var(--es-plasma-1)]/20 border border-[var(--es-plasma-1)]/50 text-[var(--es-plasma-2)] hover:bg-[var(--es-plasma-1)]/30',
        link: 'bg-transparent border-none text-[var(--es-plasma-1)] hover:underline hover:text-[var(--es-plasma-2)] p-0 h-auto',
        disabled: 'bg-[var(--es-bg)] border border-[var(--es-hex-line)]/20 text-[var(--text-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-5 px-2 text-[10px]',
        sm: 'h-7 px-3 text-xs',
        md: 'h-9 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
        xl: 'h-[52px] px-6 text-lg',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {
  /**
   * Enable or disable plasma glow effects (drop-shadow filters)
   * @default true
   */
  effects?: EnergyShieldEffects;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, effects = 'on', visualType, size, style, ...props }, ref) => {
    // Apply hexagonal clip-path for shield shape, unless it's link or unstyled
    const componentStyle = (visualType !== 'link' && visualType !== 'unstyled') 
      ? { ...style, clipPath: ES_CLIP_PATH } 
      : style;

    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(energyShieldEffectsClass(effects), 
          buttonVariants({ visualType, size }),
          getPlasmaEffects(visualType, effects),
          className
        )}
        style={componentStyle}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
