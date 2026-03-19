import React from 'react';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "flex min-h-[80px] w-full border border-cyan-700 bg-gray-950 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 clip-path-bevel-sm rounded-none text-cyan-50",
  },
  'holo-frame': {
    root: "flex min-h-[80px] w-full border border-cyan-400/50 bg-cyan-900/10 px-3 py-2 text-sm text-cyan-100 ring-offset-background placeholder:text-cyan-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm rounded-sm shadow-[inset_0_0_10px_rgba(6,182,212,0.1)] focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all",
  },
  'data-panel': {
     root: "flex min-h-[80px] w-full border-2 border-slate-600 bg-slate-800 px-3 py-2 text-sm font-mono text-slate-200 ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
  },
  'circuit-board': {
    root: "flex min-h-[80px] w-full border border-emerald-600/50 bg-emerald-950/30 px-3 py-2 text-sm text-emerald-300 ring-offset-background placeholder:text-emerald-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm shadow-[0_0_5px_rgba(52,211,153,0.2)]",
  },
  'quantum-gate': {
     root: "flex min-h-[80px] w-full border border-violet-500/50 bg-violet-950/20 px-3 py-2 text-sm text-violet-200 ring-offset-background placeholder:text-violet-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-xl pl-5",
  },
  'tactical-hud': {
    root: "flex min-h-[80px] w-full border-2 border-orange-700/60 bg-black px-3 py-2 text-sm font-bold text-orange-500 ring-offset-background placeholder:text-orange-900 focus-visible:outline-none focus-visible:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 clip-path-notch-sm rounded-none tracking-wider uppercase",
  },
  'energy-shield': {
     root: "flex min-h-[80px] w-full border border-blue-400/60 bg-blue-900/20 px-3 py-2 text-sm text-blue-200 ring-offset-background placeholder:text-blue-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-xl pl-5 shadow-[inset_0_0_10px_rgba(59,130,246,0.3)]",
  },
  'terminal-window': {
    root: "flex min-h-[80px] w-full border border-green-600/50 bg-black px-3 py-2 text-sm font-mono text-green-500 ring-offset-background placeholder:text-green-900 focus-visible:outline-none focus-visible:border-green-400 disabled:cursor-not-allowed disabled:opacity-50 rounded-none",
  },
  'matrix-grid': {
    root: "flex min-h-[80px] w-full border border-lime-500/40 bg-black/90 px-3 py-2 text-sm text-lime-400 ring-offset-background placeholder:text-lime-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm",
  },
  'neon': {
    root: "flex min-h-[80px] w-full border-2 border-fuchsia-500/60 bg-transparent px-3 py-2 text-sm text-fuchsia-300 ring-offset-background placeholder:text-fuchsia-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md shadow-[0_0_5px_rgba(217,70,239,0.2)] focus:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all",
  },
  // Default fallback
  'default': {
    root: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('data-panel' in versionStyles ? 'data-panel' : 'default');

const Textarea = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <textarea
    className={cn(styles.root, className)}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export default Textarea;
