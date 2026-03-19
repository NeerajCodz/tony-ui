const fs = require('fs');
const path = require('path');

const componentName = 'separator';
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
 * Separator Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../../lib/utils';

// --- Types ---
type SeparatorVersion = 
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

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  version?: SeparatorVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Lazy Loaders ---
const versionComponents: Record<string, any> = {
  'angular-corner': lazy(() => import('./separator-angular-corner')),
  'holo-frame': lazy(() => import('./separator-holo-frame')),
  'data-panel': lazy(() => import('./separator-data-panel')),
  'circuit-board': lazy(() => import('./separator-circuit-board')),
  'quantum-gate': lazy(() => import('./separator-quantum-gate')),
  'tactical-hud': lazy(() => import('./separator-tactical-hud')),
  'energy-shield': lazy(() => import('./separator-energy-shield')),
  'terminal-window': lazy(() => import('./separator-terminal-window')),
  'matrix-grid': lazy(() => import('./separator-matrix-grid')),
  'neon-outline': lazy(() => import('./separator-neon-outline')),
};

// --- Main Component ---
const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  ...props 
}, ref) => {
  const VersionComponent = versionComponents[version];
  
  return (
    <Suspense fallback={<div className="h-px w-full bg-gray-800" />}>
      {/* @ts-ignore */}
      <VersionComponent ref={ref} variant={variant} type={type} {...props} />
    </Suspense>
  );
});
Separator.displayName = 'Separator';

export { Separator };
export default Separator;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "bg-cyan-900/30 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4",
  },
  'holo-frame': {
    root: "bg-cyan-500/20 shadow-[0_0_5px_rgba(6,182,212,0.3)] data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px] my-4",
  },
  'data-panel': {
    root: "bg-gray-800 data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px] my-4",
  },
  'circuit-board': {
    root: "bg-cyan-900/40 data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px] border-dashed border-cyan-900/60 my-4",
  },
  // Default fallback
  'default': {
    root: "bg-border data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px] my-4",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

const SeparatorVersion = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }: any, ref: any) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      styles.root,
      className
    )}
    {...props}
  />
));
SeparatorVersion.displayName = SeparatorPrimitive.Root.displayName;

export default SeparatorVersion;
`;

  fs.writeFileSync(path.join(targetDir, `separator-${version}.tsx`), versionContent);
});

console.log('Separator regeneration complete.');
