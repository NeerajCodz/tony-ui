import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export interface SeparatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  /**
   * Orientation of the separator
   * - horizontal: full width, 1px height
   * - vertical: full height, 1px width
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Whether the separator is purely decorative
   * If true: aria-hidden="true"
   * If false: role="separator" with aria-orientation
   * @default true
   */
  decorative?: boolean;
}

/**
 * SeparatorBase - Visual and semantic divider between content sections
 * 
 * Visual:
 * - Horizontal: full width, 1px height
 * - Vertical: full height, 1px width
 * - Versions may add: dashed pattern, gradient fade, decorative icon
 * 
 * States: None (not interactive)
 * 
 * Accessibility:
 * - Non-decorative: role="separator", aria-orientation
 * - Decorative: aria-hidden="true"
 */
export const SeparatorBase = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorBaseProps
>(({ orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    orientation={orientation}
    decorative={decorative}
    data-orientation={orientation}
    {...props}
  />
));
SeparatorBase.displayName = 'SeparatorBase';
