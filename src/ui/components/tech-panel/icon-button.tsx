import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Button, type ButtonProps } from './button';
import type { IconButtonBaseProps } from '../_base/icon-button';

export interface IconButtonProps extends ButtonProps {
  effects?: TechPanelEffects;
  isRound?: boolean; // Tech panel generally doesn't use round, but keeping prop for compatibility
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, effects = 'on', isRound = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(techPanelEffectsClass(effects), 
          'p-0 aspect-square flex items-center justify-center',
          isRound ? 'rounded-full' : 'rounded-none', // Allow override if explicitly requested, but default is square
          className
        )}
        effects={effects}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
