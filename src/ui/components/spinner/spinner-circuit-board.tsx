import React from 'react';
import { Loader2, Disc, Aperture, Cpu, Hexagon, Radar, Shield, TerminalSquare, Grid, Zap } from "lucide-react"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    icon: Loader2,
    root: "text-cyan-500 animate-spin",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'holo-frame': {
    icon: Disc,
    root: "text-cyan-400 animate-spin shadow-[0_0_15px_rgba(6,182,212,0.6)] rounded-full",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'data-panel': {
     icon: Aperture,
     root: "text-slate-400 animate-spin duration-700",
     sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'circuit-board': {
    icon: Cpu,
    root: "text-emerald-400 animate-pulse duration-1000",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'quantum-gate': {
     icon: Hexagon,
     root: "text-violet-400 animate-spin duration-3000 ease-linear",
     sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'tactical-hud': {
    icon: Radar,
    root: "text-orange-500 animate-spin duration-[3s]",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'energy-shield': {
     icon: Shield,
     root: "text-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-full",
     sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'terminal-window': {
    icon: TerminalSquare,
    root: "text-green-500 animate-bounce duration-500",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'matrix-grid': {
    icon: Grid,
    root: "text-lime-400 animate-spin duration-[5s]",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'neon-outline': {
    icon: Zap,
    root: "text-fuchsia-400 animate-pulse duration-75 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  // Default fallback
  'default': {
    icon: Loader2,
    root: "animate-spin text-primary",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('circuit-board' in versionStyles ? 'circuit-board' : 'default');

const Spinner = React.forwardRef(({ className, size = 'md', ...props }: any, ref: any) => {
  const Icon = styles.icon;
  return (
    <div ref={ref} className={cn("inline-block", className)} {...props}>
      <Icon className={cn(styles.root, styles.sizes[size])} />
    </div>
  )
})
Spinner.displayName = "Spinner"

export default Spinner;
