import React from 'react';
import { cn } from '../../../lib/utils';
import { FolderOpen, Database, Ghost, HardDrive, ShieldAlert, Radio, BoxSelect, Terminal, Grid3X3, SearchX } from "lucide-react";

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-cyan-800 bg-cyan-950/20 clip-path-bevel-sm",
    icon: FolderOpen,
    iconClass: "h-12 w-12 text-cyan-700 mb-4",
    title: "text-lg font-bold text-cyan-500 uppercase tracking-widest",
    description: "text-sm text-cyan-700 mt-2 mb-6 max-w-xs mx-auto"
  },
  'holo-frame': {
    root: "flex flex-col items-center justify-center p-8 text-center border border-cyan-400/30 bg-cyan-900/10 backdrop-blur-sm rounded-xl shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]",
    icon: Database,
    iconClass: "h-12 w-12 text-cyan-400 mb-4 opacity-50 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]",
    title: "text-lg font-semibold text-cyan-200",
    description: "text-sm text-cyan-400/70 mt-2 mb-6 max-w-xs mx-auto"
  },
  'data-panel': {
     root: "flex flex-col items-center justify-center p-8 text-center border border-slate-600 bg-slate-800/50 font-mono",
     icon: Ghost,
     iconClass: "h-12 w-12 text-slate-500 mb-4",
     title: "text-lg font-bold text-slate-300",
     description: "text-sm text-slate-500 mt-2 mb-6 max-w-xs mx-auto"
  },
  'circuit-board': {
    root: "flex flex-col items-center justify-center p-8 text-center border border-emerald-600/30 bg-emerald-950/20 rounded-lg bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]",
    icon: HardDrive,
    iconClass: "h-12 w-12 text-emerald-500/50 mb-4",
    title: "text-lg font-semibold text-emerald-400",
    description: "text-sm text-emerald-600 mt-2 mb-6 max-w-xs mx-auto"
  },
  'quantum-gate': {
     root: "flex flex-col items-center justify-center p-8 text-center border border-violet-500/30 bg-violet-950/10 rounded-2xl",
     icon: BoxSelect,
     iconClass: "h-12 w-12 text-violet-400 mb-4",
     title: "text-lg font-medium text-violet-300",
     description: "text-sm text-violet-500 mt-2 mb-6 max-w-xs mx-auto"
  },
  'tactical-hud': {
    root: "flex flex-col items-center justify-center p-8 text-center border-2 border-orange-800/50 bg-black/80 clip-path-notch-lg uppercase tracking-wider",
    icon: ShieldAlert,
    iconClass: "h-12 w-12 text-orange-600 mb-4",
    title: "text-lg font-black text-orange-500",
    description: "text-sm text-orange-700 mt-2 mb-6 max-w-xs mx-auto font-bold"
  },
  'energy-shield': {
     root: "flex flex-col items-center justify-center p-8 text-center border border-blue-400/30 bg-blue-900/10 rounded-3xl shadow-[inset_0_0_30px_rgba(30,58,138,0.3)]",
     icon: Radio,
     iconClass: "h-12 w-12 text-blue-400 mb-4 animate-pulse",
     title: "text-lg font-semibold text-blue-200",
     description: "text-sm text-blue-400/60 mt-2 mb-6 max-w-xs mx-auto"
  },
  'terminal-window': {
    root: "flex flex-col items-center justify-center p-8 text-center border border-green-600/30 bg-black font-mono relative before:absolute before:inset-0 before:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] before:bg-[length:100%_4px] before:pointer-events-none",
    icon: Terminal,
    iconClass: "h-12 w-12 text-green-600 mb-4",
    title: "text-lg font-bold text-green-500",
    description: "text-sm text-green-700 mt-2 mb-6 max-w-xs mx-auto"
  },
  'matrix-grid': {
    root: "flex flex-col items-center justify-center p-8 text-center border border-lime-500/20 bg-black/90",
    icon: Grid3X3,
    iconClass: "h-12 w-12 text-lime-500/40 mb-4",
    title: "text-lg font-medium text-lime-400",
    description: "text-sm text-lime-600 mt-2 mb-6 max-w-xs mx-auto"
  },
  'neon-outline': {
    root: "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-fuchsia-500/30 bg-transparent rounded-xl",
    icon: SearchX,
    iconClass: "h-12 w-12 text-fuchsia-400 mb-4 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]",
    title: "text-lg font-semibold text-fuchsia-300",
    description: "text-sm text-fuchsia-500 mt-2 mb-6 max-w-xs mx-auto"
  },
  // Default fallback
  'default': {
    root: "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg",
    icon: FolderOpen,
    iconClass: "h-10 w-10 text-muted-foreground mb-4",
    title: "text-lg font-semibold",
    description: "text-sm text-muted-foreground mt-2 mb-4"
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('data-panel' in versionStyles ? 'data-panel' : 'default');

const EmptyState = React.forwardRef(({ className, title, description, action, icon, ...props }: any, ref: any) => {
  const Icon = icon ? () => icon : styles.icon;

  return (
    <div
      ref={ref}
      className={cn(styles.root, className)}
      {...props}
    >
      <Icon className={styles.iconClass} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action}
    </div>
  )
})
EmptyState.displayName = "EmptyState"

export default EmptyState;
