import React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Styles for Content (Reusing DropdownMenu styles logic mostly)
const getContentStyles = (version: string) => {
  const base = "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
  const styles = {
    'angular-corner': "border-cyan-500/50 bg-black/95 text-cyan-500 clip-path-polygon-[10px_0,_100%_0,_100%_calc(100%-10px),_calc(100%-10px)_100%,_0_100%,_0_10px]",
    'holo-frame': "border-cyan-500/30 bg-black/60 backdrop-blur-md text-cyan-100 shadow-[0_0_15px_rgba(6,182,212,0.2)]",
    'data-panel': "bg-gray-900 border-l-2 border-l-cyan-500 border-y border-r border-gray-800 text-gray-300 rounded-none",
    'circuit-board': "bg-black border border-gray-800 text-xs font-mono tracking-widest uppercase text-cyan-600",
    'quantum-gate': "bg-gray-900/90 rounded-xl px-2 border border-cyan-500/20 text-cyan-300",
    'tactical-hud': "bg-black border-2 border-gray-800 text-cyan-500 font-mono tracking-tighter rounded-sm",
    'energy-shield': "bg-cyan-950/80 border border-cyan-400/30 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.1)] rounded-lg",
    'terminal-window': "bg-black border border-green-500/50 text-green-500 font-mono text-xs p-0",
    'matrix-grid': "bg-black border border-green-900 text-green-400 font-mono",
    'neon-outline': "bg-black border border-cyan-400 text-cyan-400 shadow-[0_0_5px_cyan] rounded-md",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Item
const getItemStyles = (version: string) => {
  const base = "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
  
  const styles = {
    'angular-corner': "focus:bg-cyan-500 focus:text-black hover:skew-x-[-5deg]",
    'holo-frame': "focus:bg-cyan-500/20 focus:text-cyan-100 focus:shadow-[0_0_10px_rgba(6,182,212,0.3)]",
    'data-panel': "focus:bg-gray-800 focus:border-l-2 focus:border-cyan-500 rounded-none",
    'circuit-board': "focus:text-cyan-400 focus:bg-gray-900 border-b border-gray-900",
    'quantum-gate': "focus:bg-cyan-500 focus:text-black rounded-md",
    'tactical-hud': "focus:bg-cyan-900/50 focus:text-cyan-400 rounded-none hover:pl-4 transition-all",
    'energy-shield': "focus:bg-cyan-500/20 focus:text-cyan-200",
    'terminal-window': "focus:bg-green-500 focus:text-black rounded-none",
    'matrix-grid': "focus:bg-green-900/30 focus:text-green-300 rounded-none border border-transparent focus:border-green-500/50",
    'neon-outline': "focus:bg-cyan-500/10 focus:text-cyan-300 focus:shadow-[inset_0_0_5px_cyan]",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

export const ContextMenuContent = ({ className, ...props }: any) => {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn(getContentStyles('holo-frame'), className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
};

export const ContextMenuItem = ({ className, inset, ...props }: any) => {
  return (
    <ContextMenuPrimitive.Item
      className={cn(
        getItemStyles('holo-frame'),
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
};

export const ContextMenuCheckboxItem = ({ className, children, checked, ...props }: any) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(
        getItemStyles('holo-frame'),
        "pl-8",
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
  );
};

export const ContextMenuRadioItem = ({ className, children, ...props }: any) => {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(
        getItemStyles('holo-frame'),
        "pl-8",
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
  );
};

export const ContextMenuLabel = ({ className, inset, ...props }: any) => {
  return (
    <ContextMenuPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
};

export const ContextMenuSeparator = ({ className, ...props }: any) => {
  return (
    <ContextMenuPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
};

export const ContextMenuShortcut = ({ className, ...props }: any) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

export const ContextMenuSubTrigger = ({ className, inset, children, ...props }: any) => {
  return (
    <ContextMenuPrimitive.SubTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
};

export const ContextMenuSubContent = ({ className, ...props }: any) => {
  return (
    <ContextMenuPrimitive.SubContent
      className={cn(
        getContentStyles('holo-frame'),
        className
      )}
      {...props}
    />
  );
};
