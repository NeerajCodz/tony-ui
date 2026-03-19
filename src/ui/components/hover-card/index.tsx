/**
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
  | 'neon';

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
  'angular-corner': lazy(() => import('./hover-card-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./hover-card-holo-frame.tsx')),
  'data-panel': lazy(() => import('./hover-card-data-panel.tsx')),
  'circuit-board': lazy(() => import('./hover-card-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./hover-card-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./hover-card-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./hover-card-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./hover-card-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./hover-card-matrix-grid.tsx')),
  'neon': lazy(() => import('./hover-card-neon.tsx')),
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


