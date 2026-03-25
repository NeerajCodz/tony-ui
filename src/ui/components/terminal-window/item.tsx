import * as React from 'react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

import type * as __BaseImport_item from '../_base/item';

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: TerminalWindowEffects;
  active?: boolean;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, active, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(terminalWindowEffectsClass(effects), 
          'flex items-center space-x-2 rounded-none p-2 transition-colors hover:bg-[var(--tm-phosphor)]/10 font-mono text-[var(--tm-phosphor)]',
          active && 'bg-[var(--tm-phosphor)]/20',
          className
        )}
        {...props}
      />
    );
  }
);
Item.displayName = 'Item';

export { Item };
