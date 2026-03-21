'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckboxBase } from '../_base/checkbox';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxBase> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const CHECKBOX_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 4px 100%, 0 50%)';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxBase>,
  CheckboxProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'inverse'
        ? palette.foreground
        : resolvedType === 'ghost'
          ? 'transparent'
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border ?? '#3a3a5a';

  const checkColor = palette.accentPrimary ?? '#8080ff';

  return (
    <CheckboxBase
      ref={ref}
      className={cn(
        'peer h-5 w-5 shrink-0 disabled:cursor-not-allowed disabled:opacity-50',
        'flex items-center justify-center',
        className
      )}
      style={{
        clipPath: CHECKBOX_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        boxShadow: '0 0 6px ' + (palette.glow ?? 'rgba(100,100,255,0.2)'),
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      <svg
        className="h-3 w-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke={checkColor}
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        style={{
          filter: 'drop-shadow(0 0 4px ' + checkColor + ')',
        }}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </CheckboxBase>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export default Checkbox;