const fs = require('fs');
const path = require('path');

const componentName = 'switch';
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
 * Switch Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../../lib/utils';

// --- Types ---
type SwitchVersion = 
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

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  version?: SwitchVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./switch-angular-corner')),
  'holo-frame': lazy(() => import('./switch-holo-frame')),
  'data-panel': lazy(() => import('./switch-data-panel')),
  'circuit-board': lazy(() => import('./switch-circuit-board')),
  'quantum-gate': lazy(() => import('./switch-quantum-gate')),
  'tactical-hud': lazy(() => import('./switch-tactical-hud')),
  'energy-shield': lazy(() => import('./switch-energy-shield')),
  'terminal-window': lazy(() => import('./switch-terminal-window')),
  'matrix-grid': lazy(() => import('./switch-matrix-grid')),
  'neon-outline': lazy(() => import('./switch-neon-outline')),
};

// --- Main Component ---
const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<div className="h-6 w-11 bg-gray-800 rounded-full animate-pulse" />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} className={className} {...props} />
    </Suspense>
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
export default Switch;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-900 data-[state=unchecked]:bg-gray-800 clip-path-bevel-sm rounded-none",
    thumb: "pointer-events-none block h-5 w-5 bg-cyan-500 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 rounded-none clip-path-bevel-sm",
  },
  'holo-frame': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cyan-500/20 data-[state=unchecked]:bg-gray-900/50 backdrop-blur-sm rounded-full",
    thumb: "pointer-events-none block h-5 w-5 bg-cyan-100 shadow-[0_0_5px_rgba(6,182,212,0.8)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 rounded-full",
  },
  'data-panel': {
     root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border-2 border-slate-600 transition-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-slate-900 rounded-none",
    thumb: "pointer-events-none block h-4 w-4 bg-slate-300 ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1 rounded-none",
  },
  'circuit-board': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-emerald-500/50 bg-emerald-950/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-emerald-900 data-[state=unchecked]:bg-black rounded-sm",
    thumb: "pointer-events-none block h-4 w-4 bg-emerald-400 ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1 rounded-sm shadow-[0_0_5px_rgba(52,211,153,0.5)]",
  },
  'quantum-gate': {
     root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-violet-500/50 bg-violet-950/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-600/50 data-[state=unchecked]:bg-black rounded-full",
    thumb: "pointer-events-none block h-5 w-5 bg-violet-200 ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]",
  },
  'tactical-hud': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border-2 border-orange-700/80 bg-black transition-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-orange-900/50 data-[state=unchecked]:bg-black clip-path-notch-sm rounded-none",
    thumb: "pointer-events-none block h-4 w-4 bg-orange-500 ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1 rounded-none",
  },
  'energy-shield': {
     root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-blue-400/60 bg-blue-900/20 shadow-[inset_0_0_5px_rgba(59,130,246,0.3)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500/30 data-[state=unchecked]:bg-blue-950/50 rounded-full",
    thumb: "pointer-events-none block h-5 w-5 bg-blue-100 ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]",
  },
  'terminal-window': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-green-600/50 bg-black transition-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-900/30 data-[state=unchecked]:bg-black rounded-none",
    thumb: "pointer-events-none block h-4 w-4 bg-green-500 ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1 rounded-none",
  },
  'matrix-grid': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-lime-500/40 bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-lime-900/40 data-[state=unchecked]:bg-black rounded-sm",
    thumb: "pointer-events-none block h-4 w-4 bg-lime-400 ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1 rounded-sm shadow-[0_0_5px_rgba(163,230,53,0.5)]",
  },
  'neon-outline': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border-2 border-fuchsia-500/70 bg-transparent shadow-[0_0_5px_rgba(217,70,239,0.3)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-fuchsia-500/20 data-[state=unchecked]:bg-transparent rounded-full",
    thumb: "pointer-events-none block h-4 w-4 bg-fuchsia-300 ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1 rounded-full drop-shadow-[0_0_5px_rgba(217,70,239,0.8)]",
  },
  // Default fallback
  'default': {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const Switch = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <SwitchPrimitive.Root
    className={cn(styles.root, className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb className={cn(styles.thumb)} />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export default Switch;
`;

  fs.writeFileSync(path.join(targetDir, `switch-${version}.tsx`), versionContent);
});

console.log('Switch regeneration complete.');
