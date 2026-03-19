const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'context-menu';
const COMPONENT_DIR = path.join(__dirname, '../src/ui/components', COMPONENT_NAME);

// Ensure directory exists
if (!fs.existsSync(COMPONENT_DIR)) {
  fs.mkdirSync(COMPONENT_DIR, { recursive: true });
}

const VERSIONS = [
  { name: 'angular-corner', label: 'Angular Corner', description: 'Beveled corners with glowing borders' },
  { name: 'holo-frame', label: 'Holo Frame', description: 'Holographic shimmer effects' },
  { name: 'data-panel', label: 'Data Panel', description: 'Technical data display aesthetic' },
  { name: 'circuit-board', label: 'Circuit Board', description: 'Circuit trace patterns' },
  { name: 'quantum-gate', label: 'Quantum Gate', description: 'Hexagonal geometry' },
  { name: 'tactical-hud', label: 'Tactical HUD', description: 'Military style interface' },
  { name: 'energy-shield', label: 'Energy Shield', description: 'Glowing protective barrier' },
  { name: 'terminal-window', label: 'Terminal Window', description: 'Retro command line style' },
  { name: 'matrix-grid', label: 'Matrix Grid', description: 'Digital rain patterns' },
  { name: 'neon-outline', label: 'Neon Outline', description: 'High contrast neon borders' }
];

const TEMPLATE = (version) => `
import React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '../../utils/component-helpers';
import { Check, ChevronRight, Circle } from 'lucide-react';

interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid';
}

const Content = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, children, variant = 'neutral', type = 'default', ...props }, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', 
    success: 'success', 
    warning: 'warning', 
    info: 'info', 
    destructive: 'destructive',
    primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  // Base styles for all versions
  const baseStyles = "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
  // Version specific styles
  const versionStyles = {
    'angular-corner': \`
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
      background-color: hsl(var(--\${color}-base) / 0.1);
      border-color: hsl(var(--\${color}-base) / 0.5);
      backdrop-filter: blur(12px);
    \`,
    'holo-frame': \`
      background-color: hsl(var(--\${color}-base) / 0.05);
      border: 1px solid hsl(var(--\${color}-base) / 0.3);
      box-shadow: 0 0 15px hsl(var(--\${color}-base) / 0.2);
      backdrop-filter: blur(8px);
    \`,
    'data-panel': \`
      background-color: hsl(var(--background));
      border-left: 2px solid hsl(var(--\${color}-base));
      border-right: 2px solid hsl(var(--\${color}-base));
      border-top: 1px solid hsl(var(--border));
      border-bottom: 1px solid hsl(var(--border));
    \`,
    'circuit-board': \`
      background-image: radial-gradient(circle at 2px 2px, hsl(var(--\${color}-base) / 0.3) 1px, transparent 0);
      background-size: 12px 12px;
      background-color: hsl(var(--background) / 0.95);
      border: 1px solid hsl(var(--\${color}-base) / 0.4);
    \`,
    'quantum-gate': \`
      clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
      background-color: hsl(var(--\${color}-base) / 0.15);
      border: none;
      box-shadow: inset 0 0 20px hsl(var(--\${color}-base) / 0.2);
    \`,
    'tactical-hud': \`
      background-color: hsl(var(--background) / 0.9);
      border: 1px solid hsl(var(--\${color}-base));
      background-image: linear-gradient(0deg, transparent 24%, hsl(var(--\${color}-base) / .1) 25%, hsl(var(--\${color}-base) / .1) 26%, transparent 27%, transparent 74%, hsl(var(--\${color}-base) / .1) 75%, hsl(var(--\${color}-base) / .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--\${color}-base) / .1) 25%, hsl(var(--\${color}-base) / .1) 26%, transparent 27%, transparent 74%, hsl(var(--\${color}-base) / .1) 75%, hsl(var(--\${color}-base) / .1) 76%, transparent 77%, transparent);
      background-size: 30px 30px;
    \`,
    'energy-shield': \`
      box-shadow: 0 0 20px hsl(var(--\${color}-base) / 0.4), inset 0 0 10px hsl(var(--\${color}-base) / 0.2);
      background-color: hsl(var(--\${color}-base) / 0.1);
      border: 1px solid hsl(var(--\${color}-base) / 0.6);
      border-radius: 12px;
    \`,
    'terminal-window': \`
      background-color: #000;
      border: 2px solid hsl(var(--\${color}-base));
      font-family: monospace;
      box-shadow: 4px 4px 0 hsl(var(--\${color}-base) / 0.3);
    \`,
    'matrix-grid': \`
      background-color: black;
      border: 1px solid hsl(var(--\${color}-base));
      box-shadow: 0 0 10px hsl(var(--\${color}-base));
    \`,
    'neon-outline': \`
      background-color: transparent;
      border: 2px solid hsl(var(--\${color}-base));
      box-shadow: 0 0 10px hsl(var(--\${color}-base)), inset 0 0 5px hsl(var(--\${color}-base));
      backdrop-filter: blur(5px);
    \`
  };

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(baseStyles, "bg-popover text-popover-foreground", className)}
        style={{
           // @ts-ignore
           ...props.style,
           // We apply the version specific styles mainly via class composition or inline styles if complex
           // For now, simpler approach:
           borderColor: \`hsl(var(--\${color}-base) / 0.3)\`,
        }}
        {...props}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          zIndex: -1,
          // Inline styles for version
          ${version === 'angular-corner' ? `clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)', backgroundColor: \`hsl(var(--\${color}-base) / 0.1)\`` : ''}
          ${version === 'holo-frame' ? `backgroundColor: \`hsl(var(--\${color}-base) / 0.05)\`, boxShadow: \`0 0 15px hsl(var(--\${color}-base) / 0.2)\`` : ''}
        }} />
        {children}
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
});

