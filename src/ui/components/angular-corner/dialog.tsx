'use client';

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DialogCloseBase,
  DialogContentBase,
  DialogDescriptionBase,
  DialogOverlayBase,
  DialogTitleBase,
} from '../_base/dialog';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  colors?: VariantColors;
  variant?: string;
}

const versionKey = 'angular-corner';

const DIALOG_CLIP_PATH = 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)';

export const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogOverlayBase>,
  React.ComponentPropsWithoutRef<typeof DialogOverlayBase>
>(({ className, ...props }, ref) => (
  <DialogOverlayBase
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/70 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
Overlay.displayName = 'DialogOverlay';

export const Content = React.forwardRef<
  React.ElementRef<typeof DialogContentBase>,
  React.ComponentPropsWithoutRef<typeof DialogContentBase> & StyledProps
>(({ className, children, type = 'default', colors, ...props }, ref) => {
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(type, colors);

  const backgroundColor =
    type === 'solid'
      ? palette.accentPrimary ?? palette.base
      : type === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.15)'
        : type === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    type === 'outline' || type === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : palette.border ?? '#333';

  const textColor =
    type === 'solid'
      ? palette.base ?? '#fff'
      : type === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <DialogContentBase
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg',
        'translate-x-[-50%] translate-y-[-50%] gap-4 p-6',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        className
      )}
      style={{
        clipPath: DIALOG_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 20px ' + (palette.glow ?? 'rgba(0,0,0,0.4)'),
      }}
      data-version={versionKey}
      data-type={type}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          clipPath: DIALOG_CLIP_PATH,
          background: 'linear-gradient(135deg, ' + (palette.accentPrimary ?? 'transparent') + ' 0%, transparent 25%)',
          opacity: 0.15,
        }}
      />
      <div className="relative z-[1]">{children}</div>
      <DialogCloseBase
        className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none p-1 transition-opacity"
        style={{ color: palette.foreground ?? '#fff' }}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogCloseBase>
    </DialogContentBase>
  );
});
Content.displayName = 'DialogContent';

export const Title = React.forwardRef<
  React.ElementRef<typeof DialogTitleBase>,
  React.ComponentPropsWithoutRef<typeof DialogTitleBase> & StyledProps
>(({ className, type = 'default', colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(type, colors);

  const textColor =
    type === 'solid'
      ? palette.base ?? '#fff'
      : type === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <DialogTitleBase
      ref={ref}
      className={cn('text-lg font-bold uppercase tracking-wider', className)}
      style={{ color: textColor, letterSpacing: '0.08em', ...style }}
      {...props}
    />
  );
});
Title.displayName = 'DialogTitle';

export const Description = React.forwardRef<
  React.ElementRef<typeof DialogDescriptionBase>,
  React.ComponentPropsWithoutRef<typeof DialogDescriptionBase> & StyledProps
>(({ className, type = 'default', colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(type, colors);

  const textColor =
    type === 'solid'
      ? palette.base ?? '#fff'
      : type === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <DialogDescriptionBase
      ref={ref}
      className={cn('text-sm', className)}
      style={{ color: textColor, opacity: 0.75, ...style }}
      {...props}
    />
  );
});
Description.displayName = 'DialogDescription';