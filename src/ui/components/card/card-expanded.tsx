/**
 * Card Expanded Version Component
 * Extra padding and spacing with larger shadow
 * Source: types/components/card.ts CardVersion 'expanded'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const ExpandedCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'expanded',
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
      className={`card card-expanded card-variant-${variant} ${className}`}
      style={{
        border: `2px solid ${getColorVar(activeColorType, 'border')}`,
        backgroundColor: `${getColorVar(activeColorType, 'background')}`,
        color: `${getColorVar(activeColorType, 'foreground')}`,
        borderRadius: '12px',
        padding: '24px',
        boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : (onClick ? 'pointer' : 'default'),
        transition: 'all 200ms ease-in-out',
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

ExpandedCard.displayName = 'ExpandedCard';

const ExpandedCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => (
  <div ref={ref} className={`card-header ${className}`} style={{
    borderBottom: `1px solid hsl(var(--primary-border))`,
    paddingBottom: '16px',
    marginBottom: '16px',
  }}>
    {title && <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>{title}</h2>}
    {children}
  </div>
));

ExpandedCardHeader.displayName = 'ExpandedCardHeader';

const ExpandedCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-content ${className}`} style={{ padding: '8px 0' }}>
    {children}
  </div>
));

ExpandedCardContent.displayName = 'ExpandedCardContent';

const ExpandedCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
  direction = 'row',
}, ref) => (
  <div ref={ref} className={`card-footer ${className}`} style={{
    display: 'flex',
    flexDirection: direction,
    gap: '12px',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: `1px solid hsl(var(--primary-border))`,
  }}>
    {children}
  </div>
));

ExpandedCardFooter.displayName = 'ExpandedCardFooter';

export const ExpandedCardComponent = Object.assign(ExpandedCard, {
  Header: ExpandedCardHeader,
  Content: ExpandedCardContent,
  Footer: ExpandedCardFooter,
});

export default ExpandedCardComponent;
