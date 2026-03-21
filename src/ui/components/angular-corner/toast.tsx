'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  ToastBase,
  ToastTitleBase,
  ToastDescriptionBase,
  ToastActionBase,
  ToastCloseBase,
  ToastViewportBase,
  ToastProviderBase,
} from '../_base/toast';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';
type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const TOAST_CLIP_PATH = 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)';
const BUTTON_CLIP_PATH = 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)';

const variantAccentColors: Record<ToastVariant, string> = {
  default: '#888',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
};

export const ToastProvider = ToastProviderBase;

export const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <ToastViewportBase
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = 'ToastViewport';

export const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps & { variant?: ToastVariant }
>(({ className, variant = 'default', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const accentColor = variantAccentColors[variant] || palette.accentPrimary || '#888';

  const backgroundColor =
    resolvedType === 'solid'
      ? accentColor
      : resolvedType === 'soft'
        ? 'rgba(' + (palette.accentRgb ?? '50,50,50') + ', 0.95)'
        : resolvedType === 'inverse'
          ? palette.foreground ?? '#fff'
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? accentColor
      : resolvedType === 'ghost'
        ? 'transparent'
        : accentColor;

  const textColor =
    resolvedType === 'solid'
      ? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <ToastBase
      ref={ref}
      variant={variant}
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden p-4 pr-6 shadow-lg',
        className
      )}
      style={{
        clipPath: TOAST_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 12px ' + accentColor + '40',
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
Toast.displayName = 'Toast';

export const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <ToastTitleBase
      ref={ref}
      className={cn('text-sm font-bold uppercase tracking-wider', className)}
      style={{
        color: textColor,
        letterSpacing: '0.06em',
        ...style,
      }}
      {...props}
    />
  );
});
ToastTitle.displayName = 'ToastTitle';

export const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const textColor =
    resolvedType === 'solid'
      ? 'rgba(255,255,255,0.85)'
      : resolvedType === 'inverse'
        ? 'rgba(0,0,0,0.75)'
        : palette.foreground ?? '#ccc';

  return (
    <ToastDescriptionBase
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
ToastDescription.displayName = 'ToastDescription';

export const ToastAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);

  return (
    <ToastActionBase
      ref={ref}
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center px-3 text-sm font-bold uppercase tracking-wider transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      style={{
        clipPath: BUTTON_CLIP_PATH,
        backgroundColor: palette.accentPrimary ?? '#333',
        color: '#fff',
        border: '1px solid ' + (palette.border ?? '#555'),
        letterSpacing: '0.06em',
        ...style,
      }}
      {...props}
    />
  );
});
ToastAction.displayName = 'ToastAction';

export const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & StyledProps
>(({ className, colors, style, ...props }, ref) => {
  const palette = normalizeColors(colors);

  return (
    <ToastCloseBase
      ref={ref}
      className={cn(
        'absolute right-1 top-1 p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none',
        className
      )}
      style={{
        color: palette.foreground ?? '#fff',
        ...style,
      }}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </ToastCloseBase>
  );
});
ToastClose.displayName = 'ToastClose';

export default Toast;