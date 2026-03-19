import React from 'react';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "animate-pulse rounded-none bg-cyan-950/20 border border-cyan-900 clip-path-bevel-sm",
  },
  'holo-frame': {
    root: "animate-pulse rounded-sm bg-cyan-900/10 border border-cyan-500/20 shadow-[0_0_5px_rgba(6,182,212,0.1)]",
  },
  'data-panel': {
     root: "animate-pulse rounded-none bg-slate-800 border-l-2 border-slate-600",
  },
  'circuit-board': {
    root: "animate-pulse rounded-sm bg-emerald-950/30 border border-emerald-500/20 bg-[linear-gradient(45deg,transparent_25%,rgba(52,211,153,0.05)_50%,transparent_75%)] bg-[length:20px_20px]",
  },
  'quantum-gate': {
     root: "animate-pulse rounded-md bg-violet-950/20 border border-violet-500/20",
  },
  'tactical-hud': {
    root: "animate-pulse rounded-none bg-orange-950/10 border border-orange-900 clip-path-notch-sm",
  },
  'energy-shield': {
     root: "animate-pulse rounded-lg bg-blue-900/10 border border-blue-500/20",
  },
  'terminal-window': {
    root: "animate-pulse rounded-none bg-green-950/10 border border-green-900",
  },
  'matrix-grid': {
    root: "animate-pulse rounded-sm bg-lime-950/10 border border-lime-900",
  },
  'neon-outline': {
    root: "animate-pulse rounded-md bg-fuchsia-950/10 border border-fuchsia-500/30 shadow-[0_0_5px_rgba(217,70,239,0.1)]",
  },
  // Default fallback
  'default': {
    root: "animate-pulse rounded-md bg-muted",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('terminal-window' in versionStyles ? 'terminal-window' : 'default');

const Skeleton = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <div
    className={cn(styles.root, className)}
    ref={ref}
    {...props}
  />
))
Skeleton.displayName = "Skeleton"

export default Skeleton;
