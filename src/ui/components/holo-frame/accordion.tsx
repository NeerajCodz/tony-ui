import * as React from 'react';
import { AccordionPrimitive } from '../_base/accordion';
import { AccordionBase, AccordionItemBase, AccordionHeaderBase, AccordionTriggerBase, AccordionContentBase, type AccordionBaseProps, type AccordionItemBaseProps, type AccordionTriggerBaseProps, type AccordionContentBaseProps } from '../_base/accordion';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { ChevronDown } from 'lucide-react';

const Accordion = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Root>, HoloFrameAccordionProps>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AccordionBase 
      ref={ref} 
      className={cn(holoFrameEffectsClass(effects), 'space-y-2', className)} 
      {...props} 
    />
  )
);
Accordion.displayName = 'Accordion';

export type HoloFrameAccordionProps = AccordionBaseProps & {
  effects?: HoloFrameEffects;
};

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemBaseProps & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      style={{ ...style }}
      className={cn(holoFrameEffectsClass(effects), 
        'border border-[var(--hf-border-dim)] bg-[var(--hf-surface)]  transition-colors',
        'data-[state=open]:border-[var(--hf-border-main)]',
        className
      )}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerBaseProps & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionHeaderBase className="flex">
      <AccordionTriggerBase
        ref={ref}
        className={cn(holoFrameEffectsClass(effects), 
          'flex flex-1 items-center justify-between px-4 py-4 font-sans font-bold uppercase tracking-wider transition-all hover:text-[var(--hf-border-main)] [&[data-state=open]>svg]:rotate-180',
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

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentBaseProps & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 px-4 text-[var(--hf-text)] font-mono">{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
