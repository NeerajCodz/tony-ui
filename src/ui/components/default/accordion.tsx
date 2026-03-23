import * as React from 'react';
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

const Accordion = React.forwardRef<React.ComponentRef<typeof AccordionBase>, AccordionBaseProps>(
  ({ className, ...props }, ref) => (
    <AccordionBase
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
);
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionItemBase>, AccordionItemBaseProps>(
  ({ className, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      className={cn('border-b border-[var(--df-border)]', className)}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionTriggerBase>, AccordionTriggerBaseProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionHeaderBase className='flex'>
      <AccordionTriggerBase
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
      </AccordionTriggerBase>
    </AccordionHeaderBase>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionContentBase>, AccordionContentBaseProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className={cn(
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className='pb-4 pt-0'>{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
