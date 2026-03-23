import * as React from 'react';
import { 
    CollapsibleBase, 
    CollapsibleTriggerBase, 
    CollapsibleContentBase,
    type CollapsibleBaseProps
} from '../_base/collapsible';
import { cn } from '@/lib/utils';

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

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
