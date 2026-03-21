import React from 'react';
import { cn } from '@/lib/utils';
import type { AlertDialogProps, AlertDialogActionProps, AlertDialogCancelProps, AlertDialogContentProps, AlertDialogDescriptionProps, AlertDialogFooterProps, AlertDialogHeaderProps, AlertDialogTitleProps, AlertDialogTriggerProps } from '@/ui/types/components/overlay';
import { AlertDialogActionBase, AlertDialogBase, AlertDialogCancelBase, AlertDialogContentBase, AlertDialogDescriptionBase, AlertDialogOverlayBase, AlertDialogPortalBase, AlertDialogTitleBase, AlertDialogTriggerBase } from '../_base/alert-dialog';

export function AlertDialog({ ...props }: AlertDialogProps) {
  return <AlertDialogBase {...props} />
}

export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
  return <AlertDialogTriggerBase {...props} />
}

export function AlertDialogContent({ className, colors, uiType = 'default', ...props }: AlertDialogContentProps) {
  const baseStyles = "relative font-mono transition-all duration-200 border-l-4 fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg";
  
  const typeStyles = {
    default: {
      backgroundColor: colors.background,
      color: colors.text,
      border: `1px solid ${colors.border}`
    },
    solid: {
      backgroundColor: colors?.accent?.primary,
      color: colors.text,
      boxShadow: `0 0 10px ${colors?.accent?.glow}`
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors?.accent?.primary,
      border: `1px solid ${colors?.accent?.primary}`
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.textHover
    },
    inverse: {
      backgroundColor: colors.text,
      color: colors.background,
      border: `1px solid ${colors.text}`
    },
    contrast: {
      backgroundColor: colors.accent?.primary || colors.text,
      color: '#000000',
      fontWeight: 'bold',
      border: `1px solid ${colors.text}`
    },
    soft: {
      backgroundColor: colors.accent?.rgb ? `rgba(${colors?.accent?.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors?.accent?.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.accent?.primary || colors.text,
      border: 'none'
    },

  };


  return (
    <AlertDialogPortalBase>
      <AlertDialogOverlayBase className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <AlertDialogContentBase
        className={cn(baseStyles, className)}
        style={typeStyles[uiType as keyof typeof typeStyles] || typeStyles.default}
        {...props}
      >
        {props.children}
        
      </AlertDialogContentBase>
    </AlertDialogPortalBase>
  )
}

export function AlertDialogHeader({ className, ...props }: AlertDialogHeaderProps) {
  return (
    <div
      className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

export function AlertDialogFooter({ className, ...props }: AlertDialogFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  )
}

export function AlertDialogTitle({ className, ...props }: AlertDialogTitleProps) {
  return (
    <AlertDialogTitleBase
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

export function AlertDialogDescription({ className, ...props }: AlertDialogDescriptionProps) {
  return (
    <AlertDialogDescriptionBase
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export function AlertDialogAction({ className, ...props }: AlertDialogActionProps) {
  return (
    <AlertDialogActionBase
      className={cn("inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className)}
      {...props}
    />
  )
}

export function AlertDialogCancel({ className, ...props }: AlertDialogCancelProps) {
  return (
    <AlertDialogCancelBase
      className={cn("mt-2 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:mt-0", className)}
      {...props}
    />
  )
}
