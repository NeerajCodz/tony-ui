import * as React from 'react';
import { SwitchPrimitive } from '../_base/switch';
import { SwitchBase, SwitchThumbBase, type SwitchBaseProps } from '../_base/switch';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

export interface SwitchProps extends SwitchBaseProps {
  effects?: TechPanelEffects;
}

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

export const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, effects = 'on', size = 'md', style, ...props }, ref) => {
    return (
      <SwitchBase
        ref={ref}
        size={size}
        style={{
          ...style
        }}
        className={cn(techPanelEffectsClass(effects), 
          'peer inline-flex shrink-0 cursor-pointer items-center border border-[var(--tp-border-outer)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 rounded-none bg-[var(--tp-inset)]',
          'data-[state=checked]:bg-[var(--tp-inset)] data-[state=unchecked]:bg-[var(--tp-inset)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <SwitchThumbBase
          className={cn(techPanelEffectsClass(effects), 
            'pointer-events-none block bg-[var(--text-secondary)] shadow-lg ring-0 transition-transform data-[state=checked]:bg-[var(--tp-accent)] rounded-none',
            getThumbSizeStyles(size),
          )}
        />
      </SwitchBase>
    );
  }
);
Switch.displayName = 'Switch';
