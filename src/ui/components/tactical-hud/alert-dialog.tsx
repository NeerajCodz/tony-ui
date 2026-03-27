import * as React from 'react';
import { AlertDialogBase, AlertDialogTriggerBase, AlertDialogContentBase, AlertDialogHeaderBase, AlertDialogFooterBase, AlertDialogTitleBase, AlertDialogDescriptionBase, AlertDialogActionBase, AlertDialogCancelBase, AlertDialogOverlayBase, AlertDialogPortalBase, type AlertDialogContentBaseProps } from '../_base/alert-dialog';
import { Button } from './button'; 
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

const AlertDialog = AlertDialogBase;
const AlertDialogTrigger = AlertDialogTriggerBase;
const AlertDialogPortal = AlertDialogPortalBase;

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogOverlayBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogOverlayBase> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogOverlayBase
    className={cn(tacticalHudEffectsClass(effects), 
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogOverlayBase.displayName;

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogContentBase>,
  AlertDialogContentBaseProps & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', type = 'default', size = 'md', style, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContentBase
      ref={ref}
      type={type}
      size={size}
      style={{ ...style }}
      className={cn(tacticalHudEffectsClass(effects), 
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[var(--th-hex-line)] bg-[var(--th-surface)] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] ',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogContentBase.displayName;

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogHeaderBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'flex flex-col space-y-2 text-center sm:text-left', className)}
    {...props}
  />
));
AlertDialogHeader.displayName = AlertDialogHeaderBase.displayName;

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogFooterBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
));
AlertDialogFooter.displayName = AlertDialogFooterBase.displayName;

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogTitleBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogTitleBase> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogTitleBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'text-lg font-sans font-bold uppercase tracking-wide', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogTitleBase.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogDescriptionBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogDescriptionBase> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogDescriptionBase
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'text-sm text-[var(--text-secondary)] font-sans', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogDescriptionBase.displayName;

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogActionBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogActionBase> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogActionBase ref={ref} asChild>
    <Button visualType="solid" className={className} {...props} />
  </AlertDialogActionBase>
));
AlertDialogAction.displayName = AlertDialogActionBase.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogCancelBase>,
  React.ComponentPropsWithoutRef<typeof AlertDialogCancelBase> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AlertDialogCancelBase ref={ref} asChild>
    <Button visualType="outline" className={cn(tacticalHudEffectsClass(effects), 'mt-2 sm:mt-0', className)} {...props} />
  </AlertDialogCancelBase>
));
AlertDialogCancel.displayName = AlertDialogCancelBase.displayName;

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
};
