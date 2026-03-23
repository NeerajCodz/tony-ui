import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

/**
 * Common aspect ratio presets
 */
export type AspectRatioPreset =
  | 'square'    // 1:1
  | 'video'     // 16:9
  | 'photo'     // 4:3
  | 'portrait'  // 3:4
  | 'wide'      // 21:9
  | 'golden';   // 1.618:1

/**
 * Convert preset to ratio number
 */
export const aspectRatioPresets: Record<AspectRatioPreset, number> = {
  square: 1,
  video: 16 / 9,
  photo: 4 / 3,
  portrait: 3 / 4,
  wide: 21 / 9,
  golden: 1.618,
};

// ============================================================================
// AspectRatio
// ============================================================================

export interface AspectRatioBaseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>, 'ratio'> {
  /**
   * Aspect ratio value (width / height)
   * Can be a number or a preset name
   * 
   * Examples:
   * - 16/9 for video
   * - 1 for square
   * - 4/3 for photo
   * - "video" | "square" | "photo" | "portrait" | "wide" | "golden"
   * 
   * @default 1 (square)
   */
  ratio?: number | AspectRatioPreset;
}

/**
 * AspectRatioBase - Container that maintains aspect ratio
 * 
 * Useful for:
 * - Images: maintain ratio during load
 * - Videos: responsive video containers
 * - Cards: consistent proportions
 * - Thumbnails: uniform sizing
 * 
 * Behavior:
 * - Width is determined by parent/container
 * - Height is calculated based on ratio
 * - Content fills the space
 * 
 * Common ratios:
 * - 1:1 (1) - Square
 * - 16:9 (1.778) - Video
 * - 4:3 (1.333) - Photo
 * - 3:4 (0.75) - Portrait
 * - 21:9 (2.333) - Ultrawide
 * - 1.618:1 - Golden ratio
 */
export const AspectRatioBase = React.forwardRef<
  React.ComponentRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioBaseProps
>(({ ratio = 1, ...props }, ref) => {
  // Convert preset string to number
  const numericRatio =
    typeof ratio === 'string' ? aspectRatioPresets[ratio] : ratio;

  return (
    <AspectRatioPrimitive.Root ref={ref} ratio={numericRatio} {...props} />
  );
});
AspectRatioBase.displayName = 'AspectRatioBase';
