import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

import type * as __BaseImport_item from '../_base/item';

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: TechPanelEffects;
    active?: boolean;
    disabled?: boolean;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, effects = 'on', active, disabled, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(techPanelEffectsClass(effects), 
            'flex items-center gap-2 px-3 py-2 text-sm font-mono transition-colors rounded-none',
            active && 'bg-[var(--tp-accent)] text-[var(--tp-bg)] font-bold',
            disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
            !active && !disabled && 'hover:bg-[var(--tp-border-inner)]/20 hover:text-[var(--tp-accent)]',
            className
        )}
        {...props}
      />
    );
  }
);
Item.displayName = 'Item';

export { Item };
