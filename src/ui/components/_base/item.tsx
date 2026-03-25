import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

/**
 * Item type variants
 */
export type ItemType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'elevated'
  | 'flat'
  | 'unstyled';

/**
 * Item sizes
 */
export type ItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ============================================================================
// Item Root
// ============================================================================

export interface ItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: ItemType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ItemSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether item is interactive (clickable)
   * @default false
   */
  interactive?: boolean;
  
  /**
   * Whether item is selected
   * @default false
   */
  selected?: boolean;
  
  /**
   * Whether item is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * ItemBase - Generic list/grid item
 * 
 * A versatile item component for building lists, grids, menus, etc.
 * 
 * Anatomy:
 * - Item (root container)
 *   - ItemIndicator (selection/check indicator)
 *   - ItemIcon (leading icon)
 *   - ItemContent
 *     - ItemTitle
 *     - ItemDescription
 *   - ItemBadge (trailing badge)
 *   - ItemAction (trailing action button)
 */
export const ItemBase = React.forwardRef<HTMLDivElement, ItemBaseProps>(
  ({ type = 'default', size = 'md', variant, interactive = false, selected = false, disabled = false, ...props }, ref) => (
    <div
      ref={ref}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive && !disabled ? 0 : undefined}
      aria-selected={selected || undefined}
      aria-disabled={disabled || undefined}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-interactive={interactive || undefined}
      data-selected={selected || undefined}
      data-disabled={disabled || undefined}
      {...props}
    />
  )
);
ItemBase.displayName = 'ItemBase';

// ============================================================================
// Item Indicator
// ============================================================================

export interface ItemIndicatorBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * ItemIndicatorBase - Selection/check indicator
 */
export const ItemIndicatorBase = React.forwardRef<HTMLSpanElement, ItemIndicatorBaseProps>(
  (props, ref) => <span ref={ref} aria-hidden="true" {...props} />
);
ItemIndicatorBase.displayName = 'ItemIndicatorBase';

// ============================================================================
// Item Icon
// ============================================================================

export interface ItemIconBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * ItemIconBase - Leading icon
 */
export const ItemIconBase = React.forwardRef<HTMLSpanElement, ItemIconBaseProps>(
  (props, ref) => <span ref={ref} aria-hidden="true" {...props} />
);
ItemIconBase.displayName = 'ItemIconBase';

// ============================================================================
// Item Content
// ============================================================================

export interface ItemContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ItemContentBase - Container for title and description
 */
export const ItemContentBase = React.forwardRef<HTMLDivElement, ItemContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
ItemContentBase.displayName = 'ItemContentBase';

// ============================================================================
// Item Title
// ============================================================================

export interface ItemTitleBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * ItemTitleBase - Item title/label
 */
export const ItemTitleBase = React.forwardRef<HTMLSpanElement, ItemTitleBaseProps>(
  (props, ref) => <span ref={ref} {...props} />
);
ItemTitleBase.displayName = 'ItemTitleBase';

// ============================================================================
// Item Description
// ============================================================================

export interface ItemDescriptionBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * ItemDescriptionBase - Secondary text
 */
export const ItemDescriptionBase = React.forwardRef<HTMLSpanElement, ItemDescriptionBaseProps>(
  (props, ref) => <span ref={ref} {...props} />
);
ItemDescriptionBase.displayName = 'ItemDescriptionBase';

// ============================================================================
// Item Badge
// ============================================================================

export interface ItemBadgeBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * ItemBadgeBase - Trailing badge
 */
export const ItemBadgeBase = React.forwardRef<HTMLSpanElement, ItemBadgeBaseProps>(
  (props, ref) => <span ref={ref} {...props} />
);
ItemBadgeBase.displayName = 'ItemBadgeBase';

// ============================================================================
// Item Action
// ============================================================================

export interface ItemActionBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * ItemActionBase - Trailing action button
 */
export const ItemActionBase = React.forwardRef<HTMLButtonElement, ItemActionBaseProps>(
  (props, ref) => <button ref={ref} type="button" {...props} />
);
ItemActionBase.displayName = 'ItemActionBase';

export { Slot };
