'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  DialogOverlayBase,
  DialogContentBase,
  DialogTitleBase,
  DialogDescriptionBase,
} from '../_base/dialog';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const DIALOG_CLIP_PATH = 'polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px), 0 24px)';

export const Overlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <DialogOverlayBase
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/70 backdrop-blur-sm',
      className
    )}
    style={{
      background: 'radial-gradient(ellipse at center, rgba(60,60,120,0.3) 0%, rgba(0,0,0,0.8) 100%)',
    }}
    {...props}
  />
));
Overlay.displayName = 'DialogOverlay';

export const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps
>(({ className, children, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.95)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

  const borderColor = palette.accentPrimary ?? palette.border ?? '#3a3a5a';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

  return (
    <DialogContentBase
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200',
        className
      )}
      style={{
        clipPath: DIALOG_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 30px ' + (palette.glow ?? 'rgba(100,100,255,0.4)') + ', inset 0 0 40px rgba(100,100,255,0.05)',
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern id="dialog-honeycomb" x="0" y="0" width="15" height="13" patternUnits="userSpaceOnUse">
          <polygon
            points="7.5,0 15,4.33 15,8.66 7.5,13 0,8.66 0,4.33"
            fill="none"
            stroke={palette.accentPrimary ?? '#6060ff'}
            strokeWidth="0.3"
          />
        </pattern>
        <rect x="0" y="0" width="100" height="100" fill="url(#dialog-honeycomb)" />
      </svg>
      <div className="relative z-[1]">{children}</div>
    </DialogContentBase>
  );
});
Content.displayName = 'DialogContent';

export const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : palette.accentPrimary ?? palette.foreground ?? '#a0a0ff';

  return (
    <DialogTitleBase
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-wider', className)}
      style={{
        color: textColor,
        letterSpacing: '0.04em',
        textShadow: '0 0 8px ' + (palette.glow ?? 'rgba(100,100,255,0.5)'),
        ...style,
      }}
      {...props}
    />
  );
});
Title.displayName = 'DialogTitle';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : palette.foreground ?? '#c0c0e0';

  return (
    <DialogDescriptionBase
      ref={ref}
      className={cn('text-sm', className)}
      style={{
        color: textColor,
        opacity: 0.85,
        ...style,
      }}
      {...props}
    />
  );
});
Description.displayName = 'DialogDescription';

const Dialog = { Overlay, Content, Title, Description };
export default Dialog;