'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  SheetBase,
  SheetTriggerBase,
  SheetCloseBase,
  SheetPortalBase,
  SheetOverlayBase,
  SheetContentBase,
  SheetHeaderBase,
  SheetFooterBase,
  SheetTitleBase,
  SheetDescriptionBase,
} from '../_base/sheet';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const CONTENT_CLIP_PATH_RIGHT = 'polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px)';
const CONTENT_CLIP_PATH_LEFT = 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)';
const CONTENT_CLIP_PATH_TOP = 'polygon(0 0, 100% 0, 100% 100%, calc(100% - 16px) 100%, 0 calc(100% - 16px))';
const CONTENT_CLIP_PATH_BOTTOM = 'polygon(0 16px, 16px 0, 100% 0, 100% 100%, 0 100%)';

export const Sheet = SheetBase;
export const SheetPortal = SheetPortalBase;
export const SheetTrigger = SheetTriggerBase;
export const SheetClose = SheetCloseBase;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetOverlayBase>,
  React.ComponentPropsWithoutRef<typeof SheetOverlayBase>
>(({ className, ...props }, ref) => (
  <SheetOverlayBase
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
SheetOverlay.displayName = 'SheetOverlay';

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetContentBase>,
  React.ComponentPropsWithoutRef<typeof SheetContentBase> & StyledProps
>(({ side = 'right', className, children, type, uiType, colors, style, ...props }, ref) => {
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
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor = palette.accentPrimary ?? palette.border ?? '#333';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  const clipPath =
    side === 'right' ? CONTENT_CLIP_PATH_RIGHT :
    side === 'left' ? CONTENT_CLIP_PATH_LEFT :
    side === 'top' ? CONTENT_CLIP_PATH_TOP :
    CONTENT_CLIP_PATH_BOTTOM;

  return (
    <SheetPortalBase>
      <SheetOverlay />
      <SheetContentBase
        ref={ref}
        side={side}
        className={cn(
          'fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'top' && 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          side === 'bottom' && 'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          side === 'left' && 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
          side === 'right' && 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
          className
        )}
        style={{
          clipPath,
          backgroundColor,
          borderLeft: side === 'right' ? '2px solid ' + borderColor : undefined,
          borderRight: side === 'left' ? '2px solid ' + borderColor : undefined,
          borderTop: side === 'bottom' ? '2px solid ' + borderColor : undefined,
          borderBottom: side === 'top' ? '2px solid ' + borderColor : undefined,
          color: textColor,
          boxShadow: '0 0 20px ' + (palette.glow ?? 'rgba(0,0,0,0.5)'),
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        {children}
        <SheetCloseBase
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
          style={{ color: textColor }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetCloseBase>
      </SheetContentBase>
    </SheetPortalBase>
  );
});
SheetContent.displayName = 'SheetContent';

export const SheetHeader: React.FC<React.HTMLAttributes<HTMLDivElement> & StyledProps> = ({
  className, type, uiType, colors, style, ...props
}) => {
  const palette = normalizeColors(colors);

  return (
    <SheetHeaderBase
      className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
      style={{
        borderBottom: '2px solid ' + (palette.accentPrimary ?? palette.border ?? '#333'),
        paddingBottom: '0.75rem',
        marginBottom: '0.5rem',
        ...style,
      }}
      {...props}
    />
  );
};
SheetHeader.displayName = 'SheetHeader';

export const SheetFooter: React.FC<React.HTMLAttributes<HTMLDivElement> & StyledProps> = ({
  className, type, uiType, colors, style, ...props
}) => {
  const palette = normalizeColors(colors);

  return (
    <SheetFooterBase
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      style={{
        borderTop: '2px solid ' + (palette.accentPrimary ?? palette.border ?? '#333'),
        paddingTop: '0.75rem',
        marginTop: '0.5rem',
        ...style,
      }}
      {...props}
    />
  );
};
SheetFooter.displayName = 'SheetFooter';

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetTitleBase>,
  React.ComponentPropsWithoutRef<typeof SheetTitleBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <SheetTitleBase
      ref={ref}
      className={cn('text-lg font-bold uppercase tracking-wider', className)}
      style={{
        color: textColor,
        letterSpacing: '0.08em',
        ...style,
      }}
      {...props}
    />
  );
});
SheetTitle.displayName = 'SheetTitle';

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetDescriptionBase>,
  React.ComponentPropsWithoutRef<typeof SheetDescriptionBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  return (
    <SheetDescriptionBase
      ref={ref}
      className={cn('text-sm', className)}
      style={{
        color: textColor,
        opacity: 0.75,
        ...style,
      }}
      {...props}
    />
  );
});
SheetDescription.displayName = 'SheetDescription';

export default Sheet;