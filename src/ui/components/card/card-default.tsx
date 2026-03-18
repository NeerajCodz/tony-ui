/**
 * Card Default Version Component
 * Standard card with border, subtle background, and default spacing
 * Uses CSS variables for all colors (NO hardcoded values)
 * Source: types/components/card.ts CardVersion 'default'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';
import { useColors } from '../../hooks/useColorTheme.js';
import '../../styles/cards.css';

/**
 * Get CSS variable reference for a color
 * Format: hsl(var(--colorType-state))
 */
function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

/**
 * DefaultCard Component
 * Renders standard card with customizable variant and type
 */
const DefaultCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'default',
  variant = 'neutral',
  type = 'default',
  colorType = 'primary',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}, ref) => {
  const { variables } = useColors();

  // Build variant-specific styles
  const variantColorMap: Record<string, string> = {
    neutral: 'primary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };

  const activeColorType = variantColorMap[variant] || colorType;

  // Build type-specific border and background
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

  // Inline styles using CSS variables
  const cardStyle: React.CSSProperties = {
    ...typeStyles[type],
    color: `${getColorVar(activeColorType, 'foreground')}`,
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
    borderRadius: '8px',
    padding: '16px',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : (onClick ? 'pointer' : 'default'),
    transition: animated ? 'all 200ms ease-in-out' : 'none',
  };

  return (
    <div
      ref={ref}
      className={`card card-default card-variant-${variant} ${className}`}
      style={cardStyle}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      role={onClick ? 'button' : 'article'}
      data-version={version}
      data-variant={variant}
      data-type={type}
      data-color-type={activeColorType}
    >
      {children}
    </div>
  );
});

DefaultCard.displayName = 'DefaultCard';

/**
 * CardHeader - For card titles and headers
 */
const DefaultCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => {
  const { variables } = useColors();

  return (
    <div
      ref={ref}
      className={`card-header ${className}`}
      style={{
        borderBottom: `1px solid hsl(var(--primary-border))`,
        paddingBottom: '12px',
        marginBottom: '12px',
      }}
    >
      {title && (
        <h3 style={{
          margin: '0 0 8px 0',
          color: `hsl(var(--primary-foreground))`,
          fontSize: '16px',
          fontWeight: '600',
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
});

DefaultCardHeader.displayName = 'DefaultCardHeader';

/**
 * CardContent - Main content area
 */
const DefaultCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => {
  return (
    <div
      ref={ref}
      className={`card-content ${className}`}
      style={{
        padding: '4px 0',
      }}
    >
      {children}
    </div>
  );
});

DefaultCardContent.displayName = 'DefaultCardContent';

/**
 * CardFooter - For actions and footer content
 */
const DefaultCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
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
        gap: '8px',
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: `1px solid hsl(var(--primary-border))`,
      }}
    >
      {children}
    </div>
  );
});

DefaultCardFooter.displayName = 'DefaultCardFooter';

/**
 * Composite Card component
 */
export const Card = Object.assign(DefaultCard, {
  Header: DefaultCardHeader,
  Content: DefaultCardContent,
  Footer: DefaultCardFooter,
});

export default Card;
