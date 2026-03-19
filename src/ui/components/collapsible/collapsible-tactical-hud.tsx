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
const styles = getStyles('tactical-hud' in versionStyles ? 'tactical-hud' : 'default');


const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};

export const Content = React.forwardRef(({type,  className, ...props }: any, ref: any) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(styles.content, className, getTypeStyles(type))}
    {...props}
  />
));
Content.displayName = CollapsiblePrimitive.Content.displayName;
