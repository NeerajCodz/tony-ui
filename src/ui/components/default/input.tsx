import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';

export interface InputProps extends InputBaseProps {}

const getVisualTypeStyles = (visualType: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-red-500/50 text-red-500 placeholder:text-red-500/50 focus:border-red-500 focus:ring-red-500/20 bg-red-500/5';
  }

  switch (visualType) {
    case 'default':
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)] focus:ring-[var(--df-accent)]/20 focus:bg-[var(--df-surface)]';
    case 'outline':
      return 'bg-transparent border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)] focus:ring-[var(--df-accent)]/20';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:bg-[var(--df-surface)]';
    case 'soft':
      return 'bg-[var(--df-accent)]/10 border-none text-[var(--df-accent)] placeholder:text-[var(--df-accent)]/50 focus:bg-[var(--df-accent)]/15';
    case 'subtle':
      return 'bg-[var(--df-surface)] border-none text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:bg-[var(--df-surface)]/80';
    case 'flat':
      return 'bg-transparent border-none p-0 text-[var(--df-text)] placeholder:text-[var(--df-muted)]';
    case 'neutral':
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-gray-500 focus:ring-gray-500/20';
    case 'elevated':
      return 'bg-[var(--df-surface)] border-none shadow-sm text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:shadow-md';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-7 px-2 text-xs rounded-md';
    case 'md': return 'h-9 px-3 text-sm rounded-md';
    case 'lg': return 'h-11 px-4 text-base rounded-md';
    default: return 'h-9 px-3 text-sm rounded-md';
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, visualType = 'default', inputSize = 'md', invalid = false, ...props }, ref) => {
    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        className={cn(
          'w-full transition-all duration-150 outline-none file:bg-transparent file:text-sm file:font-medium file:text-[var(--df-text)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-2 focus:ring-offset-0 focus:ring-offset-[var(--df-bg)]', // Ring styles
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
