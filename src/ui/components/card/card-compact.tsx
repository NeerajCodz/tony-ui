/**
 * Card Compact Version Component
 * Reduced padding for dense layouts
 * Source: types/components/card.ts CardVersion 'compact'
 */

import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '../../types/components/card.js';

function getColorVar(colorType: string, state: string = 'base'): string {
  return `hsl(var(--${colorType}-${state}))`;
}

const CompactCard = React.forwardRef<HTMLDivElement, CardProps>(({
  version = 'compact',
  variant = 'neutral',
  colorType = 'secondary',
  className = '',
  children,
  disabled = false,
  onClick,
}, ref) => {
  const variantColorMap: Record<string, string> = {
    neutral: 'secondary',
    success: 'success',
    warning: 'warning',
    info: 'info',
    destructive: 'destructive',
  };

  const activeColorType = variantColorMap[variant] || colorType;

  return (
    <div
      ref={ref}
      className={`card card-compact card-variant-${variant} ${className}`}
      style={{
        border: `1px solid ${getColorVar(activeColorType, 'border')}`,
        backgroundColor: `${getColorVar(activeColorType, 'background')}`,
        color: `${getColorVar(activeColorType, 'foreground')}`,
        borderRadius: '6px',
        padding: '8px',
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

CompactCard.displayName = 'CompactCard';

const CompactCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  children,
  className = '',
  title,
}, ref) => (
  <div ref={ref} className={`card-header ${className}`} style={{ marginBottom: '4px' }}>
    {title && <h4 style={{ margin: '0', fontSize: '13px', fontWeight: '600' }}>{title}</h4>}
    {children}
  </div>
));

CompactCardHeader.displayName = 'CompactCardHeader';

const CompactCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-content ${className}`}>
    {children}
  </div>
));

CompactCardContent.displayName = 'CompactCardContent';

const CompactCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  children,
  className = '',
}, ref) => (
  <div ref={ref} className={`card-footer ${className}`} style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
    {children}
  </div>
));

CompactCardFooter.displayName = 'CompactCardFooter';

export const CompactCardComponent = Object.assign(CompactCard, {
  Header: CompactCardHeader,
  Content: CompactCardContent,
  Footer: CompactCardFooter,
});

export default CompactCardComponent;
