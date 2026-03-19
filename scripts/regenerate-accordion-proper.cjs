const fs = require('fs');
const path = require('path');

const componentName = 'accordion';
const versions = [
  'angular-corner',
  'holo-frame',
  'data-panel',
  'circuit-board',
  'quantum-gate',
  'tactical-hud',
  'energy-shield',
  'terminal-window',
  'matrix-grid',
  'neon-outline',
];

const targetDir = path.join(__dirname, '../src/ui/components', componentName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Generate the dispatcher (index.tsx)
const indexContent = `/**
 * Accordion Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '../../../lib/utils';
import { ChevronDown } from 'lucide-react';

// --- Types ---
type AccordionVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

interface AccordionProps extends React.ComponentProps<typeof AccordionPrimitive.Root> {
  version?: AccordionVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface AccordionContextValue {
  version: AccordionVersion;
  variant: AccordionProps['variant'];
  type: AccordionProps['type'];
}

const AccordionContext = createContext<AccordionContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useAccordionContext = () => useContext(AccordionContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./accordion-angular-corner')),
  'holo-frame': lazy(() => import('./accordion-holo-frame')),
  'data-panel': lazy(() => import('./accordion-data-panel')),
  'circuit-board': lazy(() => import('./accordion-circuit-board')),
  'quantum-gate': lazy(() => import('./accordion-quantum-gate')),
  'tactical-hud': lazy(() => import('./accordion-tactical-hud')),
  'energy-shield': lazy(() => import('./accordion-energy-shield')),
  'terminal-window': lazy(() => import('./accordion-terminal-window')),
  'matrix-grid': lazy(() => import('./accordion-matrix-grid')),
  'neon-outline': lazy(() => import('./accordion-neon-outline')),
};

// --- Main Component ---
const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}, ref) => {
  return (
    <AccordionContext.Provider value={{ version, variant, type }}>
      <AccordionPrimitive.Root ref={ref} {...props}>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = 'Accordion';

// --- Subcomponents ---

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>((props, ref) => {
  const { version } = useAccordionContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="border-b border-gray-800 p-4 animate-pulse h-16" />}>
      {/* @ts-ignore */}
      <VersionModule.Item ref={ref} {...props} />
    </Suspense>
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>((props, ref) => {
  const { version } = useAccordionContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="h-full w-full" />}>
      {/* @ts-ignore */}
      <VersionModule.Trigger ref={ref} {...props} />
    </Suspense>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>((props, ref) => {
  const { version } = useAccordionContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Content ref={ref} {...props} />
    </Suspense>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// --- Exports ---
const AccordionNamespace = Object.assign(Accordion, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { AccordionNamespace as Accordion };
export default AccordionNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
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
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

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
`;

  fs.writeFileSync(path.join(targetDir, `accordion-${version}.tsx`), versionContent);
});

console.log('Accordion regeneration complete.');
