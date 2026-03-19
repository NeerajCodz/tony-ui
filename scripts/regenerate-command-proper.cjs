const fs = require('fs');
const path = require('path');

const componentName = 'command';
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
 * Command Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import type { DialogProps } from '@radix-ui/react-dialog';
import { Dialog, DialogContent } from '../../components/dialog'; // Assuming Dialog component exists
import { cn } from '../../../lib/utils';
import { Search } from 'lucide-react';

// --- Types ---
type CommandVersion = 
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

interface CommandProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {
  version?: CommandVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

interface CommandDialogProps extends DialogProps {
    version?: CommandVersion;
    variant?: CommandProps['variant'];
    type?: CommandProps['type'];
}

// --- Context ---
interface CommandContextValue {
  version: CommandVersion;
  variant: CommandProps['variant'];
  type: CommandProps['type'];
}

const CommandContext = createContext<CommandContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useCommandContext = () => useContext(CommandContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./command-angular-corner')),
  'holo-frame': lazy(() => import('./command-holo-frame')),
  'data-panel': lazy(() => import('./command-data-panel')),
  'circuit-board': lazy(() => import('./command-circuit-board')),
  'quantum-gate': lazy(() => import('./command-quantum-gate')),
  'tactical-hud': lazy(() => import('./command-tactical-hud')),
  'energy-shield': lazy(() => import('./command-energy-shield')),
  'terminal-window': lazy(() => import('./command-terminal-window')),
  'matrix-grid': lazy(() => import('./command-matrix-grid')),
  'neon-outline': lazy(() => import('./command-neon-outline')),
};

// --- Main Component ---
const Command = forwardRef<React.ElementRef<typeof CommandPrimitive>, CommandProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className, 
  children, 
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];

  return (
    <CommandContext.Provider value={{ version, variant, type }}>
      <Suspense fallback={<div className="h-[300px] w-full animate-pulse bg-muted/10 rounded-lg" />}>
        {/* @ts-ignore */}
        <VersionModule.Root ref={ref} className={className} {...props}>
          {children}
        </VersionModule.Root>
      </Suspense>
    </CommandContext.Provider>
  );
});
Command.displayName = 'Command';

// --- Subcomponents ---

const CommandInput = forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>((props, ref) => {
  const { version } = useCommandContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="h-10 w-full animate-pulse bg-muted/10" />}>
      {/* @ts-ignore */}
      <VersionModule.Input ref={ref} {...props} />
    </Suspense>
  );
});
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>((props, ref) => {
  const { version } = useCommandContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="h-full w-full animate-pulse bg-muted/10" />}>
      {/* @ts-ignore */}
      <VersionModule.List ref={ref} {...props} />
    </Suspense>
  );
});
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>((props, ref) => {
  const { version } = useCommandContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Empty ref={ref} {...props} />
    </Suspense>
  );
});
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>((props, ref) => {
  const { version } = useCommandContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Group ref={ref} {...props} />
    </Suspense>
  );
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandItem = forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>((props, ref) => {
  const { version } = useCommandContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Item ref={ref} {...props} />
    </Suspense>
  );
});
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

const CommandSeparator = forwardRef<React.ElementRef<typeof CommandPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>>((props, ref) => {
  const { version } = useCommandContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Separator ref={ref} {...props} />
    </Suspense>
  );
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandDialog = ({ children, version, ...props }: CommandDialogProps) => {
  // Use Dialog component but wrap content with Command
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command version={version} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

// --- Exports ---
const CommandNamespace = Object.assign(Command, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
  Dialog: CommandDialog,
});

export { CommandNamespace as Command };
export default CommandNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { motion } from 'motion/react';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "relative border border-cyan-500/30 bg-gray-950 clip-path-bevel",
    input: "border-b border-cyan-500/20 bg-transparent text-cyan-50 placeholder:text-cyan-500/50",
    item: "data-[selected=true]:bg-cyan-500/10 data-[selected=true]:text-cyan-50 data-[selected=true]:border-l-2 data-[selected=true]:border-cyan-500",
  },
  'holo-frame': {
    root: "relative border border-cyan-400/40 bg-gray-900/80 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    input: "bg-cyan-950/20 text-cyan-100 placeholder:text-cyan-600/70 border-b border-cyan-500/30",
    item: "data-[selected=true]:bg-cyan-500/20 data-[selected=true]:text-cyan-50 data-[selected=true]:shadow-[0_0_10px_rgba(6,182,212,0.2)]",
  },
  'data-panel': {
    root: "border-l-4 border-l-cyan-600 border-y border-r border-gray-800 bg-gray-950",
    input: "bg-gray-900/50 text-gray-100 font-mono tracking-tight border-b border-gray-800",
    item: "font-mono data-[selected=true]:bg-gray-800 data-[selected=true]:text-cyan-400",
  },
  'circuit-board': {
    root: "border border-cyan-900/50 bg-[url('/patterns/circuit.svg')] bg-gray-950",
    input: "bg-gray-900/90 border-b border-cyan-900/50 text-cyan-300",
    item: "data-[selected=true]:bg-cyan-900/20 data-[selected=true]:text-cyan-300 border border-transparent data-[selected=true]:border-cyan-800/50",
  },
  // Default fallback for others
  'default': {
    root: "border border-gray-800 bg-gray-950 rounded-lg",
    input: "border-b border-gray-800 bg-transparent text-gray-100",
    item: "data-[selected=true]:bg-gray-800 data-[selected=true]:text-gray-50",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

export const Root = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden text-popover-foreground",
      styles.root,
      className
    )}
    {...props}
  />
));
Root.displayName = CommandPrimitive.displayName;

export const Input = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <div className="flex items-center px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-cyan-500" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        styles.input,
        className
      )}
      {...props}
    />
  </div>
));
Input.displayName = CommandPrimitive.Input.displayName;

export const List = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
List.displayName = CommandPrimitive.List.displayName;

export const Empty = React.forwardRef((props: any, ref: any) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm text-gray-500"
    {...props}
  />
));
Empty.displayName = CommandPrimitive.Empty.displayName;

export const Group = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
));
Group.displayName = CommandPrimitive.Group.displayName;

export const Separator = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
Separator.displayName = CommandPrimitive.Separator.displayName;

export const Item = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      styles.item,
      className
    )}
    {...props}
  />
));
Item.displayName = CommandPrimitive.Item.displayName;
`;

  fs.writeFileSync(path.join(targetDir, `command-${version}.tsx`), versionContent);
});

console.log('Command regeneration complete.');
