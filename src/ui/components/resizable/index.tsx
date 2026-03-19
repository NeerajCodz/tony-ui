/**
 * Resizable Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from 'react-resizable-panels';
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

interface ResizablePanelGroupProps extends React.ComponentProps<typeof PanelGroup> {
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
  'angular-corner': lazy(() => import('./resizable-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./resizable-holo-frame.tsx')),
  'data-panel': lazy(() => import('./resizable-data-panel.tsx')),
  'circuit-board': lazy(() => import('./resizable-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./resizable-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./resizable-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./resizable-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./resizable-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./resizable-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('./resizable-neon-outline.tsx')),
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
      <PanelGroup
        className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
        {...props}
      >
        {children}
      </PanelGroup>
    </ResizableContext.Provider>
  );
};
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

// --- Subcomponents ---

const ResizablePanel = Panel;

const ResizableHandle = ({ className, withHandle, ...props }: React.ComponentProps<typeof PanelResizeHandle> & { withHandle?: boolean }) => {
  const { version } = useResizableContext();
  const VersionModule: any = versionComponents[version as keyof typeof versionComponents];
  
  if (!VersionModule) return null;

  return (
    <Suspense fallback={<div className="w-1 bg-gray-800" />}>
      {/* @ts-ignore */}
      <VersionModule ref={null} className={className} withHandle={withHandle} {...props} />
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

