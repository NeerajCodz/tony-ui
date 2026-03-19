import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';

// Context to share version between compound components
const BreadcrumbVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(BreadcrumbVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(`./breadcrumb-${version}.tsx`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={`ui-breadcrumb-${componentName.toLowerCase()} ${className}`} {...p}>{children}</div>
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
const BreadcrumbRoot = React.forwardRef(({ 
  version = 'angular-corner',
  children,
  ...props 
}, ref) => {
  
  const LazyRoot = useMemo(() => lazy(async () => {
    try {
      const module = await import(`./breadcrumb-${version}.tsx`);
      return { default: module.Breadcrumb }; 
    } catch (e) {
      return { 
        default: ({ children }) => <>{children}</>
      };
    }
  }), [version]);

  return (
    <BreadcrumbVersionContext.Provider value={version}>
      <Suspense fallback={null}>
        <LazyRoot {...props}>
          {children}
        </LazyRoot>
      </Suspense>
    </BreadcrumbVersionContext.Provider>
  );
});
BreadcrumbRoot.displayName = 'Breadcrumb';

// Subcomponents
export const BreadcrumbList = createLazySubcomponent('BreadcrumbList');
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = createLazySubcomponent('BreadcrumbItem');
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = createLazySubcomponent('BreadcrumbLink');
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = createLazySubcomponent('BreadcrumbPage');
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = createLazySubcomponent('BreadcrumbSeparator');
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const BreadcrumbEllipsis = createLazySubcomponent('BreadcrumbEllipsis');
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});

export default Breadcrumb;

