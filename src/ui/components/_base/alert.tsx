import * as React from 'react';

/**
 * Alert semantic variants - what semantic color it communicates
 */
export type AlertVariant =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'destructive';

/**
 * Alert structural types - how borders, backgrounds, text weights are applied
 */
export type AlertType =
  | 'default'
  | 'outline'
  | 'solid'
  | 'soft'
  | 'tinted'
  | 'subtle'
  | 'elevated';

// ============================================================================
// Alert Root
// ============================================================================

export interface AlertBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Semantic variant - controls icon, border accent, bg tint
   * @default 'default'
   */
  variant?: AlertVariant;
  
  /**
   * Structural type
   * @default 'default'
   */
  type?: AlertType;
  
  /**
   * Whether the alert can be dismissed
   */
  dismissible?: boolean;
}

/**
 * AlertBase - Inline notification for important information
 * 
 * Anatomy:
 * <Alert>
 *   <AlertIcon> variant-matched icon
 *   <AlertContent>
 *     <AlertTitle>
 *     <AlertDescription>
 *   [AlertClose]
 * </Alert>
 * 
 * Accessibility:
 * - role="alert" (auto-announces) or role="status" (less urgent)
 * - Icon: aria-hidden
 * - Close: aria-label="Dismiss"
 */
export const AlertBase = React.forwardRef<HTMLDivElement, AlertBaseProps>(
  ({ variant = 'default', type = 'default', dismissible = false, role = 'alert', ...props }, ref) => (
    <div
      ref={ref}
      role={role}
      data-variant={variant}
      data-type={type}
      data-dismissible={dismissible ? '' : undefined}
      {...props}
    />
  )
);
AlertBase.displayName = 'AlertBase';

// ============================================================================
// Alert Icon
// ============================================================================

export interface AlertIconBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * AlertIconBase - Variant-matched icon container
 * 
 * Accessibility: aria-hidden="true"
 */
export const AlertIconBase = React.forwardRef<HTMLSpanElement, AlertIconBaseProps>(
  (props, ref) => <span ref={ref} aria-hidden="true" {...props} />
);
AlertIconBase.displayName = 'AlertIconBase';

// ============================================================================
// Alert Content
// ============================================================================

export interface AlertContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AlertContentBase - Container for title and description
 */
export const AlertContentBase = React.forwardRef<HTMLDivElement, AlertContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
AlertContentBase.displayName = 'AlertContentBase';

// ============================================================================
// Alert Title
// ============================================================================

export interface AlertTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * AlertTitleBase - Heading for the alert
 */
export const AlertTitleBase = React.forwardRef<HTMLHeadingElement, AlertTitleBaseProps>(
  (props, ref) => <h5 ref={ref} {...props} />
);
AlertTitleBase.displayName = 'AlertTitleBase';

// ============================================================================
// Alert Description
// ============================================================================

export interface AlertDescriptionBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AlertDescriptionBase - Description text
 */
export const AlertDescriptionBase = React.forwardRef<HTMLDivElement, AlertDescriptionBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
AlertDescriptionBase.displayName = 'AlertDescriptionBase';

// ============================================================================
// Alert Close
// ============================================================================

export interface AlertCloseBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * AlertCloseBase - Dismiss button
 * 
 * Accessibility: aria-label="Dismiss"
 */
export const AlertCloseBase = React.forwardRef<HTMLButtonElement, AlertCloseBaseProps>(
  (props, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label="Dismiss"
      {...props}
    />
  )
);
AlertCloseBase.displayName = 'AlertCloseBase';
