import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export const DialogBase = DialogPrimitive.Root;
export const DialogTriggerBase = DialogPrimitive.Trigger;
export const DialogPortalBase = DialogPrimitive.Portal;
export const DialogCloseBase = DialogPrimitive.Close;

export interface DialogOverlayBaseProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

export const DialogOverlayBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayBaseProps
>((props, ref) => <DialogPrimitive.Overlay ref={ref} {...props} />);
DialogOverlayBase.displayName = 'DialogOverlayBase';

export interface DialogContentBaseProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  variant?: string;
  type?: string;
}

export const DialogContentBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentBaseProps
>((props, ref) => <DialogPrimitive.Content ref={ref} {...props} />);
DialogContentBase.displayName = 'DialogContentBase';

export interface DialogHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogHeaderBase = ({ ...props }: DialogHeaderBaseProps) => <div {...props} />;
DialogHeaderBase.displayName = 'DialogHeaderBase';

export interface DialogFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogFooterBase = ({ ...props }: DialogFooterBaseProps) => <div {...props} />;
DialogFooterBase.displayName = 'DialogFooterBase';

export interface DialogTitleBaseProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

export const DialogTitleBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleBaseProps
>((props, ref) => <DialogPrimitive.Title ref={ref} {...props} />);
DialogTitleBase.displayName = 'DialogTitleBase';

export interface DialogDescriptionBaseProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

export const DialogDescriptionBase = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionBaseProps
>((props, ref) => <DialogPrimitive.Description ref={ref} {...props} />);
DialogDescriptionBase.displayName = 'DialogDescriptionBase';
