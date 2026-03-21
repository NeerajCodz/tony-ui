'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CheckboxBase, CheckboxIndicatorBase } from '../_base/checkbox';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const versionKey = 'angular-corner';

const CHECKBOX_CLIP_PATH = 'polygon(3px 0, calc(100% - 3px) 0, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0 calc(100% - 3px), 0 3px)';

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxBase>, CheckboxProps>(
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

    const checkColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.accentPrimary ?? palette.foreground;

    return (
      <CheckboxBase
        ref={ref}
        type={htmlType}
        className={cn('peer h-5 w-5 shrink-0', className)}
        style={{
          clipPath: CHECKBOX_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <CheckboxIndicatorBase
          className="flex items-center justify-center"
          style={{ color: checkColor }}
        >
          {children ?? <Check className="h-3.5 w-3.5" strokeWidth={3} />}
        </CheckboxIndicatorBase>
      </CheckboxBase>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;