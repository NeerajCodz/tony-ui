import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '../_base/switch';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface SwitchProps extends SwitchBaseProps {
  effects?: HoneyCombEffects;
}

const TRACK_CLIP = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 w-8 ';
    case 'md': return 'h-6 w-11 ';
    case 'lg': return 'h-8 w-14 ';
    default: return 'h-6 w-11 ';
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

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, effects = 'on', size = 'md', style, ...props }, ref) => {
    return (
      <SwitchBase
        ref={ref}
        size={size}
        style={{
          clipPath: TRACK_CLIP,
          ...style
        }}
        className={cn(honeyCombEffectsClass(effects), 
          'peer inline-flex shrink-0 cursor-pointer items-center border border-[var(--hc-hex-line)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-plasma-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hc-bg)] disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-[var(--hc-plasma-1)] data-[state=unchecked]:bg-[var(--hc-bg)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <SwitchThumbBase
          className={cn(honeyCombEffectsClass(effects), 
            'pointer-events-none block bg-[var(--hc-plasma-1)] shadow-lg ring-0 transition-transform data-[state=checked]:bg-[var(--hc-bg)]',
            getThumbSizeStyles(size),
            '[clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]' // Octagonal thumb
          )}
        />
      </SwitchBase>
    );
  }
);
Switch.displayName = 'Switch';
