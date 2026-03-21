import * as React from 'react';

export interface ToastBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const ToastBase = React.forwardRef<HTMLDivElement, ToastBaseProps>(
  ({ variant = 'default', ...props }, ref) => (
    <div ref={ref} role="status" aria-live="polite" data-variant={variant} {...props} />
  )
);
ToastBase.displayName = 'ToastBase';

export interface ToastTitleBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToastTitleBase = React.forwardRef<HTMLDivElement, ToastTitleBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ToastTitleBase.displayName = 'ToastTitleBase';

export interface ToastDescriptionBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToastDescriptionBase = React.forwardRef<HTMLDivElement, ToastDescriptionBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ToastDescriptionBase.displayName = 'ToastDescriptionBase';

export interface ToastActionBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ToastActionBase = React.forwardRef<HTMLButtonElement, ToastActionBaseProps>(
  ({ ...props }, ref) => <button ref={ref} {...props} />
);
ToastActionBase.displayName = 'ToastActionBase';

export interface ToastCloseBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ToastCloseBase = React.forwardRef<HTMLButtonElement, ToastCloseBaseProps>(
  ({ ...props }, ref) => <button ref={ref} aria-label="Close" {...props} />
);
ToastCloseBase.displayName = 'ToastCloseBase';

export interface ToastViewportBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToastViewportBase = React.forwardRef<HTMLDivElement, ToastViewportBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ToastViewportBase.displayName = 'ToastViewportBase';

export interface ToastProviderBaseProps {
  children: React.ReactNode;
}

export const ToastProviderBase = ({ children }: ToastProviderBaseProps) => <>{children}</>;
ToastProviderBase.displayName = 'ToastProviderBase';
