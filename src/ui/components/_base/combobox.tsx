import * as React from 'react';

/**
 * Combobox type variants
 */
export type ComboboxType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * Combobox sizes
 * | Size | Height | Font  |
 * | sm   | 28px   | 12px  |
 * | md   | 36px   | 14px  |
 * | lg   | 44px   | 16px  |
 */
export type ComboboxSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Combobox Root
// ============================================================================

export interface ComboboxBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Current selected value
   */
  value?: string;
  
  /**
   * Callback when value changes
   */
  onValueChange?: (value: string) => void;
  
  /**
   * Whether the dropdown is open
   */
  open?: boolean;
  
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: ComboboxType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ComboboxSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether the combobox is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the combobox is invalid
   */
  invalid?: boolean;
  
  /**
   * Allow multiple selections
   * @default false
   */
  multiple?: boolean;
  
  /**
   * Whether filtering is enabled
   * @default true
   */
  filterable?: boolean;
}

/**
 * ComboboxBase - Searchable dropdown select
 * 
 * Combines text input with dropdown list.
 * User can type to filter, or select from list.
 * 
 * Anatomy:
 * - Combobox (root)
 *   - ComboboxTrigger (input + button)
 *     - ComboboxInput (text input for filtering)
 *   - ComboboxContent (dropdown)
 *     - ComboboxEmpty (no results message)
 *     - ComboboxGroup
 *       - ComboboxLabel
 *       - ComboboxItem (selectable option)
 * 
 * Keyboard:
 * - Type → filters options
 * - ↑/↓ → navigate options
 * - Enter → select highlighted option
 * - Escape → close dropdown
 * 
 * Accessibility:
 * - role="combobox" on trigger
 * - aria-expanded, aria-haspopup="listbox"
 * - role="listbox" on content
 * - role="option" on items
 */
export const ComboboxBase = React.forwardRef<HTMLDivElement, ComboboxBaseProps>(
  (
    {
      type = 'default',
      size = 'md',
      variant,
      disabled,
      invalid,
      multiple,
      filterable = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
      data-multiple={multiple || undefined}
      data-filterable={filterable}
      aria-disabled={disabled || undefined}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
);
ComboboxBase.displayName = 'ComboboxBase';

// ============================================================================
// Combobox Trigger
// ============================================================================

export interface ComboboxTriggerBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * ComboboxTriggerBase - Button that opens the dropdown
 * 
 * Shows current selection and toggle icon
 */
export const ComboboxTriggerBase = React.forwardRef<HTMLButtonElement, ComboboxTriggerBaseProps>(
  (props, ref) => (
    <button
      ref={ref}
      type="button"
      aria-haspopup="listbox"
      {...props}
    />
  )
);
ComboboxTriggerBase.displayName = 'ComboboxTriggerBase';

// ============================================================================
// Combobox Input
// ============================================================================

export interface ComboboxInputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * ComboboxInputBase - Text input for filtering
 */
export const ComboboxInputBase = React.forwardRef<HTMLInputElement, ComboboxInputBaseProps>(
  (props, ref) => (
    <input
      ref={ref}
      type="text"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      {...props}
    />
  )
);
ComboboxInputBase.displayName = 'ComboboxInputBase';

// ============================================================================
// Combobox Content
// ============================================================================

export interface ComboboxContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ComboboxContentBase - Dropdown content panel
 */
export const ComboboxContentBase = React.forwardRef<HTMLDivElement, ComboboxContentBaseProps>(
  (props, ref) => (
    <div ref={ref} role="listbox" {...props} />
  )
);
ComboboxContentBase.displayName = 'ComboboxContentBase';

// ============================================================================
// Combobox Empty
// ============================================================================

export interface ComboboxEmptyBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ComboboxEmptyBase - No results message
 */
export const ComboboxEmptyBase = React.forwardRef<HTMLDivElement, ComboboxEmptyBaseProps>(
  ({ children = 'No results found.', ...props }, ref) => (
    <div ref={ref} role="presentation" {...props}>
      {children}
    </div>
  )
);
ComboboxEmptyBase.displayName = 'ComboboxEmptyBase';

// ============================================================================
// Combobox Group
// ============================================================================

export interface ComboboxGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ComboboxGroupBase - Group of related items
 */
export const ComboboxGroupBase = React.forwardRef<HTMLDivElement, ComboboxGroupBaseProps>(
  (props, ref) => (
    <div ref={ref} role="group" {...props} />
  )
);
ComboboxGroupBase.displayName = 'ComboboxGroupBase';

// ============================================================================
// Combobox Label
// ============================================================================

export interface ComboboxLabelBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ComboboxLabelBase - Label for a group
 */
export const ComboboxLabelBase = React.forwardRef<HTMLDivElement, ComboboxLabelBaseProps>(
  (props, ref) => (
    <div ref={ref} {...props} />
  )
);
ComboboxLabelBase.displayName = 'ComboboxLabelBase';

// ============================================================================
// Combobox Item
// ============================================================================

export interface ComboboxItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Value for this option
   */
  value: string;
  
  /**
   * Whether this item is disabled
   */
  disabled?: boolean;
}

/**
 * ComboboxItemBase - Selectable option
 * 
 * States:
 * - default
 * - highlighted (keyboard focus)
 * - selected (checkmark shown)
 * - disabled
 */
export const ComboboxItemBase = React.forwardRef<HTMLDivElement, ComboboxItemBaseProps>(
  ({ value, disabled, ...props }, ref) => (
    <div
      ref={ref}
      role="option"
      data-value={value}
      data-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      {...props}
    />
  )
);
ComboboxItemBase.displayName = 'ComboboxItemBase';

// ============================================================================
// Combobox Separator
// ============================================================================

export interface ComboboxSeparatorBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * ComboboxSeparatorBase - Visual divider
 */
export const ComboboxSeparatorBase = React.forwardRef<HTMLDivElement, ComboboxSeparatorBaseProps>(
  (props, ref) => (
    <div ref={ref} role="separator" {...props} />
  )
);
ComboboxSeparatorBase.displayName = 'ComboboxSeparatorBase';
