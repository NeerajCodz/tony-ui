import * as React from 'react';

/**
 * Badge type variants - all 15 types supported
 */
export type BadgeType =
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
 * Badge sizes
 * | Size | Height |
 * | sm   | 16px   |
 * | md   | 20px   |
 * | lg   | 24px   |
 */
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: BadgeType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Makes badge interactive (onClick/onRemove)
   * Adds hover/focus/active states
   */
  interactive?: boolean;
  
  /**
   * Show close/remove button
   */
  removable?: boolean;
  
  /**
   * Callback when remove button is clicked
   */
  onRemove?: (event: React.MouseEvent) => void;
}

/**
 * BadgeBase - Small label for status, metadata, or counts
 * 
 * States (when interactive):
 * - default | hover | focus | active
 * 
 * Anatomy:
 * <Badge>
 *   [leading icon]
 *   [text]
 *   [trailing icon/close]
 * </Badge>
 */
export const BadgeBase = React.forwardRef<HTMLDivElement, BadgeBaseProps>(
  (
    {
      type = 'default',
      variant,
      size = 'md',
      interactive = false,
      removable = false,
      onRemove,
      onClick,
      ...props
    },
    ref
  ) => {
    const isInteractive = interactive || !!onClick || removable;
    
    return (
      <div
        ref={ref}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onClick={onClick}
        data-type={type}
        data-size={size}
        data-variant={variant}
        data-interactive={isInteractive ? '' : undefined}
        data-removable={removable ? '' : undefined}
        {...props}
      />
    );
  }
);
BadgeBase.displayName = 'BadgeBase';
