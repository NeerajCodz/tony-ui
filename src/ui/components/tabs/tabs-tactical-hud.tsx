import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../lib/utils';
import { TabsProps } from '../../types/components/tabs';

// Base styles for the root container
const getRootStyles = (version: string, variant: string, type: string) => {
  const base = "w-full";
  
  const styles = {
    'angular-corner': "relative",
    'holo-frame': "border border-cyan-500/30 bg-black/40 backdrop-blur-md p-1",
    'data-panel': "bg-gray-900/50 border-l-2 border-cyan-500",
    'circuit-board': "bg-black border border-gray-800",
    'quantum-gate': "relative overflow-hidden",
    'tactical-hud': "border-2 border-gray-800 bg-gray-950",
    'energy-shield': "shadow-[0_0_15px_rgba(6,182,212,0.15)] rounded-lg border border-cyan-500/20",
    'terminal-window': "font-mono border border-green-500/50 bg-black",
    'matrix-grid': "border border-green-900/50 bg-black",
    'neon-outline': "border border-cyan-400 shadow-[0_0_5px_cyan]",
  };

  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for the List (tab strip)
const getListStyles = (version: string) => {
  const base = "inline-flex items-center justify-center text-gray-400";
  
  const styles = {
    'angular-corner': "bg-gray-900/50 p-1 clip-path-polygon-[0_0,_100%_0,_95%_100%,_5%_100%]",
    'holo-frame': "gap-2 border-b border-cyan-500/30 w-full justify-start px-4",
    'data-panel': "flex-col h-full space-y-1 bg-gray-900/80 w-auto min-w-[150px]",
    'circuit-board': "gap-4 border-b border-gray-800 w-full justify-start p-2",
    'quantum-gate': "bg-gray-900/80 rounded-full p-1 gap-1",
    'tactical-hud': "w-full justify-between bg-gray-900 border-b-2 border-gray-800 px-2",
    'energy-shield': "bg-cyan-950/20 p-1 rounded-md gap-2 border border-cyan-500/10",
    'terminal-window': "w-full border-b border-green-500/30 justify-start gap-0",
    'matrix-grid': "w-full justify-start gap-1 p-2 border-b border-green-900/30",
    'neon-outline': "gap-4 w-full justify-center p-2",
  };

  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for the Trigger (individual tab)
const getTriggerStyles = (version: string) => {
  const base = "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const styles = {
    'angular-corner': "data-[state=active]:bg-cyan-500 data-[state=active]:text-black data-[state=active]:skew-x-[-10deg] skew-x-[-10deg] hover:text-cyan-400",
    'holo-frame': "border border-transparent data-[state=active]:border-cyan-500 data-[state=active]:bg-cyan-500/10 data-[state=active]:shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:border-cyan-500/50",
    'data-panel': "w-full justify-start data-[state=active]:bg-cyan-900/30 data-[state=active]:border-r-2 data-[state=active]:border-cyan-400 hover:bg-gray-800",
    'circuit-board': "uppercase tracking-widest text-xs data-[state=active]:text-cyan-400 data-[state=active]:border-b-2 data-[state=active]:border-cyan-400",
    'quantum-gate': "rounded-full data-[state=active]:bg-cyan-500 data-[state=active]:text-black hover:bg-gray-800",
    'tactical-hud': "uppercase tracking-tighter data-[state=active]:bg-cyan-500 data-[state=active]:text-black rounded-sm mx-0.5",
    'energy-shield': "rounded data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300 hover:bg-cyan-500/10",
    'terminal-window': "font-mono data-[state=active]:bg-green-500 data-[state=active]:text-black hover:text-green-400",
    'matrix-grid': "font-mono text-green-700 data-[state=active]:text-green-400 data-[state=active]:bg-green-900/20 border border-transparent data-[state=active]:border-green-500/50",
    'neon-outline': "data-[state=active]:text-cyan-400 data-[state=active]:shadow-[0_0_15px_cyan] data-[state=active]:border data-[state=active]:border-cyan-400 rounded-md",
  };

  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for the Content (panel)
const getContentStyles = (version: string) => {
  const base = "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  
  const styles = {
    'angular-corner': "p-4 border border-gray-800 bg-gray-900/30",
    'holo-frame': "p-6",
    'data-panel': "p-4 flex-1",
    'circuit-board': "p-4 bg-gray-950 border-t border-gray-800 mt-0",
    'quantum-gate': "p-4",
    'tactical-hud': "p-4 bg-gray-900/80 border border-t-0 border-gray-800 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-4 after:h-4 after:border-b-2 after:border-r-2 after:border-cyan-500",
    'energy-shield': "p-4",
    'terminal-window': "p-4 font-mono text-green-500",
    'matrix-grid': "p-4 text-green-400",
    'neon-outline': "p-6 border border-cyan-500/20 rounded-md bg-cyan-950/10",
  };

  return cn(base, styles[version as keyof typeof styles]);
};

export const TabsRoot = ({ version, variant, type, className, ...props }: TabsProps) => {
  return (
    <TabsPrimitive.Root
      className={cn(getRootStyles(version || 'angular-corner', variant || 'primary', type || 'default'), className)}
      {...props}
    />
  );
};

export const TabsList = ({ className, ...props }: any) => {
  // We can't easily access context here in the implementation without passing it down, 
  // but the styles function handles the version string if we could get it.
  // Ideally, we'd use a context inside the version file too, or just rely on the parent styling.
  // But wait! The styles are version dependent.
  // The 'index.tsx' passes props to TabsRoot, but TabsList is a child.
  // We should probably rely on the CSS cascade or pass version explicitly via context in the ROOT of this file if needed.
  // HOWEVER, for simplicity in this generated file, let's assume specific styles are applied via classNames passed from the parent 
  // OR we can't easily switch styles here without context.
  
  // FIX: The index.tsx wraps this component. But this component is the IMPLEMENTATION.
  // Does it know its version? No.
  // We need to export a context-aware subcomponent or just hardcode the style for THIS version file.
  // YES! This file is specific to the version (e.g., tabs-angular-corner.tsx).
  // So we KNOW the version is 'angular-corner'.
  
  return (
    <TabsPrimitive.List
      className={cn(getListStyles('tactical-hud'), className)}
      {...props}
    />
  );
};

export const TabsTrigger = ({ className, ...props }: any) => {
  return (
    <TabsPrimitive.Trigger
      className={cn(getTriggerStyles('tactical-hud'), className)}
      {...props}
    />
  );
};

export const TabsContent = ({ className, ...props }: any) => {
  return (
    <TabsPrimitive.Content
      className={cn(getContentStyles('tactical-hud'), className)}
      {...props}
    />
  );
};
