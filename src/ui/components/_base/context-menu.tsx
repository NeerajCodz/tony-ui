import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

/**
 * ContextMenu type variants
 */
export type ContextMenuType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'contrast'
  | 'soft'
  | 'unstyled';

/**
 * ContextMenu sizes
 * | Size | Item height | Font  | Padding  |
 * | sm   | 28px        | 12px  | 6px 8px  |
 * | md   | 32px        | 14px  | 6px 10px |
 * | lg   | 40px        | 16px  | 8px 12px |
 */
export type ContextMenuSize = 'sm' | 'md' | 'lg';

// ============================================================================
// ContextMenu Root
// ============================================================================

export interface ContextMenuBaseProps extends ContextMenuPrimitive.ContextMenuProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: ContextMenuType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ContextMenuSize;
}

/**
 * ContextMenuBase - Right-click context menu
 * 
 * Similar to DropdownMenu but triggered by right-click.
 * 
 * Behavior:
 * - Right-click on trigger → opens at pointer position
 * - Click outside or Escape → closes
 * 
 * Keyboard (when open):
 * - ↑/↓ → cycles items
 * - →/← → opens/closes submenus
 * - Enter/Space → activates item
 * - Type-ahead search
 * 
 * Accessibility:
 * - role="menu" on content
 * - Items have menuitem roles
 */
export const ContextMenuBase = ContextMenuPrimitive.Root;
ContextMenuBase.displayName = 'ContextMenuBase';

// ============================================================================
// ContextMenu Trigger
// ============================================================================

export interface ContextMenuTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger> {}

/**
 * ContextMenuTriggerBase - Area that responds to right-click
 * 
 * The entire trigger area is the right-click zone
 */
export const ContextMenuTriggerBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Trigger>,
  ContextMenuTriggerBaseProps
>((props, ref) => <ContextMenuPrimitive.Trigger ref={ref} {...props} />);
ContextMenuTriggerBase.displayName = 'ContextMenuTriggerBase';

// ============================================================================
// ContextMenu Group
// ============================================================================

export interface ContextMenuGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group> {}

/**
 * ContextMenuGroupBase - Groups related items
 */
export const ContextMenuGroupBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Group>,
  ContextMenuGroupBaseProps
>((props, ref) => <ContextMenuPrimitive.Group ref={ref} {...props} />);
ContextMenuGroupBase.displayName = 'ContextMenuGroupBase';

// ============================================================================
// ContextMenu Portal
// ============================================================================

export interface ContextMenuPortalBaseProps extends ContextMenuPrimitive.ContextMenuPortalProps {}

/**
 * ContextMenuPortalBase - Portal for rendering outside DOM hierarchy
 */
export const ContextMenuPortalBase = ContextMenuPrimitive.Portal;

// ============================================================================
// ContextMenu Sub
// ============================================================================

export interface ContextMenuSubBaseProps extends ContextMenuPrimitive.ContextMenuSubProps {}

/**
 * ContextMenuSubBase - Wrapper for nested submenu
 */
export const ContextMenuSubBase = ContextMenuPrimitive.Sub;

// ============================================================================
// ContextMenu RadioGroup
// ============================================================================

export interface ContextMenuRadioGroupBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup> {}

/**
 * ContextMenuRadioGroupBase - Group for radio items
 */
export const ContextMenuRadioGroupBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioGroup>,
  ContextMenuRadioGroupBaseProps
>((props, ref) => <ContextMenuPrimitive.RadioGroup ref={ref} {...props} />);
ContextMenuRadioGroupBase.displayName = 'ContextMenuRadioGroupBase';

// ============================================================================
// ContextMenu SubTrigger
// ============================================================================

