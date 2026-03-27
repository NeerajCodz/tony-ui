import * as React from 'react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 'flex items-center space-x-2', className)}
      {...props}
    />
  );
});
InputGroup.displayName = 'InputGroup';

export { InputGroup };
