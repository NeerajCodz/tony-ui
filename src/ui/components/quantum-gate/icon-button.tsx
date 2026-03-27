import * as React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

export interface IconButtonProps extends ButtonProps {
  effects?: QuantumGateEffects;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, effects = 'on', size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn(quantumGateEffectsClass(effects), 'aspect-square p-0', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
