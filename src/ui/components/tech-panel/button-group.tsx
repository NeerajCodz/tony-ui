import * as React from 'react';
import { ButtonGroupBase, type ButtonGroupBaseProps } from '../_base/button-group';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  effects?: TechPanelEffects;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, effects = 'on', orientation = 'horizontal', attached = true, ...props }, ref) => {
    return (
      <ButtonGroupBase
        ref={ref}
        orientation={orientation}
        attached={attached}
        className={cn(techPanelEffectsClass(effects), 
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          // If attached, we need to handle borders and negative margins. 
          // For tech-panel with sharp corners, attaching is easy.
          attached ? 'gap-0 [&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none' : 'gap-2',
          orientation === 'horizontal' && attached ? '[&>*:not(:first-child)]:border-l-0' : '',
          orientation === 'vertical' && attached ? '[&>*:not(:first-child)]:border-t-0' : '',
          className
        )}
        {...props}
      />
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
