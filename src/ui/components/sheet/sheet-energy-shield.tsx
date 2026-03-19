import React from 'react';
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva } from "class-variance-authority"
import { cn } from '../../../lib/utils';
import { X } from "lucide-react"

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-gray-950 border-l border-cyan-800 clip-path-bevel-sm text-cyan-50",
    overlay: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-cyan-500 hover:text-cyan-300"
  },
  'holo-frame': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-cyan-950/80 backdrop-blur-xl border-l border-cyan-400/30 text-cyan-100 shadow-[inset_0_0_50px_rgba(6,182,212,0.1)]",
    overlay: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-cyan-300 hover:text-cyan-100"
  },
  'data-panel': {
     root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-slate-900 border-l-4 border-slate-600 text-slate-200 font-mono",
     overlay: "fixed inset-0 z-50 bg-slate-950/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
     close: "text-slate-400 hover:text-slate-200"
  },
  'circuit-board': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-emerald-950 border-l border-emerald-600 text-emerald-300 bg-[length:20px_20px]",
    overlay: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-emerald-400 hover:text-emerald-200"
  },
  'quantum-gate': {
     root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-violet-950/90 backdrop-blur-md border-l border-violet-500/50 text-violet-200",
     overlay: "fixed inset-0 z-50 bg-violet-950/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
     close: "text-violet-400 hover:text-violet-200"
  },
  'tactical-hud': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-black border-l-2 border-orange-700 text-orange-500 uppercase tracking-wide",
    overlay: "fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-orange-600 hover:text-orange-400"
  },
  'energy-shield': {
     root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-blue-950/90 backdrop-blur-lg border-l border-blue-400/50 text-blue-200 shadow-[inset_0_0_30px_rgba(30,58,138,0.3)]",
     overlay: "fixed inset-0 z-50 bg-blue-950/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
     close: "text-blue-400 hover:text-blue-200"
  },
  'terminal-window': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-black border-l border-green-600 text-green-500 font-mono",
    overlay: "fixed inset-0 z-50 bg-black/95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-green-600 hover:text-green-400"
  },
  'matrix-grid': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-black border-l border-lime-500/50 text-lime-400",
    overlay: "fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-lime-500 hover:text-lime-300"
  },
  'neon': {
    root: "fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-black/80 backdrop-blur-xl border-l-2 border-fuchsia-500 text-fuchsia-300",
    overlay: "fixed inset-0 z-50 bg-fuchsia-950/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "text-fuchsia-500 hover:text-fuchsia-300"
  },
  // Default fallback
  'default': {
    root: "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    overlay: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    close: "opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('energy-shield' in versionStyles ? 'energy-shield' : 'default');

const sheetVariants = cva(
  styles.root,
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

const SheetContent = React.forwardRef(({ className, children, side = "right", ...props }: any, ref: any) => (
  <>
    <SheetPrimitive.Overlay className={styles.overlay} />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className={cn("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", styles.close)}>
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

export default SheetContent;
