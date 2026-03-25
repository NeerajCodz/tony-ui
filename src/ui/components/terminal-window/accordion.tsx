import * as React from 'react';
import { AccordionPrimitive } from '../_base/accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'border-b border-[var(--tm-phosphor)]/30', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)]/5 [&[data-state=open]>svg]:rotate-180 font-mono uppercase tracking-wide text-[var(--tm-phosphor)] text-left',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn(terminalWindowEffectsClass(effects), 'pb-4 pt-0 font-mono text-[var(--tm-phosphor)]/80', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
