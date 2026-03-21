import * as React from 'react';

/**
 * Textarea type variants
 */
export type TextareaType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'tinted'
  | 'unstyled';

/**
 * Textarea sizes
 * | Size | Min-height | Font  | Padding |
 * | sm   | 60px       | 12px  | 8px     |
 * | md   | 80px       | 14px  | 10px    |
 * | lg   | 100px      | 16px  | 12px    |
 */
export type TextareaSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Textarea
// ============================================================================

export interface TextareaBaseProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: TextareaType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: TextareaSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Marks the textarea as invalid
   * Sets aria-invalid and data-invalid
   */
  invalid?: boolean;
  
  /**
   * Resize behavior
   * @default 'vertical'
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  
  /**
   * Auto-grow to fit content
   * When true, textarea height expands as user types
   */
  autoGrow?: boolean;
  
  /**
   * Maximum height when autoGrow is enabled
   */
  maxHeight?: number | string;
}

/**
 * TextareaBase - Multi-line text input
 * 
 * States:
 * - default: outlined box
 * - hover: border darkens
 * - focus: visible focus ring
 * - disabled: reduced opacity, not editable
 * - invalid: destructive border/ring
 * 
 * Behavior:
 * - Native resize handle (unless resize="none")
 * - Auto-grow option for dynamic height
 * 
 * Accessibility:
 * - aria-invalid when invalid
 * - aria-required when required
 * - aria-describedby links to helper/error text
 */
export const TextareaBase = React.forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  (
    {
      type = 'default',
      size = 'md',
      variant,
      invalid,
      resize = 'vertical',
      autoGrow,
      maxHeight,
      style,
      ...props
    },
    ref
  ) => (
    <textarea
      ref={ref}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-invalid={invalid || undefined}
      data-auto-grow={autoGrow || undefined}
      aria-invalid={invalid || undefined}
      style={{
        resize: autoGrow ? 'none' : resize,
        maxHeight: maxHeight,
        ...style,
      }}
      {...props}
    />
  )
);
TextareaBase.displayName = 'TextareaBase';
