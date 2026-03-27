import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';
/**
 * AlertDialog type variants
 */
export type AlertDialogType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'unstyled';

/**
 * AlertDialog sizes
 * | Size | Width    | Padding |
 * | sm   | 320px    | 16px    |
 * | md   | 400px    | 24px    |
 * | lg   | 520px    | 32px    |
 */
export type AlertDialogSize = 'sm' | 'md' | 'lg';

// ============================================================================
// AlertDialog Root
// ============================================================================

export interface AlertDialogBaseProps extends AlertDialogPrimitive.AlertDialogProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: AlertDialogType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: AlertDialogSize;
}

/**
 * AlertDialogBase - Modal dialog for critical confirmations
 * 
 * Unlike Dialog, AlertDialog:
 * - Cannot be dismissed by clicking outside
 * - Cannot be dismissed with Escape key
 * - Requires explicit action (Confirm/Cancel)
 * - Used for destructive or irreversible actions
 * 
 * Accessibility:
 * - role="alertdialog"
 * - Focus trapped inside
 * - Initial focus goes to least destructive action
 * - Screen reader announces as alert
 */
export const AlertDialogBase = AlertDialogPrimitive.Root;
AlertDialogBase.displayName = 'AlertDialogBase';

// ============================================================================
// AlertDialog Trigger
// ============================================================================

export interface AlertDialogTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger> {}

/**
 * AlertDialogTriggerBase - Button that opens the alert dialog
 */
export const AlertDialogTriggerBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Trigger>,
  AlertDialogTriggerBaseProps
>((props, ref) => <AlertDialogPrimitive.Trigger ref={ref} {...props} />);
AlertDialogTriggerBase.displayName = 'AlertDialogTriggerBase';

// ============================================================================
// AlertDialog Portal
// ============================================================================

export interface AlertDialogPortalBaseProps extends AlertDialogPrimitive.AlertDialogPortalProps {}

/**
 * AlertDialogPortalBase - Portal for rendering outside DOM hierarchy
 */
export const AlertDialogPortalBase = AlertDialogPrimitive.Portal;

// ============================================================================
// AlertDialog Overlay
// ============================================================================

export interface AlertDialogOverlayBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {}

/**
 * AlertDialogOverlayBase - Backdrop overlay
 * 
 * Note: Does NOT close dialog on click (unlike regular Dialog)
 */
export const AlertDialogOverlayBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlayBaseProps
>((props, ref) => <AlertDialogPrimitive.Overlay ref={ref} {...props} />);
AlertDialogOverlayBase.displayName = 'AlertDialogOverlayBase';

// ============================================================================
// AlertDialog Content
// ============================================================================

export interface AlertDialogContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: AlertDialogType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: AlertDialogSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * AlertDialogContentBase - The modal content panel
 * 
 * Animation:
 * - Open: fade + scale from 0.95→1 | --duration-normal
 * - Close: reverse
 * - With overlay backdrop fade
 */
export const AlertDialogContentBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <AlertDialogPrimitive.Content
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
AlertDialogContentBase.displayName = 'AlertDialogContentBase';

// ============================================================================
// AlertDialog Header
// ============================================================================

export interface AlertDialogHeaderBaseProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AlertDialogHeaderBase - Container for title and description
 */
export const AlertDialogHeaderBase = React.forwardRef<
  HTMLDivElement,
  AlertDialogHeaderBaseProps
>((props, ref) => <div ref={ref} {...props} />);
AlertDialogHeaderBase.displayName = 'AlertDialogHeaderBase';

// ============================================================================
// AlertDialog Title
// ============================================================================

export interface AlertDialogTitleBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {}

/**
 * AlertDialogTitleBase - Title of the alert dialog
 * 
 * Should clearly describe the action being confirmed
 */
export const AlertDialogTitleBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleBaseProps
>((props, ref) => <AlertDialogPrimitive.Title ref={ref} {...props} />);
AlertDialogTitleBase.displayName = 'AlertDialogTitleBase';

// ============================================================================
// AlertDialog Description
// ============================================================================

export interface AlertDialogDescriptionBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> {}

/**
 * AlertDialogDescriptionBase - Description/explanation text
 * 
 * Provides additional context about consequences
 */
export const AlertDialogDescriptionBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescriptionBaseProps
>((props, ref) => <AlertDialogPrimitive.Description ref={ref} {...props} />);
AlertDialogDescriptionBase.displayName = 'AlertDialogDescriptionBase';

// ============================================================================
// AlertDialog Footer
// ============================================================================

export interface AlertDialogFooterBaseProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AlertDialogFooterBase - Container for action buttons
 * 
 * Typically contains Cancel and Action buttons
 */
export const AlertDialogFooterBase = React.forwardRef<
  HTMLDivElement,
  AlertDialogFooterBaseProps
>((props, ref) => <div ref={ref} {...props} />);
AlertDialogFooterBase.displayName = 'AlertDialogFooterBase';

// ============================================================================
// AlertDialog Action
// ============================================================================

export interface AlertDialogActionBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {}

/**
 * AlertDialogActionBase - Confirm/proceed button
 * 
 * Typically styled as destructive for dangerous actions.
 * Should NOT have initial focus for destructive actions.
 */
export const AlertDialogActionBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionBaseProps
>((props, ref) => <AlertDialogPrimitive.Action ref={ref} {...props} />);
AlertDialogActionBase.displayName = 'AlertDialogActionBase';

// ============================================================================
// AlertDialog Cancel
// ============================================================================

export interface AlertDialogCancelBaseProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {}

/**
 * AlertDialogCancelBase - Cancel/dismiss button
 * 
 * Should receive initial focus (least destructive action)
 */
export const AlertDialogCancelBase = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelBaseProps
>((props, ref) => <AlertDialogPrimitive.Cancel ref={ref} {...props} />);
AlertDialogCancelBase.displayName = 'AlertDialogCancelBase';

export { AlertDialogPrimitive };
