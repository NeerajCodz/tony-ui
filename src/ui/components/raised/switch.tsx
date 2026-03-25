import * as React from 'react';
import { SwitchPrimitive } from '../_base/switch';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '../_base/switch';
import { cn } from '@/lib/utils';

export interface SwitchProps extends SwitchBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-5 w-9';
    case 'md': return 'h-6 w-11';
    case 'lg': return 'h-8 w-14';
    default: return 'h-6 w-11';
  }
};

const getThumbSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-3 w-3 translate-x-1 data-[state=checked]:translate-x-[18px]';
    case 'md': return 'h-4 w-4 translate-x-1 data-[state=checked]:translate-x-[22px]';
    case 'lg': return 'h-6 w-6 translate-x-1 data-[state=checked]:translate-x-[26px]';
    default: return 'h-4 w-4 translate-x-1 data-[state=checked]:translate-x-[22px]';
  }
};

export const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <SwitchBase
        ref={ref}
        size={size}
        className={cn(
          'peer inline-flex shrink-0 cursor-pointer items-center border-2 border-[var(--ra-border)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ra-bg)] disabled:cursor-not-allowed disabled:opacity-50 bg-[var(--ra-surface)] rounded-[4px] shadow-[2px_2px_0_var(--ra-shadow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_var(--ra-shadow)]',
          'data-[state=checked]:bg-[var(--ra-accent)] data-[state=unchecked]:bg-[var(--ra-surface)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <SwitchThumbBase
          className={cn(
            'pointer-events-none block bg-[var(--ra-text)] shadow-none ring-0 transition-transform data-[state=checked]:bg-white rounded-[2px] border border-[var(--ra-border)]',
            getThumbSizeStyles(size)
          )}
        />
      </SwitchBase>
    );
  }
);
Switch.displayName = 'Switch';
