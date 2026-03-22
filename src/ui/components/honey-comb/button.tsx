import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

// Honey Comb Hexagonal Clip Path (Flat-topped Hexagon)
const HC_HEX_PATH = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

// Glow effect classes - applied based on effects prop
const getGlowEffects = (visualType: string | null | undefined, effects: HoneyCombEffects = 'on') => {
  if (effects === 'off') return '';
  
  switch (visualType) {
    case 'default':
      return 'hover:drop-shadow-[0_0_8px_var(--hc-hex-hover)]';
    case 'solid':
      return 'drop-shadow-[0_0_5px_var(--hc-accent)] hover:drop-shadow-[0_0_12px_var(--hc-accent-bright)]';
    case 'outline':
      return 'drop-shadow-[0_0_2px_var(--hc-accent)] hover:drop-shadow-[0_0_6px_var(--hc-accent)]';
    case 'ghost':
      return 'hover:drop-shadow-[0_0_4px_var(--hc-accent)]';
    case 'contrast':
      return 'drop-shadow-[0_0_5px_var(--hc-queen)] hover:drop-shadow-[0_0_15px_var(--hc-queen)]';
    default:
      return '';
  }
};

export const buttonVariants = cva(
  'font-["Bebas_Neue"] font-normal uppercase tracking-wider transition-all duration-300 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hc-bg)] disabled:opacity-50 disabled:pointer-events-none active:scale-95',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--hc-surface)] border border-[var(--hc-hex-stroke)] text-[rgba(255,200,120,0.75)] hover:text-[var(--hc-accent-bright)] hover:border-[var(--hc-accent)] hover:bg-[var(--hc-hex-hover)]',
        solid: 'bg-[var(--hc-wax)] border border-[var(--hc-accent)] text-[var(--hc-accent-bright)] hover:bg-[var(--hc-accent)]/30',
        outline: 'bg-transparent border border-[var(--hc-accent)] text-[var(--hc-accent)] hover:bg-[var(--hc-accent)]/10',
        ghost: 'bg-transparent border-none text-[rgba(255,200,120,0.5)] hover:bg-[var(--hc-surface)] hover:text-[var(--hc-accent)]',
        inverse: 'bg-[var(--hc-accent)]/20 border border-[var(--hc-accent-dim)] text-[var(--hc-bg)] font-bold hover:bg-[var(--hc-accent)]/30',
        contrast: 'bg-[#000] border border-[var(--hc-queen)] text-[var(--hc-queen)] hover:bg-[#1a0500]',
        soft: 'bg-[rgba(255,140,10,0.03)] border border-[rgba(255,160,20,0.12)] text-[rgba(255,180,80,0.5)] hover:bg-[rgba(255,140,10,0.08)]',
        neutral: 'bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
        subtle: 'bg-[var(--hc-surface)]/50 border-none text-[var(--text-secondary)] hover:bg-[var(--hc-surface)]',
        elevated: 'bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--text-primary)] shadow-lg hover:border-[var(--hc-accent)]',
        flat: 'bg-transparent border-none text-[var(--text-primary)] hover:bg-[var(--hc-surface)]/50',
        tinted: 'bg-[var(--hc-accent)]/10 border border-[var(--hc-accent)]/30 text-[var(--hc-accent)] hover:bg-[var(--hc-accent)]/20',
        link: 'bg-transparent border-none text-[var(--hc-accent)] hover:underline hover:text-[var(--hc-accent-bright)] p-0 h-auto clip-path-none',
        disabled: 'bg-[var(--hc-bg)] border border-[var(--hc-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-6 px-4 text-[11px]',
        sm: 'h-8 px-6 text-xs',
        md: 'h-10 px-8 text-sm',
        lg: 'h-12 px-10 text-base',
        xl: 'h-14 px-12 text-lg',
        icon: 'h-10 w-10 p-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]', // Pointy top hex for icons? Or standard flat top? Let's use flat top but square aspect.
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {
  effects?: HoneyCombEffects;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, effects = 'on', visualType, size, style, ...props }, ref) => {
    // Apply pure hex clip-path unless link/unstyled
    const componentStyle = (visualType !== 'link' && visualType !== 'unstyled') 
      ? { ...style, clipPath: HC_HEX_PATH } 
      : style;

    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(honeyCombEffectsClass(effects), 
          buttonVariants({ visualType, size }),
          getGlowEffects(visualType, effects),
          className
        )}
        style={componentStyle}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
