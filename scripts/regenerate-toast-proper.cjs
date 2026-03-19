const fs = require('fs');
const path = require('path');

const componentName = 'toast';
const versions = [
  'angular-corner',
  'holo-frame',
  'data-panel',
  'circuit-board',
  'quantum-gate',
  'tactical-hud',
  'energy-shield',
  'terminal-window',
  'matrix-grid',
  'neon-outline',
];

const targetDir = path.join(__dirname, '../src/ui/components', componentName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Generate the dispatcher (index.tsx)
const indexContent = `/**
 * Toast Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import * as ToastPrimitive from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from '../../../lib/utils';

// --- Types ---
type ToastVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  version?: ToastVersion;
  variant?: 'default' | 'destructive';
}

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitive.Viewport.displayName

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./toast-angular-corner')),
  'holo-frame': lazy(() => import('./toast-holo-frame')),
  'data-panel': lazy(() => import('./toast-data-panel')),
  'circuit-board': lazy(() => import('./toast-circuit-board')),
  'quantum-gate': lazy(() => import('./toast-quantum-gate')),
  'tactical-hud': lazy(() => import('./toast-tactical-hud')),
  'energy-shield': lazy(() => import('./toast-energy-shield')),
  'terminal-window': lazy(() => import('./toast-terminal-window')),
  'matrix-grid': lazy(() => import('./toast-matrix-grid')),
  'neon-outline': lazy(() => import('./toast-neon-outline')),
};

// --- Main Component ---
const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Root>, ToastProps>(({ 
  version = 'angular-corner', 
  className,
  variant,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<ToastPrimitive.Root className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", className)} {...props} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} variant={variant} className={className} {...props} />
    </Suspense>
  );
});
Toast.displayName = ToastPrimitive.Root.displayName;

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitive.Action.displayName

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.Close>
))
ToastClose.displayName = ToastPrimitive.Close.displayName

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitive.Title.displayName

const ToastDescription = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Description>, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitive.Description.displayName

type ToastPropsWithRef = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastPropsWithRef as ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
export default Toast;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
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
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

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
`;

  fs.writeFileSync(path.join(targetDir, `toast-${version}.tsx`), versionContent);
});

console.log('Toast regeneration complete.');
