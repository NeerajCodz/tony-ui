import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

/**
 * Select trigger type variants
 */
export type SelectType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'subtle'
  | 'elevated'
  | 'flat'
  | 'disabled'
  | 'unstyled';

/**
 * Select sizes
 */
export type SelectSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Select Root
// ============================================================================

export interface SelectBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  /**
   * Size variant (applies to trigger)
   * @default 'md'
   */
  size?: SelectSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SelectBase - Custom dropdown select
 * 
 * More visually rich than NativeSelect.
 * 
 * Behavior:
 * - Click trigger → open dropdown, focus selected item
 * - ↑ ↓ → navigate items
 * - Enter / Space → select focused item
 * - Escape → close, return focus to trigger
 * - Type character → jump to matching item
 * - Home / End → first/last item
 */
export const SelectBase = SelectPrimitive.Root;

// ============================================================================
// Select Group
// ============================================================================

export const SelectGroupBase = SelectPrimitive.Group;

// ============================================================================
// Select Value
// ============================================================================

export const SelectValueBase = SelectPrimitive.Value;

// ============================================================================
// Select Trigger
// ============================================================================

export interface SelectTriggerBaseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'type'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: SelectType;
  
  /**
   * HTML type attribute
   * @default 'button'
   */
  htmlType?: 'button' | 'submit' | 'reset';
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: SelectSize;
  
  /**
   * Invalid/error state
   */
  invalid?: boolean;
}

/**
 * SelectTriggerBase - Button showing selected value
 * 
 * Accessibility:
 * - role="combobox"
 * - aria-expanded
 * - aria-haspopup="listbox"
 */
export const SelectTriggerBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerBaseProps
>(({ visualType = 'default', htmlType = 'button', size = 'md', invalid = false, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    type={htmlType}
    data-type={visualType}
    data-size={size}
    data-invalid={invalid ? '' : undefined}
    {...props}
  />
));
SelectTriggerBase.displayName = 'SelectTriggerBase';

// ============================================================================
// Select Icon
// ============================================================================

export const SelectIconBase = SelectPrimitive.Icon;

// ============================================================================
// Select Portal
// ============================================================================

export const SelectPortalBase = SelectPrimitive.Portal;

// ============================================================================
// Select Content
// ============================================================================

export interface SelectContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {}

/**
 * SelectContentBase - Dropdown content panel
 * 
 * Accessibility:
 * - role="listbox"
 */
export const SelectContentBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  SelectContentBaseProps
>((props, ref) => <SelectPrimitive.Content ref={ref} {...props} />);
SelectContentBase.displayName = 'SelectContentBase';

// ============================================================================
// Select Viewport
// ============================================================================

export const SelectViewportBase = SelectPrimitive.Viewport;

// ============================================================================
// Select Scroll Buttons
// ============================================================================

export interface SelectScrollUpButtonBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {}

export const SelectScrollUpButtonBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonBaseProps
>((props, ref) => <SelectPrimitive.ScrollUpButton ref={ref} {...props} />);
SelectScrollUpButtonBase.displayName = 'SelectScrollUpButtonBase';

export interface SelectScrollDownButtonBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {}

export const SelectScrollDownButtonBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollDownButtonBaseProps
>((props, ref) => <SelectPrimitive.ScrollDownButton ref={ref} {...props} />);
SelectScrollDownButtonBase.displayName = 'SelectScrollDownButtonBase';

// ============================================================================
// Select Label
// ============================================================================

export interface SelectLabelBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

/**
 * SelectLabelBase - Group header
 */
export const SelectLabelBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  SelectLabelBaseProps
>((props, ref) => <SelectPrimitive.Label ref={ref} {...props} />);
SelectLabelBase.displayName = 'SelectLabelBase';

// ============================================================================
// Select Item
// ============================================================================

export interface SelectItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

/**
 * SelectItemBase - Selectable option
 * 
 * Accessibility:
 * - role="option"
 * - aria-selected
 */
export const SelectItemBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  SelectItemBaseProps
>((props, ref) => <SelectPrimitive.Item ref={ref} {...props} />);
SelectItemBase.displayName = 'SelectItemBase';

// ============================================================================
// Select Item Text & Indicator
// ============================================================================

export const SelectItemTextBase = SelectPrimitive.ItemText;
export const SelectItemIndicatorBase = SelectPrimitive.ItemIndicator;

// ============================================================================
// Select Separator
// ============================================================================

export interface SelectSeparatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

export const SelectSeparatorBase = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorBaseProps
>((props, ref) => <SelectPrimitive.Separator ref={ref} {...props} />);
SelectSeparatorBase.displayName = 'SelectSeparatorBase';
