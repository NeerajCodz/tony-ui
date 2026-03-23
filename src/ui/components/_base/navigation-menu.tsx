import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

/**
 * NavigationMenu type variants
 */
export type NavigationMenuType =
  | 'default'
  | 'outline'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * NavigationMenu sizes
 * | Size | Item height | Font  |
 * | sm   | 32px        | 14px  |
 * | md   | 40px        | 16px  |
 * | lg   | 48px        | 18px  |
 */
export type NavigationMenuSize = 'sm' | 'md' | 'lg';

// ============================================================================
// NavigationMenu Root
// ============================================================================

export interface NavigationMenuBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: NavigationMenuType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: NavigationMenuSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * NavigationMenuBase - Horizontal navigation with mega-menu dropdowns
 * 
 * For website navigation with rich dropdown content.
 * 
 * Structure:
 * - NavigationMenu (root)
 *   - NavigationMenuList
 *     - NavigationMenuItem
 *       - NavigationMenuTrigger (opens dropdown)
 *       - NavigationMenuContent (dropdown panel)
 *       - NavigationMenuLink (direct link)
 *   - NavigationMenuViewport (renders content)
 *   - NavigationMenuIndicator (animated indicator)
 * 
 * Keyboard:
 * - Tab → focuses triggers
 * - Enter/Space → opens/closes dropdown
 * - ↑/↓ → moves within dropdown
 * - Escape → closes dropdown
 * 
 * Accessibility:
 * - role="navigation" on root
 * - Triggers have aria-expanded
 */
export const NavigationMenuBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
NavigationMenuBase.displayName = 'NavigationMenuBase';

// ============================================================================
// NavigationMenu List
// ============================================================================

export interface NavigationMenuListBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> {}

/**
 * NavigationMenuListBase - Container for navigation items
 */
export const NavigationMenuListBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListBaseProps
>((props, ref) => <NavigationMenuPrimitive.List ref={ref} {...props} />);
NavigationMenuListBase.displayName = 'NavigationMenuListBase';

// ============================================================================
// NavigationMenu Item
// ============================================================================

export interface NavigationMenuItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> {}

/**
 * NavigationMenuItemBase - Wrapper for each navigation item
 */
export const NavigationMenuItemBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Item>,
  NavigationMenuItemBaseProps
>((props, ref) => <NavigationMenuPrimitive.Item ref={ref} {...props} />);
NavigationMenuItemBase.displayName = 'NavigationMenuItemBase';

// ============================================================================
// NavigationMenu Trigger
// ============================================================================

export interface NavigationMenuTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> {}

/**
 * NavigationMenuTriggerBase - Button that opens dropdown content
 * 
 * Shows chevron indicator by default.
 * 
 * States:
 * - default: transparent
 * - hover: subtle background
 * - open: accent/active state
 * - focus: focus ring
 */
export const NavigationMenuTriggerBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerBaseProps
>((props, ref) => <NavigationMenuPrimitive.Trigger ref={ref} {...props} />);
NavigationMenuTriggerBase.displayName = 'NavigationMenuTriggerBase';

// ============================================================================
// NavigationMenu Content
// ============================================================================

export interface NavigationMenuContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> {}

/**
 * NavigationMenuContentBase - Dropdown content panel
 * 
 * Can contain rich content layouts (mega-menu style).
 * 
 * Animation:
 * - Open: fade + slide | --duration-normal
 * - Content transitions when switching between items
 */
export const NavigationMenuContentBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentBaseProps
>((props, ref) => <NavigationMenuPrimitive.Content ref={ref} {...props} />);
NavigationMenuContentBase.displayName = 'NavigationMenuContentBase';

// ============================================================================
// NavigationMenu Link
// ============================================================================

export interface NavigationMenuLinkBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> {
  /**
   * Whether this link is the current page
   */
  active?: boolean;
}

/**
 * NavigationMenuLinkBase - Direct navigation link
 * 
 * For items without dropdown content.
 * 
 * States:
 * - default: transparent
 * - hover: subtle background
 * - active: accent/bold
 * - focus: focus ring
 */
export const NavigationMenuLinkBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkBaseProps
>(({ active, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    data-active={active || undefined}
    {...props}
  />
));
NavigationMenuLinkBase.displayName = 'NavigationMenuLinkBase';

// ============================================================================
// NavigationMenu Viewport
// ============================================================================

export interface NavigationMenuViewportBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> {}

/**
 * NavigationMenuViewportBase - Container that renders dropdown content
 * 
 * Content is rendered here for smoother animations
 * between different items' content.
 */
export const NavigationMenuViewportBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportBaseProps
>((props, ref) => <NavigationMenuPrimitive.Viewport ref={ref} {...props} />);
NavigationMenuViewportBase.displayName = 'NavigationMenuViewportBase';

// ============================================================================
// NavigationMenu Indicator
// ============================================================================

export interface NavigationMenuIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> {}

/**
 * NavigationMenuIndicatorBase - Animated indicator that follows active item
 * 
 * Typically rendered as an arrow or underline.
 */
export const NavigationMenuIndicatorBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorBaseProps
>((props, ref) => <NavigationMenuPrimitive.Indicator ref={ref} {...props} />);
NavigationMenuIndicatorBase.displayName = 'NavigationMenuIndicatorBase';

// ============================================================================
// NavigationMenu Sub
// ============================================================================

export interface NavigationMenuSubBaseProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Sub> {}

/**
 * NavigationMenuSubBase - Sub navigation (for mobile/vertical layouts)
 */
export const NavigationMenuSubBase = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Sub>,
  NavigationMenuSubBaseProps
>((props, ref) => <NavigationMenuPrimitive.Sub ref={ref} {...props} />);
NavigationMenuSubBase.displayName = 'NavigationMenuSubBase';
