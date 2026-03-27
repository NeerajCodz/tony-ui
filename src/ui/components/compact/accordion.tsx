import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { AccordionBase, AccordionContentBase, AccordionHeaderBase, AccordionItemBase, AccordionPrimitive, AccordionTriggerBase, type AccordionBaseProps, type AccordionContentBaseProps, type AccordionItemBaseProps, type AccordionTriggerBaseProps } from '../_base/accordion';

const Accordion = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Root>, AccordionBaseProps>(
  ({ className, ...props }, ref) => (
    <AccordionBase 
      ref={ref} 
      className={cn('space-y-2', className)} 
      {...props} 
    />
  )
);
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemBaseProps>(
  ({ className, style, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      style={{ borderRadius: '2px', ...style }}
      className={cn(
        'border border-[var(--cp-border)] bg-[var(--cp-bg)]  transition-colors',
        'data-[state=open]:border-[var(--cp-accent)]',
        className
      )}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerBaseProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionHeaderBase className="flex">
      <AccordionTriggerBase
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between px-4 py-2 font-mono font-bold  tracking-normal transition-all hover:text-[var(--cp-accent)] [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-75" />
      </AccordionTriggerBase>
    </AccordionHeaderBase>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentBaseProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className={cn(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 px-4 text-[var(--text-secondary)] font-mono">{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion,AccordionContent,AccordionItem,AccordionTrigger };
