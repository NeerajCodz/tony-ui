import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
/**
 * Tooltip sizes
 * sm: max-width 200px (compact)
 * md: max-width 300px (default)
 */
export type TooltipSize = 'sm' | 'md';

// ============================================================================
// Tooltip Provider
// ============================================================================

export interface TooltipProviderBaseProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> {
  /**
   * Delay before showing tooltip (ms)
   * @default 400
   */
  delayDuration?: number;
  
  /**
   * Skip delay when moving between tooltips
   * @default 300
   */
  skipDelayDuration?: number;
}

/**
 * TooltipProviderBase - Root context for tooltips
 * 
 * Controls delay behavior across all tooltips.
 */
export const TooltipProviderBase = TooltipPrimitive.Provider;

// ============================================================================
// Tooltip Root
// ============================================================================

export const TooltipBase = TooltipPrimitive.Root;

// ============================================================================
// Tooltip Trigger
// ============================================================================

export interface TooltipTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> {}

/**
 * TooltipTriggerBase - Wraps trigger element
 * 
 * IMPORTANT: Use asChild to avoid wrapper DOM.
 * 
 * Rules:
 * - NEVER wrap a disabled element (AT cannot access tooltip)
 * - Instead: wrap a <span> around the disabled element
 */
export const TooltipTriggerBase = TooltipPrimitive.Trigger;

// ============================================================================
// Tooltip Content
// ============================================================================

export interface TooltipContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  /**
   * Size variant (max-width)
   * @default 'md'
   */
  size?: TooltipSize;
}

/**
 * TooltipContentBase - Floating tooltip content
 * 
 * Content is text ONLY — no interactive elements.
 * 
 * Behavior:
 * - Hover trigger → open after delayDuration
 * - Mouse leave → close immediately
 * - Focus trigger → open immediately (no delay)
 * - Blur trigger → close
 * - Escape → close without losing focus
 * 
 * Animation:
 * - Open: opacity 0→1 + scale 0.96→1 | --duration-fast
 * - Close: opacity 1→0 | --duration-instant
 * 
 * Accessibility:
 * - role="tooltip"
 * - Trigger: aria-describedby="[tooltip-id]" (ALWAYS present)
 * - Content: id matching aria-describedby
 * - Never interactive → never needs focus management
 */
export const TooltipContentBase = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentBaseProps
>(({ size = 'md', sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    data-size={size}
    {...props}
  />
));
TooltipContentBase.displayName = 'TooltipContentBase';

// ============================================================================
// Tooltip Arrow
// ============================================================================

export interface TooltipArrowBaseProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> {}

/**
 * TooltipArrowBase - Pointing arrow indicator
 * 
 * Same fill as content bg
 */
export const TooltipArrowBase = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Arrow>,
  TooltipArrowBaseProps
>((props, ref) => <TooltipPrimitive.Arrow ref={ref} {...props} />);
TooltipArrowBase.displayName = 'TooltipArrowBase';

// ============================================================================
// Tooltip Portal
// ============================================================================

export const TooltipPortalBase = TooltipPrimitive.Portal;

export { TooltipPrimitive };
