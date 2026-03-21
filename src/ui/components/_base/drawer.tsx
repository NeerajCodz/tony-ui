import * as React from 'react';

export interface DrawerBaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const DrawerBase = ({ children }: DrawerBaseProps) => <>{children}</>;
DrawerBase.displayName = 'DrawerBase';

export interface DrawerTriggerBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DrawerTriggerBase = React.forwardRef<HTMLButtonElement, DrawerTriggerBaseProps>(
  ({ ...props }, ref) => <button ref={ref} {...props} />
);
DrawerTriggerBase.displayName = 'DrawerTriggerBase';

export interface DrawerPortalBaseProps {
  children: React.ReactNode;
}

export const DrawerPortalBase = ({ children }: DrawerPortalBaseProps) => <>{children}</>;
DrawerPortalBase.displayName = 'DrawerPortalBase';

export interface DrawerOverlayBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerOverlayBase = React.forwardRef<HTMLDivElement, DrawerOverlayBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
DrawerOverlayBase.displayName = 'DrawerOverlayBase';

export interface DrawerContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerContentBase = React.forwardRef<HTMLDivElement, DrawerContentBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="dialog" {...props} />
);
DrawerContentBase.displayName = 'DrawerContentBase';

export interface DrawerHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerHeaderBase = ({ ...props }: DrawerHeaderBaseProps) => <div {...props} />;
DrawerHeaderBase.displayName = 'DrawerHeaderBase';

export interface DrawerFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerFooterBase = ({ ...props }: DrawerFooterBaseProps) => <div {...props} />;
DrawerFooterBase.displayName = 'DrawerFooterBase';

export interface DrawerTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const DrawerTitleBase = React.forwardRef<HTMLHeadingElement, DrawerTitleBaseProps>(
  ({ ...props }, ref) => <h2 ref={ref} {...props} />
);
DrawerTitleBase.displayName = 'DrawerTitleBase';

export interface DrawerDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const DrawerDescriptionBase = React.forwardRef<HTMLParagraphElement, DrawerDescriptionBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
DrawerDescriptionBase.displayName = 'DrawerDescriptionBase';

export interface DrawerCloseBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DrawerCloseBase = React.forwardRef<HTMLButtonElement, DrawerCloseBaseProps>(
  ({ ...props }, ref) => <button ref={ref} {...props} />
);
DrawerCloseBase.displayName = 'DrawerCloseBase';
