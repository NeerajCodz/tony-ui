/**
 * Command Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, forwardRef, useState, useEffect } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import type { DialogProps } from '@radix-ui/react-dialog';
import { Dialog, DialogContent } from '../../components/dialog';
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
  versionModule: any;
}

const CommandContext = createContext<CommandContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
  versionModule: null,
});

const useCommandContext = () => useContext(CommandContext);

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: CommandVersion) => {
  switch (version) {
    case 'angular-corner': return import('./command-angular-corner.tsx');
    case 'holo-frame': return import('./command-holo-frame.tsx');
    case 'data-panel': return import('./command-data-panel.tsx');
    case 'circuit-board': return import('./command-circuit-board.tsx');
    case 'quantum-gate': return import('./command-quantum-gate.tsx');
    case 'tactical-hud': return import('./command-tactical-hud.tsx');
    case 'energy-shield': return import('./command-energy-shield.tsx');
    case 'terminal-window': return import('./command-terminal-window.tsx');
    case 'matrix-grid': return import('./command-matrix-grid.tsx');
    case 'neon-outline': return import('./command-neon-outline.tsx');
    default: return import('./command-angular-corner.tsx');
  }
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
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  if (!versionModule) {
    return <div className="h-[300px] w-full animate-pulse bg-muted/10 rounded-lg" />;
  }

  const RootComponent = versionModule.Root;

  return (
    <CommandContext.Provider value={{ version, variant, type, versionModule }}>
      <RootComponent ref={ref} className={className} {...props}>
        {children}
      </RootComponent>
    </CommandContext.Provider>
  );
});
Command.displayName = 'Command';

// --- Subcomponents ---

const CommandInput = forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>((props, ref) => {
  const { versionModule } = useCommandContext();
  if (!versionModule?.Input) {
    return <div className="h-10 w-full animate-pulse bg-muted/10" />;
  }
  const InputComponent = versionModule.Input;
  return <InputComponent ref={ref} {...props} />;
});
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>((props, ref) => {
  const { versionModule } = useCommandContext();
  if (!versionModule?.List) {
    return <div className="h-full w-full animate-pulse bg-muted/10" />;
  }
  const ListComponent = versionModule.List;
  return <ListComponent ref={ref} {...props} />;
});
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>((props, ref) => {
  const { versionModule } = useCommandContext();
  if (!versionModule?.Empty) return null;
  const EmptyComponent = versionModule.Empty;
  return <EmptyComponent ref={ref} {...props} />;
});
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>((props, ref) => {
  const { versionModule } = useCommandContext();
  if (!versionModule?.Group) return null;
  const GroupComponent = versionModule.Group;
  return <GroupComponent ref={ref} {...props} />;
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandItem = forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>((props, ref) => {
  const { versionModule } = useCommandContext();
  if (!versionModule?.Item) return null;
  const ItemComponent = versionModule.Item;
  return <ItemComponent ref={ref} {...props} />;
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
  const { versionModule } = useCommandContext();
  if (!versionModule?.Separator) return null;
  const SeparatorComponent = versionModule.Separator;
  return <SeparatorComponent ref={ref} {...props} />;
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandDialog = ({ children, version, ...props }: CommandDialogProps) => {
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

