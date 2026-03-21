'use client';

import * as React from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  SelectBase,
  SelectGroupBase,
  SelectValueBase,
  SelectTriggerBase,
  SelectContentBase,
  SelectLabelBase,
  SelectItemBase,
  SelectSeparatorBase,
  SelectScrollUpButtonBase,
  SelectScrollDownButtonBase,
  SelectItemTextBase,
  SelectItemIndicatorBase,
  SelectPortalBase,
  SelectViewportBase,
} from '../_base/select';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const TRIGGER_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';
const CONTENT_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';

export const Select = SelectBase;
export const SelectGroup = SelectGroupBase;
export const SelectValue = SelectValueBase;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectTriggerBase>,
  React.ComponentPropsWithoutRef<typeof SelectTriggerBase> & StyledProps
>(({ className, children, type, uiType, colors, style, ...props }, ref) => {
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

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground;

  return (
    <SelectTriggerBase
      ref={ref}
      className={cn(
        'flex h-10 w-full items-center justify-between px-3 py-2 text-sm',
        'focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        '[&>span]:line-clamp-1',
        className
      )}
      style={{
        clipPath: TRIGGER_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectTriggerBase>
  );
});
SelectTrigger.displayName = 'SelectTrigger';

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectScrollUpButtonBase>,
  React.ComponentPropsWithoutRef<typeof SelectScrollUpButtonBase> & StyledProps
>(({ className, colors, ...props }, ref) => {
  const palette = normalizeColors(colors);
  return (
    <SelectScrollUpButtonBase
      ref={ref}
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      style={{ color: palette.foreground }}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectScrollUpButtonBase>
  );
});
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectScrollDownButtonBase>,
  React.ComponentPropsWithoutRef<typeof SelectScrollDownButtonBase> & StyledProps
>(({ className, colors, ...props }, ref) => {
  const palette = normalizeColors(colors);
  return (
    <SelectScrollDownButtonBase
      ref={ref}
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      style={{ color: palette.foreground }}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectScrollDownButtonBase>
  );
});
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectContentBase>,
  React.ComponentPropsWithoutRef<typeof SelectContentBase> & StyledProps
>(({ className, children, position = 'popper', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor = palette.border ?? '#333';
  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <SelectPortalBase>
      <SelectContentBase
        ref={ref}
        className={cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        style={{
          clipPath: CONTENT_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: '0 0 16px ' + (palette.glow ?? 'rgba(0,0,0,0.4)'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <SelectScrollUpButton colors={colors} />
        <SelectViewportBase
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectViewportBase>
        <SelectScrollDownButton colors={colors} />
      </SelectContentBase>
    </SelectPortalBase>
  );
});
SelectContent.displayName = 'SelectContent';

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectLabelBase>,
  React.ComponentPropsWithoutRef<typeof SelectLabelBase> & StyledProps
>(({ className, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);
  return (
    <SelectLabelBase
      ref={ref}
      className={cn('py-1.5 pl-8 pr-2 text-sm font-bold uppercase tracking-wider', className)}
      style={{ color: palette.foreground, letterSpacing: '0.08em', ...style }}
      {...props}
    />
  );
});
SelectLabel.displayName = 'SelectLabel';

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectItemBase>,
  React.ComponentPropsWithoutRef<typeof SelectItemBase> & StyledProps
>(({ className, children, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);
  return (
    <SelectItemBase
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      style={{ color: palette.foreground, ...style }}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectItemIndicatorBase>
          <Check className="h-4 w-4" style={{ color: palette.accentPrimary ?? palette.foreground }} />
        </SelectItemIndicatorBase>
      </span>
      <SelectItemTextBase>{children}</SelectItemTextBase>
    </SelectItemBase>
  );
});
SelectItem.displayName = 'SelectItem';

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectSeparatorBase>,
  React.ComponentPropsWithoutRef<typeof SelectSeparatorBase> & StyledProps
>(({ className, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);
  return (
    <SelectSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px', className)}
      style={{ backgroundColor: palette.border, ...style }}
      {...props}
    />
  );
});
SelectSeparator.displayName = 'SelectSeparator';

export default Select;