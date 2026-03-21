'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';
import { PopoverBase, PopoverContentBase, PopoverTriggerBase } from '../_base/popover';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  variant?: string;
}

const versionKey = 'angular-corner';

const POPOVER_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

export const PopoverRoot = PopoverBase;
export const PopoverTrigger = PopoverTriggerBase;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverContentBase>,
  React.ComponentPropsWithoutRef<typeof PopoverContentBase> & StyledProps
>(({ className, align = 'center', sideOffset = 4, type, uiType, colors, style, ...props }, ref) => {
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
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : palette.border ?? '#333';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <PopoverPrimitive.Portal>
      <PopoverContentBase
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 p-4 outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        style={{
          clipPath: POPOVER_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: '0 0 16px ' + (palette.glow ?? 'rgba(0,0,0,0.4)'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = 'PopoverContent';

export { PopoverRoot as Popover };
export default PopoverRoot;