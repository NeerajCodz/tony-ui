import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

export const AlertDialogBase = AlertDialogPrimitive.Root;
export const AlertDialogTriggerBase = AlertDialogPrimitive.Trigger;
export const AlertDialogPortalBase = AlertDialogPrimitive.Portal;
export const AlertDialogActionBase = AlertDialogPrimitive.Action;
export const AlertDialogCancelBase = AlertDialogPrimitive.Cancel;

export interface AlertDialogOverlayBaseProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {}

export const AlertDialogOverlayBase = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlayBaseProps
>((props, ref) => <AlertDialogPrimitive.Overlay ref={ref} {...props} />);
AlertDialogOverlayBase.displayName = 'AlertDialogOverlayBase';

export interface AlertDialogContentBaseProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {}

export const AlertDialogContentBase = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentBaseProps
>((props, ref) => <AlertDialogPrimitive.Content ref={ref} {...props} />);
AlertDialogContentBase.displayName = 'AlertDialogContentBase';

export interface AlertDialogTitleBaseProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {}

export const AlertDialogTitleBase = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleBaseProps
>((props, ref) => <AlertDialogPrimitive.Title ref={ref} {...props} />);
AlertDialogTitleBase.displayName = 'AlertDialogTitleBase';

export interface AlertDialogDescriptionBaseProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> {}

export const AlertDialogDescriptionBase = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescriptionBaseProps
>((props, ref) => <AlertDialogPrimitive.Description ref={ref} {...props} />);
AlertDialogDescriptionBase.displayName = 'AlertDialogDescriptionBase';

export interface AlertDialogHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AlertDialogHeaderBase = ({ ...props }: AlertDialogHeaderBaseProps) => (
  <div {...props} />
);
AlertDialogHeaderBase.displayName = 'AlertDialogHeaderBase';

export interface AlertDialogFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AlertDialogFooterBase = ({ ...props }: AlertDialogFooterBaseProps) => (
  <div {...props} />
);
AlertDialogFooterBase.displayName = 'AlertDialogFooterBase';
