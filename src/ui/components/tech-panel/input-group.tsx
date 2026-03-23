import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(techPanelEffectsClass(effects), 'flex items-center space-x-0', className)}
      {...props}
    />
  );
});
InputGroup.displayName = 'InputGroup';

export { InputGroup };
