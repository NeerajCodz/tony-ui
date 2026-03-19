const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'select';
const VERSIONS = [
  'angular-corner',
  'holo-frame',
  'data-panel',
  'circuit-board',
  'quantum-gate',
  'tactical-hud',
  'energy-shield',
  'terminal-window',
  'matrix-grid',
  'neon-outline'
];

const TARGET_DIR = path.join(__dirname, `../src/ui/components/${COMPONENT_NAME}`);

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const TEMPLATE = (version) => {
  return `
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "../../utils/component-helpers"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      // Version Specific Styles
      "${version}" === "angular-corner" && "rounded-none border-l-4 border-l-primary clip-path-angle",
      "${version}" === "holo-frame" && "border-primary/50 bg-primary/5 backdrop-blur shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]",
      "${version}" === "tactical-hud" && "border-2 border-white/20 bg-black/80 font-mono tracking-wider",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
         // Version Specific Styles for Content
         "${version}" === "angular-corner" && "rounded-none border-2 border-primary bg-black/90",
         "${version}" === "holo-frame" && "border-primary/30 bg-primary/10 backdrop-blur-md",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
       // Version Specific Styles for Item
       "${version}" === "angular-corner" && "rounded-none focus:bg-primary/20 focus:text-primary-foreground",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
  `;
};

// Generate each version
VERSIONS.forEach(version => {
  const content = TEMPLATE(version);
  const filePath = path.join(TARGET_DIR, `${COMPONENT_NAME}-${version}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated ${COMPONENT_NAME}-${version}.tsx`);
});

const indexContent = `import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';

// Context to share version between compound components
const SelectVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(SelectVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(\`./select-\${version}\`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={\`ui-select-\${componentName.toLowerCase()} \${className}\`} {...p}>{children}</div>
          ) 
        };
      }
    }), [version]);

    return (
      <Suspense fallback={<div className="animate-pulse bg-muted/10 h-8 rounded" />}>
        <LazyComponent ref={ref} {...props} />
      </Suspense>
    );
  });
};

// Main Component (Root)
// Note: Select Root does not render DOM, it just provides Context. 
// But we need to load the version-specific Root to ensure we are using the correct context provider if needed (though Radix Select Root is usually generic).
// However, to keep pattern consistent, we lazy load the Root too.

const SelectRoot = React.forwardRef(({ 
  version = 'angular-corner',
  children,
  ...props 
}, ref) => {
  
  const LazyRoot = useMemo(() => lazy(async () => {
    try {
      const module = await import(\`./select-\${version}\`);
      return { default: module.Select }; // Radix exports 'Select' as Root
    } catch (e) {
      return { 
        default: ({ children }) => <>{children}</> // Fallback just renders children
      };
    }
  }), [version]);

  return (
    <SelectVersionContext.Provider value={version}>
      <Suspense fallback={null}>
        <LazyRoot {...props}>
          {children}
        </LazyRoot>
      </Suspense>
    </SelectVersionContext.Provider>
  );
});
SelectRoot.displayName = 'Select';

// Subcomponents
export const SelectGroup = createLazySubcomponent('SelectGroup');
SelectGroup.displayName = 'SelectGroup';

export const SelectValue = createLazySubcomponent('SelectValue');
SelectValue.displayName = 'SelectValue';

export const SelectTrigger = createLazySubcomponent('SelectTrigger');
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = createLazySubcomponent('SelectContent');
SelectContent.displayName = 'SelectContent';

export const SelectLabel = createLazySubcomponent('SelectLabel');
SelectLabel.displayName = 'SelectLabel';

export const SelectItem = createLazySubcomponent('SelectItem');
SelectItem.displayName = 'SelectItem';

export const SelectSeparator = createLazySubcomponent('SelectSeparator');
SelectSeparator.displayName = 'SelectSeparator';

export const SelectScrollUpButton = createLazySubcomponent('SelectScrollUpButton');
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

export const SelectScrollDownButton = createLazySubcomponent('SelectScrollDownButton');
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

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

export default Select;
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');
console.log('Select regeneration complete.');
