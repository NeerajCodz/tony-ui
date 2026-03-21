import * as React from 'react';

/**
 * Skeleton type variants (animation style)
 */
export type SkeletonType =
  | 'pulse'    // Pulsing opacity animation
  | 'wave'     // Wave animation (shimmer effect)
  | 'none'     // No animation (static)
  | 'unstyled';

/**
 * Skeleton shape variants
 */
export type SkeletonShape = 'rectangle' | 'circle' | 'text';

// ============================================================================
// Skeleton
// ============================================================================

export interface SkeletonBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Animation type
   * @default 'pulse'
   */
  type?: SkeletonType;
  
  /**
   * Shape variant
   * @default 'rectangle'
   */
  shape?: SkeletonShape;
  
  /**
   * Width of the skeleton
   * Can be number (px) or string (e.g., '100%', '10rem')
   */
  width?: number | string;
  
  /**
   * Height of the skeleton
   * Can be number (px) or string
   */
  height?: number | string;
  
  /**
   * Border radius
   * Can be number (px) or string
   */
  radius?: number | string;
  
  /**
   * Whether content has loaded (hides skeleton)
   * @default false
   */
  loaded?: boolean;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SkeletonBase - Loading placeholder
 * 
 * Use to indicate content is loading.
 * Should match the approximate size/shape of final content.
 * 
 * Animation types:
 * - pulse: Opacity pulses 50%→100%→50% | --duration-slow
 * - wave: Shimmer effect sweeps across | --duration-slow
 * - none: Static gray block
 * 
 * Shape presets:
 * - rectangle: Basic block shape
 * - circle: Circular (for avatars)
 * - text: Rounded text line shape
 * 
 * Accessibility:
 * - aria-busy="true" while loading
 * - Screen readers announce loading state
 * - Respects prefers-reduced-motion
 */
export const SkeletonBase = React.forwardRef<HTMLDivElement, SkeletonBaseProps>(
  (
    {
      type = 'pulse',
      shape = 'rectangle',
      width,
      height,
      radius,
      loaded,
      variant,
      style,
      children,
      ...props
    },
    ref
  ) => {
    // If loaded, render children instead of skeleton
    if (loaded && children) {
      return <>{children}</>;
    }

    const computedRadius =
      radius ??
      (shape === 'circle' ? '50%' : shape === 'text' ? '0.25rem' : undefined);

    return (
      <div
        ref={ref}
        aria-busy="true"
        aria-live="polite"
        data-type={type}
        data-shape={shape}
        data-variant={variant}
        data-loaded={loaded || undefined}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          borderRadius:
            typeof computedRadius === 'number'
              ? `${computedRadius}px`
              : computedRadius,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SkeletonBase.displayName = 'SkeletonBase';

// ============================================================================
// Skeleton Text
// ============================================================================

export interface SkeletonTextBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of text lines
   * @default 1
   */
  lines?: number;
  
  /**
   * Width of last line (percentage or value)
   * @default '80%'
   */
  lastLineWidth?: number | string;
  
  /**
   * Gap between lines
   * @default '0.5rem'
   */
  gap?: number | string;
}

/**
 * SkeletonTextBase - Multiple skeleton text lines
 */
export const SkeletonTextBase = React.forwardRef<HTMLDivElement, SkeletonTextBaseProps>(
  ({ lines = 1, lastLineWidth = '80%', gap = '0.5rem', style, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: typeof gap === 'number' ? `${gap}px` : gap,
        ...style,
      }}
      {...props}
    />
  )
);
SkeletonTextBase.displayName = 'SkeletonTextBase';
