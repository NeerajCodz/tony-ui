import React from 'react';
import { Root as CheckboxRoot, Indicator as CheckboxIndicator } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "peer h-4 w-4 shrink-0 border border-cyan-500/50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-900 data-[state=checked]:text-cyan-400 clip-path-bevel-sm rounded-none transition-all",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'holo-frame': {
    root: "peer h-4 w-4 shrink-0 border border-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-500/20 data-[state=checked]:text-cyan-100 backdrop-blur-sm rounded-sm transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    indicator: "flex items-center justify-center text-current drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
    icon: "h-3 w-3",
  },
  'data-panel': {
     root: "peer h-4 w-4 shrink-0 border-2 border-slate-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-700 data-[state=checked]:text-slate-200 rounded-none transition-none",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'circuit-board': {
    root: "peer h-4 w-4 shrink-0 border border-emerald-500/50 bg-emerald-950/50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-emerald-900 data-[state=checked]:text-emerald-400 rounded transition-all",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'quantum-gate': {
     root: "peer h-4 w-4 shrink-0 border border-violet-500/50 bg-violet-950/30 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-600/50 data-[state=checked]:text-violet-200 rounded-full transition-all duration-300",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'tactical-hud': {
    root: "peer h-4 w-4 shrink-0 border-2 border-orange-700/80 bg-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-orange-900/50 data-[state=checked]:text-orange-500 rounded-none clip-path-notch-sm transition-none",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'energy-shield': {
     root: "peer h-4 w-4 shrink-0 border border-blue-400/60 bg-blue-900/20 shadow-[inset_0_0_5px_rgba(59,130,246,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500/30 data-[state=checked]:text-blue-200 rounded-md transition-all hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.5)]",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'terminal-window': {
    root: "peer h-4 w-4 shrink-0 border border-green-600/50 bg-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-900/30 data-[state=checked]:text-green-500 rounded-none transition-none",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'matrix-grid': {
    root: "peer h-4 w-4 shrink-0 border border-lime-500/40 bg-black/80 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-lime-900/40 data-[state=checked]:text-lime-400 rounded-sm transition-all",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'neon': {
    root: "peer h-4 w-4 shrink-0 border-2 border-fuchsia-500/70 bg-transparent shadow-[0_0_5px_rgba(217,70,239,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-fuchsia-500/20 data-[state=checked]:text-fuchsia-300 rounded-md transition-all hover:shadow-[0_0_10px_rgba(217,70,239,0.5)]",
    indicator: "flex items-center justify-center text-current drop-shadow-[0_0_2px_rgba(217,70,239,0.8)]",
    icon: "h-3 w-3",
  },
  // Default fallback
  'default': {
    root: "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    indicator: "flex items-center justify-center text-current",
    icon: "h-4 w-4",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('neon' in versionStyles ? 'neon' : 'default');


const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};

const Checkbox = React.forwardRef(({type,  className, ...props }: any, ref: any) => (
  <CheckboxRoot
    ref={ref}
    className={cn(styles.root, className, getTypeStyles(type))}
    {...props}
  >
    <CheckboxIndicator className={cn(styles.indicator, getTypeStyles(type))}>
      <Check className={styles.icon} />
    </CheckboxIndicator>
  </CheckboxRoot>
));
Checkbox.displayName = CheckboxRoot.displayName;

export default Checkbox;

