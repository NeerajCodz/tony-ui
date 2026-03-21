'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ButtonBase } from '../_base/button';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';
type Size = 'sm' | 'default' | 'lg' | 'icon';

export interface IconButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof ButtonBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  size?: Size;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const versionKey = 'angular-corner';

const BUTTON_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

const sizeStyles: Record<Size, string> = {
  sm: 'h-8 w-8',
  default: 'h-10 w-10',
  lg: 'h-12 w-12',
  icon: 'h-10 w-10',
};

export const IconButton = React.forwardRef<React.ElementRef<typeof ButtonBase>, IconButtonProps>(
  ({ className, type, uiType, colors, size = 'default', style, htmlType = 'button', ...props }, ref) => {
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
      <ButtonBase
        ref={ref}
        type={htmlType}
        className={cn(
          'inline-flex items-center justify-center',
          'transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          sizeStyles[size],
          className
        )}
        style={{
          clipPath: BUTTON_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: resolvedType === 'ghost' ? 'none' : '0 0 8px ' + (palette.glow ?? 'rgba(0,0,0,0.2)'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;