import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

export interface InputProps extends InputBaseProps {
  effects?: QuantumGateEffects;
}

// Quantum Gate Folded Clip Path for Input (smaller fold)
const QG_INPUT_CLIP = 'polygon(var(--fold, 10px) 0%, 100% 0%, 100% calc(100% - var(--fold, 10px)), calc(100% - var(--fold, 10px)) 100%, 0% 100%, 0% var(--fold, 10px))';

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-(--qg-iris-3) text-(--qg-iris-3) placeholder:text-(--qg-iris-3)/50 focus:border-(--qg-iris-3) focus:ring-(--qg-iris-3)/20 bg-(--qg-iris-3)/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-(--qg-surface) border border-(--qg-border) text-[rgba(200,180,255,0.8)] placeholder:text-[rgba(200,180,255,0.4)] focus:border-(--qg-iris-1) focus:bg-(--qg-bg)';
    case 'outline':
      return 'bg-transparent border border-(--qg-iris-1) text-(--qg-iris-1) placeholder:text-(--qg-iris-1)/50 focus:bg-(--qg-surface)';
    case 'ghost':
      return 'bg-transparent border-none text-[rgba(200,180,255,0.8)] placeholder:text-[rgba(200,180,255,0.4)] focus:bg-(--qg-surface) focus:border focus:border-(--qg-iris-1)';
    case 'soft':
      return 'bg-(--qg-iris-1)/10 border-none text-(--qg-iris-1) placeholder:text-(--qg-iris-1)/50 focus:bg-(--qg-iris-1)/20 focus:border focus:border-(--qg-iris-1)';
    case 'subtle':
      return 'bg-(--qg-surface)/50 border-none text-[rgba(200,180,255,0.6)] placeholder:text-[rgba(200,180,255,0.3)] focus:bg-(--qg-surface) focus:text-[rgba(200,180,255,0.8)]';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[rgba(200,180,255,0.8)] placeholder:text-[rgba(200,180,255,0.4)] focus:bg-(--qg-surface)/20';
    case 'neutral':
      return 'bg-(--qg-surface) border border-(--qg-border) text-[rgba(200,180,255,0.6)] placeholder:text-[rgba(200,180,255,0.3)] focus:border-[rgba(200,180,255,0.8)]';
    case 'elevated':
      return 'bg-(--qg-surface) border-none text-[rgba(200,180,255,0.8)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_4px_20px_rgba(102,0,255,0.2)] focus:border focus:border-(--qg-iris-1)';
    case 'unstyled':
      return '';
    default:
      return 'bg-(--qg-surface) border border-(--qg-border) text-[rgba(200,180,255,0.8)] placeholder:text-[rgba(200,180,255,0.4)] focus:border-(--qg-iris-1)';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-8 px-3 text-xs [--fold:6px]';
    case 'md': return 'h-10 px-4 text-sm [--fold:10px]';
    case 'lg': return 'h-12 px-6 text-base [--fold:14px]';
    default: return 'h-10 px-4 text-sm [--fold:10px]';
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, effects = 'on', visualType = 'default', inputSize = 'md', invalid = false, style, ...props }, ref) => {
    // Merge custom style with clip-path, unless it's unstyled
    const componentStyle = visualType !== 'unstyled'
      ? { ...style, clipPath: QG_INPUT_CLIP } 
      : style;

    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        style={componentStyle}
        className={cn(quantumGateEffectsClass(effects), 
          'w-full font-sans font-medium',
          'transition-all duration-200 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[rgba(200,180,255,0.8)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-2 focus:ring-offset-2 focus:ring-offset-(--qg-bg) focus:ring-transparent', // Hide default ring, use border
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
