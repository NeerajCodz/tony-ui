'use client';

/**
 * Card Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import type { 
  CardProps, 
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps
} from '../types/components/card.js';
import type { Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

// Dynamic component loader - NO hardcoded versions
const loadCardComponent = (version: Version): React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>> => {
  return lazy(() =>
    import(`../components/${version}/card.tsx`)
      .catch(() => import(`../components/default/card.tsx`))
      .catch(() => ({
        default: React.forwardRef<HTMLDivElement, { children?: React.ReactNode; className?: string }>(
          ({ children, className = '' }, ref) => (
          <div ref={ref} className={className}>{children}</div>
          )
        )
      }))
  ) as React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>>;
};

// Dynamic config loader
const resolveCardConfig = (module: Record<string, unknown>) => {
  if ('cardConfig' in module) {
    return module.cardConfig;
  }
  if ('default' in module) {
    return module.default;
  }
  return null;
};

const loadCardConfig = async (version: Version) => {
  try {
    const module = await import(`../config/components/${version}/card.tsx`);
    return resolveCardConfig(module as Record<string, unknown>);
  } catch {
    try {
      const module = await import(`../config/components/default/card.tsx`);
      return resolveCardConfig(module as Record<string, unknown>);
    } catch {
      return null;
    }
  }
};

// Component cache for performance
const componentCache = new Map<string, React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>>>();

// Minimal loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 rounded h-32" />
);

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

// CardTitle - loaded from config per version
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ children, className = '' }, ref) => (
  <h3 
    ref={ref} 
    className={className}
  >
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

// CardDescription - loaded from config per version
export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ children, className = '' }, ref) => (
  <p 
    ref={ref} 
    className={className}
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
    >
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

// ============ MAIN CARD COMPONENT ============

const CardBase = React.forwardRef<HTMLDivElement, CardProps>(({ 
  version = 'default',
  variant = 'default',
  type = 'default',
  ...props 
}, ref) => {
  const [config, setConfig] = useState<unknown>(null);
  const shouldLog = process.env.NODE_ENV !== 'production';
  
  // Dynamically load config
  useEffect(() => {
    loadCardConfig(version).then(setConfig);
  }, [version]);
  
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);

  if (shouldLog) {
    console.log('[UI:card]', { version, variant, type });
  }
  
  // Get or create lazy component
  const LazyComponent = useMemo(() => {
    const cacheKey = `${version}/card`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadCardComponent(version));
    }
    return componentCache.get(cacheKey)!;
  }, [version]);
  const DynamicCard = LazyComponent as React.ComponentType<Record<string, unknown>>;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <DynamicCard 
        ref={ref} 
        version={version}
        variant={variant}
        type={type}
        colors={colors}
        config={config}
        {...props} 
      />
    </Suspense>
  );
});
CardBase.displayName = 'Card';

// Composite Card with attached subcomponents
type CardCompound = typeof CardBase & {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
}) as CardCompound;

export default Card;
