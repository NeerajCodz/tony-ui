import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

// Tactical HUD Button - Rectangular with Corner Brackets
// No full borders, uses corner brackets and pips via background gradients

const getEffectsClass = (effects: TacticalHudEffects = 'on') => {
  if (effects === 'off') return '';
  // Scanline effect or glow
  return 'before:absolute before:inset-0 before:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] before:bg-[length:100%_4px] before:pointer-events-none before:opacity-0 hover:before:opacity-20 transition-all';
};

export const buttonVariants = cva(
  'font-sans font-medium uppercase tracking-widest transition-all duration-200 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--th-primary)] disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--th-surface)]/80 text-[var(--th-primary)] hover:bg-[var(--th-primary)]/10 hover:text-[var(--th-active)]',
        solid: 'bg-[var(--th-primary)] text-[var(--th-bg)] hover:bg-[var(--th-active)] font-bold',
        outline: 'bg-transparent text-[var(--th-primary)] hover:bg-[var(--th-primary)]/10',
        ghost: 'bg-transparent text-[var(--th-muted)] hover:text-[var(--th-primary)] hover:bg-[var(--th-primary)]/5',
        destructive: 'bg-[var(--th-alert)]/20 text-[var(--th-alert)] hover:bg-[var(--th-alert)]/30',
        secondary: 'bg-[var(--th-secondary)]/20 text-[var(--th-secondary)] hover:bg-[var(--th-secondary)]/30',
        link: 'text-[var(--th-primary)] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        xs: 'h-6 px-2 text-[10px]',
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {
  effects?: TacticalHudEffects;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, effects = 'on', visualType = 'default', size, style, ...props }, ref) => {
    // Apply brackets style only for default and outline types
    const useBrackets = ['default', 'outline', 'destructive', 'secondary'].includes(visualType || '');
    
    // Merge brackets style with existing style
    const componentStyle = useBrackets ? { ...bracketsStyle, ...style } : style;

    return (
      <ButtonBase
        ref={ref}
        visualType={visualType as any}
        size={size as any}
        className={cn(
          tacticalHudEffectsClass(effects), 
          buttonVariants({ visualType: visualType as any, size }),
          getEffectsClass(effects),
          className
        )}
        style={componentStyle}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
