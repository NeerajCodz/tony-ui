import { cn } from '@/lib/utils';
import { AccordionBase, AccordionContentBase, AccordionItemBase, AccordionTriggerBase } from '@/ui/components/_base/accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

const Accordion = AccordionBase;

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionItemBase>, React.ComponentPropsWithoutRef<typeof AccordionItemBase>>(
  ({ className, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      className={cn('border-b border-[var(--cb-trace)]', className)}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionTriggerBase>, React.ComponentPropsWithoutRef<typeof AccordionTriggerBase>>(
  ({ className, children, ...props }, ref) => (
    <AccordionTriggerBase
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-[var(--cb-trace-lit)] [&[data-state=open]>svg]:rotate-180 font-mono uppercase tracking-widest text-[var(--cb-trace-dim)] data-[state=open]:text-[var(--cb-trace-lit)] data-[state=open]:drop-shadow-[0_0_5px_var(--cb-trace-lit)]',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionTriggerBase>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionContentBase>, React.ComponentPropsWithoutRef<typeof AccordionContentBase>>(
  ({ className, children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pb-4 pt-0 font-mono text-[var(--cb-trace-dim)] uppercase tracking-wide', className)}>{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion,AccordionContent,AccordionItem,AccordionTrigger };
