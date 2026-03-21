'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';
type Size = 'sm' | 'default' | 'lg';

interface StyledProps {
  uiType?: ComponentType;
  colors?: VariantColors;
  size?: Size;
}

const versionKey = 'angular-corner';

const GROUP_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';
const ITEM_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)';

const sizeStyles: Record<Size, string> = {
  sm: 'h-8 px-2 text-xs',
  default: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

type ToggleGroupRootProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & StyledProps;

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupRootProps
>((props, ref) => {
  const { className, uiType, colors, style, ...rest } = props;
  const resolvedType = uiType ?? 'default';
  const palette = normalizeColors(colors);

  const backgroundColor =
    resolvedType === 'soft' && palette.accentRgb
      ? 'rgba(' + palette.accentRgb + ', 0.1)'
      : palette.base ?? '#1a1a1a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border;

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn('inline-flex items-center justify-center gap-1 p-1', className)}
      style={{
        clipPath: GROUP_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...rest}
    />
  );
});
ToggleGroupRoot.displayName = 'ToggleGroup';

type ToggleGroupItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & StyledProps;

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>((props, ref) => {
  const { className, uiType, colors, size = 'default', style, ...rest } = props;
  const resolvedType = uiType ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground;

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-bold uppercase tracking-wider',
        'transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
        sizeStyles[size],
        className
      )}
      style={{
        clipPath: ITEM_CLIP_PATH,
        color: textColor,
        letterSpacing: '0.06em',
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...rest}
    />
  );
});
ToggleGroupItem.displayName = 'ToggleGroupItem';

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
});

export default ToggleGroup;