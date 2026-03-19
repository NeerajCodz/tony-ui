const fs = require('fs');
const path = require('path');

const componentName = 'collapsible';
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
 * Collapsible Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cn } from '../../../lib/utils';
import { ChevronsUpDown } from 'lucide-react';

// --- Types ---
type CollapsibleVersion = 
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

interface CollapsibleProps extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
  version?: CollapsibleVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface CollapsibleContextValue {
  version: CollapsibleVersion;
  variant: CollapsibleProps['variant'];
  type: CollapsibleProps['type'];
}

const CollapsibleContext = createContext<CollapsibleContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useCollapsibleContext = () => useContext(CollapsibleContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./collapsible-angular-corner')),
  'holo-frame': lazy(() => import('./collapsible-holo-frame')),
  'data-panel': lazy(() => import('./collapsible-data-panel')),
  'circuit-board': lazy(() => import('./collapsible-circuit-board')),
  'quantum-gate': lazy(() => import('./collapsible-quantum-gate')),
  'tactical-hud': lazy(() => import('./collapsible-tactical-hud')),
  'energy-shield': lazy(() => import('./collapsible-energy-shield')),
  'terminal-window': lazy(() => import('./collapsible-terminal-window')),
  'matrix-grid': lazy(() => import('./collapsible-matrix-grid')),
  'neon-outline': lazy(() => import('./collapsible-neon-outline')),
};

// --- Main Component ---
const Collapsible = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}: CollapsibleProps) => {
  return (
    <CollapsibleContext.Provider value={{ version, variant, type }}>
      <CollapsiblePrimitive.Root {...props}>
        {children}
      </CollapsiblePrimitive.Root>
    </CollapsibleContext.Provider>
  );
};
Collapsible.displayName = 'Collapsible';

// --- Subcomponents ---

const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Content>, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>>((props, ref) => {
  const { version } = useCollapsibleContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Content ref={ref} {...props} />
    </Suspense>
  );
});
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

// --- Exports ---
const CollapsibleNamespace = Object.assign(Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export { CollapsibleNamespace as Collapsible };
export default CollapsibleNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    content: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down text-sm text-cyan-50/70 border-l border-cyan-500/20 pl-4 ml-2 my-2",
  },
  'holo-frame': {
    content: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down text-sm text-cyan-200/80 bg-cyan-900/10 p-2 rounded shadow-inner shadow-cyan-500/10 mt-2",
  },
  'data-panel': {
    content: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down text-sm text-gray-400 font-mono border border-gray-800 p-2 bg-gray-950 mt-1",
  },
  'circuit-board': {
    content: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down text-sm text-cyan-400 font-mono border-l-2 border-dotted border-cyan-800 pl-4 ml-1 my-2",
  },
  // Default fallback
  'default': {
    content: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down text-sm",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

export const Content = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  />
));
Content.displayName = CollapsiblePrimitive.Content.displayName;
`;

  fs.writeFileSync(path.join(targetDir, `collapsible-${version}.tsx`), versionContent);
});

console.log('Collapsible regeneration complete.');
