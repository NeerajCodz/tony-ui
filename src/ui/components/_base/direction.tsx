import * as DirectionPrimitive from '@radix-ui/react-direction';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
/**
 * Text direction values
 */
export type Direction = 'ltr' | 'rtl';

// ============================================================================
// Direction Provider
// ============================================================================

export interface DirectionProviderBaseProps {
  /**
   * Text direction
   * @default 'ltr'
   */
  dir?: Direction;
  
  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * DirectionProviderBase - Context provider for text direction
 * 
 * Wraps the Radix UI Direction Provider. Used to provide RTL support
 * throughout the component tree.
 * 
 * Usage:
 * - Wrap your app or a section with DirectionProvider
 * - All Radix components underneath will respect the direction
 * - Use the useDirection hook to read current direction
 * 
 * Example:
 * ```tsx
 * <DirectionProvider dir="rtl">
 *   <Dialog>...</Dialog> // Will flip layout for RTL
 * </DirectionProvider>
 * ```
 */
export const DirectionProviderBase = DirectionPrimitive.Provider;

// ============================================================================
// Direction (shorthand)
// ============================================================================

export interface DirectionBaseProps {
  /**
   * Text direction
   * @default 'ltr'
   */
  dir?: Direction;
  
  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * DirectionBase - Shorthand for DirectionProvider
 */
export const DirectionBase = ({ dir = 'ltr', children }: DirectionBaseProps) => (
  <DirectionPrimitive.Provider dir={dir}>{children}</DirectionPrimitive.Provider>
);
DirectionBase.displayName = 'DirectionBase';

// ============================================================================
// useDirection hook
// ============================================================================

/**
 * useDirectionBase - Hook to get current direction from context
 * 
 * Returns the direction from the nearest DirectionProvider,
 * or 'ltr' if none is found.
 */
export const useDirectionBase = DirectionPrimitive.useDirection;

export { DirectionPrimitive,Slot };
