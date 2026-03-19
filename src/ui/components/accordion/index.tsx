/**
 * Accordion Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
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

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: AccordionVersion) => {
  switch (version) {
    case 'angular-corner': return import('./accordion-angular-corner.tsx');
    case 'holo-frame': return import('./accordion-holo-frame.tsx');
    case 'data-panel': return import('./accordion-data-panel.tsx');
    case 'circuit-board': return import('./accordion-circuit-board.tsx');
    case 'quantum-gate': return import('./accordion-quantum-gate.tsx');
    case 'tactical-hud': return import('./accordion-tactical-hud.tsx');
    case 'energy-shield': return import('./accordion-energy-shield.tsx');
    case 'terminal-window': return import('./accordion-terminal-window.tsx');
    case 'matrix-grid': return import('./accordion-matrix-grid.tsx');
    case 'neon-outline': return import('./accordion-neon-outline.tsx');
    default: return import('./accordion-angular-corner.tsx');
  }
};

// --- Context ---
interface AccordionContextValue {
  version: AccordionVersion;
  variant: AccordionProps['variant'];
  type: AccordionProps['type'];
  versionModule: any;
}

const AccordionContext = createContext<AccordionContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
  versionModule: null,
});

const useAccordionContext = () => useContext(AccordionContext);

// --- Main Component ---
const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <AccordionContext.Provider value={{ version, variant, type, versionModule }}>
      <AccordionPrimitive.Root ref={ref} {...props}>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = 'Accordion';

// --- Subcomponents ---

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>((props, ref) => {
  const { versionModule } = useAccordionContext();
  
  if (!versionModule) return <div className="border-b border-gray-800 p-4 animate-pulse h-16" />;

  const Component = versionModule.AccordionItem || versionModule.Item;
  return <Component ref={ref} {...props} />;
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>((props, ref) => {
  const { versionModule } = useAccordionContext();

  if (!versionModule) return <div className="h-full w-full" />;

  const Component = versionModule.AccordionTrigger || versionModule.Trigger;
  return <Component ref={ref} {...props} />;
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>((props, ref) => {
  const { versionModule } = useAccordionContext();

  if (!versionModule) return null;

  const Component = versionModule.AccordionContent || versionModule.Content;
  return <Component ref={ref} {...props} />;
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

