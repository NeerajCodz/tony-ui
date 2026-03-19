/**
 * Card Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { 
  CardProps, 
  CardVersion,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
  CardComponent
} from '../types/components/card.js';
import cardConfig from '../config/components/card.json';

// Dynamic imports for all card versions
const versionComponents: Record<CardVersion, any> = {
  'angular-corner': lazy(() => import('../components/angular-corner/card.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/card.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/card.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/card.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/card.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/card.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/card.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/card.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/card.tsx')),
  'glass-morphism': lazy(() => import('../components/glass-morphism/card.tsx')),
  'tech-panel': lazy(() => import('../components/tech-panel/card.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/card.tsx')),
};

// Minimal loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded h-32" />
);

// Fallback for disabled versions
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

// ============ COMPOUND COMPONENTS ============

// CardHeader - container for title and description
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '' }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 mb-4 ${className}`}>
      {children}
    </div>
  )
);
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
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '' }, ref) => (
    <div ref={ref} className={`${className}`}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

// CardFooter - footer with actions
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '' }, ref) => (
    <div 
      ref={ref} 
      className={`flex items-center gap-2 mt-4 pt-4 ${className}`}
      style={{ borderTop: '1px solid hsl(var(--border-base) / 0.3)' }}
    >
      {children}
    </div>
  )
);
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

export default Card;
