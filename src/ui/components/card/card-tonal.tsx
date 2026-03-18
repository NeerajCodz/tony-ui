/**
 * Card Tonal Version Component
 * Tinted background using semantic colors for messaging
 * Source: types/components/card.ts CardVersion 'tonal'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const TonalCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'tonal',
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
      className={`card card-tonal card-variant-${variant} ${className}`}
      style={{
        border: `1px solid ${getColorVar(activeColorType, 'border')}`,
        backgroundColor: `${getColorVar(activeColorType, 'background')}`,
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

TonalCard.displayName = 'TonalCard';

const TonalCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => (
  <div ref={ref} className={`card-header ${className}`} style={{ marginBottom: '12px' }}>
    {title && <h3 style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>{title}</h3>}
    {children}
  </div>
));

TonalCardHeader.displayName = 'TonalCardHeader';

const TonalCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-content ${className}`}>
    {children}
  </div>
));

TonalCardContent.displayName = 'TonalCardContent';

const TonalCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-footer ${className}`} style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
    {children}
  </div>
));

TonalCardFooter.displayName = 'TonalCardFooter';

export const TonalCardComponent = Object.assign(TonalCard, {
  Header: TonalCardHeader,
  Content: TonalCardContent,
  Footer: TonalCardFooter,
});

export default TonalCardComponent;
