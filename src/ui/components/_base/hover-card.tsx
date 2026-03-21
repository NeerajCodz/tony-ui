import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

/**
 * HoverCard type variants
 */
export type HoverCardType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'soft'
  | 'unstyled';

/**
 * HoverCard sizes
 * | Size | Min-width | Max-width | Padding |
 * | sm   | 200px     | 280px     | 12px    |
 * | md   | 280px     | 360px     | 16px    |
 * | lg   | 320px     | 480px     | 20px    |
 */
export type HoverCardSize = 'sm' | 'md' | 'lg';

// ============================================================================
// HoverCard Root
// ============================================================================

export interface HoverCardBaseProps extends HoverCardPrimitive.HoverCardProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: HoverCardType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: HoverCardSize;
}

/**
 * HoverCardBase - Rich content preview on hover
 * 
 * Unlike Tooltip (small text hints), HoverCard shows
 * rich content like user profiles, link previews, etc.
 * 
 * Behavior:
 * - Mouse enters trigger → opens after delay (openDelay)
 * - Mouse leaves → closes after delay (closeDelay)
 * - Can contain interactive elements (unlike tooltip)
 * 
 * Accessibility:
 * - Content is discoverable by screen readers
 * - Not keyboard accessible (use Popover for interactive content)
 */
export const HoverCardBase = HoverCardPrimitive.Root;
HoverCardBase.displayName = 'HoverCardBase';

// ============================================================================
// HoverCard Trigger
// ============================================================================

export interface HoverCardTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> {}

/**
 * HoverCardTriggerBase - Element that triggers hover card on hover
 */
export const HoverCardTriggerBase = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  HoverCardTriggerBaseProps
>((props, ref) => <HoverCardPrimitive.Trigger ref={ref} {...props} />);
HoverCardTriggerBase.displayName = 'HoverCardTriggerBase';

// ============================================================================
// HoverCard Portal
// ============================================================================

export interface HoverCardPortalBaseProps extends HoverCardPrimitive.HoverCardPortalProps {}

/**
 * HoverCardPortalBase - Portal for rendering outside DOM hierarchy
 */
export const HoverCardPortalBase = HoverCardPrimitive.Portal;

// ============================================================================
// HoverCard Content
// ============================================================================

export interface HoverCardContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: HoverCardType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: HoverCardSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * HoverCardContentBase - The floating content panel
 * 
 * Animation:
 * - Open: fade + scale from origin | --duration-fast
 * - Close: reverse
 * 
 * Position props:
 * - side: "top" | "right" | "bottom" | "left"
 * - align: "start" | "center" | "end"
 * - sideOffset / alignOffset
 * - avoidCollisions
 */
export const HoverCardContentBase = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
HoverCardContentBase.displayName = 'HoverCardContentBase';

// ============================================================================
// HoverCard Arrow
// ============================================================================

export interface HoverCardArrowBaseProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow> {}

/**
 * HoverCardArrowBase - Arrow pointing to trigger
 */
export const HoverCardArrowBase = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  HoverCardArrowBaseProps
>((props, ref) => <HoverCardPrimitive.Arrow ref={ref} {...props} />);
HoverCardArrowBase.displayName = 'HoverCardArrowBase';
