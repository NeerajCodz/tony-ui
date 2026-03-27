import { cn } from '@/lib/utils';
import * as React from 'react';
import { ButtonGroupBase, type ButtonGroupBaseProps } from '../_base/button-group';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  effects?: EnergyShieldEffects;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, effects = 'on', orientation = 'horizontal', attached = true, ...props }, ref) => {
    return (
      <ButtonGroupBase
        ref={ref}
        orientation={orientation}
        attached={attached}
        className={cn(energyShieldEffectsClass(effects), 
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          // If attached, we need to handle borders and negative margins. 
          // For angular-corner with clip-paths, attaching is hard. 
          // We'll simulate it by removing inner borders/gaps if attached, but clip-paths might overlap.
          // Better to just use a small gap for this theme to preserve the "modules" look.
          attached ? 'gap-[1px]' : 'gap-2',
          className
        )}
        {...props}
      />
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
