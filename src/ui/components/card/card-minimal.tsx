/**
 * Card Minimal Version Component
 * Minimal styling with just border and padding
 * Uses CSS variables for all colors (NO hardcoded values)
 * Source: types/components/card.ts CardVersion 'minimal'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';
import { useColors } from '../../hooks/useColorTheme.js';

/**
 * Get CSS variable reference for a color
 */
function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

/**
 * MinimalCard Component
 */
const MinimalCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'minimal',
  variant = 'neutral',
  colorType = 'primary',
  className = '',
  children,
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}, ref) => {
  const { variables } = useColors();

  const variantColorMap: Record<string, string> = {
    neutral: 'primary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };

  const activeColorType = variantColorMap[variant] || colorType;

  const cardStyle: React.CSSProperties = {
    border: `1px solid ${getColorVar(activeColorType, 'border')}`,
    backgroundColor: 'transparent',
    color: `${getColorVar(activeColorType, 'foreground')}`,
    borderRadius: '6px',
    padding: '12px',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : (onClick ? 'pointer' : 'default'),
    transition: 'all 150ms ease-in-out',
  };

  return (
    <div
      ref={ref}
      className={`card card-minimal card-variant-${variant} ${className}`}
      style={cardStyle}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      role={onClick ? 'button' : 'article'}
      data-version={version}
      data-variant={variant}
      data-color-type={activeColorType}
    >
      {children}
    </div>
  );
});

MinimalCard.displayName = 'MinimalCard';

const MinimalCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => {
  return (
    <div
      ref={ref}
      className={`card-header ${className}`}
      style={{
        marginBottom: '8px',
      }}
    >
      {title && (
        <h3 style={{
          margin: '0',
          fontSize: '14px',
          fontWeight: '600',
          color: `hsl(var(--primary-foreground))`,
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
});

MinimalCardHeader.displayName = 'MinimalCardHeader';

const MinimalCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => {
  return (
    <div
      ref={ref}
      className={`card-content ${className}`}
    >
      {children}
    </div>
  );
});

MinimalCardContent.displayName = 'MinimalCardContent';

const MinimalCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
  direction = 'row',
}, ref) => {
  return (
    <div
      ref={ref}
      className={`card-footer ${className}`}
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: '6px',
        marginTop: '8px',
      }}
    >
      {children}
    </div>
  );
});

MinimalCardFooter.displayName = 'MinimalCardFooter';

export const MinimalCardComponent = Object.assign(MinimalCard, {
  Header: MinimalCardHeader,
  Content: MinimalCardContent,
  Footer: MinimalCardFooter,
});

export default MinimalCardComponent;
