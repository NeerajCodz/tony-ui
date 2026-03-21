import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

/**
 * Menubar type variants
 */
export type MenubarType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'soft'
  | 'unstyled';

/**
 * Menubar sizes
 * | Size | Bar height | Item height | Font  |
 * | sm   | 32px       | 28px        | 12px  |
 * | md   | 40px       | 32px        | 14px  |
 * | lg   | 48px       | 40px        | 16px  |
 */
export type MenubarSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Menubar Root
// ============================================================================

export interface MenubarBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: MenubarType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: MenubarSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * MenubarBase - Horizontal menu bar (File, Edit, View, etc.)
 * 
 * Similar to native desktop app menubars.
 * 
 * Structure:
 * - Menubar (root)
 *   - Menu (each top-level menu)
 *     - Trigger (clickable label)
 *     - Content (dropdown)
 *       - Items, Separators, Submenus
 * 
 * Keyboard:
 * - ←/→ moves between top-level menus
 * - ↑/↓ moves within open menu
 * - Enter/Space opens menu or activates item
 * - Escape closes menu
 * - Type-ahead search
 * 
 * Accessibility:
 * - role="menubar" on root
 * - role="menu" on content
 * - role="menuitem" on items
 */
export const MenubarBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  MenubarBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
MenubarBase.displayName = 'MenubarBase';

// ============================================================================
// Menubar Menu
// ============================================================================

export interface MenubarMenuBaseProps extends MenubarPrimitive.MenubarMenuProps {}

/**
 * MenubarMenuBase - A single top-level menu
 */
export const MenubarMenuBase = MenubarPrimitive.Menu;

// ============================================================================
// Menubar Group
// ============================================================================

export interface MenubarGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Group> {}

/**
 * MenubarGroupBase - Groups related items
 */
export const MenubarGroupBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Group>,
  MenubarGroupBaseProps
>((props, ref) => <MenubarPrimitive.Group ref={ref} {...props} />);
MenubarGroupBase.displayName = 'MenubarGroupBase';

// ============================================================================
// Menubar Portal
// ============================================================================

export interface MenubarPortalBaseProps extends MenubarPrimitive.MenubarPortalProps {}

/**
 * MenubarPortalBase - Portal for rendering dropdown outside DOM hierarchy
 */
export const MenubarPortalBase = MenubarPrimitive.Portal;

// ============================================================================
// Menubar Sub
// ============================================================================

export interface MenubarSubBaseProps extends MenubarPrimitive.MenubarSubProps {}

/**
 * MenubarSubBase - Wrapper for nested submenu
 */
export const MenubarSubBase = MenubarPrimitive.Sub;

// ============================================================================
// Menubar RadioGroup
// ============================================================================

export interface MenubarRadioGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioGroup> {}

/**
 * MenubarRadioGroupBase - Group for radio items
 */
export const MenubarRadioGroupBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioGroup>,
  MenubarRadioGroupBaseProps
>((props, ref) => <MenubarPrimitive.RadioGroup ref={ref} {...props} />);
MenubarRadioGroupBase.displayName = 'MenubarRadioGroupBase';

// ============================================================================
// Menubar Trigger
// ============================================================================

export interface MenubarTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> {}

/**
 * MenubarTriggerBase - Top-level menu button (File, Edit, etc.)
 * 
 * States:
 * - default: transparent
 * - hover: subtle background
 * - open: accent/active background
 * - focus: focus ring
 */
export const MenubarTriggerBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerBaseProps
>((props, ref) => <MenubarPrimitive.Trigger ref={ref} {...props} />);
MenubarTriggerBase.displayName = 'MenubarTriggerBase';

// ============================================================================
// Menubar SubTrigger
// ============================================================================

export interface MenubarSubTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> {
  /**
   * Whether to show an indicator (usually a chevron)
   * @default true
   */
  showIndicator?: boolean;
}

/**
 * MenubarSubTriggerBase - Item that opens a submenu
 */
