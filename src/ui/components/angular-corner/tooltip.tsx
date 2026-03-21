'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import {
  TooltipBase,
  TooltipTriggerBase,
  TooltipContentBase,
  TooltipProviderBase,
} from '../_base/tooltip';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const TOOLTIP_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

export const TooltipProvider = TooltipProviderBase;
export const Tooltip = TooltipBase;
export const TooltipTrigger = TooltipTriggerBase;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipContentBase>,
  React.ComponentPropsWithoutRef<typeof TooltipContentBase> & StyledProps
>(({ className, sideOffset = 4, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.9)'
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
    <TooltipPrimitive.Portal>
      <TooltipContentBase
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 overflow-hidden px-3 py-1.5 text-sm',
          'animate-in fade-in-0 zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          className
        )}
        style={{
          clipPath: TOOLTIP_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: '0 0 10px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
});
TooltipContent.displayName = 'TooltipContent';

export default Tooltip;