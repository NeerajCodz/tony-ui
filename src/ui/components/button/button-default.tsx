/**
 * Button Default Version Component
 * Standard button with medium padding and border
 * No icons - text content only
 * Source: types/components/button.ts ButtonVersion 'default'
 */

import React from 'react';
import type { ButtonProps } from '../../types/components/button.js';
import { useColors } from '../../hooks/useColorTheme.js';
import '../../styles/buttons.css';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const DefaultButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  version = 'default',
  type: buttonType = 'default',
  variant = 'primary',
  size = 'md',
  colorType = 'primary',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  htmlType = 'button',
  'aria-label': ariaLabel,
}, ref) => {
  const variantColorMap: Record<string, string> = {
    primary: 'primary',
    neutral: 'primary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };

  const activeColorType = variantColorMap[variant] || colorType;

  const typeStyles: Record<string, React.CSSProperties> = {
    'default': {
      border: `2px solid ${getColorVar(activeColorType, 'border')}`,
      backgroundColor: `${getColorVar(activeColorType, 'background')}`,
    },
    'outline': {
      border: `2px solid ${getColorVar(activeColorType, 'border')}`,
      backgroundColor: 'transparent',
    },
    'solid': {
      border: 'none',
      backgroundColor: `${getColorVar(activeColorType, 'base')}`,
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '6px 12px', fontSize: '12px' },
    md: { padding: '10px 16px', fontSize: '14px' },
    lg: { padding: '14px 24px', fontSize: '16px' },
    xl: { padding: '18px 32px', fontSize: '18px' },
  };

  const buttonStyle: React.CSSProperties = {
    ...typeStyles[buttonType],
    ...sizeStyles[size],
    color: `${getColorVar(activeColorType, 'foreground')}`,
    borderRadius: '6px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 150ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button
      ref={ref}
      type={htmlType}
      className={`btn btn-default btn-variant-${variant} btn-size-${size} ${className}`}
      style={buttonStyle}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      data-version={version}
      data-type={buttonType}
      data-variant={variant}
    >
      {children}
    </button>
  );
});

DefaultButton.displayName = 'DefaultButton';

export const Button = DefaultButton;
export default DefaultButton;
