import { cn } from '@/lib/utils';
import * as React from 'react';
import { SwitchBase, SwitchPrimitive, SwitchThumbBase, type SwitchBaseProps } from '../_base/switch';

export interface SwitchProps extends SwitchBaseProps {}

const TRACK_CLIP = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-8 [--corner:4px]';
    case 'md': return 'h-6 w-11 [--corner:6px]';
    case 'lg': return 'h-8 w-14 [--corner:8px]';
    default: return 'h-6 w-11 [--corner:6px]';
  }
};

const getThumbSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-3 w-3 translate-x-0.5 data-[state=checked]:translate-x-[18px]';
    case 'md': return 'h-4 w-4 translate-x-1 data-[state=checked]:translate-x-[22px]';
    case 'lg': return 'h-6 w-6 translate-x-1 data-[state=checked]:translate-x-[26px]';
    default: return 'h-4 w-4 translate-x-1 data-[state=checked]:translate-x-[22px]';
  }
};

export const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, size = 'md', style, ...props }, ref) => {
    return (
      <SwitchBase
        ref={ref}
        size={size}
        style={{
          clipPath: TRACK_CLIP,
          ...style
        }}
        className={cn(
          'peer inline-flex shrink-0 cursor-pointer items-center border-2 border-[var(--ac-border)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ac-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ac-bg)] disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-[var(--ac-accent)] data-[state=unchecked]:bg-[var(--ac-bg)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <SwitchThumbBase
          className={cn(
            'pointer-events-none block bg-[var(--ac-text)] shadow-lg ring-0 transition-transform data-[state=checked]:bg-[var(--ac-bg)]',
            getThumbSizeStyles(size),
            '[clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]' // Octagonal thumb
          )}
        />
      </SwitchBase>
    );
  }
);
Switch.displayName = 'Switch';
