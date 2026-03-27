import { cn } from '@/lib/utils';
import * as React from 'react';
import { LabelBase, type LabelBaseProps } from '../_base/label';

export interface LabelProps extends LabelBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'text-xs';
    case 'md': return 'text-sm';
    case 'lg': return 'text-base';
    default: return 'text-sm';
  }
};

export const Label = React.forwardRef<React.ComponentRef<typeof LabelBase>, LabelProps>(
  ({ className, size = 'md', required, disabled, invalid, ...props }, ref) => {
    return (
      <LabelBase
        ref={ref}
        size={size}
        required={required}
        disabled={disabled}
        invalid={invalid}
        className={cn(
          'text-[var(--df-text)] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          disabled && 'opacity-50 cursor-not-allowed',
          invalid && 'text-red-500',
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = 'Label';
