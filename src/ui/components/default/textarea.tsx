import * as React from 'react';
import { TextareaBase, type TextareaBaseProps } from '../_base/textarea';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaBaseProps {}

const getTypeStyles = (type: string = 'default', invalid: boolean = false) => {
  if (invalid) {
    return 'border-red-500/50 text-red-500 placeholder:text-red-500/50 focus:border-red-500 focus:ring-red-500/20 bg-red-500/5';
  }

  switch (type) {
    case 'default':
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)] focus:ring-[var(--df-accent)]/20';
    case 'outline':
      return 'bg-transparent border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)] focus:ring-[var(--df-accent)]/20';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:bg-[var(--df-surface)]';
    case 'soft':
      return 'bg-[var(--df-accent)]/10 border-none text-[var(--df-accent)] placeholder:text-[var(--df-accent)]/50 focus:bg-[var(--df-accent)]/15';
    case 'neutral':
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-gray-500 focus:ring-gray-500/20';
    case 'tinted':
        return 'bg-[var(--df-accent)]/5 border border-[var(--df-accent)]/20 text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)]';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--df-surface)] border border-[var(--df-border)] text-[var(--df-text)] placeholder:text-[var(--df-muted)] focus:border-[var(--df-accent)]';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'min-h-[60px] p-2 text-xs rounded-md';
    case 'md': return 'min-h-[80px] p-3 text-sm rounded-md';
    case 'lg': return 'min-h-[100px] p-4 text-base rounded-md';
    default: return 'min-h-[80px] p-3 text-sm rounded-md';
  }
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, type = 'default', size = 'md', invalid = false, ...props }, ref) => {
    return (
      <TextareaBase
        ref={ref}
        type={type}
        size={size}
        invalid={invalid}
        className={cn(
          'w-full transition-all duration-150 outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:ring-2 focus:ring-offset-0 focus:ring-offset-[var(--df-bg)]',
          getTypeStyles(type, invalid),
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
