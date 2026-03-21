'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { TabsBase, TabsListBase, TabsTriggerBase, TabsContentBase } from '../_base/tabs';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const LIST_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';
const TRIGGER_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';
const CONTENT_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

export const Tabs = TabsBase;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsListBase>,
  React.ComponentPropsWithoutRef<typeof TabsListBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const backgroundColor =
    resolvedType === 'soft' && palette.accentRgb
      ? 'rgba(' + palette.accentRgb + ', 0.1)'
      : palette.base ?? '#1a1a1a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border;

  return (
    <TabsListBase
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center p-1',
        className
      )}
      style={{
        clipPath: LIST_CLIP_PATH,
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
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsTriggerBase>,
  React.ComponentPropsWithoutRef<typeof TabsTriggerBase> & StyledProps
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
    <TabsTriggerBase
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-bold uppercase tracking-wider',
        'transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:shadow-sm',
        className
      )}
      style={{
        clipPath: TRIGGER_CLIP_PATH,
        color: textColor,
        letterSpacing: '0.06em',
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsContentBase>,
  React.ComponentPropsWithoutRef<typeof TabsContentBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.1)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : resolvedType === 'ghost'
            ? 'transparent'
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base;

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border;

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground;

  return (
    <TabsContentBase
      ref={ref}
      className={cn('mt-2 focus-visible:outline-none p-4', className)}
      style={{
        clipPath: CONTENT_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
TabsContent.displayName = 'TabsContent';

export default Tabs;