const fs = require('fs');
const path = require('path');

const componentName = 'hover-card';
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
 * HoverCard Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '../../../lib/utils';

// --- Types ---
type HoverCardVersion = 
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

interface HoverCardProps extends React.ComponentProps<typeof HoverCardPrimitive.Root> {
  version?: HoverCardVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface HoverCardContextValue {
  version: HoverCardVersion;
  variant: HoverCardProps['variant'];
  type: HoverCardProps['type'];
}

const HoverCardContext = createContext<HoverCardContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useHoverCardContext = () => useContext(HoverCardContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./hover-card-angular-corner')),
  'holo-frame': lazy(() => import('./hover-card-holo-frame')),
  'data-panel': lazy(() => import('./hover-card-data-panel')),
  'circuit-board': lazy(() => import('./hover-card-circuit-board')),
  'quantum-gate': lazy(() => import('./hover-card-quantum-gate')),
  'tactical-hud': lazy(() => import('./hover-card-tactical-hud')),
  'energy-shield': lazy(() => import('./hover-card-energy-shield')),
  'terminal-window': lazy(() => import('./hover-card-terminal-window')),
  'matrix-grid': lazy(() => import('./hover-card-matrix-grid')),
  'neon-outline': lazy(() => import('./hover-card-neon-outline')),
};

// --- Main Component ---
const HoverCard = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}: HoverCardProps) => {
  return (
    <HoverCardContext.Provider value={{ version, variant, type }}>
      <HoverCardPrimitive.Root {...props}>
        {children}
      </HoverCardPrimitive.Root>
    </HoverCardContext.Provider>
  );
};
HoverCard.displayName = 'HoverCard';

// --- Subcomponents ---

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<React.ElementRef<typeof HoverCardPrimitive.Content>, React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>>((props, ref) => {
  const { version } = useHoverCardContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Content ref={ref} {...props} />
    </Suspense>
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// --- Exports ---
const HoverCardNamespace = Object.assign(HoverCard, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
});

export { HoverCardNamespace as HoverCard };
export default HoverCardNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
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
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

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
`;

  fs.writeFileSync(path.join(targetDir, `hover-card-${version}.tsx`), versionContent);
});

console.log('HoverCard regeneration complete.');
