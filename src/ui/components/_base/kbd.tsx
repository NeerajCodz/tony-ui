import * as React from 'react';

/**
 * Kbd type variants
 */
export type KbdType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'elevated'
  | 'unstyled';

/**
 * Kbd sizes
 * | Size | Height | Font  | Padding |
 * | xs   | 18px   | 10px  | 2px 4px |
 * | sm   | 22px   | 12px  | 2px 6px |
 * | md   | 26px   | 14px  | 3px 8px |
 */
export type KbdSize = 'xs' | 'sm' | 'md';

// ============================================================================
// Kbd
// ============================================================================

export interface KbdBaseProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: KbdType;
  
  /**
   * Size variant
   * @default 'sm'
   */
  size?: KbdSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * KbdBase - Keyboard key indicator
 * 
 * Displays keyboard shortcuts like Ctrl+S, ⌘+K, etc.
 * 
 * Styling:
 * - Monospace font
 * - Elevated/3D appearance (looks like physical key)
 * - Subtle border/shadow
 * 
 * Usage:
 * - <Kbd>⌘</Kbd><Kbd>K</Kbd> (command palette)
 * - <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> (save)
 * - <Kbd>Esc</Kbd> (escape)
 */
export const KbdBase = React.forwardRef<HTMLElement, KbdBaseProps>(
  ({ type = 'default', size = 'sm', variant, ...props }, ref) => (
    <kbd
      ref={ref}
      data-type={type}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
);
KbdBase.displayName = 'KbdBase';
