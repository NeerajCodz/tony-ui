import React from 'react';
import { Separator as PanelResizeHandle } from 'react-resizable-panels';
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
const styles = getStyles('matrix-grid' in versionStyles ? 'matrix-grid' : 'default');

export const Handle = ({ className, withHandle, ...props }: any) => (
  <PanelResizeHandle
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
  </PanelResizeHandle>
);


export default Handle;

