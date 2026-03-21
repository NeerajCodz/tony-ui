import * as React from 'react';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '../_base/switch';
import { cn } from '@/lib/utils';

export interface SwitchProps extends SwitchBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-8';
    case 'md': return 'h-6 w-11';
    case 'lg': return 'h-8 w-14';
    default: return 'h-6 w-11';
  }
};

const getThumbSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-3 w-3 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5';
    case 'md': return 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5';
    case 'lg': return 'h-7 w-7 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5';
    default: return 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5';
  }
};

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchBase>, SwitchProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <SwitchBase
        ref={ref}
        size={size}
        className={cn(
          'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--df-bg)] disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-[var(--df-accent)] data-[state=unchecked]:bg-[var(--df-surface)] data-[state=unchecked]:border-[var(--df-border)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <SwitchThumbBase
          className={cn(
            'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:bg-[var(--df-text)]',
            getThumbSizeStyles(size)
          )}
        />
      </SwitchBase>
    );
  }
);
Switch.displayName = 'Switch';
