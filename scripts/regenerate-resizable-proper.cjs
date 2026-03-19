const fs = require('fs');
const path = require('path');

const componentName = 'resizable';
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
 * Resizable Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from '../../../lib/utils';
import { GripVertical } from 'lucide-react';

// --- Types ---
type ResizableVersion = 
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

interface ResizablePanelGroupProps extends React.ComponentProps<typeof ResizablePrimitive.PanelGroup> {
  version?: ResizableVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface ResizableContextValue {
  version: ResizableVersion;
  variant: ResizablePanelGroupProps['variant'];
  type: ResizablePanelGroupProps['type'];
}

const ResizableContext = createContext<ResizableContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useResizableContext = () => useContext(ResizableContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./resizable-angular-corner')),
  'holo-frame': lazy(() => import('./resizable-holo-frame')),
  'data-panel': lazy(() => import('./resizable-data-panel')),
  'circuit-board': lazy(() => import('./resizable-circuit-board')),
  'quantum-gate': lazy(() => import('./resizable-quantum-gate')),
  'tactical-hud': lazy(() => import('./resizable-tactical-hud')),
  'energy-shield': lazy(() => import('./resizable-energy-shield')),
  'terminal-window': lazy(() => import('./resizable-terminal-window')),
  'matrix-grid': lazy(() => import('./resizable-matrix-grid')),
  'neon-outline': lazy(() => import('./resizable-neon-outline')),
};

// --- Main Component ---
const ResizablePanelGroup = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className, 
  children, 
  ...props 
}: ResizablePanelGroupProps) => {
  return (
    <ResizableContext.Provider value={{ version, variant, type }}>
      <ResizablePrimitive.PanelGroup
        className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
        {...props}
      >
        {children}
      </ResizablePrimitive.PanelGroup>
    </ResizableContext.Provider>
  );
};
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

// --- Subcomponents ---

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({ className, withHandle, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }) => {
  const { version } = useResizableContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="w-1 bg-gray-800" />}>
      {/* @ts-ignore */}
      <VersionModule.Handle className={className} withHandle={withHandle} {...props} />
    </Suspense>
  );
};
ResizableHandle.displayName = 'ResizableHandle';

// --- Exports ---
const ResizableNamespace = Object.assign(ResizablePanelGroup, {
  PanelGroup: ResizablePanelGroup,
  Panel: ResizablePanel,
  Handle: ResizableHandle,
});

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
export default ResizableNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from '../../../lib/utils';
import { GripVertical } from 'lucide-react';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    handle: "bg-cyan-900/30 hover:bg-cyan-500/50 transition-colors w-px data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
    icon: "text-cyan-500",
  },
  'holo-frame': {
    handle: "bg-cyan-400/20 hover:bg-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all w-1 data-[panel-group-direction=vertical]:h-1 data-[panel-group-direction=vertical]:w-full",
    icon: "text-cyan-200 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
  },
  'data-panel': {
    handle: "bg-gray-800 hover:bg-cyan-600 transition-colors w-2 border-x border-gray-900 data-[panel-group-direction=vertical]:h-2 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:border-y data-[panel-group-direction=vertical]:border-x-0",
    icon: "text-gray-400",
  },
  'circuit-board': {
    handle: "bg-cyan-900/40 hover:bg-cyan-500/60 w-1.5 data-[panel-group-direction=vertical]:h-1.5 data-[panel-group-direction=vertical]:w-full border-x border-cyan-900/20",
    icon: "text-cyan-300",
  },
  // Default fallback
  'default': {
    handle: "bg-border hover:bg-primary/50 transition-colors w-px data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
    icon: "text-muted-foreground",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

export const Handle = ({ className, withHandle, ...props }: any) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      styles.handle,
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className={cn("z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-background", styles.icon && "bg-transparent border-none")}>
        <GripVertical className={cn("h-2.5 w-2.5", styles.icon)} />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);
`;

  fs.writeFileSync(path.join(targetDir, `resizable-${version}.tsx`), versionContent);
});

console.log('Resizable regeneration complete.');
