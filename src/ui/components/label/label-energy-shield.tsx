import React from 'react';
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-cyan-500 uppercase tracking-wider font-mono",
  },
  'holo-frame': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-cyan-300 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
  },
  'data-panel': {
     root: "text-xs font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-400 font-mono uppercase border-l-2 border-slate-500 pl-2",
  },
  'circuit-board': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-emerald-400 font-mono tracking-tight",
  },
  'quantum-gate': {
     root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-violet-300 tracking-wide",
  },
  'tactical-hud': {
    root: "text-xs font-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-orange-600 uppercase tracking-[0.2em]",
  },
  'energy-shield': {
     root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-300 font-mono pl-1 border-l-4 border-blue-500/50",
  },
  'terminal-window': {
    root: "text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-500 font-mono before:content-['>_'] before:mr-1",
  },
  'matrix-grid': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lime-400 font-mono",
  },
  'neon': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-fuchsia-400 drop-shadow-[0_0_2px_rgba(232,121,249,0.8)] uppercase",
  },
  // Default fallback
  'default': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('energy-shield' in versionStyles ? 'energy-shield' : 'default');

const labelVariants = cva(styles.root);

const Label = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
