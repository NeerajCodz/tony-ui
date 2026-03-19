import React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Styles for Root (Bar)
const getRootStyles = (version: string) => {
  const base = "flex h-10 items-center space-x-1 rounded-md border bg-background p-1";
  
  const styles = {
    'angular-corner': "border-gray-800 bg-gray-900 clip-path-polygon-[10px_0,_100%_0,_100%_calc(100%-10px),_calc(100%-10px)_100%,_0_100%,_0_10px]",
    'holo-frame': "border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]",
    'data-panel': "bg-gray-900 border-b-2 border-cyan-500 border-x-0 border-t-0 rounded-none h-12",
    'circuit-board': "bg-black border border-gray-800 h-10 rounded-none",
    'quantum-gate': "bg-gray-900/90 rounded-full px-4 border border-cyan-500/20",
    'tactical-hud': "bg-black border-2 border-gray-800 rounded-sm h-12",
    'energy-shield': "bg-cyan-950/20 border border-cyan-400/30 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)] rounded-lg",
    'terminal-window': "bg-black border-b border-green-500/50 rounded-none h-8",
    'matrix-grid': "bg-black border-b border-green-900 rounded-none h-10",
    'neon': "bg-black border border-cyan-400 shadow-[0_0_5px_cyan] rounded-md",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Trigger
const getTriggerStyles = (version: string) => {
  const base = "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground";
  
  const styles = {
    'angular-corner': "focus:bg-cyan-500 focus:text-black data-[state=open]:bg-cyan-500 data-[state=open]:text-black hover:skew-x-[-10deg] transition-transform",
    'holo-frame': "focus:bg-cyan-500/20 data-[state=open]:bg-cyan-500/20 text-cyan-100",
    'data-panel': "rounded-none focus:bg-cyan-900/50 data-[state=open]:bg-cyan-900/50 data-[state=open]:border-b-2 data-[state=open]:border-cyan-400",
    'circuit-board': "uppercase tracking-widest text-xs focus:text-cyan-400 data-[state=open]:text-cyan-400",
    'quantum-gate': "rounded-full focus:bg-cyan-500 focus:text-black data-[state=open]:bg-cyan-500 data-[state=open]:text-black",
    'tactical-hud': "rounded-none focus:bg-cyan-900/30 focus:text-cyan-400 data-[state=open]:bg-cyan-900/30 data-[state=open]:text-cyan-400 uppercase tracking-tighter",
    'energy-shield': "focus:bg-cyan-500/20 focus:text-cyan-200 data-[state=open]:bg-cyan-500/20 data-[state=open]:text-cyan-200",
    'terminal-window': "font-mono focus:bg-green-500 focus:text-black data-[state=open]:bg-green-500 data-[state=open]:text-black rounded-none",
    'matrix-grid': "font-mono text-green-600 focus:text-green-300 data-[state=open]:text-green-300 rounded-none",
    'neon': "focus:text-cyan-400 focus:drop-shadow-[0_0_5px_cyan] data-[state=open]:text-cyan-400",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Content (reuse dropdown mostly)
const getContentStyles = (version: string) => {
  const base = "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
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
    'neon': "bg-black border border-cyan-400 text-cyan-400 shadow-[0_0_5px_cyan] rounded-md",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Item (reuse dropdown mostly)
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
    'neon': "focus:bg-cyan-500/10 focus:text-cyan-300 focus:shadow-[inset_0_0_5px_cyan]",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

export const MenubarRoot = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.Root
      className={cn(getRootStyles('tactical-hud'), className)}
      {...props}
    />
  );
};

export const MenubarTrigger = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.Trigger
      className={cn(getTriggerStyles('tactical-hud'), className)}
      {...props}
    />
  );
};

export const MenubarContent = ({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }: any) => {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(getContentStyles('tactical-hud'), className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
};

export const MenubarItem = ({ className, inset, ...props }: any) => {
  return (
    <MenubarPrimitive.Item
      className={cn(
        getItemStyles('tactical-hud'),
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
};

export const MenubarCheckboxItem = ({ className, children, checked, ...props }: any) => {
  return (
    <MenubarPrimitive.CheckboxItem
      className={cn(
        getItemStyles('tactical-hud'),
        "pl-8",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
};

export const MenubarRadioItem = ({ className, children, ...props }: any) => {
  return (
    <MenubarPrimitive.RadioItem
      className={cn(
        getItemStyles('tactical-hud'),
        "pl-8",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
};

export const MenubarLabel = ({ className, inset, ...props }: any) => {
  return (
    <MenubarPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
};

export const MenubarSeparator = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
};

export const MenubarShortcut = ({ className, ...props }: any) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

export const MenubarSubTrigger = ({ className, inset, children, ...props }: any) => {
  return (
    <MenubarPrimitive.SubTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
};

export const MenubarSubContent = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.SubContent
      className={cn(
        getContentStyles('tactical-hud'),
        className
      )}
      {...props}
    />
  );
};
