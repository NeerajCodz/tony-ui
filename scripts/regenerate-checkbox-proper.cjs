const fs = require('fs');
const path = require('path');

const componentName = 'checkbox';
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
 * Checkbox Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

// --- Types ---
type CheckboxVersion = 
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

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  version?: CheckboxVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./checkbox-angular-corner')),
  'holo-frame': lazy(() => import('./checkbox-holo-frame')),
  'data-panel': lazy(() => import('./checkbox-data-panel')),
  'circuit-board': lazy(() => import('./checkbox-circuit-board')),
  'quantum-gate': lazy(() => import('./checkbox-quantum-gate')),
  'tactical-hud': lazy(() => import('./checkbox-tactical-hud')),
  'energy-shield': lazy(() => import('./checkbox-energy-shield')),
  'terminal-window': lazy(() => import('./checkbox-terminal-window')),
  'matrix-grid': lazy(() => import('./checkbox-matrix-grid')),
  'neon-outline': lazy(() => import('./checkbox-neon-outline')),
};

// --- Main Component ---
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<div className="h-4 w-4 bg-gray-800 rounded animate-pulse" />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} className={className} {...props} />
    </Suspense>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
export default Checkbox;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "peer h-4 w-4 shrink-0 border border-cyan-500/50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-900 data-[state=checked]:text-cyan-400 clip-path-bevel-sm rounded-none transition-all",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'holo-frame': {
    root: "peer h-4 w-4 shrink-0 border border-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-500/20 data-[state=checked]:text-cyan-100 backdrop-blur-sm rounded-sm transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    indicator: "flex items-center justify-center text-current drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
    icon: "h-3 w-3",
  },
  'data-panel': {
     root: "peer h-4 w-4 shrink-0 border-2 border-slate-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-700 data-[state=checked]:text-slate-200 rounded-none transition-none",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'circuit-board': {
    root: "peer h-4 w-4 shrink-0 border border-emerald-500/50 bg-emerald-950/50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-emerald-900 data-[state=checked]:text-emerald-400 rounded transition-all",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'quantum-gate': {
     root: "peer h-4 w-4 shrink-0 border border-violet-500/50 bg-violet-950/30 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-600/50 data-[state=checked]:text-violet-200 rounded-full transition-all duration-300",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'tactical-hud': {
    root: "peer h-4 w-4 shrink-0 border-2 border-orange-700/80 bg-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-orange-900/50 data-[state=checked]:text-orange-500 rounded-none clip-path-notch-sm transition-none",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'energy-shield': {
     root: "peer h-4 w-4 shrink-0 border border-blue-400/60 bg-blue-900/20 shadow-[inset_0_0_5px_rgba(59,130,246,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500/30 data-[state=checked]:text-blue-200 rounded-md transition-all hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.5)]",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'terminal-window': {
    root: "peer h-4 w-4 shrink-0 border border-green-600/50 bg-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-900/30 data-[state=checked]:text-green-500 rounded-none transition-none",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'matrix-grid': {
    root: "peer h-4 w-4 shrink-0 border border-lime-500/40 bg-black/80 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-lime-900/40 data-[state=checked]:text-lime-400 rounded-sm transition-all",
    indicator: "flex items-center justify-center text-current",
    icon: "h-3 w-3",
  },
  'neon-outline': {
    root: "peer h-4 w-4 shrink-0 border-2 border-fuchsia-500/70 bg-transparent shadow-[0_0_5px_rgba(217,70,239,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-fuchsia-500/20 data-[state=checked]:text-fuchsia-300 rounded-md transition-all hover:shadow-[0_0_10px_rgba(217,70,239,0.5)]",
    indicator: "flex items-center justify-center text-current drop-shadow-[0_0_2px_rgba(217,70,239,0.8)]",
    icon: "h-3 w-3",
  },
  // Default fallback
  'default': {
    root: "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    indicator: "flex items-center justify-center text-current",
    icon: "h-4 w-4",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const Checkbox = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn(styles.indicator)}>
      <Check className={styles.icon} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
`;

  fs.writeFileSync(path.join(targetDir, `checkbox-${version}.tsx`), versionContent);
});

console.log('Checkbox regeneration complete.');
