const fs = require('fs');
const path = require('path');

const componentName = 'tooltip';
const componentDir = path.join(__dirname, `../src/ui/components/${componentName}`);

// Ensure directories exist
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

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

// 1. Generate Index File (The Dispatcher)
const generateIndex = () => {
  const content = `import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { TooltipProps } from '@radix-ui/react-tooltip'; // or custom types
import { Skeleton } from '../skeleton';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  // We don't necessarily load a Root component implementation because Radix Root is just state.
  // BUT we need to pass the version context to children (Trigger, Content).
  // AND we might want to wrap the whole thing in the VersionContext provider.
  
  return (
    <VersionContext.Provider value={version}>
      <TooltipPrimitive.Root {...props}>
        {children}
      </TooltipPrimitive.Root>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(\`./tooltip-\${version}\`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

Tooltip.Trigger = createSubComponent('Trigger', 'TooltipTrigger');
Tooltip.Content = createSubComponent('Content', 'TooltipContent');
// Provider is usually global, but we can re-export it.
Tooltip.Provider = TooltipProvider;

export default Tooltip;
`;

  fs.writeFileSync(path.join(componentDir, 'index.tsx'), content);
};

// 2. Generate Version Files
const generateVersion = (version) => {
  const content = `import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../../lib/utils';

// Styles for the Content
const getContentStyles = (version: string) => {
  const base = "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
  const styles = {
    'angular-corner': "border-cyan-500/50 bg-black/90 text-cyan-500 clip-path-polygon-[10px_0,_100%_0,_100%_calc(100%-10px),_calc(100%-10px)_100%,_0_100%,_0_10px]",
    'holo-frame': "border-cyan-500/30 bg-black/60 backdrop-blur-md text-cyan-100 shadow-[0_0_15px_rgba(6,182,212,0.2)]",
    'data-panel': "bg-gray-900 border-l-2 border-l-cyan-500 border-y border-r border-gray-800 text-gray-300 rounded-none",
    'circuit-board': "bg-black border border-gray-800 text-xs font-mono tracking-widest uppercase text-cyan-600",
    'quantum-gate': "bg-gray-900/90 rounded-full px-4 border border-cyan-500/20 text-cyan-300",
    'tactical-hud': "bg-black border border-cyan-500 text-cyan-500 font-mono tracking-tighter rounded-sm",
    'energy-shield': "bg-cyan-950/80 border border-cyan-400/30 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.1)] rounded-lg",
    'terminal-window': "bg-black border border-green-500/50 text-green-500 font-mono text-xs",
    'matrix-grid': "bg-black border border-green-900 text-green-400 font-mono",
    'neon-outline': "bg-black border border-cyan-400 text-cyan-400 shadow-[0_0_5px_cyan] rounded-md",
  };

  return cn(base, styles[version as keyof typeof styles]);
};

// Styles for the Trigger (optional styling wrapper)
const getTriggerStyles = (version: string) => {
  // Usually Trigger just wraps an element, but maybe we want to add some indicator?
  // For now, let's keep it simple and just pass through, or maybe add a subtle cursor style.
  return "cursor-help"; 
};

export const TooltipTrigger = ({ className, ...props }: any) => {
  return (
    <TooltipPrimitive.Trigger
      className={cn(getTriggerStyles('${version}'), className)}
      {...props}
    />
  );
};

export const TooltipContent = ({ className, sideOffset = 4, ...props }: any) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(getContentStyles('${version}'), className)}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
};
`;

  fs.writeFileSync(path.join(componentDir, `tooltip-${version}.tsx`), content);
  console.log(`Generated tooltip-${version}.tsx`);
};

// Execute
generateIndex();
versions.forEach(v => generateVersion(v));
console.log('Tooltip regeneration complete.');
