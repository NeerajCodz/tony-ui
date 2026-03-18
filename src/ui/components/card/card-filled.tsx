/**
 * Card Filled Version Component
 * Solid background fill without border
 * Source: types/components/card.ts CardVersion 'filled'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const FilledCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'filled',
  variant = 'neutral',
  colorType = 'container',
  className = '',
  children,
  disabled = false,
  onClick,
}, ref) => {
  const variantColorMap: Record<string, string> = {
    neutral: 'container',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };

  const activeColorType = variantColorMap[variant] || colorType;

  return (
    <div
      ref={ref}
      className={`card card-filled card-variant-${variant} ${className}`}
      style={{
        border: 'none',
        backgroundColor: `${getColorVar(activeColorType, 'base')}`,
        color: `${getColorVar(activeColorType, 'foreground')}`,
        borderRadius: '6px',
        padding: '16px',
        boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
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

FilledCard.displayName = 'FilledCard';

const FilledCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => (
  <div ref={ref} className={`card-header ${className}`} style={{ marginBottom: '12px' }}>
    {title && <h3 style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>{title}</h3>}
    {children}
  </div>
));

FilledCardHeader.displayName = 'FilledCardHeader';

const FilledCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-content ${className}`}>
    {children}
  </div>
));

FilledCardContent.displayName = 'FilledCardContent';

const FilledCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-footer ${className}`} style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
    {children}
  </div>
));

FilledCardFooter.displayName = 'FilledCardFooter';

export const FilledCardComponent = Object.assign(FilledCard, {
  Header: FilledCardHeader,
  Content: FilledCardContent,
  Footer: FilledCardFooter,
});

export default FilledCardComponent;
