'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { InputBase } from '../_base/input';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<typeof InputBase>, 'type' | 'size'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  htmlType?: React.HTMLInputTypeAttribute;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const versionKey = 'angular-corner';

// Angular clipped corners for input
const INPUT_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';

const sizeMap = {
  sm: 'h-8 px-2 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
} as const;

export const Input = React.forwardRef<React.ElementRef<typeof InputBase>, InputProps>(
  ({
    className,
    type,
    uiType,
    colors,
    style,
    htmlType = 'text',
    size = 'md',
    error,
    icon: _icon,
    iconPosition: _iconPosition,
    ...props
  }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    // Compute background based on type
    const backgroundColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base
        : resolvedType === 'soft' && palette.accentRgb
          ? `rgba(${palette.accentRgb}, 0.1)`
          : resolvedType === 'inverse'
            ? palette.foreground
            : resolvedType === 'ghost'
              ? 'transparent'
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base;

    // Compute border color based on type (error overrides)
    const borderColor = error
      ? '#ef4444'
      : resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border;

    // Compute text color based on type
    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <InputBase
        ref={ref}
        type={htmlType}
        className={cn('w-full outline-none transition-colors', sizeMap[size], className)}
        style={{
          clipPath: INPUT_CLIP_PATH,
          backgroundColor,
          border: `2px solid ${borderColor}`,
          color: textColor,
          fontFamily: 'inherit',
          letterSpacing: '0.04em',
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
