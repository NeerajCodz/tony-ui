import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
/**
 * Slider sizes
 * | Size | Track Height | Thumb Size |
 * | sm   | 2px          | 14px       |
 * | md   | 4px          | 18px       |
 * | lg   | 6px          | 22px       |
 */
export type SliderSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Slider Root
// ============================================================================

export interface SliderBaseProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: SliderSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SliderBase - Draggable control for selecting a numeric value
 * 
 * Props inherited from Radix:
 * - min / max / step
 * - value[] / defaultValue[] (single value or [start, end] for range)
 * - orientation: "horizontal" | "vertical"
 * - inverted: reverse direction
 * - disabled
 * 
 * States:
 * - Track: static visual
 * - Range: fills proportionally to value
 * - Thumb: default | hover (scale up) | focus (ring) | active (dragging)
 * 
 * Behavior:
 * - Pointer drag on thumb → update value
 * - Click on track → jump to position
 * - Keyboard: ←/→/↑/↓ ±step, Shift+Arrow ±10
 *   PageUp/Down ±10%, Home→min, End→max
 * 
 * Accessibility:
 * - role="slider"
 * - aria-valuemin/max/now/text
 * - aria-orientation
 * - aria-disabled
 */
export const SliderBase = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderBaseProps
>(({ size = 'md', variant, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
SliderBase.displayName = 'SliderBase';

// ============================================================================
// Slider Track
// ============================================================================

export interface SliderTrackBaseProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> {}

/**
 * SliderTrackBase - Full-width track bar
 */
export const SliderTrackBase = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Track>,
  SliderTrackBaseProps
>((props, ref) => <SliderPrimitive.Track ref={ref} {...props} />);
SliderTrackBase.displayName = 'SliderTrackBase';

// ============================================================================
// Slider Range
// ============================================================================

export interface SliderRangeBaseProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> {}

/**
 * SliderRangeBase - Filled portion from min to value
 */
export const SliderRangeBase = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Range>,
  SliderRangeBaseProps
>((props, ref) => <SliderPrimitive.Range ref={ref} {...props} />);
SliderRangeBase.displayName = 'SliderRangeBase';

// ============================================================================
// Slider Thumb
// ============================================================================

export interface SliderThumbBaseProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> {}

/**
 * SliderThumbBase - Draggable handle
 * 
 * Use two thumbs for range slider
 */
export const SliderThumbBase = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Thumb>,
  SliderThumbBaseProps
>((props, ref) => <SliderPrimitive.Thumb ref={ref} {...props} />);
SliderThumbBase.displayName = 'SliderThumbBase';

export { SliderPrimitive };
