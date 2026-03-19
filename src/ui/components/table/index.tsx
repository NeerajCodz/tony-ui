import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';

// Context to share version between compound components
const TableVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(TableVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(`./table-${version}.tsx`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={`ui-table-${componentName.toLowerCase()} ${className}`} {...p}>{children}</div>
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
const TableRoot = React.forwardRef(({ 
  version = 'angular-corner',
  children,
  ...props 
}, ref) => {
  
  const LazyRoot = useMemo(() => lazy(async () => {
    try {
      const module = await import(`./table-${version}.tsx`);
      return { default: module.Table }; 
    } catch (e) {
      return { 
        default: ({ children, className = '', ...p }) => (
          <div ref={ref} className={`p-4 border border-dashed border-red-500/50 bg-red-500/10 ${className}`} {...p}>
            <span className="text-xs text-red-400 font-mono">Missing: {version}</span>
            {children}
          </div>
        )
      };
    }
  }), [version]);

  return (
    <TableVersionContext.Provider value={version}>
      <Suspense fallback={<div className="animate-pulse bg-muted/20 w-full min-h-[100px] rounded" />}>
        <LazyRoot ref={ref} {...props}>
          {children}
        </LazyRoot>
      </Suspense>
    </TableVersionContext.Provider>
  );
});
TableRoot.displayName = 'Table';

// Subcomponents
export const TableHeader = createLazySubcomponent('TableHeader');
TableHeader.displayName = 'TableHeader';

export const TableBody = createLazySubcomponent('TableBody');
TableBody.displayName = 'TableBody';

export const TableFooter = createLazySubcomponent('TableFooter');
TableFooter.displayName = 'TableFooter';

export const TableRow = createLazySubcomponent('TableRow');
TableRow.displayName = 'TableRow';

export const TableHead = createLazySubcomponent('TableHead');
TableHead.displayName = 'TableHead';

export const TableCell = createLazySubcomponent('TableCell');
TableCell.displayName = 'TableCell';

export const TableCaption = createLazySubcomponent('TableCaption');
TableCaption.displayName = 'TableCaption';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption,
});

export default Table;

