const fs = require('fs');
const path = require('path');

const componentName = 'spinner';
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
 * Spinner Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import { Loader2 } from "lucide-react"
import { cn } from '../../../lib/utils';

// --- Types ---
type SpinnerVersion = 
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

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SpinnerVersion;
  size?: 'sm' | 'md' | 'lg';
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./spinner-angular-corner')),
  'holo-frame': lazy(() => import('./spinner-holo-frame')),
  'data-panel': lazy(() => import('./spinner-data-panel')),
  'circuit-board': lazy(() => import('./spinner-circuit-board')),
  'quantum-gate': lazy(() => import('./spinner-quantum-gate')),
  'tactical-hud': lazy(() => import('./spinner-tactical-hud')),
  'energy-shield': lazy(() => import('./spinner-energy-shield')),
  'terminal-window': lazy(() => import('./spinner-terminal-window')),
  'matrix-grid': lazy(() => import('./spinner-matrix-grid')),
  'neon-outline': lazy(() => import('./spinner-neon-outline')),
};

// --- Main Component ---
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(({ 
  version = 'angular-corner', 
  size = 'md',
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<Loader2 className={cn("animate-spin text-primary", className)} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} size={size} className={className} {...props} />
    </Suspense>
  );
});
Spinner.displayName = "Spinner";

export { Spinner };
export default Spinner;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import { Loader2, Disc, Aperture, Cpu, Hexagon, Radar, Shield, TerminalSquare, Grid, Zap } from "lucide-react"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    icon: Loader2,
    root: "text-cyan-500 animate-spin",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'holo-frame': {
    icon: Disc,
    root: "text-cyan-400 animate-spin shadow-[0_0_15px_rgba(6,182,212,0.6)] rounded-full",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'data-panel': {
     icon: Aperture,
     root: "text-slate-400 animate-spin duration-700",
     sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'circuit-board': {
    icon: Cpu,
    root: "text-emerald-400 animate-pulse duration-1000",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'quantum-gate': {
     icon: Hexagon,
     root: "text-violet-400 animate-spin duration-3000 ease-linear",
     sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'tactical-hud': {
    icon: Radar,
    root: "text-orange-500 animate-spin duration-[3s]",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'energy-shield': {
     icon: Shield,
     root: "text-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-full",
     sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'terminal-window': {
    icon: TerminalSquare,
    root: "text-green-500 animate-bounce duration-500",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'matrix-grid': {
    icon: Grid,
    root: "text-lime-400 animate-spin duration-[5s]",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  'neon-outline': {
    icon: Zap,
    root: "text-fuchsia-400 animate-pulse duration-75 drop-shadow-[0_0_5px_rgba(232,121,249,0.8)]",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  },
  // Default fallback
  'default': {
    icon: Loader2,
    root: "animate-spin text-primary",
    sizes: { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" }
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const Spinner = React.forwardRef(({ className, size = 'md', ...props }: any, ref: any) => {
  const Icon = styles.icon;
  return (
    <div ref={ref} className={cn("inline-block", className)} {...props}>
      <Icon className={cn(styles.root, styles.sizes[size])} />
    </div>
  )
})
Spinner.displayName = "Spinner"

export default Spinner;
`;

  fs.writeFileSync(path.join(targetDir, `spinner-${version}.tsx`), versionContent);
});

console.log('Spinner regeneration complete.');
