import { cn } from '@/lib/utils';
import * as React from 'react';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import { Button, ButtonProps } from './button';

export interface IconButtonProps extends ButtonProps {
  effects?: EnergyShieldEffects;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, effects = 'on', size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn(energyShieldEffectsClass(effects), 'aspect-square p-0', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
