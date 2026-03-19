import React from 'react';
import * as ToastPrimitive from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { cn } from '../../../lib/utils';
import { X } from "lucide-react"

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-cyan-700 bg-cyan-950 text-cyan-50 clip-path-bevel-sm rounded-none",
    close: "text-cyan-500 hover:text-cyan-300",
    variants: {
      default: "border-cyan-700 bg-cyan-950 text-cyan-50",
      destructive: "group destructive border-red-500 bg-red-950 text-red-50",
    }
  },
  'holo-frame': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-cyan-400/50 bg-cyan-900/80 backdrop-blur-md rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.2)]",
    close: "text-cyan-300 hover:text-cyan-100",
    variants: {
       default: "border-cyan-400/50 bg-cyan-900/80 text-cyan-100",
       destructive: "group destructive border-red-400/50 bg-red-900/80 text-red-100",
    }
  },
  'data-panel': {
     root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border-l-4 p-6 pr-8 shadow-lg transition-all border-slate-500 bg-slate-800 text-slate-200 font-mono rounded-r-md",
     close: "text-slate-400 hover:text-slate-200",
     variants: {
       default: "border-slate-500 bg-slate-800 text-slate-200",
       destructive: "group destructive border-red-600 bg-red-950 text-red-100",
     }
  },
  'circuit-board': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-emerald-600/50 bg-emerald-950/90 text-emerald-300 rounded-sm bg-[length:10px_10px]",
    close: "text-emerald-400 hover:text-emerald-200",
    variants: {
       default: "border-emerald-600/50 bg-emerald-950/90 text-emerald-300",
       destructive: "group destructive border-red-600/50 bg-red-950/90 text-red-300",
    }
  },
  'quantum-gate': {
     root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-violet-500/50 bg-violet-950/90 text-violet-200 rounded-xl",
     close: "text-violet-400 hover:text-violet-200",
     variants: {
       default: "border-violet-500/50 bg-violet-950/90 text-violet-200",
       destructive: "group destructive border-red-500/50 bg-red-950/90 text-red-200",
     }
  },
  'tactical-hud': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border-2 p-6 pr-8 shadow-lg transition-all border-orange-700/60 bg-black/90 text-orange-500 clip-path-notch-md rounded-none uppercase tracking-wide",
    close: "text-orange-600 hover:text-orange-400",
    variants: {
       default: "border-orange-700/60 bg-black/90 text-orange-500",
       destructive: "group destructive border-red-700/60 bg-black/90 text-red-500",
    }
  },
  'energy-shield': {
     root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-blue-400/60 bg-blue-900/80 text-blue-200 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)]",
     close: "text-blue-400 hover:text-blue-200",
     variants: {
       default: "border-blue-400/60 bg-blue-900/80 text-blue-200",
       destructive: "group destructive border-red-400/60 bg-red-900/80 text-red-200",
     }
  },
  'terminal-window': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-green-600/50 bg-black/90 text-green-500 font-mono rounded-none",
    close: "text-green-600 hover:text-green-400",
    variants: {
       default: "border-green-600/50 bg-black/90 text-green-500",
       destructive: "group destructive border-red-600/50 bg-black/90 text-red-500",
    }
  },
  'matrix-grid': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border p-6 pr-8 shadow-lg transition-all border-lime-500/40 bg-black/90 text-lime-400 rounded-sm",
    close: "text-lime-500 hover:text-lime-300",
    variants: {
       default: "border-lime-500/40 bg-black/90 text-lime-400",
       destructive: "group destructive border-red-500/40 bg-black/90 text-red-400",
    }
  },
  'neon-outline': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden border-2 p-6 pr-8 shadow-lg transition-all border-fuchsia-500/60 bg-black/80 text-fuchsia-300 rounded-lg shadow-[0_0_10px_rgba(217,70,239,0.3)]",
    close: "text-fuchsia-500 hover:text-fuchsia-300",
    variants: {
       default: "border-fuchsia-500/60 bg-black/80 text-fuchsia-300",
       destructive: "group destructive border-red-500/60 bg-black/80 text-red-300",
    }
  },
  // Default fallback
  'default': {
    root: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    close: "text-foreground/50 hover:text-foreground",
    variants: {
      default: "border bg-background text-foreground",
      destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
    }
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('holo-frame' in versionStyles ? 'holo-frame' : 'default');

const toastVariants = cva(
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

const Toast = React.forwardRef(({ className, variant, ...props }: any, ref: any) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
))
Toast.displayName = ToastPrimitive.Root.displayName

export default Toast;
