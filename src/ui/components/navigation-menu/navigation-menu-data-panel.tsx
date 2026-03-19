import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Styles for Root
const getRootStyles = (version: string) => {
  const base = "relative z-10 flex max-w-max flex-1 items-center justify-center";
  
  const styles = {
    'angular-corner': "",
    'holo-frame': "",
    'data-panel': "",
    'circuit-board': "",
    'quantum-gate': "",
    'tactical-hud': "",
    'energy-shield': "",
    'terminal-window': "",
    'matrix-grid': "",
    'neon-outline': "",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for List
const getListStyles = (version: string) => {
  const base = "group flex flex-1 list-none items-center justify-center space-x-1";
  
  const styles = {
    'angular-corner': "bg-gray-900/50 p-1 clip-path-polygon-[10px_0,_100%_0,_95%_100%,_5%_100%]",
    'holo-frame': "border border-cyan-500/30 bg-black/40 backdrop-blur-md rounded-full px-4",
    'data-panel': "bg-gray-900 border-b-2 border-cyan-500 w-full justify-start",
    'circuit-board': "bg-black border border-gray-800 p-1 w-full justify-start",
    'quantum-gate': "bg-gray-900/90 rounded-full px-4 border border-cyan-500/20",
    'tactical-hud': "bg-black border-2 border-gray-800 rounded-sm w-full justify-between px-2",
    'energy-shield': "bg-cyan-950/20 border border-cyan-400/30 rounded-lg p-1",
    'terminal-window': "bg-black border-b border-green-500/50 w-full justify-start",
    'matrix-grid': "bg-black border-b border-green-900 w-full justify-start",
    'neon-outline': "bg-black border border-cyan-400 shadow-[0_0_5px_cyan] rounded-md p-1",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Trigger
const getTriggerStyles = (version: string) => {
  const base = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";
  
  const styles = {
    'angular-corner': "bg-transparent hover:bg-cyan-500/10 focus:bg-cyan-500/20 data-[active]:bg-cyan-500/20 data-[state=open]:bg-cyan-500/20 rounded-sm skew-x-[-10deg]",
    'holo-frame': "bg-transparent text-cyan-100 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]",
    'data-panel': "bg-transparent hover:bg-cyan-900/30 rounded-none border-r border-gray-800 last:border-0",
    'circuit-board': "bg-transparent uppercase tracking-widest text-xs hover:text-cyan-400",
    'quantum-gate': "bg-transparent rounded-full hover:bg-cyan-500/20",
    'tactical-hud': "bg-transparent uppercase tracking-tighter hover:bg-cyan-900/30 rounded-none",
    'energy-shield': "bg-transparent hover:bg-cyan-500/10 text-cyan-200",
    'terminal-window': "bg-transparent font-mono hover:text-green-400 hover:bg-green-900/20 rounded-none",
    'matrix-grid': "bg-transparent font-mono text-green-600 hover:text-green-300 rounded-none",
    'neon-outline': "bg-transparent hover:text-cyan-400 hover:drop-shadow-[0_0_5px_cyan]",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Content
const getContentStyles = (version: string) => {
  const base = "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto";
  
  const styles = {
    'angular-corner': "bg-black/95 border border-cyan-500/50 clip-path-polygon-[10px_0,_100%_0,_100%_calc(100%-10px),_calc(100%-10px)_100%,_0_100%,_0_10px]",
    'holo-frame': "bg-black/60 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] rounded-xl",
    'data-panel': "bg-gray-900 border-l-2 border-l-cyan-500 border-y border-r border-gray-800 rounded-none",
    'circuit-board': "bg-black border border-gray-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]",
    'quantum-gate': "bg-gray-900/95 border border-cyan-500/20 rounded-2xl",
    'tactical-hud': "bg-black border-2 border-gray-800 rounded-sm relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-4 after:h-4 after:border-r-2 after:border-b-2 after:border-cyan-500",
    'energy-shield': "bg-cyan-950/90 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2)] rounded-lg",
    'terminal-window': "bg-black border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.1)]",
    'matrix-grid': "bg-black border border-green-900 shadow-[inset_0_0_10px_rgba(0,50,0,0.5)]",
    'neon-outline': "bg-black border border-cyan-400 shadow-[0_0_10px_cyan] rounded-lg",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for Viewport
const getViewportStyles = (version: string) => {
  const base = "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]";
  
  const styles = {
    'angular-corner': "rounded-none border-none bg-transparent shadow-none overflow-visible", // We handle styling in Content
    'holo-frame': "rounded-xl border-cyan-500/30 bg-black/60 backdrop-blur-md",
    'data-panel': "rounded-none border-none bg-transparent",
    'circuit-board': "rounded-none border-none bg-transparent",
    'quantum-gate': "rounded-2xl border-cyan-500/20 bg-gray-900/90",
    'tactical-hud': "rounded-none border-none bg-transparent",
    'energy-shield': "rounded-lg border-cyan-400/30 bg-cyan-950/90",
    'terminal-window': "rounded-none border-none bg-transparent",
    'matrix-grid': "rounded-none border-none bg-transparent",
    'neon-outline': "rounded-lg border-cyan-400 bg-black shadow-[0_0_10px_cyan]",
  };
  // Note: Viewport is the container. If we style Content, we might not need to style Viewport heavily, 
  // OR we style Viewport and leave Content transparent.
  // Standard Radix uses Viewport for the border/bg of the dropdown area.
  return cn(base, styles[version as keyof typeof styles]);
};

export const NavigationMenuRoot = ({ className, children, ...props }: any) => {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(getRootStyles('data-panel'), className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
};

export const NavigationMenuList = ({ className, ...props }: any) => {
  return (
    <NavigationMenuPrimitive.List
      className={cn(getListStyles('data-panel'), className)}
      {...props}
    />
  );
};

export const NavigationMenuTrigger = ({ className, children, ...props }: any) => {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(getTriggerStyles('data-panel'), className)}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
};

export const NavigationMenuContent = ({ className, ...props }: any) => {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(getContentStyles('data-panel'), className)}
      {...props}
    />
  );
};

export const NavigationMenuViewport = ({ className, ...props }: any) => {
  return (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(getViewportStyles('data-panel'), className)}
        {...props}
      />
    </div>
  );
};

export const NavigationMenuIndicator = ({ className, ...props }: any) => {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
};
