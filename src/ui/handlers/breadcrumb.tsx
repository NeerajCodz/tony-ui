/**
 * Breadcrumb Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type BreadcrumbVersion = Version;
export type BreadcrumbVariant = Variant;

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  version?: BreadcrumbVersion;
  variant?: BreadcrumbVariant;
  separator?: React.ReactNode;
}

// Context
interface BreadcrumbContextValue {
  version: BreadcrumbVersion;
  variant: BreadcrumbVariant;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue>({
  version: 'angular-corner',
  variant: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useBreadcrumbContext = () => useContext(BreadcrumbContext);

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded h-6 w-48" />
);

// Main Component
const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbProps>(({
  version = 'angular-corner',
  variant = 'default',
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'breadcrumb', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <BreadcrumbContext.Provider value={{ version, variant, colors, versionModule }}>
      <nav ref={ref} aria-label="breadcrumb" {...props}>
        {children}
      </nav>
    </BreadcrumbContext.Provider>
  );
});
BreadcrumbRoot.displayName = 'Breadcrumb';

// List
const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant, colors } = useBreadcrumbContext();

    if (versionModule?.BreadcrumbList) {
      const Component = versionModule.BreadcrumbList;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <ol
        ref={ref}
        className={`flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${className}`}
        {...props}
      />
    );
  }
);
BreadcrumbList.displayName = 'BreadcrumbList';

// Item
const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant, colors } = useBreadcrumbContext();

    if (versionModule?.BreadcrumbItem) {
      const Component = versionModule.BreadcrumbItem;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <li
        ref={ref}
        className={`inline-flex items-center gap-1.5 ${className}`}
        {...props}
      />
    );
  }
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

// Link
const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }>(
  ({ className = '', asChild, ...props }, ref) => {
    const { versionModule, variant, colors } = useBreadcrumbContext();

    if (versionModule?.BreadcrumbLink) {
      const Component = versionModule.BreadcrumbLink;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <a
        ref={ref}
        className={`transition-colors hover:text-foreground ${className}`}
        {...props}
      />
    );
  }
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

// Page (current)
const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant, colors } = useBreadcrumbContext();

    if (versionModule?.BreadcrumbPage) {
      const Component = versionModule.BreadcrumbPage;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={`font-normal text-foreground ${className}`}
        {...props}
      />
    );
  }
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

// Separator
const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className = '', children, ...props }, ref) => {
    const { versionModule, variant, colors } = useBreadcrumbContext();

    if (versionModule?.BreadcrumbSeparator) {
      const Component = versionModule.BreadcrumbSeparator;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props}>{children}</Component>;
    }

    return (
      <li
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={`[&>svg]:h-3.5 [&>svg]:w-3.5 ${className}`}
        {...props}
      >
        {children || '/'}
      </li>
    );
  }
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

// Ellipsis
const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant, colors } = useBreadcrumbContext();

    if (versionModule?.BreadcrumbEllipsis) {
      const Component = versionModule.BreadcrumbEllipsis;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <span
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={`flex h-9 w-9 items-center justify-center ${className}`}
        {...props}
      >
        ...
        <span className="sr-only">More</span>
      </span>
    );
  }
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

// Composite export
export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});

export {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
export default Breadcrumb;
