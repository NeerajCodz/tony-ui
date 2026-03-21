'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { InputBase } from '../_base/input';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: ComponentType | string;
  uiType?: ComponentType;
  colors?: VariantColors;
  error?: boolean;
}

const versionKey = 'quantum-gate';

const INPUT_CLIP_PATH = 'polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%)';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, uiType, colors, error, style, ...props }, ref) => {
    const isHtmlType = typeof type === 'string' && ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'file', 'hidden', 'color', 'range', 'checkbox', 'radio', 'submit', 'reset', 'button'].includes(type);
    const htmlType = isHtmlType ? type : 'text';
    const resolvedType = uiType ?? (isHtmlType ? 'default' : (type as ComponentType)) ?? 'default';
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
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

    const borderColor = error
      ? '#ef4444'
      : resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border ?? '#3a3a5a';

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

    return (
      <InputBase
        ref={ref}
        type={htmlType}
        className={cn(
          'flex h-10 w-full px-4 py-2 text-sm transition-all',
          'placeholder:opacity-50',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        style={{
          clipPath: INPUT_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: error
            ? '0 0 8px rgba(239,68,68,0.4)'
            : '0 0 8px ' + (palette.glow ?? 'rgba(100,100,255,0.2)'),
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

export { Input };
export default Input;