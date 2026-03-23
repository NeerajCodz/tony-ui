import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { 
  AccordionBase, 
  AccordionItemBase, 
  AccordionHeaderBase, 
  AccordionTriggerBase, 
  AccordionContentBase, 
  type AccordionBaseProps,
  type AccordionItemBaseProps,
  type AccordionTriggerBaseProps,
  type AccordionContentBaseProps
} from '../_base/accordion';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';


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
      style={{ ...style }}
      className={cn(
        'border border-[var(--dp-border)] bg-[var(--dp-surface)]  transition-colors',
        'data-[state=open]:border-[var(--dp-accent)]',
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
          'flex flex-1 items-center justify-between px-4 py-4 font-mono font-bold uppercase tracking-wider transition-all hover:text-[var(--dp-accent)] [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
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

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
