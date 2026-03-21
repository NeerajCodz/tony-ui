'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const SCROLL_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & StyledProps
>(({ className, children, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.08)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : resolvedType === 'ghost'
            ? 'transparent'
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border ?? '#333';

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      style={{
        clipPath: SCROLL_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-none">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar colors={colors} type={resolvedType} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = 'ScrollArea';

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & StyledProps
>(({ className, orientation = 'vertical', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const trackColor = palette.base ?? '#0a0a0a';
  const thumbColor = palette.accentPrimary ?? palette.border ?? '#555';

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className
      )}
      style={{
        backgroundColor: trackColor,
        ...style,
      }}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className="relative flex-1"
        style={{
          clipPath: 'polygon(3px 0, calc(100% - 3px) 0, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0 calc(100% - 3px), 0 3px)',
          backgroundColor: thumbColor,
          boxShadow: '0 0 6px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
        }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = 'ScrollBar';

export default ScrollArea;