export const MenubarSubTriggerBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerBaseProps
>(({ showIndicator = true, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    data-show-indicator={showIndicator}
    {...props}
  />
));
MenubarSubTriggerBase.displayName = 'MenubarSubTriggerBase';

// ============================================================================
// Menubar SubContent
// ============================================================================

export interface MenubarSubContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> {}

/**
 * MenubarSubContentBase - Content for a submenu
 */
export const MenubarSubContentBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentBaseProps
>((props, ref) => <MenubarPrimitive.SubContent ref={ref} {...props} />);
MenubarSubContentBase.displayName = 'MenubarSubContentBase';

// ============================================================================
// Menubar Content
// ============================================================================

export interface MenubarContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> {}

/**
 * MenubarContentBase - The dropdown menu panel
 * 
 * Animation:
 * - Open: fade + slide down | --duration-fast
 * - Close: reverse
 */
export const MenubarContentBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContentBaseProps
>((props, ref) => <MenubarPrimitive.Content ref={ref} {...props} />);
MenubarContentBase.displayName = 'MenubarContentBase';

// ============================================================================
// Menubar Item
// ============================================================================

export interface MenubarItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> {
  /**
   * Destructive/danger item styling
   */
  destructive?: boolean;
}

/**
 * MenubarItemBase - Standard action item
 */
export const MenubarItemBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItemBaseProps
>(({ destructive, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    data-destructive={destructive || undefined}
    {...props}
  />
));
MenubarItemBase.displayName = 'MenubarItemBase';

// ============================================================================
// Menubar CheckboxItem
// ============================================================================

export interface MenubarCheckboxItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> {}

/**
 * MenubarCheckboxItemBase - Item with checkbox state
 */
export const MenubarCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemBaseProps
>((props, ref) => <MenubarPrimitive.CheckboxItem ref={ref} {...props} />);
MenubarCheckboxItemBase.displayName = 'MenubarCheckboxItemBase';

// ============================================================================
// Menubar RadioItem
// ============================================================================

export interface MenubarRadioItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> {}

/**
 * MenubarRadioItemBase - Item in a radio group
 */
export const MenubarRadioItemBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemBaseProps
>((props, ref) => <MenubarPrimitive.RadioItem ref={ref} {...props} />);
MenubarRadioItemBase.displayName = 'MenubarRadioItemBase';

// ============================================================================
// Menubar ItemIndicator
// ============================================================================

export interface MenubarItemIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.ItemIndicator> {}

/**
 * MenubarItemIndicatorBase - Check/radio indicator
 */
export const MenubarItemIndicatorBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.ItemIndicator>,
  MenubarItemIndicatorBaseProps
>((props, ref) => <MenubarPrimitive.ItemIndicator ref={ref} {...props} />);
MenubarItemIndicatorBase.displayName = 'MenubarItemIndicatorBase';

// ============================================================================
// Menubar Label
// ============================================================================

export interface MenubarLabelBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> {}

/**
 * MenubarLabelBase - Non-interactive label for grouping
 */
export const MenubarLabelBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabelBaseProps
>((props, ref) => <MenubarPrimitive.Label ref={ref} {...props} />);
MenubarLabelBase.displayName = 'MenubarLabelBase';

// ============================================================================
// Menubar Separator
// ============================================================================

export interface MenubarSeparatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> {}

/**
 * MenubarSeparatorBase - Visual divider between items
 */
export const MenubarSeparatorBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorBaseProps
>((props, ref) => <MenubarPrimitive.Separator ref={ref} {...props} />);
MenubarSeparatorBase.displayName = 'MenubarSeparatorBase';

// ============================================================================
// Menubar Shortcut
// ============================================================================

export interface MenubarShortcutBaseProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * MenubarShortcutBase - Keyboard shortcut hint
 */
export const MenubarShortcutBase = React.forwardRef<
  HTMLSpanElement,
  MenubarShortcutBaseProps
>((props, ref) => <span ref={ref} {...props} />);
MenubarShortcutBase.displayName = 'MenubarShortcutBase';

// ============================================================================
// Menubar Arrow
// ============================================================================

export interface MenubarArrowBaseProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Arrow> {}

/**
 * MenubarArrowBase - Arrow pointing to trigger
 */
export const MenubarArrowBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Arrow>,
  MenubarArrowBaseProps
>((props, ref) => <MenubarPrimitive.Arrow ref={ref} {...props} />);
MenubarArrowBase.displayName = 'MenubarArrowBase';
