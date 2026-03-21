'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { PopoverContentBase } from '../_base/popover';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const POPOVER_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

export const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PopoverContentBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
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
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

  const borderColor = palette.accentPrimary ?? palette.border ?? '#3a3a5a';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

  return (
    <PopoverContentBase
      ref={ref}
      className={cn('z-50 w-72 p-4 text-sm outline-none', className)}
      style={{
        clipPath: POPOVER_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 16px ' + (palette.glow ?? 'rgba(100,100,255,0.3)'),
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
Content.displayName = 'PopoverContent';

const Popover = { Content };
export default Popover;