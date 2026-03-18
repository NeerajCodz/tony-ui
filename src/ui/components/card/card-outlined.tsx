/**
 * Card Outlined Version Component
 * Prominent border with transparent background
 * Source: types/components/card.ts CardVersion 'outlined'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const OutlinedCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'outlined',
  variant = 'neutral',
  colorType = 'primary',
  className = '',
  children,
  disabled = false,
  onClick,
}, ref) => {
  const variantColorMap: Record<string, string> = {
    neutral: 'primary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };

  const activeColorType = variantColorMap[variant] || colorType;

  return (
    <div
      ref={ref}
      className={`card card-outlined card-variant-${variant} ${className}`}
      style={{
        border: `3px solid ${getColorVar(activeColorType, 'border')}`,
        backgroundColor: 'transparent',
        color: `${getColorVar(activeColorType, 'foreground')}`,
        borderRadius: '8px',
        padding: '16px',
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : (onClick ? 'pointer' : 'default'),
        transition: 'all 150ms ease-in-out',
      }}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      role={onClick ? 'button' : 'article'}
      data-version={version}
      data-variant={variant}
    >
      {children}
    </div>
  );
});

OutlinedCard.displayName = 'OutlinedCard';

const OutlinedCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => (
  <div ref={ref} className={`card-header ${className}`} style={{ marginBottom: '12px' }}>
    {title && <h3 style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>{title}</h3>}
    {children}
  </div>
));

OutlinedCardHeader.displayName = 'OutlinedCardHeader';

const OutlinedCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-content ${className}`}>
    {children}
  </div>
));

OutlinedCardContent.displayName = 'OutlinedCardContent';

const OutlinedCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-footer ${className}`} style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
    {children}
  </div>
));

OutlinedCardFooter.displayName = 'OutlinedCardFooter';

export const OutlinedCardComponent = Object.assign(OutlinedCard, {
  Header: OutlinedCardHeader,
  Content: OutlinedCardContent,
  Footer: OutlinedCardFooter,
});

export default OutlinedCardComponent;
