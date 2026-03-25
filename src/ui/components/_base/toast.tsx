import * as React from 'react';

/**
 * Toast semantic variants
 */
export type ToastVariant =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'destructive';

/**
 * Toast type variants (visual structure)
 */
export type ToastType =
  | 'default'
  | 'outline'
  | 'solid'
  | 'soft'
  | 'unstyled'
  // Compatibility for legacy wrappers that still pass Radix toast types
  | 'foreground'
  | 'background';

/**
 * Toast positions
 */
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

// ============================================================================
// Toast Provider
// ============================================================================

export interface ToastProviderBaseProps {
  children: React.ReactNode;
  
  /**
   * Default duration in ms before auto-dismiss
   * @default 5000
   */
  duration?: number;
  
  /**
   * Maximum number of visible toasts
   * @default 5
   */
  limit?: number;
  
  /**
   * Position of toast container
   * @default 'bottom-right'
   */
  position?: ToastPosition;
  
  /**
   * Whether to pause timers on hover
   * @default true
   */
  pauseOnHover?: boolean;
}

/**
 * ToastProviderBase - Context provider for toast notifications
 */
export const ToastProviderBase = ({
  children,
  duration = 5000,
  limit = 5,
  position = 'bottom-right',
  pauseOnHover = true,
}: ToastProviderBaseProps) => <>{children}</>;
ToastProviderBase.displayName = 'ToastProviderBase';

// ============================================================================
// Toast Viewport
// ============================================================================

export interface ToastViewportBaseProps extends React.HTMLAttributes<HTMLOListElement> {
  /**
   * Position of the viewport
   * @default 'bottom-right'
   */
  position?: ToastPosition;
  
  /**
   * Maximum width of toasts
   * @default 420
   */
  maxWidth?: number;
}

/**
 * ToastViewportBase - Container for toast notifications
 * 
 * Fixed position container that holds toasts.
 */
export const ToastViewportBase = React.forwardRef<HTMLOListElement, ToastViewportBaseProps>(
  ({ position = 'bottom-right', maxWidth = 420, style, ...props }, ref) => (
    <ol
      ref={ref}
      role="region"
      aria-label="Notifications"
      data-position={position}
      style={{ maxWidth, ...style }}
      {...props}
    />
  )
);
ToastViewportBase.displayName = 'ToastViewportBase';

// ============================================================================
// Toast Root
// ============================================================================

export interface ToastBaseProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Semantic variant (color meaning)
   * @default 'default'
   */
  variant?: ToastVariant;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: ToastType;
  
  /**
   * Duration in ms (0 = no auto-dismiss)
   */
  duration?: number;
  
  /**
   * Whether the toast is open
   */
  open?: boolean;
  
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
}

/**
 * ToastBase - Individual toast notification
 * 
 * Anatomy:
 * - Toast (root)
 *   - ToastIcon (optional leading icon)
 *   - ToastContent
 *     - ToastTitle
 *     - ToastDescription
 *   - ToastAction (optional action button)
 *   - ToastClose (dismiss button)
 * 
 * Animation:
 * - Enter: slide in from edge + fade | --duration-normal
 * - Exit: slide out + fade
 * 
 * Accessibility:
 * - role="status" for informational
 * - role="alert" for errors/warnings
 * - aria-live appropriate for variant
 */
export const ToastBase = React.forwardRef<HTMLLIElement, ToastBaseProps>(
  ({ variant = 'default', type = 'default', open = true, ...props }, ref) => {
    const isAlert = variant === 'error' || variant === 'destructive' || variant === 'warning';
    
    return (
      <li
        ref={ref}
        role={isAlert ? 'alert' : 'status'}
        aria-live={isAlert ? 'assertive' : 'polite'}
        data-variant={variant}
        data-type={type}
        data-state={open ? 'open' : 'closed'}
        {...props}
      />
    );
  }
);
ToastBase.displayName = 'ToastBase';

// ============================================================================
// Toast Icon
// ============================================================================

export interface ToastIconBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ToastIconBase - Leading icon (success checkmark, error X, etc.)
 */
export const ToastIconBase = React.forwardRef<HTMLDivElement, ToastIconBaseProps>(
  (props, ref) => <div ref={ref} aria-hidden="true" {...props} />
);
ToastIconBase.displayName = 'ToastIconBase';

// ============================================================================
// Toast Content
// ============================================================================

export interface ToastContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ToastContentBase - Container for title and description
 */
export const ToastContentBase = React.forwardRef<HTMLDivElement, ToastContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
ToastContentBase.displayName = 'ToastContentBase';

// ============================================================================
// Toast Title
// ============================================================================

export interface ToastTitleBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ToastTitleBase - Toast title/heading
 */
export const ToastTitleBase = React.forwardRef<HTMLDivElement, ToastTitleBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
ToastTitleBase.displayName = 'ToastTitleBase';

// ============================================================================
// Toast Description
// ============================================================================

export interface ToastDescriptionBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ToastDescriptionBase - Toast description/body text
 */
export const ToastDescriptionBase = React.forwardRef<HTMLDivElement, ToastDescriptionBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
ToastDescriptionBase.displayName = 'ToastDescriptionBase';

// ============================================================================
// Toast Action
// ============================================================================

export interface ToastActionBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Accessible label for screen readers
   */
  altText: string;
}

/**
 * ToastActionBase - Action button in toast
 */
export const ToastActionBase = React.forwardRef<HTMLButtonElement, ToastActionBaseProps>(
  ({ altText, ...props }, ref) => (
    <button ref={ref} type="button" aria-label={altText} {...props} />
  )
);
ToastActionBase.displayName = 'ToastActionBase';

// ============================================================================
// Toast Close
// ============================================================================

export interface ToastCloseBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * ToastCloseBase - Dismiss button
 */
export const ToastCloseBase = React.forwardRef<HTMLButtonElement, ToastCloseBaseProps>(
  (props, ref) => (
    <button ref={ref} type="button" aria-label="Dismiss" {...props} />
  )
);
ToastCloseBase.displayName = 'ToastCloseBase';

export type ToastProps = ToastBaseProps;
export type ToastActionElement = React.ReactElement<typeof ToastActionBase>;

export const ToastPrimitives = {
  Provider: ToastProviderBase,
  Viewport: ToastViewportBase,
  Root: ToastBase,
  Title: ToastTitleBase,
  Description: ToastDescriptionBase,
  Action: ToastActionBase,
  Close: ToastCloseBase,
};
export const ToastPrimitive = ToastPrimitives;
