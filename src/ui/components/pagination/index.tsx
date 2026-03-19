import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';

// Context to share version between compound components
const PaginationVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(PaginationVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(`./pagination-${version}.tsx`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={`ui-pagination-${componentName.toLowerCase()} ${className}`} {...p}>{children}</div>
          ) 
        };
      }
    }), [version]);

    return (
      <Suspense fallback={<div className="animate-pulse bg-muted/10 h-8 rounded" />}>
        <LazyComponent ref={ref} {...props} />
      </Suspense>
    );
  });
};

// Main Component (Root)
const PaginationRoot = React.forwardRef(({ 
  version = 'angular-corner',
  children,
  ...props 
}, ref) => {
  
  const LazyRoot = useMemo(() => lazy(async () => {
    try {
      const module = await import(`./pagination-${version}.tsx`);
      return { default: module.Pagination }; 
    } catch (e) {
      return { 
        default: ({ children }) => <>{children}</>
      };
    }
  }), [version]);

  return (
    <PaginationVersionContext.Provider value={version}>
      <Suspense fallback={null}>
        <LazyRoot {...props}>
          {children}
        </LazyRoot>
      </Suspense>
    </PaginationVersionContext.Provider>
  );
});
PaginationRoot.displayName = 'Pagination';

// Subcomponents
export const PaginationContent = createLazySubcomponent('PaginationContent');
PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = createLazySubcomponent('PaginationItem');
PaginationItem.displayName = 'PaginationItem';

export const PaginationLink = createLazySubcomponent('PaginationLink');
PaginationLink.displayName = 'PaginationLink';

export const PaginationNext = createLazySubcomponent('PaginationNext');
PaginationNext.displayName = 'PaginationNext';

export const PaginationPrevious = createLazySubcomponent('PaginationPrevious');
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationEllipsis = createLazySubcomponent('PaginationEllipsis');
PaginationEllipsis.displayName = 'PaginationEllipsis';

export const Pagination = Object.assign(PaginationRoot, {
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Next: PaginationNext,
  Previous: PaginationPrevious,
  Ellipsis: PaginationEllipsis,
});

export default Pagination;

