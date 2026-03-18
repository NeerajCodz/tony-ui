/**
 * Card Elevated Version Component
 * Floating effect with no border and prominent shadow
 * Source: types/components/card.ts CardVersion 'elevated'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const ElevatedCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'elevated',
  variant = 'neutral',
  colorType = 'surface',
  className = '',
  children,
  disabled = false,
  onClick,
}, ref) => {
  return (
    <div
      ref={ref}
      className={`card card-elevated card-variant-${variant} ${className}`}
      style={{
        border: 'none',
        backgroundColor: `${getColorVar(colorType, 'base')}`,
        color: `${getColorVar(colorType, 'foreground')}`,
        borderRadius: '8px',
        padding: '16px',
        boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.15)`,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : (onClick ? 'pointer' : 'default'),
        transition: 'box-shadow 200ms ease-in-out',
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

ElevatedCard.displayName = 'ElevatedCard';

const ElevatedCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => (
  <div ref={ref} className={`card-header ${className}`} style={{ marginBottom: '12px' }}>
    {title && <h3 style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>{title}</h3>}
    {children}
  </div>
));

ElevatedCardHeader.displayName = 'ElevatedCardHeader';

const ElevatedCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-content ${className}`}>
    {children}
  </div>
));

ElevatedCardContent.displayName = 'ElevatedCardContent';

const ElevatedCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-footer ${className}`} style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
    {children}
  </div>
));

ElevatedCardFooter.displayName = 'ElevatedCardFooter';

export const ElevatedCardComponent = Object.assign(ElevatedCard, {
  Header: ElevatedCardHeader,
  Content: ElevatedCardContent,
  Footer: ElevatedCardFooter,
});

export default ElevatedCardComponent;
