'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { TextareaBase } from '../_base/textarea';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  variant?: string;
}

const versionKey = 'angular-corner';

const TEXTAREA_CLIP_PATH = 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
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
      <TextareaBase
        ref={ref}
        className={cn(
          'flex min-h-[80px] w-full px-3 py-2 text-sm',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        style={{
          clipPath: TEXTAREA_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
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
Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;