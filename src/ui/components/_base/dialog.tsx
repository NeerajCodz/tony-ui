import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

/**
 * Dialog type variants
 */
export type DialogType =
  | 'default'
  | 'solid'
  | 'elevated'
  | 'contrast'
  | 'soft'
  | 'tinted'
  | 'neutral';

/**
 * Dialog sizes
 * sm: max-width 400px
 * md: max-width 500px (default)
 * lg: max-width 640px
 * xl: max-width 800px
 * full: max-width calc(100vw - 48px)
 */
export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// ============================================================================
// Dialog Root
// ============================================================================

export const DialogBase = DialogPrimitive.Root;

// ============================================================================
// Dialog Trigger
// ============================================================================

export const DialogTriggerBase = DialogPrimitive.Trigger;

// ============================================================================
// Dialog Portal
// ============================================================================

export const DialogPortalBase = DialogPrimitive.Portal;

// ============================================================================
// Dialog Close
// ============================================================================

export const DialogCloseBase = DialogPrimitive.Close;

// ============================================================================
// Dialog Overlay
// ============================================================================

export interface DialogOverlayBaseProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

/**
 * DialogOverlayBase - Full-screen backdrop
 * 
 * Animation:
 * - Open: opacity 0→0.6 | --duration-slow
 * 
 * Accessibility:
 * - aria-hidden="true"
 */
export const DialogOverlayBase = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayBaseProps
>((props, ref) => <DialogPrimitive.Overlay ref={ref} {...props} />);
DialogOverlayBase.displayName = 'DialogOverlayBase';

// ============================================================================
// Dialog Content
// ============================================================================

export interface DialogContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: DialogType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Size variant (max-width)
   * @default 'md'
   */
  size?: DialogSize;
}

/**
 * DialogContentBase - Centered dialog box
 * 
 * Animation:
 * - Open: opacity 0→1 + scale 0.95→1 + translateY(4px→0)
 *         duration: --duration-slower | ease: --ease-decelerate
 * - Close: scale 1→0.95, opacity 1→0
 *         duration: --duration-slow | ease: --ease-accelerate
 * 
 * Focus: Trapped inside. Opens to first focusable element.
 * 
 * Keyboard:
 * - Escape → close
 * - Tab cycles within
 * 
 * Accessibility:
 * - role="dialog", aria-modal="true"
 * - aria-labelledby, aria-describedby
 */
export const DialogContentBase = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentBaseProps
>(({ type = 'default', variant, size = 'md', ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
DialogContentBase.displayName = 'DialogContentBase';

// ============================================================================
// Dialog Header
// ============================================================================

export interface DialogHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DialogHeaderBase - Container for title and description
 */
export const DialogHeaderBase = React.forwardRef<HTMLDivElement, DialogHeaderBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
DialogHeaderBase.displayName = 'DialogHeaderBase';

// ============================================================================
// Dialog Footer
// ============================================================================

export interface DialogFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DialogFooterBase - Actions section
 */
export const DialogFooterBase = React.forwardRef<HTMLDivElement, DialogFooterBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
DialogFooterBase.displayName = 'DialogFooterBase';

// ============================================================================
// Dialog Title
// ============================================================================

export interface DialogTitleBaseProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

/**
 * DialogTitleBase - Heading (h3 scale)
 */
export const DialogTitleBase = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  DialogTitleBaseProps
>((props, ref) => <DialogPrimitive.Title ref={ref} {...props} />);
DialogTitleBase.displayName = 'DialogTitleBase';

// ============================================================================
// Dialog Description
// ============================================================================

export interface DialogDescriptionBaseProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

/**
 * DialogDescriptionBase - Secondary text
 */
export const DialogDescriptionBase = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  DialogDescriptionBaseProps
>((props, ref) => <DialogPrimitive.Description ref={ref} {...props} />);
DialogDescriptionBase.displayName = 'DialogDescriptionBase';
