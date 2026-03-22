import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Angular Corner Clip Path
const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

export const buttonVariants = cva(
  'font-mono font-bold uppercase tracking-wider transition-all duration-300 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ac-bg)] disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--ac-bg)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] hover:border-[var(--ac-accent-dim)] active:bg-[var(--ac-surface)]',
        solid: 'bg-[var(--ac-accent-dim)] border-2 border-[var(--ac-accent)] text-[var(--ac-edge-light)] hover:bg-[var(--ac-accent)]/30 hover:shadow-[inset_0_0_20px_rgba(0,200,255,0.2)] active:brightness-110',
        outline: 'bg-transparent border-2 border-[var(--ac-accent)] text-[var(--ac-accent)] hover:bg-[var(--ac-accent)]/10 active:bg-[var(--ac-accent)]/20',
        ghost: 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--ac-surface)] hover:text-[var(--ac-accent)] active:bg-[var(--ac-surface)]/80 relative after:content-[""] after:absolute after:inset-0 after:border-2 after:border-[var(--ac-accent)]/0 after:hover:border-[var(--ac-accent)]/50 after:transition-all',
        inverse: 'bg-[var(--ac-edge-light)] border-2 border-[var(--ac-bg)] text-[var(--ac-bg)] font-bold hover:opacity-90 active:opacity-80',
        contrast: 'bg-[#000000] border-2 border-[var(--ac-danger)] text-[#ffffff] hover:bg-[#111] active:bg-[#222]',
        soft: 'bg-[rgba(0,200,255,0.06)] border-2 border-[rgba(0,200,255,0.2)] text-[var(--text-secondary)] hover:bg-[rgba(0,200,255,0.1)] active:bg-[rgba(0,200,255,0.15)]',
        neutral: 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]',
        subtle: 'bg-[var(--ac-surface)]/50 border-none text-[var(--text-secondary)] hover:bg-[var(--ac-surface)] hover:text-[var(--text-primary)]',
        elevated: 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-[var(--ac-accent)] hover:shadow-[0_4px_20px_rgba(0,200,255,0.1)]',
        flat: 'bg-transparent border-none text-[var(--text-primary)] hover:bg-[var(--ac-surface)]/50',
        tinted: 'bg-[var(--ac-accent)]/20 border-2 border-[var(--ac-accent)]/50 text-[var(--ac-edge-light)] hover:bg-[var(--ac-accent)]/30',
        link: 'bg-transparent border-none text-[var(--ac-accent)] hover:underline hover:text-[var(--ac-edge-light)] p-0 h-auto clip-path-none',
        disabled: 'bg-[var(--ac-bg)] border-2 border-[var(--ac-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-5 px-2 text-[10px] [--corner:4px]',
        sm: 'h-7 px-3 text-xs [--corner:8px]',
        md: 'h-9 px-4 text-sm [--corner:12px]',
        lg: 'h-11 px-5 text-base [--corner:16px]',
        xl: 'h-[52px] px-6 text-lg [--corner:18px]',
        icon: 'h-9 w-9 p-0 [--corner:8px]',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, visualType, size, style, ...props }, ref) => {
    // Merge custom style with clip-path, unless it's a link or unstyled which might not want it
    const componentStyle = (visualType !== 'link' && visualType !== 'unstyled') 
      ? { ...style, clipPath: AC_CLIP_PATH } 
      : style;

    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(buttonVariants({ visualType, size, className }))}
        style={componentStyle}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
