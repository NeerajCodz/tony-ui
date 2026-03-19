const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'table';
const VERSIONS = [
  'angular-corner',
  'holo-frame',
  'data-panel',
  'circuit-board',
  'quantum-gate',
  'tactical-hud',
  'energy-shield',
  'terminal-window',
  'matrix-grid',
  'neon-outline'
];

const TARGET_DIR = path.join(__dirname, `../src/ui/components/${COMPONENT_NAME}`);

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const TEMPLATE = (version) => {
  return `
import * as React from "react"
import { cn } from "../../utils/component-helpers"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        "w-full caption-bottom text-sm",
        // Version Specific Root Styles
        "${version}" === "angular-corner" && "border-collapse",
        "${version}" === "tactical-hud" && "font-mono",
        className
      )}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(
    "[&_tr]:border-b",
    "${version}" === "holo-frame" && "bg-primary/5",
    "${version}" === "tactical-hud" && "bg-white/5 border-b-2 border-primary/50",
    className
  )} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      // Version Specific Row Styles
      "${version}" === "angular-corner" && "hover:bg-primary/10 border-white/10",
      "${version}" === "holo-frame" && "hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)] border-primary/20",
      "${version}" === "tactical-hud" && "hover:bg-primary/20 border-white/20",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      // Version Specific Head Styles
      "${version}" === "tactical-hud" && "text-primary uppercase tracking-widest text-[10px]",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
  `;
};

// Generate each version
VERSIONS.forEach(version => {
  const content = TEMPLATE(version);
  const filePath = path.join(TARGET_DIR, `${COMPONENT_NAME}-${version}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated ${COMPONENT_NAME}-${version}.tsx`);
});

const indexContent = `import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';

// Context to share version between compound components
const TableVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(TableVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(\`./table-\${version}\`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={\`ui-table-\${componentName.toLowerCase()} \${className}\`} {...p}>{children}</div>
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
      const module = await import(\`./table-\${version}\`);
      return { default: module.Table }; 
    } catch (e) {
      return { 
        default: ({ children, className = '', ...p }) => (
          <div ref={ref} className={\`p-4 border border-dashed border-red-500/50 bg-red-500/10 \${className}\`} {...p}>
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
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');
console.log('Table regeneration complete.');
