import * as React from 'react';
import { AccordionPrimitive } from '../_base/accordion';
import { AccordionBase, AccordionItemBase, AccordionHeaderBase, AccordionTriggerBase, AccordionContentBase, type AccordionBaseProps, type AccordionItemBaseProps, type AccordionTriggerBaseProps, type AccordionContentBaseProps } from '../_base/accordion';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { ChevronDown } from 'lucide-react';

export type TechPanelAccordionProps = AccordionBaseProps & {
  effects?: TechPanelEffects;
};

const Accordion = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Root>, TechPanelAccordionProps>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AccordionBase 
      ref={ref} 
      className={cn(techPanelEffectsClass(effects), 'space-y-2', className)} 
      {...props} 
    />
  )
);
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemBaseProps & { effects?: TechPanelEffects }>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      style={{ ...style }}
      className={cn(techPanelEffectsClass(effects), 
        'border border-[var(--tp-border-outer)] bg-[var(--tp-panel)] transition-colors',
        'data-[state=open]:border-[var(--tp-accent)] data-[state=open]:shadow-[inset_0_0_0_1px_var(--tp-accent)]',
        className
      )}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerBaseProps & { effects?: TechPanelEffects }>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionHeaderBase className="flex">
      <AccordionTriggerBase
        ref={ref}
        className={cn(techPanelEffectsClass(effects), 
          'flex flex-1 items-center justify-between px-4 py-4 font-display font-bold uppercase tracking-wider transition-all hover:text-[var(--tp-accent)] [&[data-state=open]>svg]:rotate-180',
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

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentBaseProps & { effects?: TechPanelEffects }>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className={cn(techPanelEffectsClass(effects), 
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 px-4 text-[var(--text-secondary)] font-mono border-t border-[var(--tp-border-inner)]/50 pt-4 bg-[var(--tp-inset)]/20">{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
