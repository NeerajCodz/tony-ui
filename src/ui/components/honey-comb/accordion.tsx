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
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { ChevronDown } from 'lucide-react';


const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionBaseProps>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AccordionBase 
      ref={ref} 
      className={cn(honeyCombEffectsClass(effects), 'space-y-2', className)} 
      {...props} 
    />
  )
);
Accordion.displayName = 'Accordion';

export interface HoneyCombAccordionProps extends AccordionBaseProps {
  effects?: HoneyCombEffects;
}

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, AccordionItemBaseProps>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      style={{ ...style }}
      className={cn(honeyCombEffectsClass(effects), 
        'border border-[var(--hc-hex-line)] bg-[var(--hc-surface)]  transition-colors',
        'data-[state=open]:border-[var(--hc-plasma-1)]',
        className
      )}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerBaseProps>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionHeaderBase className="flex">
      <AccordionTriggerBase
        ref={ref}
        className={cn(honeyCombEffectsClass(effects), 
          'flex flex-1 items-center justify-between px-4 py-4 font-["Barlow"] font-bold uppercase tracking-wider transition-all hover:text-[var(--hc-plasma-1)] [&[data-state=open]>svg]:rotate-180',
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

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, AccordionContentBaseProps>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 px-4 text-[var(--text-secondary)] font-["JetBrains_Mono"]">{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
