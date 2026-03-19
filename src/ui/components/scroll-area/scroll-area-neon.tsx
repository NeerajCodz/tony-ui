import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    scrollbar: "flex touch-none select-none transition-colors bg-cyan-900/10 p-0.5 ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
    thumb: "relative flex-1 rounded-[1px] bg-cyan-500/50 hover:bg-cyan-500",
  },
  'holo-frame': {
    scrollbar: "flex touch-none select-none transition-colors bg-cyan-950/20 p-px ease-out data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2 shadow-[0_0_5px_rgba(6,182,212,0.1)]",
    thumb: "relative flex-1 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.6)] hover:bg-cyan-400",
  },
  'data-panel': {
    scrollbar: "flex touch-none select-none transition-colors bg-gray-900 p-0 ease-out data-[orientation=vertical]:w-3 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-3 border-l border-gray-800",
    thumb: "relative flex-1 bg-gray-600 hover:bg-cyan-600 rounded-none",
  },
  'circuit-board': {
    scrollbar: "flex touch-none select-none transition-colors bg-cyan-950/30 p-0.5 ease-out data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2 border-l border-cyan-900/30",
    thumb: "relative flex-1 rounded-[1px] bg-cyan-700/50 hover:bg-cyan-500",
  },
  // Default fallback
  'default': {
    scrollbar: "flex touch-none select-none transition-colors bg-transparent p-px ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
    thumb: "relative flex-1 rounded-full bg-border",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('neon' in versionStyles ? 'neon' : 'default');

export const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }: any, ref: any) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      styles.scrollbar,
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={styles.thumb} />
  </ScrollAreaPrimitive.Scrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
