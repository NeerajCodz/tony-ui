import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';
import type { ButtonGroupBaseProps } from '../_base/button-group';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: TerminalWindowEffects;
  orientation?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(terminalWindowEffectsClass(effects), 
          'inline-flex -space-x-px rounded-none shadow-sm shadow-black/5',
          orientation === 'vertical' && 'flex-col -space-x-0 -space-y-px',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              // @ts-ignore
              className: cn(
                // @ts-ignore
                child.props.className,
                'rounded-none first:rounded-l-none last:rounded-r-none focus-visible:z-10',
                orientation === 'vertical' && 'w-full first:rounded-t-none first:rounded-bl-none last:rounded-b-none last:rounded-tr-none'
              ),
            });
          }
          return child;
        })}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
