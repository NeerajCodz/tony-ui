import * as React from 'react';
import { SpinnerBase, type SpinnerBaseProps } from '../_base/spinner';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

export interface SpinnerProps extends SpinnerBaseProps {
  effects?: HoloFrameEffects;
}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'xs': return 'h-3 w-3 border-[1.5px]';
    case 'sm': return 'h-4 w-4 border-2';
    case 'md': return 'h-6 w-6 border-2';
    case 'lg': return 'h-9 w-9 border-[3px]';
    case 'xl': return 'h-12 w-12 border-4';
    default: return 'h-6 w-6 border-2';
  }
};

const getVariantStyles = (variant: string = 'default') => {
  switch (variant) {
    case 'primary': return 'border-[var(--hf-border-main)]/30 border-t-[var(--hf-border-main)]';
    case 'secondary': return 'border-[var(--hf-text)]/30 border-t-[var(--hf-text)]';
    case 'accent': return 'border-[var(--hf-border-main)]/30 border-t-[var(--hf-border-main)]';
    case 'destructive': return 'border-[var(--hf-chromatic-r)]/30 border-t-[var(--hf-chromatic-r)]';
    case 'ghost': return 'border-[var(--hf-text)]/30 border-t-[var(--hf-text)]';
    default: return 'border-[var(--hf-border-main)]/30 border-t-[var(--hf-border-main)]';
  }
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, effects = 'on', size = 'md', variant = 'default', ...props }, ref) => {
    return (
      <SpinnerBase
        ref={ref}
        size={size}
        variant={variant}
        className={cn(holoFrameEffectsClass(effects), 
          'animate-spin rounded-full border-t-transparent',
          getSizeStyles(size),
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';
