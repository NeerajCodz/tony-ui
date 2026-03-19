import React from 'react';
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "relative h-4 w-full overflow-hidden bg-cyan-950/20 clip-path-bevel-sm rounded-none border border-cyan-900",
    indicator: "h-full w-full flex-1 bg-cyan-500 transition-all shadow-[0_0_10px_rgba(6,182,212,0.5)]"
  },
  'holo-frame': {
    root: "relative h-4 w-full overflow-hidden bg-cyan-900/10 border border-cyan-500/30 rounded-full shadow-[inset_0_0_5px_rgba(6,182,212,0.1)]",
    indicator: "h-full w-full flex-1 bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.6)]"
  },
  'data-panel': {
     root: "relative h-4 w-full overflow-hidden bg-slate-800 border-2 border-slate-600 rounded-none",
     indicator: "h-full w-full flex-1 bg-slate-400 transition-all border-r-2 border-slate-200"
  },
  'circuit-board': {
    root: "relative h-4 w-full overflow-hidden bg-emerald-950/30 border border-emerald-600/30 rounded-sm",
    indicator: "h-full w-full flex-1 bg-emerald-500 transition-all opacity-80 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:10px_10px]"
  },
  'quantum-gate': {
     root: "relative h-4 w-full overflow-hidden bg-violet-950/20 border border-violet-500/30 rounded-md",
     indicator: "h-full w-full flex-1 bg-gradient-to-r from-violet-600 to-violet-400 transition-all"
  },
  'tactical-hud': {
    root: "relative h-4 w-full overflow-hidden bg-black border-2 border-orange-700/60 rounded-none clip-path-notch-sm",
    indicator: "h-full w-full flex-1 bg-orange-500 transition-all"
  },
  'energy-shield': {
     root: "relative h-4 w-full overflow-hidden bg-blue-900/20 border border-blue-400/30 rounded-full shadow-[inset_0_0_10px_rgba(59,130,246,0.2)]",
     indicator: "h-full w-full flex-1 bg-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]"
  },
  'terminal-window': {
    root: "relative h-4 w-full overflow-hidden bg-black border border-green-600/50 rounded-none",
    indicator: "h-full w-full flex-1 bg-green-500 transition-all"
  },
  'matrix-grid': {
    root: "relative h-4 w-full overflow-hidden bg-black/90 border border-lime-500/30 rounded-sm",
    indicator: "h-full w-full flex-1 bg-lime-500 transition-all shadow-[0_0_5px_rgba(132,204,22,0.5)]"
  },
  'neon-outline': {
    root: "relative h-4 w-full overflow-hidden bg-transparent border-2 border-fuchsia-500/60 rounded-md p-[2px]",
    indicator: "h-full w-full flex-1 bg-fuchsia-500 transition-all rounded-sm shadow-[0_0_10px_rgba(217,70,239,0.5)]"
  },
  // Default fallback
  'default': {
    root: "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
    indicator: "h-full w-full flex-1 bg-primary transition-all"
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('matrix-grid' in versionStyles ? 'matrix-grid' : 'default');

const Progress = React.forwardRef(({ className, value, ...props }: any, ref: any) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={styles.indicator}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export default Progress;
