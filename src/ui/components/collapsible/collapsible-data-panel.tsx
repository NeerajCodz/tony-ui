import React from 'react';
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
const styles = getStyles('data-panel' in versionStyles ? 'data-panel' : 'default');

export const Content = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  />
));
Content.displayName = CollapsiblePrimitive.Content.displayName;
