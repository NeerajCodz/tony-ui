import * as React from 'react';

/**
 * Spinner sizes (diameter in pixels)
 * | Size | Diameter |
 * | xs   | 12px     |
 * | sm   | 16px     |
 * | md   | 24px     |
 * | lg   | 36px     |
 * | xl   | 48px     |
 */
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: SpinnerSize;
  
  /**
   * Accessible label for screen readers
   * @default 'Loading...'
   */
  label?: string;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SpinnerBase - Loading indicator
 * 
 * Animation: 360deg rotation | 0.7s | linear | infinite
 * 
 * Accessibility:
 * - role="status"
 * - Visually hidden label ("Loading...")
 * - aria-live="polite"
 * 
 * Token consumption:
 * - Track: --v-border
 * - Arc: --v-accent
 */
export const SpinnerBase = React.forwardRef<HTMLDivElement, SpinnerBaseProps>(
  ({ size = 'md', label = 'Loading...', variant, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      data-size={size}
      data-variant={variant}
      {...props}
    >
      <span className="sr-only" style={{ 
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }}>
        {label}
      </span>
    </div>
  )
);
SpinnerBase.displayName = 'SpinnerBase';
