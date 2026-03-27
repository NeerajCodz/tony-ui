import { cn } from '@/lib/utils';
import * as React from 'react';
import { CollapsibleBase, CollapsibleContentBase, CollapsibleTriggerBase, type CollapsibleBaseProps } from '../_base/collapsible';

const Collapsible = React.forwardRef<React.ComponentRef<typeof CollapsibleBase>, CollapsibleBaseProps>(
  ({ className, ...props }, ref) => (
    <CollapsibleBase
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
);
Collapsible.displayName = 'Collapsible';

const CollapsibleTrigger = CollapsibleTriggerBase;

const CollapsibleContent = CollapsibleContentBase;

export { Collapsible,CollapsibleContent,CollapsibleTrigger };
