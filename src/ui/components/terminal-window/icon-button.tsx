import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/terminal-window/button';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';
import type { IconButtonBaseProps } from '../_base/icon-button';

export interface IconButtonProps extends React.ComponentProps<typeof Button> {
  effects?: TerminalWindowEffects;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'icon', effects = 'on', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn(terminalWindowEffectsClass(effects), 'rounded-none', className)}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton };
