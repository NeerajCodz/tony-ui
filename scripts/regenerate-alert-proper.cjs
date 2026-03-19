const fs = require('fs');
const path = require('path');

const componentName = 'alert';
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
 * Alert Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// --- Types ---
type AlertVersion = 
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

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: AlertVersion;
  variant?: 'default' | 'destructive';
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./alert-angular-corner')),
  'holo-frame': lazy(() => import('./alert-holo-frame')),
  'data-panel': lazy(() => import('./alert-data-panel')),
  'circuit-board': lazy(() => import('./alert-circuit-board')),
  'quantum-gate': lazy(() => import('./alert-quantum-gate')),
  'tactical-hud': lazy(() => import('./alert-tactical-hud')),
  'energy-shield': lazy(() => import('./alert-energy-shield')),
  'terminal-window': lazy(() => import('./alert-terminal-window')),
  'matrix-grid': lazy(() => import('./alert-matrix-grid')),
  'neon-outline': lazy(() => import('./alert-neon-outline')),
};

// --- Main Component ---
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ 
  version = 'angular-corner', 
  className,
  variant,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<div role="alert" className={cn("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", className)} {...props} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} variant={variant} className={className} {...props} />
    </Suspense>
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription };
export default Alert;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import { cva } from "class-variance-authority"
import { cn } from '../../../lib/utils';
import { AlertTitle, AlertDescription } from './index';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "relative w-full border border-cyan-700 bg-cyan-950/20 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-cyan-500 clip-path-bevel-sm rounded-none text-cyan-50",
    variants: {
      default: "bg-cyan-950/20 text-cyan-50",
      destructive: "border-red-500/50 bg-red-950/20 text-red-50 [&>svg]:text-red-500",
    }
  },
  'holo-frame': {
    root: "relative w-full border border-cyan-400/50 bg-cyan-900/10 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-cyan-300 backdrop-blur-sm rounded-lg shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]",
    variants: {
      default: "text-cyan-100",
      destructive: "border-red-400/50 bg-red-900/10 text-red-100 [&>svg]:text-red-400 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]",
    }
  },
  'data-panel': {
     root: "relative w-full border-l-4 border-slate-500 bg-slate-800 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-400 font-mono rounded-r-md",
     variants: {
       default: "text-slate-200",
       destructive: "border-red-600 bg-red-950/30 text-red-200 [&>svg]:text-red-500",
     }
  },
  'circuit-board': {
    root: "relative w-full border border-emerald-600/50 bg-emerald-950/30 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-emerald-400 rounded-sm shadow-[0_0_5px_rgba(52,211,153,0.2)]",
    variants: {
      default: "text-emerald-300",
      destructive: "border-red-600/50 bg-red-950/30 text-red-300 [&>svg]:text-red-400",
    }
  },
  'quantum-gate': {
     root: "relative w-full border border-violet-500/50 bg-violet-950/20 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-violet-400 rounded-xl",
     variants: {
       default: "text-violet-200",
       destructive: "border-red-500/50 bg-red-950/20 text-red-200 [&>svg]:text-red-500",
     }
  },
  'tactical-hud': {
    root: "relative w-full border-2 border-orange-700/60 bg-black p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-orange-500 clip-path-notch-md rounded-none uppercase tracking-wide",
    variants: {
      default: "text-orange-500",
      destructive: "border-red-700/60 text-red-500 [&>svg]:text-red-500",
    }
  },
  'energy-shield': {
     root: "relative w-full border border-blue-400/60 bg-blue-900/20 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-blue-400 rounded-2xl shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]",
     variants: {
       default: "text-blue-200",
       destructive: "border-red-400/60 bg-red-900/20 text-red-200 [&>svg]:text-red-400 shadow-[inset_0_0_15px_rgba(239,68,68,0.2)]",
     }
  },
  'terminal-window': {
    root: "relative w-full border border-green-600/50 bg-black p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-green-500 font-mono rounded-none",
    variants: {
      default: "text-green-500",
      destructive: "border-red-600/50 text-red-500 [&>svg]:text-red-500",
    }
  },
  'matrix-grid': {
    root: "relative w-full border border-lime-500/40 bg-black/90 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-lime-400 rounded-sm",
    variants: {
      default: "text-lime-400",
      destructive: "border-red-500/40 text-red-400 [&>svg]:text-red-400",
    }
  },
  'neon-outline': {
    root: "relative w-full border-2 border-fuchsia-500/60 bg-transparent p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-fuchsia-400 rounded-lg shadow-[0_0_10px_rgba(217,70,239,0.2)]",
    variants: {
      default: "text-fuchsia-300",
      destructive: "border-red-500/60 text-red-300 [&>svg]:text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]",
    }
  },
  // Default fallback
  'default': {
    root: "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    variants: {
      default: "bg-background text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    }
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const alertVariants = cva(
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

const Alert = React.forwardRef(({ className, variant, ...props }: any, ref: any) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

export default Alert;
`;

  fs.writeFileSync(path.join(targetDir, `alert-${version}.tsx`), versionContent);
});

console.log('Alert regeneration complete.');
