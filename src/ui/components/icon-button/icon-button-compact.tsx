/**
 * Icon Button Compact Version Component
 * Small compact icon button
 * Source: types/components/button.ts IconButtonVersion 'compact'
 */

import React from 'react';
import type { IconButtonProps } from '../../types/components/button.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const CompactIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  version = 'compact',
  type: buttonType = 'default',
  variant = 'primary',
  colorType = 'primary',
  animated = true,
  icon,
  disabled = false,
  onClick,
  htmlType = 'button',
  label,
  className = '',
}, ref) => {
  const variantColorMap: Record<string, string> = { primary: 'primary', neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive' };
  const activeColorType = variantColorMap[variant] || colorType;

  const typeStyles: Record<string, React.CSSProperties> = {
    'default': { border: `1px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: `${getColorVar(activeColorType, 'background')}` },
    'outline': { border: `1px solid ${getColorVar(activeColorType, 'border')}`, backgroundColor: 'transparent' },
    'solid': { border: 'none', backgroundColor: `${getColorVar(activeColorType, 'base')}` },
  };

  const buttonStyle: React.CSSProperties = {
    ...typeStyles[buttonType],
    color: `${getColorVar(activeColorType, 'foreground')}`,
    width: '32px',
    height: '32px',
    padding: '0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: animated ? 'all 100ms ease-in-out' : 'none',
    outline: 'none',
  };

  return (
    <button ref={ref} type={htmlType} className={`icon-btn icon-btn-compact icon-btn-variant-${variant} ${className}`} style={buttonStyle} onClick={disabled ? undefined : onClick} disabled={disabled} aria-label={label} data-version={version}>
      {icon}
    </button>
  );
});

CompactIconButton.displayName = 'CompactIconButton';
export default CompactIconButton;
