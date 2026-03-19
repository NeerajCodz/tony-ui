import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    overlay: "fixed inset-0 bg-black/60 backdrop-blur-sm",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border border-cyan-500/30 bg-gray-950 clip-path-bevel-top",
    title: "text-lg font-semibold leading-none tracking-tight text-cyan-400 font-mono",
    description: "text-sm text-cyan-500/70 font-mono",
  },
  'holo-frame': {
    overlay: "fixed inset-0 bg-cyan-900/20 backdrop-blur-md",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border-t border-cyan-400/50 bg-gray-900/90 shadow-[0_-5px_20px_rgba(6,182,212,0.2)]",
    title: "text-lg font-bold text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
    description: "text-sm text-cyan-200/80",
  },
  'data-panel': {
    overlay: "fixed inset-0 bg-gray-950/80",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col border-t-4 border-cyan-600 bg-gray-950",
    title: "text-lg font-bold text-gray-100 uppercase tracking-widest",
    description: "text-sm text-gray-400 font-mono",
  },
  'circuit-board': {
    overlay: "fixed inset-0 bg-black/70 bg-[url('/patterns/circuit.svg')] bg-opacity-10",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border-t border-cyan-900/50 bg-gray-950 bg-[url('/patterns/circuit.svg')]",
    title: "text-lg font-semibold text-cyan-300",
    description: "text-sm text-cyan-700",
  },
  // Default fallback
  'default': {
    overlay: "fixed inset-0 bg-black/80",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-muted-foreground",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('neon-outline' in versionStyles ? 'neon-outline' : 'default');

export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(styles.overlay, className)}
    {...props}
  />
));
Overlay.displayName = DrawerPrimitive.Overlay.displayName;

export const Content = React.forwardRef(({ className, children, ...props }: any, ref: any) => (
  <DrawerPrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  >
    <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
    {children}
  </DrawerPrimitive.Content>
));
Content.displayName = DrawerPrimitive.Content.displayName;

export const Title = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(styles.title, className)}
    {...props}
  />
));
Title.displayName = DrawerPrimitive.Title.displayName;

export const Description = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(styles.description, className)}
    {...props}
  />
));
Description.displayName = DrawerPrimitive.Description.displayName;
