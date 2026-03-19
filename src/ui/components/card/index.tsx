/**
 * Card Component - Dynamic Renderer with Shadcn-like API
 * Supports: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
 */

import React, { lazy, Suspense } from 'react';
import type { CardProps, CardVersion, CardComponent } from '../../types/components/card.js';
import cardConfig from '../../config/components/card.json';

// Dynamic imports for all card versions
const versionComponents: Record<CardVersion, any> = {
  'angular-corner': lazy(() => import('./card-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./card-holo-frame.tsx')),
  'data-panel': lazy(() => import('./card-data-panel.tsx')),
  'circuit-board': lazy(() => import('./card-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./card-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./card-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./card-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./card-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./card-matrix-grid.tsx')),
  'glass-morphism': lazy(() => import('./card-glass-morphism.tsx')),
  'tech-panel': lazy(() => import('./card-tech-panel.tsx')),
  'neon-outline': lazy(() => import('./card-neon-outline.tsx')),
};

// Minimal loading skeleton - no text
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse" style={{ minHeight: '120px' }} />
);

// Fallback for disabled versions - just renders children
const FallbackCard = React.forwardRef<HTMLDivElement, CardProps>(({ 
  children, 
  className = '',
  ...props 
}, ref) => (
  <div ref={ref} className={`relative p-6 ${className}`} style={{
    border: '2px dashed hsl(var(--border-base))',
    backgroundColor: 'rgba(var(--card-bg-rgb), 0.3)',
  }}>
    {children}
  </div>
));
FallbackCard.displayName = 'FallbackCard';

// ============ SHADCN-LIKE SUBCOMPONENTS ============

// CardHeader - container for title and description
export const CardHeader = React.forwardRef<HTMLDivElement, {
  children?: React.ReactNode;
  className?: string;
}>(({ children, className = '' }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 mb-4 ${className}`}>
    {children}
  </div>
));
CardHeader.displayName = 'CardHeader';

// CardTitle - bold futuristic title
export const CardTitle = React.forwardRef<HTMLHeadingElement, {
  children?: React.ReactNode;
  className?: string;
}>(({ children, className = '' }, ref) => (
  <h3 
    ref={ref} 
    className={`text-xl font-black font-mono tracking-wider uppercase leading-none ${className}`}
    style={{ color: 'inherit' }}
  >
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

// CardDescription - muted description text
export const CardDescription = React.forwardRef<HTMLParagraphElement, {
  children?: React.ReactNode;
  className?: string;
}>(({ children, className = '' }, ref) => (
  <p 
    ref={ref} 
    className={`text-sm font-mono ${className}`}
    style={{ color: 'hsl(var(--text-muted))' }}
  >
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

// CardContent - main content area
export const CardContent = React.forwardRef<HTMLDivElement, {
  children?: React.ReactNode;
  className?: string;
}>(({ children, className = '' }, ref) => (
  <div ref={ref} className={`${className}`}>
    {children}
  </div>
));
CardContent.displayName = 'CardContent';

// CardFooter - footer with actions
export const CardFooter = React.forwardRef<HTMLDivElement, {
  children?: React.ReactNode;
  className?: string;
}>(({ children, className = '' }, ref) => (
  <div 
    ref={ref} 
    className={`flex items-center gap-2 mt-4 pt-4 ${className}`}
    style={{ borderTop: '1px solid hsl(var(--border-base) / 0.3)' }}
  >
    {children}
  </div>
));
CardFooter.displayName = 'CardFooter';

// ============ MAIN CARD COMPONENT ============

const CardBase = React.forwardRef<HTMLDivElement, CardProps>(({ 
  version = 'angular-corner',
  ...props 
}, ref) => {
  const versions = cardConfig.versions as any;
  const versionConfig = versions[version];

  if (!versionConfig?.enabled) {
    return <FallbackCard ref={ref} version={version} {...props} />;
  }

  const VersionComponent = versionComponents[version];
  if (!VersionComponent) {
    return <FallbackCard ref={ref} version={version} {...props} />;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <VersionComponent ref={ref} {...props} />
    </Suspense>
  );
});
CardBase.displayName = 'Card';

// Composite Card with attached subcomponents
export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
}) as CardComponent;

// Export types
export type { 
  CardVersion, 
  CardVariant, 
  CardProps, 
  CardHeaderProps, 
  CardContentProps, 
  CardFooterProps,
  CardComponent 
} from '../../types/components/card.js';

export { CARD_VERSION_CONFIGS } from '../../types/components/card.js';

export default Card;



