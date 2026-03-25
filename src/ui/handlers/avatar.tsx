/**
 * Avatar Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type AvatarVersion = Version;
export type AvatarVariant = Variant;
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  version?: AvatarVersion;
  variant?: AvatarVariant;
  size?: AvatarSize;
  effects?: string;
}

// Context
interface AvatarContextValue {
  version: AvatarVersion;
  variant: AvatarVariant;
  size: AvatarSize;
  effects?: string;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const AvatarContext = createContext<AvatarContextValue>({
  version: 'angular-corner',
  variant: 'default',
  size: 'md',
  colors: getVariantColors('default'),
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
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({
  version = 'angular-corner',
  variant = 'default',
  size = 'md',
  effects,
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'avatar', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  if (!versionModule) {
    return <LoadingSkeleton size={size} />;
  }

  const Component = versionModule.AvatarRoot || versionModule.Avatar || versionModule.default;

  return (
    <AvatarContext.Provider value={{ version, variant, size, effects, colors, versionModule }}>
      <Component ref={ref} variant={variant} size={size} effects={effects} {...props}>
        {children}
      </Component>
    </AvatarContext.Provider>
  );
});
AvatarRoot.displayName = 'Avatar';

// Image subcomponent
const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { versionModule, variant, size, colors, effects } = useAvatarContext();

  if (versionModule?.AvatarImage) {
    const Component = versionModule.AvatarImage;
    return <Component ref={ref} variant={variant} size={size} colors={colors} effects={effects} {...props} />;
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
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { versionModule, variant, size, colors, effects } = useAvatarContext();

  if (versionModule?.AvatarFallback) {
    const Component = versionModule.AvatarFallback;
    return <Component ref={ref} variant={variant} size={size} colors={colors} effects={effects} {...props} />;
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
