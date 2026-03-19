import React from 'react';
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
const styles = getStyles('matrix-grid' in versionStyles ? 'matrix-grid' : 'default');

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
