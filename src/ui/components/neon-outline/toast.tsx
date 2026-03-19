'use client';

import React, { forwardRef } from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import type { VariantColors } from '../../types/common';
import { X } from 'lucide-react';

const NeonOutlineToastProvider = ToastPrimitives.Provider;

const NeonOutlineToastViewport = forwardRef<React.ElementRef<typeof ToastPrimitives.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToastPrimitives.Viewport
      ref={ref}
      className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineToastViewport.displayName = 'NeonOutlineToastViewport';

const NeonOutlineToast = forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => {
    const bg = colors?.base || '#1f2937';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#374151';
    const glow = colors?.glow || 'transparent';

    return (
        <ToastPrimitives.Root
            ref={ref}
            className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full ${className}`}
            style={{
                backgroundColor: bg,
                color: fg,
                borderColor: border,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderRadius: '0.5rem',
                fontFamily: 'inherit',
                boxShadow: `0 0 5px ${glow}, 0 0 10px ${glow}`,
                clipPath: 'none',
                ...style
            }}
            {...props}
        />
    );
  }
);
NeonOutlineToast.displayName = 'NeonOutlineToast';

const NeonOutlineToastAction = forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToastPrimitives.Action
      ref={ref}
      className={`inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineToastAction.displayName = 'NeonOutlineToastAction';

const NeonOutlineToastClose = forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToastPrimitives.Close
      ref={ref}
      className={`absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 ${className}`}
      toast-close=""
      style={style}
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitives.Close>
  )
);
NeonOutlineToastClose.displayName = 'NeonOutlineToastClose';

const NeonOutlineToastTitle = forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToastPrimitives.Title
      ref={ref}
      className={`text-sm font-semibold ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineToastTitle.displayName = 'NeonOutlineToastTitle';

const NeonOutlineToastDescription = forwardRef<React.ElementRef<typeof ToastPrimitives.Description>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> & { colors?: VariantColors }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToastPrimitives.Description
      ref={ref}
      className={`text-sm opacity-90 ${className}`}
      style={style}
      {...props}
    />
  )
);
NeonOutlineToastDescription.displayName = 'NeonOutlineToastDescription';

export {
  NeonOutlineToastProvider as ToastProvider,
  NeonOutlineToastViewport as ToastViewport,
  NeonOutlineToast as Toast,
  NeonOutlineToastTitle as ToastTitle,
  NeonOutlineToastDescription as ToastDescription,
  NeonOutlineToastClose as ToastClose,
  NeonOutlineToastAction as ToastAction,
};
