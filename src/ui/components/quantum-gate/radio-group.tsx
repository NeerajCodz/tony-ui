'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { RadioGroupBase, RadioGroupItemBase } from '../_base/radio-group';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const RADIO_CLIP_PATH = 'polygon(25% 6%, 75% 6%, 98% 50%, 75% 94%, 25% 94%, 2% 50%)';

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupBase>,
  React.ComponentPropsWithoutRef<typeof RadioGroupBase> & StyledProps
>(({ className, type, uiType, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';

  return (
    <RadioGroupBase
      ref={ref}
      className={cn('grid gap-2', className)}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
RadioGroup.displayName = 'RadioGroup';

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItemBase>,
  React.ComponentPropsWithoutRef<typeof RadioGroupItemBase> & StyledProps
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

  const indicatorColor = palette.accentPrimary ?? '#8080ff';

  return (
    <RadioGroupItemBase
      ref={ref}
      className={cn(
        'aspect-square h-5 w-5 disabled:cursor-not-allowed disabled:opacity-50',
        'flex items-center justify-center',
        className
      )}
      style={{
        clipPath: RADIO_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        boxShadow: '0 0 6px ' + (palette.glow ?? 'rgba(100,100,255,0.2)'),
        ...style,
      }}
      {...props}
    >
      <span
        className="h-2 w-2"
        style={{
          clipPath: RADIO_CLIP_PATH,
          backgroundColor: indicatorColor,
          boxShadow: '0 0 8px ' + indicatorColor,
        }}
      />
    </RadioGroupItemBase>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

export default RadioGroup;