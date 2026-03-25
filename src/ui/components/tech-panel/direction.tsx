import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Slot } from '../_base/direction';
interface DirectionProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'ltr' | 'rtl';
  asChild?: boolean;
  effects?: TechPanelEffects;
}

const Direction = React.forwardRef<HTMLDivElement, DirectionProps>(
  ({ className, effects = 'on', direction = 'ltr', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        dir={direction}
        className={cn(techPanelEffectsClass(effects), className)}
        {...props}
      />
    );
  }
);
Direction.displayName = 'Direction';

export { Direction };
