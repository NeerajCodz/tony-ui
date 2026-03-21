import * as React from 'react';

/**
 * NativeSelect type variants
 */
export type NativeSelectType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * NativeSelect sizes
 * | Size | Height | Font  |
 * | sm   | 28px   | 12px  |
 * | md   | 36px   | 14px  |
 * | lg   | 44px   | 16px  |
 */
export type NativeSelectSize = 'sm' | 'md' | 'lg';

// ============================================================================
// NativeSelect
// ============================================================================

export interface NativeSelectBaseProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: NativeSelectType;
  
  /**
   * Size variant
   * @default 'md'
   */
  selectSize?: NativeSelectSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether the select is invalid
   */
  invalid?: boolean;
  
  /**
   * Placeholder option text (first option, disabled)
   */
  placeholder?: string;
}

/**
 * NativeSelectBase - Native HTML select element
 * 
 * Use when you want native mobile select behavior
 * (platform picker on mobile).
 * 
 * For custom dropdown styling, use Select component instead.
 * 
 * States:
 * - default: styled select box
 * - hover: border/background change
 * - focus: focus ring
 * - disabled: reduced opacity
 * - invalid: destructive border
 * 
 * Accessibility:
 * - Native <select> provides full accessibility
 * - Works with all screen readers
 * - Mobile browsers show native picker
 */
export const NativeSelectBase = React.forwardRef<HTMLSelectElement, NativeSelectBaseProps>(
  (
    {
      visualType = 'default',
      selectSize = 'md',
      variant,
      invalid,
      placeholder,
      children,
      ...props
    },
    ref
  ) => (
    <select
      ref={ref}
      data-type={visualType}
      data-size={selectSize}
      data-variant={variant}
      data-invalid={invalid || undefined}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  )
);
NativeSelectBase.displayName = 'NativeSelectBase';

// ============================================================================
// NativeSelect Option
// ============================================================================

export interface NativeSelectOptionBaseProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

/**
 * NativeSelectOptionBase - Native option element
 */
export const NativeSelectOptionBase = React.forwardRef<
  HTMLOptionElement,
  NativeSelectOptionBaseProps
>((props, ref) => <option ref={ref} {...props} />);
NativeSelectOptionBase.displayName = 'NativeSelectOptionBase';

// ============================================================================
// NativeSelect OptGroup
// ============================================================================

export interface NativeSelectOptGroupBaseProps
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {}

/**
 * NativeSelectOptGroupBase - Native optgroup element for grouping options
 */
export const NativeSelectOptGroupBase = React.forwardRef<
  HTMLOptGroupElement,
  NativeSelectOptGroupBaseProps
>((props, ref) => <optgroup ref={ref} {...props} />);
NativeSelectOptGroupBase.displayName = 'NativeSelectOptGroupBase';
