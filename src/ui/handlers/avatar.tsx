/**
 * Avatar Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { Version, Variant } from '../types/common';

// Types
export type AvatarVersion = Version;
export type AvatarVariant = Variant;
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  version?: AvatarVersion;
  variant?: AvatarVariant;
  size?: AvatarSize;
}

// Loading helper
const loadVersionModule = async (version: AvatarVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/avatar/avatar-angular-corner.tsx');
    case 'holo-frame': return import('../components/avatar/avatar-holo-frame.tsx');
    case 'data-panel': return import('../components/avatar/avatar-data-panel.tsx');
    case 'circuit-board': return import('../components/avatar/avatar-circuit-board.tsx');
    case 'quantum-gate': return import('../components/avatar/avatar-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/avatar/avatar-tactical-hud.tsx');
    case 'energy-shield': return import('../components/avatar/avatar-energy-shield.tsx');
    case 'terminal-window': return import('../components/avatar/avatar-terminal-window.tsx');
    case 'matrix-grid': return import('../components/avatar/avatar-matrix-grid.tsx');
    case 'neon-outline': return import('../components/avatar/avatar-neon-outline.tsx');
    default: return import('../components/avatar/avatar-angular-corner.tsx');
  }
};

// Context
interface AvatarContextValue {
  version: AvatarVersion;
  variant: AvatarVariant;
  size: AvatarSize;
  versionModule: any;
}

const AvatarContext = createContext<AvatarContextValue>({
  version: 'angular-corner',
  variant: 'default',
  size: 'md',
  versionModule: null,
});

const useAvatarContext = () => useContext(AvatarContext);

// Loading skeleton
const LoadingSkeleton: React.FC<{ size?: AvatarSize }> = ({ size = 'md' }) => {
  const sizeMap = { xs: 'w-6 h-6', sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-12 h-12', xl: 'w-16 h-16', '2xl': 'w-20 h-20' };
  return <div className={`animate-pulse bg-gray-800/20 rounded-full ${sizeMap[size]}`} />;
};

// Main Component
const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({
  version = 'angular-corner',
  variant = 'default',
  size = 'md',
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  if (!versionModule) {
    return <LoadingSkeleton size={size} />;
  }

  const Component = versionModule.AvatarRoot || versionModule.Avatar || versionModule.default;

  return (
    <AvatarContext.Provider value={{ version, variant, size, versionModule }}>
      <Component ref={ref} variant={variant} size={size} {...props}>
        {children}
      </Component>
    </AvatarContext.Provider>
  );
});
AvatarRoot.displayName = 'Avatar';

// Image subcomponent
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { versionModule, variant, size } = useAvatarContext();

  if (versionModule?.AvatarImage) {
    const Component = versionModule.AvatarImage;
    return <Component ref={ref} variant={variant} size={size} {...props} />;
  }

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className="aspect-square h-full w-full"
      {...props}
    />
  );
});
AvatarImage.displayName = 'AvatarImage';

// Fallback subcomponent
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { versionModule, variant, size } = useAvatarContext();

  if (versionModule?.AvatarFallback) {
    const Component = versionModule.AvatarFallback;
    return <Component ref={ref} variant={variant} size={size} {...props} />;
  }

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className="flex h-full w-full items-center justify-center rounded-full bg-muted font-mono text-xs"
      {...props}
    />
  );
});
AvatarFallback.displayName = 'AvatarFallback';

// Composite export
export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { AvatarImage, AvatarFallback };
export default Avatar;
