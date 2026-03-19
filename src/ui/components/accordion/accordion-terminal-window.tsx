import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    item: "border-b border-cyan-900/30 first:border-t hover:bg-cyan-950/10 transition-colors",
    trigger: "flex flex-1 items-center justify-between py-4 font-mono font-medium transition-all hover:text-cyan-400 [&[data-state=open]>svg]:rotate-180 text-cyan-50",
    content: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-cyan-200/70 pb-4",
    icon: "h-4 w-4 shrink-0 transition-transform duration-200 text-cyan-500",
  },
  'holo-frame': {
    item: "border border-cyan-500/20 bg-cyan-900/10 mb-2 rounded shadow-[0_0_5px_rgba(6,182,212,0.1)]",
    trigger: "flex flex-1 items-center justify-between py-3 px-4 font-bold tracking-wide transition-all hover:text-cyan-300 [&[data-state=open]>svg]:rotate-180 text-cyan-100",
    content: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-cyan-200/80 px-4 pb-3 pt-0",
    icon: "h-4 w-4 shrink-0 transition-transform duration-200 text-cyan-400 drop-shadow-[0_0_2px_rgba(6,182,212,0.8)]",
  },
  'data-panel': {
    item: "border-l-2 border-l-gray-700 bg-gray-950 mb-1 data-[state=open]:border-l-cyan-500 transition-colors",
    trigger: "flex flex-1 items-center justify-between py-3 px-4 font-mono text-sm uppercase transition-all hover:bg-gray-900 [&[data-state=open]>svg]:rotate-180 text-gray-300",
    content: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-gray-400 px-4 pb-3 border-t border-gray-900",
    icon: "h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500",
  },
  'circuit-board': {
    item: "border-b border-cyan-900/40 border-dashed last:border-0",
    trigger: "flex flex-1 items-center justify-between py-4 font-mono transition-all hover:text-cyan-300 [&[data-state=open]>svg]:rotate-180 text-cyan-600",
    content: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-cyan-500 pb-4 pl-4 border-l border-cyan-900/30 ml-2",
    icon: "h-4 w-4 shrink-0 transition-transform duration-200 text-cyan-700",
  },
  // Default fallback
  'default': {
    item: "border-b",
    trigger: "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
    content: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-4 pt-0",
    icon: "h-4 w-4 shrink-0 transition-transform duration-200",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('terminal-window' in versionStyles ? 'terminal-window' : 'default');

export const Item = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(styles.item, className)}
    {...props}
  />
));
Item.displayName = "AccordionItem";

export const Trigger = React.forwardRef(({ className, children, ...props }: any, ref: any) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(styles.trigger, className)}
      {...props}
    >
      {children}
      <ChevronDown className={styles.icon} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
Trigger.displayName = AccordionPrimitive.Trigger.displayName;

export const Content = React.forwardRef(({ className, children, ...props }: any, ref: any) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  />
));
Content.displayName = AccordionPrimitive.Content.displayName;
