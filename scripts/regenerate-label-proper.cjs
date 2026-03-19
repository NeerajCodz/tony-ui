const fs = require('fs');
const path = require('path');

const componentName = 'label';
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
 * Label Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// --- Types ---
type LabelVersion = 
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

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  version?: LabelVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./label-angular-corner')),
  'holo-frame': lazy(() => import('./label-holo-frame')),
  'data-panel': lazy(() => import('./label-data-panel')),
  'circuit-board': lazy(() => import('./label-circuit-board')),
  'quantum-gate': lazy(() => import('./label-quantum-gate')),
  'tactical-hud': lazy(() => import('./label-tactical-hud')),
  'energy-shield': lazy(() => import('./label-energy-shield')),
  'terminal-window': lazy(() => import('./label-terminal-window')),
  'matrix-grid': lazy(() => import('./label-matrix-grid')),
  'neon-outline': lazy(() => import('./label-neon-outline')),
};

// --- Main Component ---
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<LabelPrimitive.Root className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} className={className} {...props} />
    </Suspense>
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
export default Label;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-cyan-500 uppercase tracking-wider font-mono",
  },
  'holo-frame': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-cyan-300 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
  },
  'data-panel': {
     root: "text-xs font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-400 font-mono uppercase border-l-2 border-slate-500 pl-2",
  },
  'circuit-board': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-emerald-400 font-mono tracking-tight",
  },
  'quantum-gate': {
     root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-violet-300 tracking-wide",
  },
  'tactical-hud': {
    root: "text-xs font-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-orange-600 uppercase tracking-[0.2em]",
  },
  'energy-shield': {
     root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-300 font-mono pl-1 border-l-4 border-blue-500/50",
  },
  'terminal-window': {
    root: "text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-500 font-mono before:content-['>_'] before:mr-1",
  },
  'matrix-grid': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lime-400 font-mono",
  },
  'neon-outline': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-fuchsia-400 drop-shadow-[0_0_2px_rgba(232,121,249,0.8)] uppercase",
  },
  // Default fallback
  'default': {
    root: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const labelVariants = cva(styles.root);

const Label = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
`;

  fs.writeFileSync(path.join(targetDir, `label-${version}.tsx`), versionContent);
});

console.log('Label regeneration complete.');
