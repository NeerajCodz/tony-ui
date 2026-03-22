import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

/**
 * DropdownMenu type variants
 */
export type DropdownMenuType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'soft'
  | 'unstyled';

/**
 * DropdownMenu sizes
 * | Size | Item height | Font  | Padding  |
 * | sm   | 28px        | 12px  | 6px 8px  |
 * | md   | 32px        | 14px  | 6px 10px |
 * | lg   | 40px        | 16px  | 8px 12px |
 */
export type DropdownMenuSize = 'sm' | 'md' | 'lg';

// ============================================================================
// DropdownMenu Root
// ============================================================================

export interface DropdownMenuBaseProps extends DropdownMenuPrimitive.DropdownMenuProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: DropdownMenuType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: DropdownMenuSize;
}

/**
 * DropdownMenuBase - Floating menu triggered by a button
 * 
 * Structure:
 * - Root → Trigger → Portal → Content → Items
 * - Supports Item, CheckboxItem, RadioGroup/RadioItem
 * - Supports nested Sub menus
 * 
 * Keyboard:
 * - Enter/Space on trigger → opens menu, focuses first item
 * - ↑/↓ → cycles items
 * - →/← → opens/closes submenus
 * - Escape → closes
 * - Type-ahead search
 * 
 * Accessibility:
 * - role="menu" on content
 * - role="menuitem" / "menuitemcheckbox" / "menuitemradio" on items
 * - aria-expanded on trigger
 */
export const DropdownMenuBase = DropdownMenuPrimitive.Root;
DropdownMenuBase.displayName = 'DropdownMenuBase';

// ============================================================================
// DropdownMenu Trigger
// ============================================================================

export interface DropdownMenuTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> {}

/**
 * DropdownMenuTriggerBase - Button that opens the menu
 */
export const DropdownMenuTriggerBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownMenuTriggerBaseProps
>((props, ref) => <DropdownMenuPrimitive.Trigger ref={ref} {...props} />);
DropdownMenuTriggerBase.displayName = 'DropdownMenuTriggerBase';

// ============================================================================
// DropdownMenu Group
// ============================================================================

export interface DropdownMenuGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group> {}

/**
 * DropdownMenuGroupBase - Groups related items
 */
export const DropdownMenuGroupBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Group>,
  DropdownMenuGroupBaseProps
>((props, ref) => <DropdownMenuPrimitive.Group ref={ref} {...props} />);
DropdownMenuGroupBase.displayName = 'DropdownMenuGroupBase';

// ============================================================================
// DropdownMenu Portal
// ============================================================================

export interface DropdownMenuPortalBaseProps extends DropdownMenuPrimitive.DropdownMenuPortalProps {}

/**
 * DropdownMenuPortalBase - Portal for rendering outside DOM hierarchy
 */
export const DropdownMenuPortalBase = DropdownMenuPrimitive.Portal;

// ============================================================================
// DropdownMenu Sub
// ============================================================================

export interface DropdownMenuSubBaseProps extends DropdownMenuPrimitive.DropdownMenuSubProps {}

/**
 * DropdownMenuSubBase - Wrapper for nested submenu
 */
export const DropdownMenuSubBase = DropdownMenuPrimitive.Sub;

// ============================================================================
// DropdownMenu RadioGroup
// ============================================================================

export interface DropdownMenuRadioGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup> {}

/**
 * DropdownMenuRadioGroupBase - Group for radio items
 */
export const DropdownMenuRadioGroupBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioGroup>,
  DropdownMenuRadioGroupBaseProps
>((props, ref) => <DropdownMenuPrimitive.RadioGroup ref={ref} {...props} />);
DropdownMenuRadioGroupBase.displayName = 'DropdownMenuRadioGroupBase';

// ============================================================================
// DropdownMenu SubTrigger
// ============================================================================

export interface DropdownMenuSubTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  /**
   * Whether to show an indicator (usually a chevron)
   * @default true
   */
  showIndicator?: boolean;

  /**
   * Inset content for alignment
   */
  inset?: boolean;
}

/**
 * DropdownMenuSubTriggerBase - Item that opens a submenu
 * 
 * Shows chevron indicator by default
 */
export const DropdownMenuSubTriggerBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerBaseProps
>(({ showIndicator = true, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    data-show-indicator={showIndicator}
    {...props}
  />
));
DropdownMenuSubTriggerBase.displayName = 'DropdownMenuSubTriggerBase';

// ============================================================================
// DropdownMenu SubContent
// ============================================================================

export interface DropdownMenuSubContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

/**
 * DropdownMenuSubContentBase - Content for a submenu
 */
export const DropdownMenuSubContentBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentBaseProps
>((props, ref) => <DropdownMenuPrimitive.SubContent ref={ref} {...props} />);
DropdownMenuSubContentBase.displayName = 'DropdownMenuSubContentBase';

// ============================================================================
// DropdownMenu Content
// ============================================================================

export interface DropdownMenuContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: DropdownMenuType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: DropdownMenuSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * DropdownMenuContentBase - The floating menu panel
 * 
 * Animation:
 * - Open: fade + slide from anchor direction | --duration-fast
 * - Close: reverse
 * 
 * Position props:
 * - side / align / sideOffset / alignOffset
 * - avoidCollisions
 */
export const DropdownMenuContentBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
DropdownMenuContentBase.displayName = 'DropdownMenuContentBase';

// ============================================================================
// DropdownMenu Item
// ============================================================================

export interface DropdownMenuItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  /**
   * Destructive/danger item styling
   */
  destructive?: boolean;
}

/**
 * DropdownMenuItemBase - Standard action item
 * 
 * States:
 * - default, highlighted (keyboard focus), disabled
 * - destructive variant for dangerous actions
 */
export const DropdownMenuItemBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemBaseProps
>(({ destructive, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    data-destructive={destructive || undefined}
    {...props}
  />
));
DropdownMenuItemBase.displayName = 'DropdownMenuItemBase';

// ============================================================================
// DropdownMenu CheckboxItem
// ============================================================================

export interface DropdownMenuCheckboxItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
    /**
     * Whether the item is checked
     */
    checked?: boolean | 'indeterminate';
  }

/**
 * DropdownMenuCheckboxItemBase - Item with checkbox state
 * 
 * Use with ItemIndicator for checkmark
 */
export const DropdownMenuCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemBaseProps
>((props, ref) => <DropdownMenuPrimitive.CheckboxItem ref={ref} {...props} />);
DropdownMenuCheckboxItemBase.displayName = 'DropdownMenuCheckboxItemBase';

// ============================================================================
// DropdownMenu RadioItem
// ============================================================================

export interface DropdownMenuRadioItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {}

/**
 * DropdownMenuRadioItemBase - Item in a radio group
 * 
 * Use with ItemIndicator for selected indicator
 */
export const DropdownMenuRadioItemBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemBaseProps
>((props, ref) => <DropdownMenuPrimitive.RadioItem ref={ref} {...props} />);
DropdownMenuRadioItemBase.displayName = 'DropdownMenuRadioItemBase';

// ============================================================================
// DropdownMenu ItemIndicator
// ============================================================================

export interface DropdownMenuItemIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.ItemIndicator> {}

/**
 * DropdownMenuItemIndicatorBase - Check/radio indicator
 */
export const DropdownMenuItemIndicatorBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.ItemIndicator>,
  DropdownMenuItemIndicatorBaseProps
>((props, ref) => <DropdownMenuPrimitive.ItemIndicator ref={ref} {...props} />);
DropdownMenuItemIndicatorBase.displayName = 'DropdownMenuItemIndicatorBase';

// ============================================================================
// DropdownMenu Label
// ============================================================================

export interface DropdownMenuLabelBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  /**
   * Inset content for alignment
   */
  inset?: boolean;
}

/**
 * DropdownMenuLabelBase - Non-interactive label for grouping
 */
export const DropdownMenuLabelBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelBaseProps
>((props, ref) => <DropdownMenuPrimitive.Label ref={ref} {...props} />);
DropdownMenuLabelBase.displayName = 'DropdownMenuLabelBase';

// ============================================================================
// DropdownMenu Separator
// ============================================================================

export interface DropdownMenuSeparatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}

/**
 * DropdownMenuSeparatorBase - Visual divider between items
 */
export const DropdownMenuSeparatorBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorBaseProps
>((props, ref) => <DropdownMenuPrimitive.Separator ref={ref} {...props} />);
DropdownMenuSeparatorBase.displayName = 'DropdownMenuSeparatorBase';

// ============================================================================
// DropdownMenu Shortcut
// ============================================================================

export interface DropdownMenuShortcutBaseProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * DropdownMenuShortcutBase - Keyboard shortcut hint
 * 
 * Display-only, does not register the shortcut
 */
export const DropdownMenuShortcutBase = React.forwardRef<
  HTMLSpanElement,
  DropdownMenuShortcutBaseProps
>((props, ref) => <span ref={ref} {...props} />);
DropdownMenuShortcutBase.displayName = 'DropdownMenuShortcutBase';

// ============================================================================
// DropdownMenu Arrow
// ============================================================================

export interface DropdownMenuArrowBaseProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow> {}

/**
 * DropdownMenuArrowBase - Arrow pointing to trigger
 */
export const DropdownMenuArrowBase = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Arrow>,
  DropdownMenuArrowBaseProps
>((props, ref) => <DropdownMenuPrimitive.Arrow ref={ref} {...props} />);
DropdownMenuArrowBase.displayName = 'DropdownMenuArrowBase';
