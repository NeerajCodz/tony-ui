import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

const getGlassEffects = (visualType: string | null | undefined, effects: HoloFrameEffects = 'on') => {
  if (effects === 'off') return '';
  
  switch (visualType) {
    case 'default':
      return 'shadow-[0_0_15px_rgba(0,128,255,0.15)] hover:shadow-[0_0_25px_rgba(0,128,255,0.3)]';
    case 'solid':
      return 'shadow-[0_0_20px_rgba(0,128,255,0.2)] hover:shadow-[0_0_30px_rgba(0,128,255,0.4)]';
    case 'outline':
      return 'hover:shadow-[0_0_15px_rgba(0,128,255,0.1)]';
    case 'ghost':
      return 'hover:shadow-[0_0_10px_rgba(0,128,255,0.1)]';
    case 'inverse':
      return 'shadow-[0_0_15px_rgba(0,128,255,0.15)]';
    case 'contrast':
      return 'shadow-[0_0_10px_rgba(0,0,0,0.5)]';
    default:
      return '';
  }
};

export const buttonVariants = cva(
  'font-sans font-medium tracking-wide transition-all duration-300 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hf-bg)] disabled:opacity-50 disabled:pointer-events-none rounded-md backdrop-blur-md',
  {
    variants: {
      visualType: {
        default: 'bg-[rgba(12,16,28,0.55)] border border-[var(--hf-border-main)]/30 text-[var(--hf-text)] hover:bg-[rgba(12,16,28,0.7)] hover:border-[var(--hf-border-main)]/60 active:scale-[0.98]',
        solid: 'bg-[var(--hf-surface)] border border-[var(--hf-border-main)] text-[var(--hf-text)] hover:bg-[var(--hf-surface)]/90 active:scale-[0.98]',
        outline: 'bg-transparent border border-[var(--hf-border-main)]/50 text-[var(--hf-text)] hover:bg-[var(--hf-border-main)]/10 active:bg-[var(--hf-border-main)]/20',
        ghost: 'bg-transparent border-none text-[var(--hf-text)]/80 hover:bg-[var(--hf-surface)]/20 hover:text-[var(--hf-text)] active:bg-[var(--hf-surface)]/30',
        inverse: 'bg-[var(--hf-text)] border border-transparent text-[var(--hf-bg)] hover:bg-[var(--hf-text)]/90 active:scale-[0.98]',
        contrast: 'bg-black/80 border border-white/20 text-white hover:bg-black active:bg-black',
        soft: 'bg-[var(--hf-surface)]/30 border border-[var(--hf-border-dim)]/30 text-[var(--hf-text)] hover:bg-[var(--hf-surface)]/50',
        neutral: 'bg-transparent border border-[var(--hf-border-dim)] text-[var(--hf-text)]/70 hover:text-[var(--hf-text)] hover:border-[var(--hf-border-dim)]/80',
        subtle: 'bg-[var(--hf-surface)]/20 border-none text-[var(--hf-text)] hover:bg-[var(--hf-surface)]/40',
        elevated: 'bg-[rgba(12,16,28,0.65)] border border-[var(--hf-border-main)]/40 text-[var(--hf-text)] shadow-lg hover:border-[var(--hf-border-main)]',
        flat: 'bg-transparent border-none text-[var(--hf-text)] hover:bg-[var(--hf-surface)]/10',
        tinted: 'bg-[var(--hf-border-main)]/10 border border-[var(--hf-border-main)]/20 text-[var(--hf-text)] hover:bg-[var(--hf-border-main)]/20',
        link: 'bg-transparent border-none text-[var(--hf-border-main)] hover:underline hover:text-[var(--hf-border-main)]/80 p-0 h-auto',
        disabled: 'bg-[var(--hf-bg)]/50 border border-[var(--hf-border-dim)]/20 text-[var(--hf-text)]/30 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-6 px-2 text-[10px] rounded-sm',
        sm: 'h-8 px-3 text-xs rounded',
        md: 'h-10 px-4 text-sm rounded-md',
        lg: 'h-12 px-6 text-base rounded-md',
        xl: 'h-14 px-8 text-lg rounded-lg',
        icon: 'h-10 w-10 p-0 rounded-md',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {
  effects?: HoloFrameEffects;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, effects = 'on', visualType, size, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(holoFrameEffectsClass(effects), 
          buttonVariants({ visualType, size }),
          getGlassEffects(visualType, effects),
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
