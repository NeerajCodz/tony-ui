import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    content: "z-50 w-64 rounded-md border border-cyan-500/30 bg-gray-950 p-4 text-cyan-50 shadow-md outline-none clip-path-bevel-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  },
  'holo-frame': {
    content: "z-50 w-64 rounded-md border border-cyan-400/40 bg-gray-900/90 p-4 text-cyan-50 shadow-[0_0_15px_rgba(6,182,212,0.15)] outline-none backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  },
  'data-panel': {
    content: "z-50 w-64 border-l-2 border-cyan-600 bg-gray-950 p-4 text-gray-100 shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out",
  },
  'circuit-board': {
    content: "z-50 w-64 border border-cyan-900/50 bg-gray-950 bg-[url('/patterns/circuit.svg')] p-4 text-cyan-300 shadow-lg outline-none",
  },
  // Default fallback
  'default': {
    content: "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('holo-frame' in versionStyles ? 'holo-frame' : 'default');

export const Content = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }: any, ref: any) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(styles.content, className)}
    {...props}
  />
));
Content.displayName = HoverCardPrimitive.Content.displayName;
