import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

/**
 * Collapsible type variants
 */
export type CollapsibleType =
  | 'default'
  | 'outline'
  | 'soft'
  | 'neutral'
  | 'unstyled';

// ============================================================================
// Collapsible Root
// ============================================================================

export interface CollapsibleBaseProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: CollapsibleType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * CollapsibleBase - Show/hide content with expand/collapse
 * 
 * Simpler than Accordion - just one section with open/close.
 * 
 * Anatomy:
 * - Collapsible (root)
 *   - CollapsibleTrigger (button to toggle)
 *   - CollapsibleContent (collapsible region)
 * 
 * Props:
 * - open / onOpenChange: controlled state
 * - defaultOpen: uncontrolled initial state
 * - disabled: prevents toggling
 * 
 * Animation:
 * - Expand: height 0→auto | --duration-normal
 * - Collapse: height auto→0
 * - Content fades in/out
 * 
 * Accessibility:
 * - Trigger: aria-expanded, aria-controls
 * - Content: id matches aria-controls
 */
export const CollapsibleBase = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleBaseProps
>(({ type = 'default', variant, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    data-type={type}
    data-variant={variant}
    {...props}
  />
));
CollapsibleBase.displayName = 'CollapsibleBase';

// ============================================================================
// Collapsible Trigger
// ============================================================================

export interface CollapsibleTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> {}

/**
 * CollapsibleTriggerBase - Button that toggles content visibility
 * 
 * Typically contains label and chevron indicator
 */
export const CollapsibleTriggerBase = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Trigger>,
  CollapsibleTriggerBaseProps
>((props, ref) => <CollapsiblePrimitive.Trigger ref={ref} {...props} />);
CollapsibleTriggerBase.displayName = 'CollapsibleTriggerBase';

// ============================================================================
// Collapsible Content
// ============================================================================

export interface CollapsibleContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {
  /**
   * Whether to force mount content (even when closed)
   * Useful when content needs to be in DOM for SEO or measurements
   */
  forceMount?: true;
}

/**
 * CollapsibleContentBase - The collapsible content region
 * 
 * Animates height and opacity on open/close.
 */
export const CollapsibleContentBase = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentBaseProps
>((props, ref) => <CollapsiblePrimitive.Content ref={ref} {...props} />);
CollapsibleContentBase.displayName = 'CollapsibleContentBase';
