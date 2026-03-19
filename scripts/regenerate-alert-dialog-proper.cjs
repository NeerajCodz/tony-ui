const fs = require('fs');
const path = require('path');

const componentName = 'alert-dialog';
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
 * AlertDialog Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../lib/utils';
import { Button } from '../../components/button'; 

// --- Types ---
type AlertDialogVersion = 
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

interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  version?: AlertDialogVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface AlertDialogContextValue {
  version: AlertDialogVersion;
  variant: AlertDialogProps['variant'];
  type: AlertDialogProps['type'];
}

const AlertDialogContext = createContext<AlertDialogContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useAlertDialogContext = () => useContext(AlertDialogContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./alert-dialog-angular-corner')),
  'holo-frame': lazy(() => import('./alert-dialog-holo-frame')),
  'data-panel': lazy(() => import('./alert-dialog-data-panel')),
  'circuit-board': lazy(() => import('./alert-dialog-circuit-board')),
  'quantum-gate': lazy(() => import('./alert-dialog-quantum-gate')),
  'tactical-hud': lazy(() => import('./alert-dialog-tactical-hud')),
  'energy-shield': lazy(() => import('./alert-dialog-energy-shield')),
  'terminal-window': lazy(() => import('./alert-dialog-terminal-window')),
  'matrix-grid': lazy(() => import('./alert-dialog-matrix-grid')),
  'neon-outline': lazy(() => import('./alert-dialog-neon-outline')),
};

// --- Main Component ---
const AlertDialog = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}: AlertDialogProps) => {
  return (
    <AlertDialogContext.Provider value={{ version, variant, type }}>
      <AlertDialogPrimitive.Root {...props}>
        {children}
      </AlertDialogPrimitive.Root>
    </AlertDialogContext.Provider>
  );
};
AlertDialog.displayName = 'AlertDialog';

