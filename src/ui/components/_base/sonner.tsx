import * as React from 'react';

/**
 * Sonner toast position options
 */
export type SonnerPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * Sonner theme options
 */
export type SonnerTheme = 'light' | 'dark' | 'system';

// ============================================================================
// Sonner (Toaster)
// ============================================================================

export interface SonnerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Position of the toaster
   * @default 'bottom-right'
   */
  position?: SonnerPosition;
  
  /**
   * Expand toasts to fill container width
   * @default false
   */
  expand?: boolean;
  
  /**
   * Use rich colors for success/error/warning/info
   * @default false
   */
  richColors?: boolean;
  
  /**
   * Show close button on each toast
   * @default false
   */
  closeButton?: boolean;
  
  /**
   * Theme mode
   * @default 'system'
   */
  theme?: SonnerTheme;
  
  /**
   * Duration in ms (0 = no auto-dismiss)
   * @default 4000
   */
  duration?: number;
  
  /**
   * Maximum visible toasts
   * @default 3
   */
  visibleToasts?: number;
  
  /**
   * Gap between toasts in px
   * @default 14
   */
  gap?: number;
  
  /**
   * Offset from viewport edge in px
   * @default 32
   */
  offset?: string | number;
  
  /**
   * Hot key to focus the toaster (jump to latest toast)
   * @default ['altKey', 'KeyT']
   */
  hotkey?: string[];
  
  /**
   * Reverse the toast stack direction
   * @default false
   */
  invert?: boolean;
  
  /**
   * Custom icons for toast types
   */
  icons?: {
    success?: React.ReactNode;
    info?: React.ReactNode;
    warning?: React.ReactNode;
    error?: React.ReactNode;
    loading?: React.ReactNode;
  };
  
  /**
   * Pause auto-dismiss on hover
   * @default true
   */
  pauseWhenPageIsHidden?: boolean;
}

/**
 * SonnerBase - Sonner-style toast container
 * 
 * Sonner is a popular, opinionated toast library for React.
 * This base provides the container/toaster component props.
 * 
 * Features:
 * - Stacked toast display
 * - Rich colors for semantic variants
 * - Swipe to dismiss
 * - Keyboard accessible
 * - Promise support
 * - Custom JSX content
 * 
 * Usage:
 * - Place <Toaster /> once at app root
 * - Call toast('Message') or toast.success('Done!')
 */
export const SonnerBase = React.forwardRef<HTMLDivElement, SonnerBaseProps>(
  (
    {
      position = 'bottom-right',
      expand = false,
      richColors = false,
      closeButton = false,
      theme = 'system',
      duration = 4000,
      visibleToasts = 3,
      gap = 14,
      offset = 32,
      invert = false,
      pauseWhenPageIsHidden = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="region"
      aria-label="Notifications"
      data-position={position}
      data-expand={expand || undefined}
      data-rich-colors={richColors || undefined}
      data-close-button={closeButton || undefined}
      data-theme={theme}
      data-invert={invert || undefined}
      {...props}
    />
  )
);
SonnerBase.displayName = 'SonnerBase';
