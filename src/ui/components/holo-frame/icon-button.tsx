import * as React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import type { IconButtonBaseProps } from '../_base/icon-button';

export interface IconButtonProps extends ButtonProps {
  effects?: HoloFrameEffects;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, effects = 'on', size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn(holoFrameEffectsClass(effects), 'aspect-square p-0', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
