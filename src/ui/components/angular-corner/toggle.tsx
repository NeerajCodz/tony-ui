'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ToggleBase } from '../_base/toggle';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';
type Size = 'sm' | 'default' | 'lg';

export interface ToggleProps extends Omit<React.ComponentPropsWithoutRef<typeof ToggleBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  size?: Size;
}

const versionKey = 'angular-corner';

const TOGGLE_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

const sizeStyles: Record<Size, string> = {
  sm: 'h-8 px-2 text-xs',
  default: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

export const Toggle = React.forwardRef<React.ElementRef<typeof ToggleBase>, ToggleProps>(
  ({ className, type, uiType, colors, size = 'default', style, ...props }, ref) => {
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
      <ToggleBase
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-bold uppercase tracking-wider',
          'transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
          sizeStyles[size],
          className
        )}
        style={{
          clipPath: TOGGLE_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          letterSpacing: '0.06em',
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;