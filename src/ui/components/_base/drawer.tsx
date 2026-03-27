import * as React from 'react';

/**
 * Drawer type variants
 */
export type DrawerType =
  | 'default'
  | 'outline'
  | 'unstyled';

/**
 * Drawer side/anchor position
 */
export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

/**
 * Drawer sizes
 */
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// ============================================================================
// Drawer Root
// ============================================================================

export interface DrawerBaseProps {
  /**
   * Whether the drawer is open
   */
  open?: boolean;
  
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Children (should include Trigger and Content)
   */
  children: React.ReactNode;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: DrawerType;
  
  /**
   * Which side the drawer slides from
   * @default 'right'
   */
  side?: DrawerSide;
  
  /**
   * Whether to lock body scroll when open
   * @default true
   */
  modal?: boolean;
  
  /**
   * Whether drawer should snap to open/close positions
   * @default true
   */
  shouldScaleBackground?: boolean;
}

/**
 * DrawerBase - Slide-out drawer (mobile bottom sheet)
 * 
 * Similar to Sheet but with touch gestures and snap points.
 * Based on Vaul drawer library.
 * 
 * Anatomy:
 * - Drawer (root)
 *   - DrawerTrigger
 *   - DrawerPortal
 *     - DrawerOverlay
 *     - DrawerContent
 *       - DrawerHandle (drag handle for mobile)
 *       - DrawerHeader
 *         - DrawerTitle
 *         - DrawerDescription
 *       - Content...
 *       - DrawerFooter
 *       - DrawerClose
 * 
 * Accessibility:
 * - role="dialog"
 * - aria-modal="true"
 * - Focus trap when open
 * - Esc to close
 */
export const DrawerBase = ({ children }: DrawerBaseProps) => <>{children}</>;
DrawerBase.displayName = 'DrawerBase';

// ============================================================================
// Drawer Trigger
// ============================================================================

export interface DrawerTriggerBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Render as child element (Slot)
   */
  asChild?: boolean;
}

/**
 * DrawerTriggerBase - Button that opens the drawer
 */
export const DrawerTriggerBase = React.forwardRef<HTMLButtonElement, DrawerTriggerBaseProps>(
  ({ asChild, ...props }, ref) => (
    <button ref={ref} type="button" {...props} />
  )
);
DrawerTriggerBase.displayName = 'DrawerTriggerBase';

// ============================================================================
// Drawer Portal
// ============================================================================

export interface DrawerPortalBaseProps {
  children: React.ReactNode;
  /**
   * Container for the portal
   */
  container?: HTMLElement;
}

/**
 * DrawerPortalBase - Portal to render drawer outside DOM hierarchy
 */
export const DrawerPortalBase = ({ children }: DrawerPortalBaseProps) => <>{children}</>;
DrawerPortalBase.displayName = 'DrawerPortalBase';

// ============================================================================
// Drawer Overlay
// ============================================================================

export interface DrawerOverlayBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DrawerOverlayBase - Background overlay
 */
export const DrawerOverlayBase = React.forwardRef<HTMLDivElement, DrawerOverlayBaseProps>(
  (props, ref) => (
    <div ref={ref} aria-hidden="true" data-state="open" {...props} />
  )
);
DrawerOverlayBase.displayName = 'DrawerOverlayBase';

// ============================================================================
// Drawer Content
// ============================================================================

export interface DrawerContentBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag'> {
  /**
   * Which side the drawer slides from
   * @default 'right'
   */
  side?: DrawerSide;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: DrawerSize;
  
  /**
   * Called when user drags the drawer
   */
  onDrawerDrag?: (event: React.PointerEvent, percentageDragged: number) => void;
  
  /**
   * Called when drawer is released after drag
   */
  onDrawerRelease?: (event: React.PointerEvent, open: boolean) => void;
}

/**
 * DrawerContentBase - Drawer content panel
 */
export const DrawerContentBase = React.forwardRef<HTMLDivElement, DrawerContentBaseProps>(
  ({ side = 'right', size = 'md', ...props }, ref) => (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      data-side={side}
      data-size={size}
      data-state="open"
      {...props}
    />
  )
);
DrawerContentBase.displayName = 'DrawerContentBase';

// ============================================================================
// Drawer Handle
// ============================================================================

export interface DrawerHandleBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DrawerHandleBase - Drag handle (pill-shaped indicator)
 */
export const DrawerHandleBase = React.forwardRef<HTMLDivElement, DrawerHandleBaseProps>(
  (props, ref) => (
    <div ref={ref} aria-hidden="true" {...props} />
  )
);
DrawerHandleBase.displayName = 'DrawerHandleBase';

// ============================================================================
// Drawer Header
// ============================================================================

export interface DrawerHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DrawerHeaderBase - Header section
 */
export const DrawerHeaderBase = React.forwardRef<HTMLDivElement, DrawerHeaderBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
DrawerHeaderBase.displayName = 'DrawerHeaderBase';

// ============================================================================
// Drawer Footer
// ============================================================================

export interface DrawerFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DrawerFooterBase - Footer section
 */
export const DrawerFooterBase = React.forwardRef<HTMLDivElement, DrawerFooterBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
DrawerFooterBase.displayName = 'DrawerFooterBase';

// ============================================================================
// Drawer Title
// ============================================================================

export interface DrawerTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * DrawerTitleBase - Drawer title
 */
export const DrawerTitleBase = React.forwardRef<HTMLHeadingElement, DrawerTitleBaseProps>(
  (props, ref) => <h2 ref={ref} {...props} />
);
DrawerTitleBase.displayName = 'DrawerTitleBase';

// ============================================================================
// Drawer Description
// ============================================================================

export interface DrawerDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * DrawerDescriptionBase - Drawer description
 */
export const DrawerDescriptionBase = React.forwardRef<HTMLParagraphElement, DrawerDescriptionBaseProps>(
  (props, ref) => <p ref={ref} {...props} />
);
DrawerDescriptionBase.displayName = 'DrawerDescriptionBase';

// ============================================================================
// Drawer Close
// ============================================================================

export interface DrawerCloseBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Render as child element (Slot)
   */
  asChild?: boolean;
}

/**
 * DrawerCloseBase - Close button
 */
export const DrawerCloseBase = React.forwardRef<HTMLButtonElement, DrawerCloseBaseProps>(
  ({ asChild, ...props }, ref) => (
    <button ref={ref} type="button" aria-label="Close" {...props} />
  )
);
DrawerCloseBase.displayName = 'DrawerCloseBase';

// Bridge export so version components consume Vaul primitives via _base only
export { Drawer as DrawerPrimitive } from 'vaul';
