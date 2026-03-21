'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { TextareaBase } from '../_base/textarea';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  error?: boolean;
}

const versionKey = 'quantum-gate';

const TEXTAREA_CLIP_PATH = 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, type, uiType, colors, error, style, ...props }, ref) => {
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
      <TextareaBase
        ref={ref}
        className={cn(
          'flex min-h-[120px] w-full px-4 py-3 text-sm transition-all',
          'placeholder:opacity-50',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        style={{
          clipPath: TEXTAREA_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: error
            ? '0 0 8px rgba(239,68,68,0.4)'
            : '0 0 8px ' + (palette.glow ?? 'rgba(100,100,255,0.2)'),
          resize: 'vertical',
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;