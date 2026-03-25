import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
/**
 * ToggleGroup type variants (visual)
 */
export type ToggleGroupType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'soft'
  | 'neutral'
  | 'unstyled';

/**
 * ToggleGroup sizes
 * | Size | Item Height |
 * | xs   | 24px        |
 * | sm   | 28px        |
 * | md   | 36px        |
 * | lg   | 44px        |
 */
export type ToggleGroupSize = 'xs' | 'sm' | 'md' | 'lg';

// ============================================================================
// ToggleGroup Root
// ============================================================================

interface ToggleGroupBaseCommonProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: ToggleGroupType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ToggleGroupSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Visual style for grouping items
   * - 'joined': items visually connected (no gap)
   * - 'separated': items have spacing
   * @default 'joined'
   */
  appearance?: 'joined' | 'separated';
  
  /**
   * Children
   */
  children?: React.ReactNode;
  
  /**
   * Additional class names
   */
  className?: string;
  
  /**
   * Whether group is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether to loop keyboard navigation
   */
  loop?: boolean;
  
  /**
   * Orientation for keyboard navigation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Direction for RTL
   */
  dir?: 'ltr' | 'rtl';
  
  /**
   * Prevents focusing on mount
   */
  rovingFocus?: boolean;
}

export interface ToggleGroupBaseSingleProps extends ToggleGroupBaseCommonProps {
  /**
   * Selection mode - single item only
   */
  type: 'single';
  
  /**
   * Controlled value
   */
  value?: string;
  
  /**
   * Default value
   */
  defaultValue?: string;
  
  /**
   * Callback on change
   */
  onValueChange?: (value: string) => void;
}

export interface ToggleGroupBaseMultipleProps extends ToggleGroupBaseCommonProps {
  /**
   * Selection mode - multiple items
   */
  type: 'multiple';
  
  /**
   * Controlled values
   */
  value?: string[];
  
  /**
   * Default values
   */
  defaultValue?: string[];
  
  /**
   * Callback on change
   */
  onValueChange?: (value: string[]) => void;
}

export type ToggleGroupBaseProps = ToggleGroupBaseSingleProps | ToggleGroupBaseMultipleProps;

/**
 * ToggleGroupBase - Group of toggle buttons where one or many can be selected
 * 
 * Usage:
 * - type="single" → one item only (like radio group)
 * - type="multiple" → multiple items (like checkbox group)
 * 
 * Keyboard:
 * - Tab → enters group
 * - ←/→ → moves focus between items (loops)
 * - Enter/Space → toggle focused item
 * 
 * Accessibility:
 * - role="group"
 * - Items have aria-pressed
 */
export const ToggleGroupBase = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupBaseProps
>(
  (
    { visualType = 'default', size = 'md', variant, appearance = 'joined', type, ...props },
    ref
  ) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      type={type}
      data-visual-type={visualType}
      data-size={size}
      data-variant={variant}
      data-appearance={appearance}
      {...(props as any)}
    />
  )
);
ToggleGroupBase.displayName = 'ToggleGroupBase';

// ============================================================================
// ToggleGroup Item
// ============================================================================

export interface ToggleGroupItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {}

/**
 * ToggleGroupItemBase - Individual toggle button in the group
 * 
 * States:
 * - unpressed: subtle
 * - pressed: accent/solid background
 * - hover: brightens
 * - focus: focus ring
 * - disabled: reduced opacity
 */
export const ToggleGroupItemBase = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemBaseProps
>((props, ref) => <ToggleGroupPrimitive.Item ref={ref} {...props} />);
ToggleGroupItemBase.displayName = 'ToggleGroupItemBase';

export { ToggleGroupPrimitive };