// --- Subcomponents ---

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>((props, ref) => {
  const { version } = useAlertDialogContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black/50" />}>
      {/* @ts-ignore */}
      <VersionModule.Overlay ref={ref} {...props} />
    </Suspense>
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>((props, ref) => {
  const { version } = useAlertDialogContext();
  const VersionModule = versionComponents[version];
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <Suspense fallback={<div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-900 p-6 rounded" />}>
        {/* @ts-ignore */}
        <VersionModule.Content ref={ref} {...props} />
      </Suspense>
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>((props, ref) => {
  const { version } = useAlertDialogContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Title ref={ref} {...props} />
    </Suspense>
  );
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>((props, ref) => {
  const { version } = useAlertDialogContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Description ref={ref} {...props} />
    </Suspense>
  );
});
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Action>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>((props, ref) => {
  const { version } = useAlertDialogContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<button>Confirm</button>}>
      {/* @ts-ignore */}
      <VersionModule.Action ref={ref} {...props} />
    </Suspense>
  );
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Cancel>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>((props, ref) => {
  const { version } = useAlertDialogContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<button>Cancel</button>}>
      {/* @ts-ignore */}
      <VersionModule.Cancel ref={ref} {...props} />
    </Suspense>
  );
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// --- Exports ---
const AlertDialogNamespace = Object.assign(AlertDialog, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});

export { AlertDialogNamespace as AlertDialog };
export default AlertDialogNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../lib/utils';
import { buttonVariants } from '../../components/button'; // Helper to style buttons if needed

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    overlay: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-cyan-500/30 bg-gray-950 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg clip-path-bevel",
    title: "text-lg font-semibold text-cyan-50",
    description: "text-sm text-cyan-200/70",
    action: "bg-cyan-600 text-white hover:bg-cyan-700",
    cancel: "bg-transparent border border-cyan-900 text-cyan-500 hover:bg-cyan-950",
  },
  'holo-frame': {
    overlay: "fixed inset-0 z-50 bg-cyan-900/20 backdrop-blur-md",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-cyan-400/40 bg-gray-900/90 p-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] duration-200 sm:rounded-lg",
    title: "text-lg font-bold text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
    description: "text-sm text-cyan-200/80",
    action: "bg-cyan-500/20 border border-cyan-400/50 text-cyan-100 hover:bg-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]",
    cancel: "text-cyan-400 hover:text-cyan-200",
  },
  'data-panel': {
     overlay: "fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-slate-700 bg-slate-900 p-6 shadow-xl duration-200 sm:rounded-none",
    title: "text-lg font-mono text-slate-100 uppercase tracking-widest",
    description: "text-sm font-mono text-slate-400",
    action: "bg-slate-100 text-slate-900 hover:bg-slate-200 font-mono rounded-none",
    cancel: "border-slate-700 text-slate-300 hover:bg-slate-800 font-mono rounded-none",
  },
  'circuit-board': {
    overlay: "fixed inset-0 z-50 bg-emerald-950/80 backdrop-blur-[2px]",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-emerald-500/30 bg-emerald-950/95 p-6 shadow-2xl duration-200 sm:rounded-xl",
    title: "text-lg font-bold text-emerald-400",
    description: "text-sm text-emerald-600/80",
    action: "bg-emerald-600 text-white hover:bg-emerald-700",
    cancel: "text-emerald-500 hover:bg-emerald-900/50",
  },
  'quantum-gate': {
     overlay: "fixed inset-0 z-50 bg-violet-950/60 backdrop-blur-xl",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-t border-b border-violet-500/50 bg-violet-950/40 p-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] duration-200",
    title: "text-lg font-light text-violet-100 tracking-[0.2em]",
    description: "text-sm text-violet-300/60",
    action: "bg-violet-500/80 text-white hover:bg-violet-600",
    cancel: "text-violet-300 hover:text-white",
  },
  'tactical-hud': {
    overlay: "fixed inset-0 z-50 bg-orange-950/40 backdrop-grayscale",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-orange-600/60 bg-black p-6 shadow-none duration-200 clip-path-notch",
    title: "text-lg font-black text-orange-500 uppercase",
    description: "text-sm text-orange-700 font-bold",
    action: "bg-orange-600 text-black hover:bg-orange-500 font-bold rounded-none",
    cancel: "border border-orange-900 text-orange-600 hover:bg-orange-900/20 rounded-none",
  },
  'energy-shield': {
     overlay: "fixed inset-0 z-50 bg-blue-900/40",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-blue-400 bg-blue-900/20 p-6 shadow-[inset_0_0_20px_rgba(59,130,246,0.5)] duration-200 backdrop-blur-md rounded-2xl",
    title: "text-lg font-medium text-blue-100",
    description: "text-sm text-blue-200/80",
    action: "bg-blue-500 text-white hover:bg-blue-400 rounded-full",
    cancel: "text-blue-300 hover:bg-blue-800/50 rounded-full",
  },
  'terminal-window': {
    overlay: "fixed inset-0 z-50 bg-black/90",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-green-500/50 bg-black p-4 shadow-none duration-200 font-mono",
    title: "text-lg text-green-500 before:content-['>_'] before:mr-2",
    description: "text-sm text-green-800",
    action: "bg-green-900/40 border border-green-500 text-green-500 hover:bg-green-900",
    cancel: "text-green-700 hover:text-green-500",
  },
  'matrix-grid': {
    overlay: "fixed inset-0 z-50 bg-black/80",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-lime-500/20 bg-black/90 p-6 shadow-[0_0_15px_rgba(132,204,22,0.1)] duration-200",
    title: "text-lg font-bold text-lime-400",
    description: "text-sm text-lime-700",
    action: "bg-lime-600 text-black hover:bg-lime-500",
    cancel: "text-lime-600 hover:text-lime-400",
  },
  'neon-outline': {
    overlay: "fixed inset-0 z-50 bg-fuchsia-950/70 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-fuchsia-500 bg-gray-950 p-6 shadow-[0_0_30px_rgba(217,70,239,0.4)] duration-200 rounded-xl",
    title: "text-lg font-bold text-fuchsia-200 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]",
    description: "text-sm text-fuchsia-400",
    action: "bg-fuchsia-600 text-white hover:bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.6)]",
    cancel: "text-fuchsia-400 hover:text-fuchsia-200",
  },
  // Default fallback
  'default': {
    overlay: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
    title: "text-lg font-semibold",
    description: "text-sm text-muted-foreground",
    action: "",
    cancel: "mt-2 sm:mt-0",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(styles.overlay, className)}
    {...props}
  />
));
Overlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export const Content = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AlertDialogPrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  />
));
Content.displayName = AlertDialogPrimitive.Content.displayName;

export const Title = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(styles.title, className)}
    {...props}
  />
));
Title.displayName = AlertDialogPrimitive.Title.displayName;

export const Description = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(styles.description, className)}
    {...props}
  />
));
Description.displayName = AlertDialogPrimitive.Description.displayName;

export const Action = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn("inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", styles.action, className)}
    {...props}
  />
));
Action.displayName = AlertDialogPrimitive.Action.displayName;

export const Cancel = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn("inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", styles.cancel, className)}
    {...props}
  />
));
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName;
`;

  fs.writeFileSync(path.join(targetDir, `alert-dialog-${version}.tsx`), versionContent);
});

console.log('AlertDialog regeneration complete.');
