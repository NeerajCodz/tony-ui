import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
/**
 * Icon button type variants (same as button for consistency)
 */
export type IconButtonType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'inverse'
  | 'contrast'
  | 'soft'
  | 'neutral'
  | 'subtle'
  | 'elevated'
  | 'flat'
  | 'tinted'
  | 'link'
  | 'disabled'
  | 'unstyled';

/**
 * Icon button sizes
 * Always square (same width and height)
 * 
 * | Size | Dimension | Icon  |
 * | xs   | 20×20px   | 12px  |
 * | sm   | 28×28px   | 14px  |
 * | md   | 36×36px   | 18px  |
 * | lg   | 44×44px   | 22px  |
 * | xl   | 52×52px   | 26px  |
 */
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Icon button shape
 */
export type IconButtonShape = 'square' | 'rounded' | 'circle';

// ============================================================================
// Icon Button
// ============================================================================

export interface IconButtonBaseProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Render as child element
   */
  asChild?: boolean;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: IconButtonType;
  
  /**
   * HTML button type attribute
   * @default 'button'
   */
  htmlType?: 'button' | 'submit' | 'reset';
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: IconButtonSize;
  
  /**
   * Shape variant
   * @default 'rounded'
   */
  shape?: IconButtonShape;
  
  /**
   * Whether button is in loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Accessible label (REQUIRED for icon-only buttons)
   */
  'aria-label': string;
}

/**
 * IconButtonBase - Square button containing only an icon
 * 
 * Differences from Button:
 * - Always square (equal width/height)
 * - MUST have aria-label (no visible text)
 * - No text content, only icon
 * - Shape options (square, rounded, circle)
 * 
 * States:
 * - default, hover, focus, active, disabled, loading
 * 
 * Accessibility:
 * - aria-label is required
 * - Visible focus ring
 * - 44×44px minimum touch target (md size+)
 */
export const IconButtonBase = React.forwardRef<HTMLButtonElement, IconButtonBaseProps>(
  (
    {
      asChild = false,
      visualType = 'default',
      htmlType = 'button',
      variant,
      size = 'md',
      shape = 'rounded',
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : htmlType}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        data-type={visualType}
        data-variant={variant}
        data-size={size}
        data-shape={shape}
        data-loading={loading || undefined}
        {...props}
      />
    );
  }
);
IconButtonBase.displayName = 'IconButtonBase';

export { Slot };
