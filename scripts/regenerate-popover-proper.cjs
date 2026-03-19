const fs = require('fs');
const path = require('path');

const componentName = 'popover';
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
import { PopoverProps } from '@radix-ui/react-popover';
import { Skeleton } from '../skeleton';
import * as PopoverPrimitive from '@radix-ui/react-popover';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const Popover = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  return (
    <VersionContext.Provider value={version}>
      <PopoverPrimitive.Root {...props}>
        {children}
      </PopoverPrimitive.Root>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(\`./popover-\${version}\`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

Popover.Trigger = createSubComponent('Trigger', 'PopoverTrigger');
Popover.Content = createSubComponent('Content', 'PopoverContent');
// Popover typically has Close, Anchor etc, but Trigger/Content are main ones.
// We can add Anchor if needed, but for now stick to basics.

export default Popover;
`;

  fs.writeFileSync(path.join(componentDir, 'index.tsx'), content);
};

// 2. Generate Version Files
const generateVersion = (version) => {
  const content = `import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../../../lib/utils';

// Styles for the Content
const getContentStyles = (version: string) => {
  const base = "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
  const styles = {
    'angular-corner': "border-cyan-500/50 bg-gray-950/95 text-cyan-500 clip-path-polygon-[20px_0,_100%_0,_100%_calc(100%-20px),_calc(100%-20px)_100%,_0_100%,_0_20px]",
    'holo-frame': "border-cyan-500/30 bg-black/60 backdrop-blur-xl text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    'data-panel': "bg-gray-900 border-l-4 border-l-cyan-500 border-y border-r border-gray-800 text-gray-300 rounded-none p-0",
    'circuit-board': "bg-black border border-gray-800 text-sm font-mono tracking-wide text-cyan-600 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]",
    'quantum-gate': "bg-gray-900/90 rounded-2xl border-2 border-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
    'tactical-hud': "bg-black border-2 border-gray-800 text-cyan-500 font-mono tracking-tighter rounded-sm relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-2 after:bg-cyan-500",
    'energy-shield': "bg-cyan-950/90 border border-cyan-400/50 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.3)] rounded-lg backdrop-blur-sm",
    'terminal-window': "bg-black border border-green-500/50 text-green-500 font-mono text-sm p-2 shadow-[0_0_10px_rgba(34,197,94,0.2)]",
    'matrix-grid': "bg-black border border-green-900 text-green-400 font-mono shadow-[inset_0_0_10px_rgba(0,50,0,0.5)]",
    'neon-outline': "bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_10px_cyan] rounded-lg",
  };

  return cn(base, styles[version as keyof typeof styles]);
};

export const PopoverTrigger = ({ className, ...props }: any) => {
  return (
    <PopoverPrimitive.Trigger
      className={className}
      {...props}
    />
  );
};

export const PopoverContent = ({ className, align = 'center', sideOffset = 4, ...props }: any) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(getContentStyles('${version}'), className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};
`;

  fs.writeFileSync(path.join(componentDir, `popover-${version}.tsx`), content);
  console.log(`Generated popover-${version}.tsx`);
};

// Execute
generateIndex();
versions.forEach(v => generateVersion(v));
console.log('Popover regeneration complete.');
