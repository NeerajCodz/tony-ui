import React from 'react';
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
const styles = getStyles('terminal-window' in versionStyles ? 'terminal-window' : 'default');

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
