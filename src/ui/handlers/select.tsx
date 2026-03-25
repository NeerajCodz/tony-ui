/**
 * Select Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type SelectVersion = Version;
export type SelectVariant = Variant;

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  version?: SelectVersion;
  variant?: SelectVariant;
  effects?: string;
}

// Context
interface SelectContextValue {
  version: SelectVersion;
  variant: SelectVariant;
  effects?: string;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const SelectContext = createContext<SelectContextValue>({
  version: 'angular-corner',
  variant: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useSelectContext = () => useContext(SelectContext);

// Main Component
const SelectRoot: React.FC<SelectProps> = ({
  version = 'angular-corner',
  variant = 'default',
  effects,
  children,
  ...props
}) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'select', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <SelectContext.Provider value={{ version, variant, effects, colors, versionModule }}>
      <SelectPrimitive.Root {...props}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  );
};

// Subcomponents
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className = '', children, ...props }, ref) => {
  const { versionModule, variant, colors, effects } = useSelectContext();

  if (versionModule?.SelectTrigger) {
    const Component = versionModule.SelectTrigger;
    return <Component ref={ref} variant={variant} colors={colors} effects={effects} className={className} {...props}>{children}</Component>;
  }

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${className}`}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = 'SelectTrigger';

const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className = '', ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={`flex cursor-default items-center justify-center py-1 ${className}`}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className = '', ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={`flex cursor-default items-center justify-center py-1 ${className}`}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className = '', children, position = 'popper', ...props }, ref) => {
  const { versionModule, variant, colors, effects } = useSelectContext();

  if (versionModule?.SelectContent) {
    const Component = versionModule.SelectContent;
    return (
      <SelectPrimitive.Portal>
          <Component ref={ref} variant={variant} colors={colors} effects={effects} className={className} position={position} {...props}>
          {children}
        </Component>
      </SelectPrimitive.Portal>
    );
  }

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={`relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${position === 'popper' ? 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1' : ''} ${className}`}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={`p-1 ${position === 'popper' ? 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]' : ''}`}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = 'SelectContent';

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, colors } = useSelectContext();

  if (versionModule?.SelectLabel) {
    const Component = versionModule.SelectLabel;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <SelectPrimitive.Label
      ref={ref}
      className={`py-1.5 pl-8 pr-2 text-sm font-semibold ${className}`}
      {...props}
    />
  );
});
SelectLabel.displayName = 'SelectLabel';

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className = '', children, ...props }, ref) => {
  const { versionModule, variant, colors } = useSelectContext();

  if (versionModule?.SelectItem) {
    const Component = versionModule.SelectItem;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props}>{children}</Component>;
  }

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = 'SelectItem';

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, colors } = useSelectContext();

  if (versionModule?.SelectSeparator) {
    const Component = versionModule.SelectSeparator;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={`-mx-1 my-1 h-px bg-muted ${className}`}
      {...props}
    />
  );
});
SelectSeparator.displayName = 'SelectSeparator';

// Composite export
export const Select = Object.assign(SelectRoot, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
});

export {
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
export default Select;
