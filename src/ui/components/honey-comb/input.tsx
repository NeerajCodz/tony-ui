import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface InputProps extends InputBaseProps {
  effects?: HoneyCombEffects;
}


// Hive Frame Clip Path (Chamfered corners)
const HIVE_FRAME_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-[var(--hc-queen)] text-[var(--hc-queen)] placeholder:text-[var(--hc-queen)]/50 focus:border-[var(--hc-queen)] focus:ring-[var(--hc-queen)]/20 bg-[var(--hc-queen)]/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--hc-surface)] border border-[var(--hc-hex-stroke)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--hc-accent)] focus:bg-[var(--hc-bg)]';
    case 'outline':
      return 'bg-transparent border border-[var(--hc-accent)] text-[var(--hc-accent)] placeholder:text-[var(--hc-accent)]/50 focus:bg-[var(--hc-surface)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--hc-surface)] focus:border focus:border-[var(--hc-accent)]';
    case 'soft':
      return 'bg-[var(--hc-accent)]/10 border-none text-[var(--hc-accent)] placeholder:text-[var(--hc-accent)]/50 focus:bg-[var(--hc-accent)]/20 focus:border focus:border-[var(--hc-accent)]';
    case 'subtle':
      return 'bg-[var(--hc-surface)]/50 border-none text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--hc-surface)] focus:text-[var(--text-primary)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:bg-[var(--hc-surface)]/20';
    case 'neutral':
      return 'bg-[var(--hc-surface)] border border-[var(--hc-hex-stroke)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]';
    case 'elevated':
      return 'bg-[var(--hc-surface)] border-none text-[var(--text-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(255,160,20,0.1)] focus:border focus:border-[var(--hc-accent)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--hc-surface)] border border-[var(--hc-hex-stroke)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--hc-accent)]';
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
    // Merge custom style with clip-path, unless it's unstyled
    const componentStyle = visualType !== 'unstyled'
      ? { ...style, clipPath: HIVE_FRAME_PATH } 
      : style;

    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        style={componentStyle}
        className={cn(honeyCombEffectsClass(effects), 
          'w-full font-["JetBrains_Mono"] font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--text-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--hc-bg)] focus:ring-transparent', // Hide default ring, use border
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
