'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { RadioGroupBase, RadioGroupIndicatorBase, RadioGroupItemBase } from '../_base/radio-group';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

export interface RadioGroupProps extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
}

export interface RadioGroupItemProps extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupItemBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const versionKey = 'angular-corner';

const RADIO_CLIP_PATH = 'polygon(25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%, 0 25%)';

const RadioGroupRoot = React.forwardRef<React.ElementRef<typeof RadioGroupBase>, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupBase
      ref={ref}
      className={cn('grid gap-2', className)}
      data-version={versionKey}
      {...props}
    />
  )
);
RadioGroupRoot.displayName = 'RadioGroup';

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupItemBase>, RadioGroupItemProps>(
  ({ className, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => {
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

    const indicatorColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.accentPrimary ?? palette.foreground;

    return (
      <RadioGroupItemBase
        ref={ref}
        type={htmlType}
        className={cn('aspect-square h-5 w-5 shrink-0', className)}
        style={{
          clipPath: RADIO_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <RadioGroupIndicatorBase className="flex items-center justify-center">
          {children ?? (
            <span
              className="h-2.5 w-2.5"
              style={{
                clipPath: RADIO_CLIP_PATH,
                backgroundColor: indicatorColor,
                boxShadow: '0 0 6px ' + (palette.glow ?? indicatorColor),
              }}
            />
          )}
        </RadioGroupIndicatorBase>
      </RadioGroupItemBase>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});

export { RadioGroupItem };

export default RadioGroup;