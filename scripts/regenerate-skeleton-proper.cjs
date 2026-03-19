const fs = require('fs');
const path = require('path');

const componentName = 'skeleton';
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
 * Skeleton Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import { cn } from '../../../lib/utils';

// --- Types ---
type SkeletonVersion = 
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

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SkeletonVersion;
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./skeleton-angular-corner')),
  'holo-frame': lazy(() => import('./skeleton-holo-frame')),
  'data-panel': lazy(() => import('./skeleton-data-panel')),
  'circuit-board': lazy(() => import('./skeleton-circuit-board')),
  'quantum-gate': lazy(() => import('./skeleton-quantum-gate')),
  'tactical-hud': lazy(() => import('./skeleton-tactical-hud')),
  'energy-shield': lazy(() => import('./skeleton-energy-shield')),
  'terminal-window': lazy(() => import('./skeleton-terminal-window')),
  'matrix-grid': lazy(() => import('./skeleton-matrix-grid')),
  'neon-outline': lazy(() => import('./skeleton-neon-outline')),
};

// --- Main Component ---
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ 
  version = 'angular-corner', 
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} className={className} {...props} />
    </Suspense>
  );
});
Skeleton.displayName = "Skeleton";

export { Skeleton };
export default Skeleton;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "animate-pulse rounded-none bg-cyan-950/20 border border-cyan-900 clip-path-bevel-sm",
  },
  'holo-frame': {
    root: "animate-pulse rounded-sm bg-cyan-900/10 border border-cyan-500/20 shadow-[0_0_5px_rgba(6,182,212,0.1)]",
  },
  'data-panel': {
     root: "animate-pulse rounded-none bg-slate-800 border-l-2 border-slate-600",
  },
  'circuit-board': {
    root: "animate-pulse rounded-sm bg-emerald-950/30 border border-emerald-500/20 bg-[linear-gradient(45deg,transparent_25%,rgba(52,211,153,0.05)_50%,transparent_75%)] bg-[length:20px_20px]",
  },
  'quantum-gate': {
     root: "animate-pulse rounded-md bg-violet-950/20 border border-violet-500/20",
  },
  'tactical-hud': {
    root: "animate-pulse rounded-none bg-orange-950/10 border border-orange-900 clip-path-notch-sm",
  },
  'energy-shield': {
     root: "animate-pulse rounded-lg bg-blue-900/10 border border-blue-500/20",
  },
  'terminal-window': {
    root: "animate-pulse rounded-none bg-green-950/10 border border-green-900",
  },
  'matrix-grid': {
    root: "animate-pulse rounded-sm bg-lime-950/10 border border-lime-900",
  },
  'neon-outline': {
    root: "animate-pulse rounded-md bg-fuchsia-950/10 border border-fuchsia-500/30 shadow-[0_0_5px_rgba(217,70,239,0.1)]",
  },
  // Default fallback
  'default': {
    root: "animate-pulse rounded-md bg-muted",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const Skeleton = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <div
    className={cn(styles.root, className)}
    ref={ref}
    {...props}
  />
))
Skeleton.displayName = "Skeleton"

export default Skeleton;
`;

  fs.writeFileSync(path.join(targetDir, `skeleton-${version}.tsx`), versionContent);
});

console.log('Skeleton regeneration complete.');
