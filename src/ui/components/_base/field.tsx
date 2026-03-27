import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

/**
 * Field orientation options
 */
export type FieldOrientation = 'vertical' | 'horizontal';

/**
 * Field sizes
 * | Size | Gap  | Label font |
 * | sm   | 4px  | 12px       |
 * | md   | 6px  | 14px       |
 * | lg   | 8px  | 16px       |
 */
export type FieldSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Field Context
// ============================================================================

export interface FieldContextValue {
  id: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  descriptionId?: string;
  errorId?: string;
}

export const FieldContext = React.createContext<FieldContextValue | null>(null);

export const useField = () => {
  const context = React.useContext(FieldContext);
  return context;
};

// ============================================================================
// Field Root
// ============================================================================

export interface FieldBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the field
   * Used to link label, input, and messages
   */
  name?: string;
  
  /**
   * Layout orientation
   * @default 'vertical'
   */
  orientation?: FieldOrientation;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: FieldSize;
  
  /**
   * Whether the field is required
   */
  required?: boolean;
  
  /**
   * Whether the field is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the field is invalid
   */
  invalid?: boolean;
}

/**
 * FieldBase - Form field wrapper with label and messages
 * 
 * Anatomy:
 * - Field (root container)
 *   - FieldLabel (label element)
 *   - [Input/Select/etc.] (form control - slotted)
 *   - FieldDescription (helper text)
 *   - FieldError (error message)
 * 
 * Behavior:
 * - Automatically links label to input via ID
 * - Links description/error via aria-describedby
 * - Passes required/disabled/invalid state to children
 * 
 * Accessibility:
 * - Label associated with input
 * - Error messages announced by screen readers
 * - Required indicator (visual and aria-required)
 */
export const FieldBase = React.forwardRef<HTMLDivElement, FieldBaseProps>(
  (
    {
      name,
      orientation = 'vertical',
      size = 'md',
      required,
      disabled,
      invalid,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-orientation={orientation}
      data-size={size}
      data-required={required || undefined}
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
      {...props}
    />
  )
);
FieldBase.displayName = 'FieldBase';

// ============================================================================
// Field Label
// ============================================================================

export interface FieldLabelBaseProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Whether to show required indicator
   */
  required?: boolean;
  
  /**
   * Whether the associated input is disabled
   */
  disabled?: boolean;
}

/**
 * FieldLabelBase - Label for the form field
 * 
 * Shows required indicator (*) when required.
 */
export const FieldLabelBase = React.forwardRef<HTMLLabelElement, FieldLabelBaseProps>(
  ({ required, disabled, ...props }, ref) => (
    <label
      ref={ref}
      data-required={required || undefined}
      data-disabled={disabled || undefined}
      {...props}
    />
  )
);
FieldLabelBase.displayName = 'FieldLabelBase';

// ============================================================================
// Field Description
// ============================================================================

export interface FieldDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * FieldDescriptionBase - Helper text for the field
 * 
 * Provides additional context or instructions.
 * Linked to input via aria-describedby.
 */
export const FieldDescriptionBase = React.forwardRef<HTMLParagraphElement, FieldDescriptionBaseProps>(
  (props, ref) => <p ref={ref} {...props} />
);
FieldDescriptionBase.displayName = 'FieldDescriptionBase';

// ============================================================================
// Field Error
// ============================================================================

export interface FieldErrorBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * FieldErrorBase - Error message for the field
 * 
 * Displayed when field is invalid.
 * Typically styled in destructive color.
 * Linked to input via aria-describedby.
 */
export const FieldErrorBase = React.forwardRef<HTMLParagraphElement, FieldErrorBaseProps>(
  (props, ref) => (
    <p ref={ref} role="alert" aria-live="polite" {...props} />
  )
);
FieldErrorBase.displayName = 'FieldErrorBase';

// ============================================================================
// Field Control
// ============================================================================

export interface FieldControlBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * FieldControlBase - Wrapper for the input element
 * 
 * Use when you need to add addons or icons around the input.
 */
export const FieldControlBase = React.forwardRef<HTMLDivElement, FieldControlBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
FieldControlBase.displayName = 'FieldControlBase';

export { Slot };