Content.displayName = 'ContextMenuContent-${version}';
export default Content;
`;

// Helper to generate index.tsx
const generateIndex = () => `
import React, { lazy, Suspense } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../utils/component-helpers';

// Version context
const VersionContext = React.createContext<string>('angular-corner');

// Lazy load versions
const versionComponents: Record<string, any> = {
${VERSIONS.map(v => `  '${v.name}': lazy(() => import('./context-menu-${v.name}')),`).join('\n')}
};

export const ContextMenu = ({ children, version = 'angular-corner', ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root> & { version?: string }) => (
  <VersionContext.Provider value={version}>
    <ContextMenuPrimitive.Root {...props}>{children}</ContextMenuPrimitive.Root>
  </VersionContext.Provider>
);

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuPortal = ContextMenuPrimitive.Portal;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

export const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

export const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & { version?: string }
>(({ className, version, ...props }, ref) => {
  const contextVersion = React.useContext(VersionContext);
  const finalVersion = version || contextVersion || 'angular-corner';
  
  const VersionComponent = versionComponents[finalVersion];

  return (
    <Suspense fallback={<div className="p-2 bg-background border text-sm">Loading...</div>}>
      {VersionComponent ? (
        <VersionComponent ref={ref} className={className} {...props} />
      ) : (
        <ContextMenuPrimitive.Content ref={ref} className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", className)} {...props} />
      )}
    </Suspense>
  );
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

export const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

export const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

export const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

// Backwards compatibility default export
export default Object.assign(ContextMenu, {
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioItem: ContextMenuRadioItem,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Group: ContextMenuGroup,
  Portal: ContextMenuPortal,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  SubTrigger: ContextMenuSubTrigger,
  RadioGroup: ContextMenuRadioGroup,
});
`;

// Generate versions
VERSIONS.forEach(version => {
  const filePath = path.join(COMPONENT_DIR, `context-menu-${version.name}.tsx`);
  fs.writeFileSync(filePath, TEMPLATE(version.name));
  console.log(`Generated context-menu-${version.name}.tsx`);
});

// Generate index
fs.writeFileSync(path.join(COMPONENT_DIR, 'index.tsx'), generateIndex());
console.log('Generated index.tsx');

console.log('ContextMenu regeneration complete.');
