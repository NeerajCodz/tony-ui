'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  DrawerOverlayBase,
  DrawerContentBase,
  DrawerTitleBase,
  DrawerDescriptionBase,
} from '../_base/drawer';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const DRAWER_CLIP_PATH = 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%, 0 16px)';

export const Overlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <DrawerOverlayBase
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/70 backdrop-blur-sm',
      className
    )}
    {...props}
  />
));
Overlay.displayName = 'DrawerOverlay';

export const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps
>(({ className, children, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.95)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor = palette.accentPrimary ?? palette.border ?? '#333';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <DrawerContentBase
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col p-6',
        className
      )}
      style={{
        clipPath: DRAWER_CLIP_PATH,
        backgroundColor,
        borderTop: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 -4px 20px ' + (palette.glow ?? 'rgba(0,0,0,0.5)'),
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      <div
        className="mx-auto mb-4 h-1.5 w-[60px] shrink-0"
        style={{
          clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 4px 100%, 0 50%)',
          backgroundColor: palette.accentPrimary ?? borderColor,
        }}
      />
      {children}
    </DrawerContentBase>
  );
});
Content.displayName = 'DrawerContent';

export const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <DrawerTitleBase
      ref={ref}
      className={cn('text-lg font-bold uppercase tracking-wider', className)}
      style={{
        color: textColor,
        letterSpacing: '0.08em',
        ...style,
      }}
      {...props}
    />
  );
});
Title.displayName = 'DrawerTitle';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <DrawerDescriptionBase
      ref={ref}
      className={cn('text-sm', className)}
      style={{
        color: textColor,
        opacity: 0.75,
        ...style,
      }}
      {...props}
    />
  );
});
Description.displayName = 'DrawerDescription';

const Drawer = { Overlay, Content, Title, Description };
export default Drawer;