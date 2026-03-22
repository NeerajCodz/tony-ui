import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

export interface InputProps extends InputBaseProps {
  effects?: HoloFrameEffects;
}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--hf-chromatic-r)] text-[var(--hf-chromatic-r)] placeholder:text-[var(--hf-chromatic-r)]/50 focus:border-[var(--hf-chromatic-r)] focus:ring-[var(--hf-chromatic-r)]/20 bg-[var(--hf-chromatic-r)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] placeholder:text-[var(--hf-text)] focus:border-[var(--hf-border-main)] focus:bg-[var(--hf-bg)]';
    case 'outline':
      return 'bg-transparent border border-[var(--hf-border-main)] text-[var(--hf-border-main)] placeholder:text-[var(--hf-border-main)]/50 focus:bg-[var(--hf-surface)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--hf-text)] placeholder:text-[var(--hf-text)] focus:bg-[var(--hf-surface)] focus:border focus:border-[var(--hf-border-main)]';
    case 'soft':
      return 'bg-[var(--hf-border-main)]/10 border-none text-[var(--hf-border-main)] placeholder:text-[var(--hf-border-main)]/50 focus:bg-[var(--hf-border-main)]/20 focus:border focus:border-[var(--hf-border-main)]';
    case 'subtle':
      return 'bg-[var(--hf-surface)]/50 border-none text-[var(--hf-text)] placeholder:text-[var(--hf-text)] focus:bg-[var(--hf-surface)] focus:text-[var(--hf-text)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--hf-text)] placeholder:text-[var(--hf-text)] focus:bg-[var(--hf-surface)]/20';
    case 'neutral':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] placeholder:text-[var(--hf-text)] focus:border-[var(--hf-text)]';
    case 'elevated':
      return 'bg-[var(--hf-surface)] border-none text-[var(--hf-text)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(0,200,255,0.1)] focus:border focus:border-[var(--hf-border-main)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] placeholder:text-[var(--hf-text)] focus:border-[var(--hf-border-main)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-8 px-3 text-xs ';
    case 'md': return 'h-10 px-4 text-sm ';
    case 'lg': return 'h-12 px-6 text-base ';
    default: return 'h-10 px-4 text-sm ';
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, effects = 'on', visualType = 'default', inputSize = 'md', invalid = false, style, ...props }, ref) => {

    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        style={style}
        className={cn(holoFrameEffectsClass(effects), 
          'w-full font-mono font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--hf-text)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--hf-bg)] focus:ring-transparent', // Hide default ring, use border
          getVisualTypeStyles(visualType, invalid),
          getSizeStyles(inputSize),
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
