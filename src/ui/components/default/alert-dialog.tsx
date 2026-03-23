import * as React from 'react';
import {
    AlertDialogBase,
    AlertDialogPortalBase,
    AlertDialogOverlayBase,
    AlertDialogTriggerBase,
    AlertDialogContentBase,
    AlertDialogHeaderBase,
    AlertDialogFooterBase,
    AlertDialogTitleBase,
    AlertDialogDescriptionBase,
    AlertDialogActionBase,
    AlertDialogCancelBase,
} from '../_base/alert-dialog';
import { cn } from '@/lib/utils';
import { Button } from './button';

const AlertDialog = AlertDialogBase;
const AlertDialogTrigger = AlertDialogTriggerBase;
const AlertDialogPortal = AlertDialogPortalBase;

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogOverlayBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogOverlayBase>
>(({ className, ...props }, ref) => (
  <AlertDialogOverlayBase
    className={cn(
      'fixed inset-0 z-50 bg-[var(--df-surface)]/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = 'AlertDialogOverlay'

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogContentBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogContentBase>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContentBase
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[var(--df-border)] bg-[var(--df-surface)] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = 'AlertDialogContent'

const AlertDialogHeader = React.forwardRef<
  React.ComponentRef<typeof AlertDialogHeaderBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogHeaderBase>
>(({ className, ...props }, ref) => (
  <AlertDialogHeaderBase
    ref={ref}
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
))
AlertDialogHeader.displayName = 'AlertDialogHeader'

const AlertDialogFooter = React.forwardRef<
  React.ComponentRef<typeof AlertDialogFooterBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogFooterBase>
>(({ className, ...props }, ref) => (
  <AlertDialogFooterBase
    ref={ref}
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
))
AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogTitleBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogTitleBase>
>(({ className, ...props }, ref) => (
  <AlertDialogTitleBase
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
))
AlertDialogTitle.displayName = 'AlertDialogTitle'

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogDescriptionBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogDescriptionBase>
>(({ className, ...props }, ref) => (
  <AlertDialogDescriptionBase
    ref={ref}
    className={cn('text-sm text-[var(--df-muted-text)]', className)}
    {...props}
  />
))
AlertDialogDescription.displayName = 'AlertDialogDescription'

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogActionBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogActionBase>
>(({ className, ...props }, ref) => (
  <AlertDialogActionBase ref={ref} asChild>
    <Button className={className} {...props} />
  </AlertDialogActionBase>
))
AlertDialogAction.displayName = 'AlertDialogAction'

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogCancelBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogCancelBase>
>(({ className, ...props }, ref) => (
  <AlertDialogCancelBase ref={ref} asChild>
    <Button
      visualType="outline"
      className={cn('mt-2 sm:mt-0', className)}
      {...props}
    />
  </AlertDialogCancelBase>
))
AlertDialogCancel.displayName = 'AlertDialogCancel'

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
