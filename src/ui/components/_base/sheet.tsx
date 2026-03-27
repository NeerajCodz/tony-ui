import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
/**
 * Sheet type variants
 */
export type SheetType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'unstyled';

/**
 * Sheet side positions
 */
export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * Sheet sizes
 * Width/height depends on side
 * | Size | Horizontal (left/right) | Vertical (top/bottom) |
 * | sm   | 320px                   | 240px                 |
 * | md   | 400px                   | 320px                 |
 * | lg   | 540px                   | 400px                 |
 * | xl   | 720px                   | 540px                 |
 * | full | 100%                    | 100%                  |
 */
export type SheetSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// ============================================================================
// Sheet Root
// ============================================================================

export interface SheetBaseProps extends SheetPrimitive.DialogProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: SheetType;
}

/**
 * SheetBase - Slide-out panel from screen edge
 * 
 * Similar to Dialog but slides in from the edge.
 * Common uses: mobile navigation, filters, forms.
 * 
 * Behavior:
 * - Click trigger → slides in from side
 * - Click overlay or Escape → closes
 * - Focus trapped inside
 * 
 * Animation:
 * - Open: slide in from edge | --duration-normal
 * - Close: slide out
 * - Overlay fades in/out
 * 
 * Accessibility:
 * - role="dialog"
 * - aria-modal="true"
 * - Focus trapped
 */
export const SheetBase = SheetPrimitive.Root;
SheetBase.displayName = 'SheetBase';

// ============================================================================
// Sheet Trigger
// ============================================================================

export interface SheetTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger> {}

/**
 * SheetTriggerBase - Button that opens the sheet
 */
export const SheetTriggerBase = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Trigger>,
  SheetTriggerBaseProps
>((props, ref) => <SheetPrimitive.Trigger ref={ref} {...props} />);
SheetTriggerBase.displayName = 'SheetTriggerBase';

// ============================================================================
// Sheet Close
// ============================================================================

export interface SheetCloseBaseProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close> {}

/**
 * SheetCloseBase - Button that closes the sheet
 */
export const SheetCloseBase = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Close>,
  SheetCloseBaseProps
>((props, ref) => <SheetPrimitive.Close ref={ref} {...props} />);
SheetCloseBase.displayName = 'SheetCloseBase';

// ============================================================================
// Sheet Portal
// ============================================================================

export interface SheetPortalBaseProps extends SheetPrimitive.DialogPortalProps {}

/**
 * SheetPortalBase - Portal for rendering outside DOM hierarchy
 */
export const SheetPortalBase = SheetPrimitive.Portal;

// ============================================================================
// Sheet Overlay
// ============================================================================

export interface SheetOverlayBaseProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {}

/**
 * SheetOverlayBase - Backdrop overlay
 * 
 * Clicking closes the sheet.
 */
export const SheetOverlayBase = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  SheetOverlayBaseProps
>((props, ref) => <SheetPrimitive.Overlay ref={ref} {...props} />);
SheetOverlayBase.displayName = 'SheetOverlayBase';

// ============================================================================
// Sheet Content
// ============================================================================

export interface SheetContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  /**
   * Which edge the sheet slides from
   * @default 'right'
   */
  side?: SheetSide;
  
  /**
   * Size of the sheet
   * @default 'md'
   */
  size?: SheetSize;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: SheetType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SheetContentBase - The sliding panel
 * 
 * Slides in from the specified edge.
 */
export const SheetContentBase = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentBaseProps
>(({ side = 'right', size = 'md', type = 'default', variant, ...props }, ref) => (
  <SheetPrimitive.Content
    ref={ref}
    data-side={side}
    data-size={size}
    data-type={type}
    data-variant={variant}
    {...props}
  />
));
SheetContentBase.displayName = 'SheetContentBase';

// ============================================================================
// Sheet Header
// ============================================================================

export interface SheetHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SheetHeaderBase - Container for title and description
 */
export const SheetHeaderBase = React.forwardRef<HTMLDivElement, SheetHeaderBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SheetHeaderBase.displayName = 'SheetHeaderBase';

// ============================================================================
// Sheet Title
// ============================================================================

export interface SheetTitleBaseProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {}

/**
 * SheetTitleBase - Title of the sheet
 */
export const SheetTitleBase = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  SheetTitleBaseProps
>((props, ref) => <SheetPrimitive.Title ref={ref} {...props} />);
SheetTitleBase.displayName = 'SheetTitleBase';

// ============================================================================
// Sheet Description
// ============================================================================

export interface SheetDescriptionBaseProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {}

/**
 * SheetDescriptionBase - Description text
 */
export const SheetDescriptionBase = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  SheetDescriptionBaseProps
>((props, ref) => <SheetPrimitive.Description ref={ref} {...props} />);
SheetDescriptionBase.displayName = 'SheetDescriptionBase';

// ============================================================================
// Sheet Footer
// ============================================================================

export interface SheetFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SheetFooterBase - Container for action buttons
 */
export const SheetFooterBase = React.forwardRef<HTMLDivElement, SheetFooterBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SheetFooterBase.displayName = 'SheetFooterBase';

export { SheetPrimitive };