export interface ContextMenuSubTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> {
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
 * ContextMenuSubTriggerBase - Item that opens a submenu
 */
export const ContextMenuSubTriggerBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerBaseProps
>(({ showIndicator = true, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    data-show-indicator={showIndicator}
    {...props}
  />
));
ContextMenuSubTriggerBase.displayName = 'ContextMenuSubTriggerBase';

// ============================================================================
// ContextMenu SubContent
// ============================================================================

export interface ContextMenuSubContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> {}

/**
 * ContextMenuSubContentBase - Content for a submenu
 */
export const ContextMenuSubContentBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentBaseProps
>((props, ref) => <ContextMenuPrimitive.SubContent ref={ref} {...props} />);
ContextMenuSubContentBase.displayName = 'ContextMenuSubContentBase';

// ============================================================================
// ContextMenu Content
// ============================================================================

export interface ContextMenuContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: ContextMenuType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ContextMenuSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * ContextMenuContentBase - The floating menu panel
 * 
 * Opens at pointer position.
 * 
 * Animation:
 * - Open: fade + scale from origin | --duration-fast
 * - Close: reverse
 */
export const ContextMenuContentBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentBaseProps
>(({ type = 'default', size = 'md', variant, ...props }, ref) => (
  <ContextMenuPrimitive.Content
    ref={ref}
    data-type={type}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
ContextMenuContentBase.displayName = 'ContextMenuContentBase';

// ============================================================================
// ContextMenu Item
// ============================================================================

export interface ContextMenuItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> {
  /**
   * Destructive/danger item styling
   */
  destructive?: boolean;
}

/**
 * ContextMenuItemBase - Standard action item
 */
export const ContextMenuItemBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemBaseProps
>(({ destructive, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    data-destructive={destructive || undefined}
    {...props}
  />
));
ContextMenuItemBase.displayName = 'ContextMenuItemBase';

// ============================================================================
// ContextMenu CheckboxItem
// ============================================================================

export interface ContextMenuCheckboxItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> {
    /**
     * Whether the item is checked
     */
    checked?: boolean | 'indeterminate';
  }

/**
 * ContextMenuCheckboxItemBase - Item with checkbox state
 */
export const ContextMenuCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemBaseProps
>((props, ref) => <ContextMenuPrimitive.CheckboxItem ref={ref} {...props} />);
ContextMenuCheckboxItemBase.displayName = 'ContextMenuCheckboxItemBase';

// ============================================================================
// ContextMenu RadioItem
// ============================================================================

export interface ContextMenuRadioItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> {}

/**
 * ContextMenuRadioItemBase - Item in a radio group
 */
export const ContextMenuRadioItemBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemBaseProps
>((props, ref) => <ContextMenuPrimitive.RadioItem ref={ref} {...props} />);
ContextMenuRadioItemBase.displayName = 'ContextMenuRadioItemBase';

// ============================================================================
// ContextMenu ItemIndicator
// ============================================================================

export interface ContextMenuItemIndicatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.ItemIndicator> {}

/**
 * ContextMenuItemIndicatorBase - Check/radio indicator
 */
export const ContextMenuItemIndicatorBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.ItemIndicator>,
  ContextMenuItemIndicatorBaseProps
>((props, ref) => <ContextMenuPrimitive.ItemIndicator ref={ref} {...props} />);
ContextMenuItemIndicatorBase.displayName = 'ContextMenuItemIndicatorBase';

// ============================================================================
// ContextMenu Label
// ============================================================================

export interface ContextMenuLabelBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {
  /**
   * Inset content for alignment
   */
  inset?: boolean;
}

/**
 * ContextMenuLabelBase - Non-interactive label for grouping
 */
export const ContextMenuLabelBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelBaseProps
>((props, ref) => <ContextMenuPrimitive.Label ref={ref} {...props} />);
ContextMenuLabelBase.displayName = 'ContextMenuLabelBase';

// ============================================================================
// ContextMenu Separator
// ============================================================================

export interface ContextMenuSeparatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> {}

/**
 * ContextMenuSeparatorBase - Visual divider between items
 */
export const ContextMenuSeparatorBase = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorBaseProps
>((props, ref) => <ContextMenuPrimitive.Separator ref={ref} {...props} />);
ContextMenuSeparatorBase.displayName = 'ContextMenuSeparatorBase';

// ============================================================================
// ContextMenu Shortcut
// ============================================================================

export interface ContextMenuShortcutBaseProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * ContextMenuShortcutBase - Keyboard shortcut hint
 */
export const ContextMenuShortcutBase = React.forwardRef<
  HTMLSpanElement,
  ContextMenuShortcutBaseProps
>((props, ref) => <span ref={ref} {...props} />);
ContextMenuShortcutBase.displayName = 'ContextMenuShortcutBase';
