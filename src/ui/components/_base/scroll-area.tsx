import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

/**
 * ScrollArea type variants
 */
export type ScrollAreaType =
  | 'default'
  | 'overlay'
  | 'minimal'
  | 'always'
  | 'unstyled';

/**
 * Scrollbar sizes
 * | Size | Width  |
 * | sm   | 6px    |
 * | md   | 10px   |
 * | lg   | 14px   |
 */
export type ScrollAreaSize = 'sm' | 'md' | 'lg';

// ============================================================================
// ScrollArea Root
// ============================================================================

export interface ScrollAreaBaseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>, 'type'> {
  /**
   * Visual structural type
   * - default: scroll as needed, auto-hide
   * - overlay: scrollbar overlays content
   * - minimal: thin, subtle scrollbar
   * - always: scrollbar always visible
   * @default 'default'
   */
  visualType?: ScrollAreaType;
  
  /**
   * Radix scrollbar type
   * @default 'hover'
   */
  scrollbarType?: 'auto' | 'always' | 'scroll' | 'hover';
  
  /**
   * Scrollbar size
   * @default 'md'
   */
  size?: ScrollAreaSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * ScrollAreaBase - Custom scrollable container
 * 
 * Replaces native scrollbars with styled ones.
 * 
 * Anatomy:
 * - ScrollArea (root)
 *   - ScrollAreaViewport (scrollable container)
 *   - ScrollBar horizontal
 *     - ScrollBarThumb
 *   - ScrollBar vertical
 *     - ScrollBarThumb
 *   - ScrollAreaCorner
 * 
 * Scrollbar visibility (Radix type prop):
 * - "auto": shows on hover/scroll, hides when idle
 * - "always": always visible
 * - "scroll": shows only while scrolling
 * - "hover": shows on hover
 * 
 * Accessibility:
 * - Keyboard scrolling still works
 * - Native scroll behavior preserved
 */
export const ScrollAreaBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaBaseProps
>(({ visualType = 'default', scrollbarType = 'hover', size = 'md', variant, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    type={scrollbarType}
    data-type={visualType}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
ScrollAreaBase.displayName = 'ScrollAreaBase';

// ============================================================================
// ScrollArea Viewport
// ============================================================================

export interface ScrollAreaViewportBaseProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport> {}

/**
 * ScrollAreaViewportBase - The scrollable viewport
 * 
 * Content goes inside here.
 */
export const ScrollAreaViewportBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  ScrollAreaViewportBaseProps
>((props, ref) => <ScrollAreaPrimitive.Viewport ref={ref} {...props} />);
ScrollAreaViewportBase.displayName = 'ScrollAreaViewportBase';

// ============================================================================
// ScrollBar
// ============================================================================

export interface ScrollBarBaseProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {}

/**
 * ScrollBarBase - The scrollbar track
 * 
 * Use orientation="horizontal" or "vertical"
 * 
 * States:
 * - default: subtle/transparent
 * - hover: visible
 * - active (dragging): highlighted
 */
export const ScrollBarBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarBaseProps
>((props, ref) => <ScrollAreaPrimitive.ScrollAreaScrollbar ref={ref} {...props} />);
ScrollBarBase.displayName = 'ScrollBarBase';

// ============================================================================
// ScrollBar Thumb
// ============================================================================

export interface ScrollBarThumbBaseProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaThumb> {}

/**
 * ScrollBarThumbBase - The draggable thumb
 */
export const ScrollBarThumbBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaThumb>,
  ScrollBarThumbBaseProps
>((props, ref) => <ScrollAreaPrimitive.ScrollAreaThumb ref={ref} {...props} />);
ScrollBarThumbBase.displayName = 'ScrollBarThumbBase';

// Alias for compatibility
export const ScrollAreaThumbBase = ScrollBarThumbBase;

// ============================================================================
// ScrollArea Corner
// ============================================================================

export interface ScrollAreaCornerBaseProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Corner> {}

/**
 * ScrollAreaCornerBase - Corner where scrollbars meet
 */
export const ScrollAreaCornerBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Corner>,
  ScrollAreaCornerBaseProps
>((props, ref) => <ScrollAreaPrimitive.Corner ref={ref} {...props} />);
ScrollAreaCornerBase.displayName = 'ScrollAreaCornerBase';
