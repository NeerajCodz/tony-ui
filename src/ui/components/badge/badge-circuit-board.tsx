import React from 'react';
import { cva } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 clip-path-bevel-sm rounded-none uppercase tracking-wider",
    variants: {
      default: "border-transparent bg-cyan-900 text-cyan-50 hover:bg-cyan-900/80",
      secondary: "border-transparent bg-slate-800 text-slate-50 hover:bg-slate-800/80",
      destructive: "border-transparent bg-red-900 text-red-50 hover:bg-red-900/80",
      outline: "text-cyan-500 border-cyan-700",
    }
  },
  'holo-frame': {
    root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm rounded-full shadow-[0_0_5px_rgba(6,182,212,0.3)]",
    variants: {
      default: "border-cyan-500/50 bg-cyan-950/30 text-cyan-200 hover:bg-cyan-950/50",
      secondary: "border-slate-500/50 bg-slate-950/30 text-slate-200 hover:bg-slate-950/50",
      destructive: "border-red-500/50 bg-red-950/30 text-red-200 hover:bg-red-950/50",
      outline: "text-cyan-300 border-cyan-400/50",
    }
  },
  'data-panel': {
     root: "inline-flex items-center border-l-2 px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono uppercase rounded-r-sm",
     variants: {
       default: "border-slate-400 bg-slate-800 text-slate-200 hover:bg-slate-700",
       secondary: "border-slate-600 bg-slate-900 text-slate-400 hover:bg-slate-800",
       destructive: "border-red-500 bg-red-900 text-red-100 hover:bg-red-800",
       outline: "text-slate-300 border-slate-500 border-y border-r bg-transparent",
     }
  },
  'circuit-board': {
    root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm",
    variants: {
      default: "border-transparent bg-emerald-950/50 text-emerald-400 hover:bg-emerald-900/50 border border-emerald-500/30",
      secondary: "border-transparent bg-slate-950/50 text-slate-400 hover:bg-slate-900/50",
      destructive: "border-transparent bg-red-950/50 text-red-400 hover:bg-red-900/50 border border-red-500/30",
      outline: "text-emerald-400 border-emerald-600/50",
    }
  },
  'quantum-gate': {
     root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md",
     variants: {
       default: "border-transparent bg-violet-900/30 text-violet-200 hover:bg-violet-900/40 border-b-2 border-violet-500",
       secondary: "border-transparent bg-slate-900/30 text-slate-200 hover:bg-slate-900/40 border-b-2 border-slate-500",
       destructive: "border-transparent bg-red-900/30 text-red-200 hover:bg-red-900/40 border-b-2 border-red-500",
       outline: "text-violet-300 border-violet-500",
     }
  },
  'tactical-hud': {
    root: "inline-flex items-center border px-2.5 py-0.5 text-[10px] font-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 clip-path-notch-sm uppercase tracking-[0.2em] rounded-none",
    variants: {
      default: "border-orange-600 bg-orange-950/20 text-orange-500 hover:bg-orange-950/40",
      secondary: "border-slate-600 bg-slate-950/20 text-slate-500 hover:bg-slate-950/40",
      destructive: "border-red-600 bg-red-950/20 text-red-500 hover:bg-red-950/40",
      outline: "text-orange-500 border-orange-600",
    }
  },
  'energy-shield': {
     root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full",
     variants: {
       default: "border-blue-400/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
       secondary: "border-slate-400/30 bg-slate-500/10 text-slate-300 hover:bg-slate-500/20",
       destructive: "border-red-400/30 bg-red-500/10 text-red-300 hover:bg-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.3)]",
       outline: "text-blue-300 border-blue-500/50",
     }
  },
  'terminal-window': {
    root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono rounded-none",
    variants: {
      default: "border-transparent bg-green-900 text-green-50 hover:bg-green-800",
      secondary: "border-transparent bg-slate-800 text-slate-50 hover:bg-slate-700",
      destructive: "border-transparent bg-red-900 text-red-50 hover:bg-red-800",
      outline: "text-green-500 border-green-600",
    }
  },
  'matrix-grid': {
    root: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm",
    variants: {
      default: "border-transparent bg-lime-900/40 text-lime-400 hover:bg-lime-900/60 border border-lime-500/30",
      secondary: "border-transparent bg-slate-900/40 text-slate-400 hover:bg-slate-900/60",
      destructive: "border-transparent bg-red-900/40 text-red-400 hover:bg-red-900/60 border border-red-500/30",
      outline: "text-lime-400 border-lime-600/50",
    }
  },
  'neon-outline': {
    root: "inline-flex items-center border-2 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md shadow-sm",
    variants: {
      default: "border-fuchsia-500/50 bg-transparent text-fuchsia-300 hover:bg-fuchsia-500/10 shadow-[0_0_5px_rgba(217,70,239,0.4)]",
      secondary: "border-slate-500/50 bg-transparent text-slate-300 hover:bg-slate-500/10",
      destructive: "border-red-500/50 bg-transparent text-red-300 hover:bg-red-500/10 shadow-[0_0_5px_rgba(239,68,68,0.4)]",
      outline: "text-fuchsia-300 border-fuchsia-500",
    }
  },
  // Default fallback
  'default': {
    root: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    variants: {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground",
    }
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('circuit-board' in versionStyles ? 'circuit-board' : 'default');

const badgeVariants = cva(
  styles.root,
  {
    variants: {
      variant: styles.variants
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Badge = React.forwardRef(({ className, variant, ...props }: any, ref: any) => (
  <div className={cn(badgeVariants({ variant }), className)} ref={ref} {...props} />
))
Badge.displayName = "Badge"

export default Badge;
