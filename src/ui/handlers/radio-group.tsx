/**
 * RadioGroup Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import type { Version, Variant } from '../types/common';

// Types
export type RadioGroupVersion = Version;
export type RadioGroupVariant = Variant;

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  version?: RadioGroupVersion;
  variant?: RadioGroupVariant;
}

export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  version?: RadioGroupVersion;
  variant?: RadioGroupVariant;
}

// Loading helper
const loadVersionModule = async (version: RadioGroupVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/radio-group/radio-group-angular-corner.tsx');
    case 'holo-frame': return import('../components/radio-group/radio-group-holo-frame.tsx');
    case 'data-panel': return import('../components/radio-group/radio-group-data-panel.tsx');
    case 'circuit-board': return import('../components/radio-group/radio-group-circuit-board.tsx');
    case 'quantum-gate': return import('../components/radio-group/radio-group-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/radio-group/radio-group-tactical-hud.tsx');
    case 'energy-shield': return import('../components/radio-group/radio-group-energy-shield.tsx');
    case 'terminal-window': return import('../components/radio-group/radio-group-terminal-window.tsx');
    case 'matrix-grid': return import('../components/radio-group/radio-group-matrix-grid.tsx');
    case 'neon': return import('../components/radio-group/radio-group-neon.tsx');
    default: return import('../components/radio-group/radio-group-angular-corner.tsx');
  }
};

// Context
interface RadioGroupContextValue {
  version: RadioGroupVersion;
  variant: RadioGroupVariant;
  versionModule: any;
}

const RadioGroupContext = createContext<RadioGroupContextValue>({
  version: 'angular-corner',
  variant: 'default',
  versionModule: null,
});

const useRadioGroupContext = () => useContext(RadioGroupContext);

// Main Component
const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({
  version = 'angular-corner',
  variant = 'default',
  className = '',
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <RadioGroupContext.Provider value={{ version, variant, versionModule }}>
      <RadioGroupPrimitive.Root
        ref={ref}
        className={`grid gap-2 ${className}`}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
    </RadioGroupContext.Provider>
  );
});
RadioGroupRoot.displayName = 'RadioGroup';

// Item
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant } = useRadioGroupContext();

  if (versionModule?.RadioGroupItem) {
    const Component = versionModule.RadioGroupItem;
    return <Component ref={ref} variant={variant} className={className} {...props} />;
  }

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

// Composite export
export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});

export { RadioGroupItem };
export default RadioGroup;
