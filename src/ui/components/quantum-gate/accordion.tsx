import * as React from 'react';
import { AccordionPrimitive } from '../_base/accordion';
import { AccordionBase, AccordionItemBase, AccordionHeaderBase, AccordionTriggerBase, AccordionContentBase, type AccordionBaseProps, type AccordionItemBaseProps, type AccordionTriggerBaseProps, type AccordionContentBaseProps } from '../_base/accordion';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { ChevronDown } from 'lucide-react';

const Accordion = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Root>, AccordionBaseProps & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <AccordionBase 
      ref={ref} 
      className={cn(quantumGateEffectsClass(effects), 'space-y-2', className)} 
      {...props} 
    />
  )
);
Accordion.displayName = 'Accordion';

export type QuantumGateAccordionProps = AccordionBaseProps & {
  effects?: QuantumGateEffects;
}

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemBaseProps & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', style, ...props }, ref) => (
    <AccordionItemBase
      ref={ref}
      style={{ '--fold': '12px', ...style } as React.CSSProperties}
      className={cn(quantumGateEffectsClass(effects), 
        'border border-(--qg-border) bg-(--qg-surface) transition-all',
        'data-[state=open]:border-(--qg-iris-1) data-[state=open]:bg-(--qg-surface)/80',
        'relative before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-(--qg-iris-1)/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity',
        '[clip-path:polygon(var(--fold)_0%,100%_0%,100%_calc(100%-var(--fold)),calc(100%-var(--fold))_100%,0%_100%,0%_var(--fold))]',
        className
      )}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerBaseProps & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionHeaderBase className="flex">
      <AccordionTriggerBase
        ref={ref}
        className={cn(quantumGateEffectsClass(effects), 
          'flex flex-1 items-center justify-between px-6 py-4 font-sans font-bold uppercase tracking-wider transition-all hover:text-(--qg-iris-1) [&[data-state=open]>svg]:rotate-180 text-(--text-primary)',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-(--qg-iris-1)" />
      </AccordionTriggerBase>
    </AccordionHeaderBase>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentBaseProps & { effects?: QuantumGateEffects }>(
  ({ className, effects = 'on', children, ...props }, ref) => (
    <AccordionContentBase
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), 
        'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 px-6 text-(--text-secondary) font-sans leading-relaxed">{children}</div>
    </AccordionContentBase>
  )
);
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
