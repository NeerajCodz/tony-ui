import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

/**
 * Popover type variants
 */
export type PopoverType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'soft'
  | 'unstyled';

/**
 * Popover sizes
 * | Size | Min-width | Max-width | Padding |
 * | sm   | 200px     | 280px     | 12px    |
 * | md   | 240px     | 360px     | 16px    |
 * | lg   | 300px     | 480px     | 20px    |
 */
export type PopoverSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Popover Root
// ============================================================================

export interface PopoverBaseProps extends PopoverPrimitive.PopoverProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: PopoverType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: PopoverSize;
}

/**
 * PopoverBase - Floating content triggered by click
 * 
 * Unlike Tooltip (hover), Popover is click-triggered
 * and can contain interactive content.
 * 
 * Behavior:
 * - Click trigger → opens
 * - Click outside OR Escape → closes
 * - Focus trap inside popover
 * 
 * Accessibility:
 * - Trigger gets aria-expanded, aria-haspopup
 * - Content: role="dialog" or "alertdialog"
 */
export const PopoverBase = PopoverPrimitive.Root;
PopoverBase.displayName = 'PopoverBase';

// ============================================================================
// Popover Trigger
// ============================================================================

export interface PopoverTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}

/**
 * PopoverTriggerBase - Element that triggers the popover
 * 
 * Uses asChild to compose with your button
 */
export const PopoverTriggerBase = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerBaseProps
>((props, ref) => <PopoverPrimitive.Trigger ref={ref} {...props} />);
PopoverTriggerBase.displayName = 'PopoverTriggerBase';

// ============================================================================
// Popover Anchor
// ============================================================================

export interface PopoverAnchorBaseProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor> {}

/**
 * PopoverAnchorBase - Alternative anchor point (when trigger ≠ anchor)
 */
export const PopoverAnchorBase = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Anchor>,
  PopoverAnchorBaseProps
>((props, ref) => <PopoverPrimitive.Anchor ref={ref} {...props} />);
PopoverAnchorBase.displayName = 'PopoverAnchorBase';

// ============================================================================
// Popover Portal
// ============================================================================

export interface PopoverPortalBaseProps extends PopoverPrimitive.PopoverPortalProps {}

/**
 * PopoverPortalBase - Portal for rendering outside DOM hierarchy
 */
export const PopoverPortalBase = PopoverPrimitive.Portal;

// ============================================================================
// Popover Content
// ============================================================================

export interface PopoverContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: PopoverType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: PopoverSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * PopoverContentBase - The floating content panel
 * 
 * Animation:
 * - Open: fade-in + scale from 0.95→1 | --duration-fast
 * - Close: fade-out + scale 1→0.95
 * - Transform origin based on side/align
 * 
 * Position props:
 * - side: "top" | "right" | "bottom" | "left"
 * - align: "start" | "center" | "end"
 * - sideOffset / alignOffset
 * - avoidCollisions
 */
export const PopoverContentBase = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
PopoverContentBase.displayName = 'PopoverContentBase';

// ============================================================================
// Popover Arrow
// ============================================================================

export interface PopoverArrowBaseProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> {}

/**
 * PopoverArrowBase - Visual arrow pointing to trigger
 */
export const PopoverArrowBase = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  PopoverArrowBaseProps
>((props, ref) => <PopoverPrimitive.Arrow ref={ref} {...props} />);
PopoverArrowBase.displayName = 'PopoverArrowBase';

// ============================================================================
// Popover Close
// ============================================================================

export interface PopoverCloseBaseProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> {}

/**
 * PopoverCloseBase - Button that closes the popover
 */
export const PopoverCloseBase = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  PopoverCloseBaseProps
>((props, ref) => <PopoverPrimitive.Close ref={ref} {...props} />);
PopoverCloseBase.displayName = 'PopoverCloseBase';
