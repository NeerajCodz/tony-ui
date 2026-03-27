import * as React from 'react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 'flex items-center space-x-2', className)}
      {...props}
    />
  );
});
InputGroup.displayName = 'InputGroup';

export { InputGroup };
