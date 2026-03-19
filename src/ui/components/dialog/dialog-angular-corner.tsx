import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Icons map
const variantIcons = {
  default: Terminal,
  neutral: Terminal,
  primary: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: AlertOctagon,
  info: Info
};

// Colors map for borders and glows
const variantColors = {
  default: 'cyan',
  neutral: 'slate',
  primary: 'cyan',
  success: 'emerald',
  warning: 'amber',
  destructive: 'red',
  info: 'blue'
};

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    overlay: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-950 p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] clip-path-bevel sm:rounded-none border-0",
    title: "text-lg font-semibold",
    description: "text-sm opacity-70",
    close: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:bg-white/10 p-1",
  },
// ... (keep other styles but update content to handle variants)
  'holo-frame': {
    overlay: "fixed inset-0 z-50 bg-cyan-900/20 backdrop-blur-md",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-cyan-400/40 bg-gray-900/90 p-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] duration-200 sm:rounded-lg",
    title: "text-lg font-bold text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
    description: "text-sm text-cyan-200/80",
    close: "absolute right-4 top-4 text-cyan-400 hover:text-cyan-200 hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] transition-all",
  },
  'data-panel': {
     overlay: "fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-slate-700 bg-slate-900 p-6 shadow-xl duration-200 sm:rounded-none",
    title: "text-lg font-mono text-slate-100 uppercase tracking-widest",
    description: "text-sm font-mono text-slate-400",
    close: "absolute right-4 top-4 text-slate-500 hover:text-slate-200 bg-slate-800 p-1 rounded-none",
  },
  'circuit-board': {
    overlay: "fixed inset-0 z-50 bg-emerald-950/80 backdrop-blur-[2px]",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-emerald-500/30 bg-emerald-950/95 p-6 shadow-2xl duration-200 sm:rounded-xl",
    title: "text-lg font-bold text-emerald-400",
    description: "text-sm text-emerald-600/80",
    close: "absolute right-4 top-4 text-emerald-500 hover:text-emerald-300 bg-emerald-900/50 rounded-full p-1",
  },
  'quantum-gate': {
     overlay: "fixed inset-0 z-50 bg-violet-950/60 backdrop-blur-xl",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-t border-b border-violet-500/50 bg-violet-950/40 p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] duration-200",
    title: "text-lg font-light text-violet-100 tracking-[0.2em]",
    description: "text-sm text-violet-300/60",
    close: "absolute right-4 top-4 text-violet-400 hover:text-violet-200",
  },
  'tactical-hud': {
    overlay: "fixed inset-0 z-50 bg-orange-950/40 backdrop-grayscale",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-orange-600/60 bg-black p-6 shadow-none duration-200 clip-path-notch",
    title: "text-lg font-black text-orange-500 uppercase",
    description: "text-sm text-orange-700 font-bold",
    close: "absolute right-4 top-4 text-orange-600 hover:text-orange-400 border border-orange-800 p-1 bg-black",
  },
  'energy-shield': {
     overlay: "fixed inset-0 z-50 bg-blue-900/40",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-blue-400 bg-blue-900/20 p-6 shadow-[inset_0_0_20px_rgba(59,130,246,0.5)] duration-200 backdrop-blur-md rounded-2xl",
    title: "text-lg font-medium text-blue-100",
    description: "text-sm text-blue-200/80",
    close: "absolute right-4 top-4 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50 rounded-full p-1",
  },
  'terminal-window': {
    overlay: "fixed inset-0 z-50 bg-black/90",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-green-500/50 bg-black p-4 shadow-none duration-200 font-mono",
    title: "text-lg text-green-500 before:content-['>_'] before:mr-2",
    description: "text-sm text-green-800",
    close: "absolute right-4 top-4 text-green-600 hover:text-green-400",
  },
  'matrix-grid': {
    overlay: "fixed inset-0 z-50 bg-black/80",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-lime-500/20 bg-black/90 p-6 shadow-[0_0_15px_rgba(132,204,22,0.1)] duration-200",
    title: "text-lg font-bold text-lime-400",
    description: "text-sm text-lime-700",
    close: "absolute right-4 top-4 text-lime-600 hover:text-lime-400",
  },
  'neon': {
    overlay: "fixed inset-0 z-50 bg-fuchsia-950/70 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-fuchsia-500 bg-gray-950 p-6 shadow-[0_0_30px_rgba(217,70,239,0.4)] duration-200 rounded-xl",
    title: "text-lg font-bold text-fuchsia-200 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]",
    description: "text-sm text-fuchsia-400",
    close: "absolute right-4 top-4 text-fuchsia-400 hover:text-fuchsia-200 hover:drop-shadow-[0_0_5px_rgba(217,70,239,0.8)]",
  },
  // Default fallback
  'default': {
    overlay: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
    title: "text-lg font-semibold",
    description: "text-sm text-muted-foreground",
    close: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('angular-corner' in versionStyles ? 'angular-corner' : 'default');

export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(styles.overlay, className)}
    {...props}
  />
));
Overlay.displayName = DialogPrimitive.Overlay.displayName;

export const Content = React.forwardRef(({ className, children, variant = 'primary', ...props }: any, ref: any) => {
  const color = variantColors[variant] || 'cyan';
  const Icon = variantIcons[variant] || variantIcons.default;
  
  // Dynamic color classes
  const dynamicClasses = `shadow-[0_0_30px_-5px_theme(colors.${color}.500/30)] border-l-4 border-${color}-500 bg-black/90`;

  return (
    <DialogPrimitive.Content
      ref={ref}
      className={cn(styles.content, dynamicClasses, className)}
      {...props}
    >
      <div className={`absolute -top-3 -left-3 p-1.5 bg-gray-950 border border-${color}-500/50 rounded-none z-50 shadow-lg`}>
         <Icon className={`w-5 h-5 text-${color}-400`} />
      </div>
      {children}
      <DialogPrimitive.Close className={cn(styles.close, `text-${color}-400 hover:text-${color}-200`)}>
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  );
});
Content.displayName = DialogPrimitive.Content.displayName;

export const Title = React.forwardRef(({ className, variant = 'primary', ...props }: any, ref: any) => {
   const color = variantColors[variant] || 'cyan';
   return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(styles.title, `text-${color}-100`, className)}
      {...props}
    />
   );
});
Title.displayName = DialogPrimitive.Title.displayName;

export const Description = React.forwardRef(({ className, variant = 'primary', ...props }: any, ref: any) => {
   const color = variantColors[variant] || 'cyan';
   return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(styles.description, `text-${color}-300/70`, className)}
      {...props}
    />
   );
});
Description.displayName = DialogPrimitive.Description.displayName;
