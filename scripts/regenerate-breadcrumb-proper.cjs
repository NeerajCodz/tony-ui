const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'breadcrumb';
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
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "../../utils/component-helpers"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      // Version Styles
      "${version}" === "tactical-hud" && "font-mono uppercase tracking-wider text-xs",
      "${version}" === "holo-frame" && "backdrop-blur-sm bg-primary/5 p-2 rounded-full border border-primary/20",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn(
        "transition-colors hover:text-foreground",
        "${version}" === "angular-corner" && "hover:text-primary hover:underline underline-offset-4",
        "${version}" === "tactical-hud" && "hover:text-primary hover:bg-primary/10 px-1 rounded-sm",
        className
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(
      "font-normal text-foreground",
      "${version}" === "tactical-hud" && "text-primary font-bold",
      className
    )}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
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
const BreadcrumbVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(BreadcrumbVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(\`./breadcrumb-\${version}\`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={\`ui-breadcrumb-\${componentName.toLowerCase()} \${className}\`} {...p}>{children}</div>
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
      const module = await import(\`./breadcrumb-\${version}\`);
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
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');
console.log('Breadcrumb regeneration complete.');
