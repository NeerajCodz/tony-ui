/**
 * Accordion Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { Version, Variant } from '../types/common';

// Types
export type AccordionVersion = Version;
export type AccordionVariant = Variant;

export interface AccordionProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {
  version?: AccordionVersion;
  variant?: AccordionVariant;
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  version?: AccordionVersion;
  variant?: AccordionVariant;
}

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  version?: AccordionVersion;
  variant?: AccordionVariant;
}

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  version?: AccordionVersion;
  variant?: AccordionVariant;
}

// Loading helper to load version modules
const loadVersionModule = async (version: AccordionVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/accordion/accordion-angular-corner.tsx');
    case 'holo-frame': return import('../components/accordion/accordion-holo-frame.tsx');
    case 'data-panel': return import('../components/accordion/accordion-data-panel.tsx');
    case 'circuit-board': return import('../components/accordion/accordion-circuit-board.tsx');
    case 'quantum-gate': return import('../components/accordion/accordion-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/accordion/accordion-tactical-hud.tsx');
    case 'energy-shield': return import('../components/accordion/accordion-energy-shield.tsx');
    case 'terminal-window': return import('../components/accordion/accordion-terminal-window.tsx');
    case 'matrix-grid': return import('../components/accordion/accordion-matrix-grid.tsx');
    case 'neon-outline': return import('../components/accordion/accordion-neon-outline.tsx');
    default: return import('../components/accordion/accordion-angular-corner.tsx');
  }
};

// Context
interface AccordionContextValue {
  version: AccordionVersion;
  variant: AccordionVariant;
  type: AccordionProps['type'];
  versionModule: any;
}

const AccordionContext = createContext<AccordionContextValue>({
  version: 'angular-corner',
  variant: 'default',
  type: 'default',
  versionModule: null,
});

const useAccordionContext = () => useContext(AccordionContext);

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded h-16" />
);

// Main Accordion Component
const AccordionBase = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ 
  version = 'angular-corner', 
  variant = 'default', 
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
AccordionBase.displayName = 'Accordion';

// Subcomponents
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>((props, ref) => {
  const { versionModule, variant } = useAccordionContext();
  
  if (!versionModule) return <LoadingSkeleton />;

  const Component = versionModule.AccordionItem || versionModule.Item;
  return <Component ref={ref} variant={variant} {...props} />;
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>((props, ref) => {
  const { versionModule, variant } = useAccordionContext();

  if (!versionModule) return null;

  const Component = versionModule.AccordionTrigger || versionModule.Trigger;
  return <Component ref={ref} variant={variant} {...props} />;
});
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>((props, ref) => {
  const { versionModule, variant } = useAccordionContext();

  if (!versionModule) return null;

  const Component = versionModule.AccordionContent || versionModule.Content;
  return <Component ref={ref} variant={variant} {...props} />;
});
AccordionContent.displayName = 'AccordionContent';

// Composite export
export const Accordion = Object.assign(AccordionBase, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { AccordionItem, AccordionTrigger, AccordionContent };
export default Accordion;
