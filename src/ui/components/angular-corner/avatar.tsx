'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { AvatarBase, AvatarImageBase, AvatarFallbackBase } from '../_base/avatar';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const AVATAR_CLIP_PATH = 'polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)';

export const AvatarRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AvatarBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.15)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#1a1a1a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border;

  return (
    <AvatarBase
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden', className)}
      style={{
        clipPath: AVATAR_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
AvatarRoot.displayName = 'Avatar';

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof AvatarImageBase>
>(({ className, ...props }, ref) => (
  <AvatarImageBase
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AvatarFallbackBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground;

  return (
    <AvatarFallbackBase
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center font-bold uppercase tracking-wider',
        className
      )}
      style={{
        color: textColor,
        letterSpacing: '0.06em',
        ...style,
      }}
      {...props}
    />
  );
});
AvatarFallback.displayName = 'AvatarFallback';

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export default Avatar;