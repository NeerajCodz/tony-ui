/**
 * RadioGroup Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

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

// Context
interface RadioGroupContextValue {
  version: RadioGroupVersion;
  variant: RadioGroupVariant;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const RadioGroupContext = createContext<RadioGroupContextValue>({
  version: 'angular-corner',
  variant: 'default',
  colors: getVariantColors('default'),
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
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'radio-group', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <RadioGroupContext.Provider value={{ version, variant, colors, versionModule }}>
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
  const { versionModule, variant, colors } = useRadioGroupContext();

  if (versionModule?.RadioGroupItem) {
    const Component = versionModule.RadioGroupItem;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
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
