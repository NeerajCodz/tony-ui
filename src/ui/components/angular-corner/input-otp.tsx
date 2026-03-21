'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  InputOTPBase,
  InputOTPGroupBase,
  InputOTPSlotBase,
  InputOTPSeparatorBase,
} from '../_base/input-otp';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const SLOT_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)';

export const InputOTP = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof InputOTPBase> & StyledProps
>(({ className, type, uiType, colors, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';

  return (
    <InputOTPBase
      ref={ref}
      className={cn('flex items-center gap-2', className)}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
InputOTP.displayName = 'InputOTP';

export const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <InputOTPGroupBase
    ref={ref}
    className={cn('flex items-center gap-1', className)}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTPGroup';

export const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof InputOTPSlotBase> & StyledProps & { char?: string; hasFakeCaret?: boolean; isActive?: boolean }
>(({ className, index, char, hasFakeCaret, isActive, type, uiType, colors, style, ...props }, ref) => {
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
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    isActive
      ? palette.accentPrimary ?? '#fff'
      : resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border ?? '#333';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <InputOTPSlotBase
      ref={ref}
      index={index}
      className={cn(
        'relative flex h-12 w-10 items-center justify-center text-lg font-bold uppercase transition-all',
        className
      )}
      style={{
        clipPath: SLOT_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        letterSpacing: '0.1em',
        boxShadow: isActive ? '0 0 8px ' + (palette.glow ?? palette.accentPrimary ?? '#fff') : 'none',
        ...style,
      }}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ animation: 'caret-blink 1s ease-out infinite' }}
        >
          <div
            className="h-5 w-0.5"
            style={{ backgroundColor: palette.accentPrimary ?? '#fff' }}
          />
        </div>
      )}
    </InputOTPSlotBase>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

export const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps
>(({ className, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);

  return (
    <InputOTPSeparatorBase
      ref={ref}
      className={cn('flex items-center justify-center', className)}
      style={style}
      {...props}
    >
      <div
        className="h-1 w-3"
        style={{
          clipPath: 'polygon(2px 0, calc(100% - 2px) 0, 100% 50%, calc(100% - 2px) 100%, 2px 100%, 0 50%)',
          backgroundColor: palette.border ?? '#444',
        }}
      />
    </InputOTPSeparatorBase>
  );
});
InputOTPSeparator.displayName = 'InputOTPSeparator';

export default InputOTP;