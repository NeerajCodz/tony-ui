import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

export const SheetBase = SheetPrimitive.Root;
export const SheetTriggerBase = SheetPrimitive.Trigger;
export const SheetCloseBase = SheetPrimitive.Close;
export const SheetPortalBase = SheetPrimitive.Portal;

export interface SheetOverlayBaseProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {}

export const SheetOverlayBase = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  SheetOverlayBaseProps
>((props, ref) => <SheetPrimitive.Overlay ref={ref} {...props} />);
SheetOverlayBase.displayName = 'SheetOverlayBase';

export interface SheetContentBaseProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const SheetContentBase = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentBaseProps
>(({ side = 'right', ...props }, ref) => <SheetPrimitive.Content ref={ref} data-side={side} {...props} />);
SheetContentBase.displayName = 'SheetContentBase';

export interface SheetHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SheetHeaderBase = ({ ...props }: SheetHeaderBaseProps) => <div {...props} />;
SheetHeaderBase.displayName = 'SheetHeaderBase';

export interface SheetFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SheetFooterBase = ({ ...props }: SheetFooterBaseProps) => <div {...props} />;
SheetFooterBase.displayName = 'SheetFooterBase';

export interface SheetTitleBaseProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {}

export const SheetTitleBase = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  SheetTitleBaseProps
>((props, ref) => <SheetPrimitive.Title ref={ref} {...props} />);
SheetTitleBase.displayName = 'SheetTitleBase';

export interface SheetDescriptionBaseProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {}

export const SheetDescriptionBase = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  SheetDescriptionBaseProps
>((props, ref) => <SheetPrimitive.Description ref={ref} {...props} />);
SheetDescriptionBase.displayName = 'SheetDescriptionBase';
