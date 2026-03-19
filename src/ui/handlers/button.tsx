'use client';

/**
 * Button Handler
 * 
 * Dynamically loads button component based on version, variant, and type.
 * Uses the Universal Handler Factory for consistent behavior.
 */

import React from 'react';
import { UniversalHandler } from '../core/handler-factory';
import type { Version, Variant, Size, ButtonComponentType } from '../types/common';

// ============================================================================
// TYPES
// ============================================================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: Version;
  variant?: Variant;
  type?: ButtonComponentType;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// ============================================================================
// HANDLER
// ============================================================================

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    version = 'default',
    variant = 'default',
    type = 'default',
    size = 'md',
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    return (
      <UniversalHandler
        ref={ref}
        component="button"
        version={version}
        variant={variant}
        type={type}
        size={size}
        loading={loading}
        fullWidth={fullWidth}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </UniversalHandler>
    );
  }
);

Button.displayName = 'Button';

export default Button;
