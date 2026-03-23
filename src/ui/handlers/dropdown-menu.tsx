/**
 * DropdownMenu Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type DropdownMenuVersion = Version;
export type DropdownMenuVariant = Variant;

export interface DropdownMenuProps {
  version?: DropdownMenuVersion;
  variant?: DropdownMenuVariant;
  children?: React.ReactNode;
}

// Context
interface DropdownMenuContextValue {
  version: DropdownMenuVersion;
  variant: DropdownMenuVariant;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue>({
  version: 'angular-corner',
  variant: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useDropdownMenuContext = () => useContext(DropdownMenuContext);

// Main Component
const DropdownMenuRoot: React.FC<DropdownMenuProps & React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>> = ({
  version = 'angular-corner',
  variant = 'default',
  children,
  ...props
}) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'dropdown-menu', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <DropdownMenuContext.Provider value={{ version, variant, colors, versionModule }}>
      <DropdownMenuPrimitive.Root {...props}>
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownMenuContext.Provider>
  );
};

// Subcomponents
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }
>(({ className = '', inset, children, ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuSubTrigger) {
    const Component = versionModule.DropdownMenuSubTrigger;
    return <Component ref={ref} variant={variant} colors={colors} className={className} inset={inset} {...props}>{children}</Component>;
  }

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={`flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent ${inset ? 'pl-8' : ''} ${className}`}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuSubContent) {
    const Component = versionModule.DropdownMenuSubContent;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
      {...props}
    />
  );
});
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className = '', sideOffset = 4, ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuContent) {
    const Component = versionModule.DropdownMenuContent;
    return (
      <DropdownMenuPortal>
        <Component ref={ref} variant={variant} colors={colors} className={className} sideOffset={sideOffset} {...props} />
      </DropdownMenuPortal>
    );
  }

  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
        {...props}
      />
    </DropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }
>(({ className = '', inset, ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuItem) {
    const Component = versionModule.DropdownMenuItem;
    return <Component ref={ref} variant={variant} colors={colors} className={className} inset={inset} {...props} />;
  }

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${inset ? 'pl-8' : ''} ${className}`}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className = '', children, checked, ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuCheckboxItem) {
    const Component = versionModule.DropdownMenuCheckboxItem;
    return <Component ref={ref} variant={variant} colors={colors} className={className} checked={checked} {...props}>{children}</Component>;
  }

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className = '', children, ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuRadioItem) {
    const Component = versionModule.DropdownMenuRadioItem;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props}>{children}</Component>;
  }

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }
>(({ className = '', inset, ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuLabel) {
    const Component = versionModule.DropdownMenuLabel;
    return <Component ref={ref} variant={variant} colors={colors} className={className} inset={inset} {...props} />;
  }

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={`px-2 py-1.5 text-sm font-semibold ${inset ? 'pl-8' : ''} ${className}`}
      {...props}
    />
  );
});
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, colors } = useDropdownMenuContext();

  if (versionModule?.DropdownMenuSeparator) {
    const Component = versionModule.DropdownMenuSeparator;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={`-mx-1 my-1 h-px bg-muted ${className}`}
      {...props}
    />
  );
});
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

const DropdownMenuShortcut = ({ className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={`ml-auto text-xs tracking-widest opacity-60 ${className}`} {...props} />
);
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

// Composite export
export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Group: DropdownMenuGroup,
  Portal: DropdownMenuPortal,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  SubTrigger: DropdownMenuSubTrigger,
  RadioGroup: DropdownMenuRadioGroup,
});

export {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
export default DropdownMenu;
