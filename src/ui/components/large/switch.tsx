import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '../_base/switch';
import { cn } from '@/lib/utils';

export interface SwitchProps extends SwitchBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-6 w-11 rounded-full';
    case 'md': return 'h-8 w-14 rounded-full';
    case 'lg': return 'h-10 w-20 rounded-full';
    default: return 'h-8 w-14 rounded-full';
  }
};

const getThumbSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-4 translate-x-1 data-[state=checked]:translate-x-[22px] rounded-full';
    case 'md': return 'h-6 w-6 translate-x-1 data-[state=checked]:translate-x-[26px] rounded-full';
    case 'lg': return 'h-8 w-8 translate-x-1 data-[state=checked]:translate-x-[42px] rounded-full';
    default: return 'h-6 w-6 translate-x-1 data-[state=checked]:translate-x-[26px] rounded-full';
  }
};

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <SwitchBase
        ref={ref}
        size={size}
        className={cn(
          'peer inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lg-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lg-bg)] disabled:cursor-not-allowed disabled:opacity-50 bg-[var(--lg-surface)]',
          'data-[state=checked]:bg-[var(--lg-accent)] data-[state=unchecked]:bg-[var(--lg-border)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <SwitchThumbBase
          className={cn(
            'pointer-events-none block bg-white shadow-lg ring-0 transition-transform data-[state=checked]:bg-white',
            getThumbSizeStyles(size)
          )}
        />
      </SwitchBase>
    );
  }
);
Switch.displayName = 'Switch';
