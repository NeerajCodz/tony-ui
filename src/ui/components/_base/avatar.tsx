import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

/**
 * Avatar sizes (diameter in pixels)
 * | Size | Diameter |
 * | xs   | 20px     |
 * | sm   | 28px     |
 * | md   | 36px     |
 * | lg   | 48px     |
 * | xl   | 64px     |
 * | 2xl  | 96px     |
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Avatar shape
 */
export type AvatarShape = 'circle' | 'square';

// ============================================================================
// Avatar Root
// ============================================================================

export interface AvatarBaseProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: AvatarSize;
  
  /**
   * Shape variant
   * @default 'circle'
   */
  shape?: AvatarShape;
}

/**
 * AvatarBase - User profile image with fallback support
 * 
 * States:
 * - loading: fallback shown (delayMs)
 * - loaded: image visible
 * - error: fallback shown
 */
export const AvatarBase = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarBaseProps
>(({ size = 'md', shape = 'circle', ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-size={size}
    data-shape={shape}
    {...props}
  />
));
AvatarBase.displayName = 'AvatarBase';

// ============================================================================
// Avatar Image
// ============================================================================

export interface AvatarImageBaseProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

/**
 * AvatarImageBase - The actual image
 * 
 * Accessibility:
 * - alt is REQUIRED
 */
export const AvatarImageBase = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageBaseProps
>((props, ref) => <AvatarPrimitive.Image ref={ref} {...props} />);
AvatarImageBase.displayName = 'AvatarImageBase';

// ============================================================================
// Avatar Fallback
// ============================================================================

export interface AvatarFallbackBaseProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  /**
   * Delay before showing fallback (ms)
   * Prevents flash during fast image loads
   * @default 600
   */
  delayMs?: number;
}

/**
 * AvatarFallbackBase - Shown when image fails or is loading
 * 
 * Content: initials or icon
 * 
 * Accessibility:
 * - aria-hidden="true" if alt on image covers it
 */
export const AvatarFallbackBase = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackBaseProps
>(({ delayMs = 600, ...props }, ref) => (
  <AvatarPrimitive.Fallback ref={ref} delayMs={delayMs} {...props} />
));
AvatarFallbackBase.displayName = 'AvatarFallbackBase';
