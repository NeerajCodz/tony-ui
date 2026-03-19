const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'navigation-menu';
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

// Helper to generate the component file content
const TEMPLATE = (version) => {
  let clipPath = 'none';
  
  switch (version) {
    case 'angular-corner':
      clipPath = 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)';
      break;
    default:
      clipPath = 'inset(0 0 0 0 round 4px)';
  }

  return `
import * as React from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { cn } from "../../utils/component-helpers"
import { ChevronDown } from "lucide-react"

interface NavigationMenuProps {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
  className?: string
  content?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, NavigationMenuProps>(({
  version = '${version}',
  variant = 'primary',
  type = 'default',
  children,
  className,
  content,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = () => {
    const baseColor = \`hsl(var(--\${color}-base))\`;
    switch(type) {
      case 'outline': return { border: \`1px solid \${baseColor}\`, background: 'black' };
      case 'solid': return { background: \`hsl(var(--\${color}-base) / 0.1)\`, border: 'none' };
      default: return { 
        background: 'rgba(10, 10, 15, 0.95)', 
        border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
        backdropFilter: 'blur(8px)'
      };
    }
  };

  const styles = getTypeStyles();
  const itemClass = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10 text-gray-400";

  return (
    <NavigationMenu.Root className="relative z-10 flex max-w-max flex-1 items-center justify-center">
      <NavigationMenu.List className="group flex flex-1 list-none items-center justify-center space-x-1">
        {children || (
          <>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={itemClass}>
                Getting Started <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content 
                className={cn(
                  "left-0 top-0 w-full data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute md:w-[400px] lg:w-[500px]",
                  className
                )}
                style={{
                  ...styles,
                  clipPath: '${clipPath}',
                  color: \`hsl(var(--\${color}-foreground))\`
                }}
              >
                 <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                   <div className="row-span-3">
                     <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/10 to-white/5 p-6 no-underline outline-none focus:shadow-md">
                       <div className="mb-2 mt-4 text-lg font-medium text-white">
                         {version}
                       </div>
                       <p className="text-sm leading-tight text-gray-400">
                         Futuristic navigation component for next-gen interfaces.
                       </p>
                     </div>
                   </div>
                   <div className="grid gap-1">
                      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-accent-foreground focus:bg-white/10 focus:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium leading-none text-white">Introduction</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">Re-usable components built using Radix UI and Tailwind CSS.</p>
                      </div>
                      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-accent-foreground focus:bg-white/10 focus:text-accent-foreground cursor-pointer">
                        <div className="text-sm font-medium leading-none text-white">Installation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">How to install dependencies and structure your app.</p>
                      </div>
                   </div>
                 </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            
            <NavigationMenu.Item>
              <NavigationMenu.Link className={itemClass} href="#">
                Documentation
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </>
        )}
      </NavigationMenu.List>

      <div className="absolute left-0 top-full flex justify-center">
        <NavigationMenu.Viewport 
          className={cn(
            "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-white/10 bg-black text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          )}
          style={{
             ...styles,
             clipPath: '${clipPath}'
          }}
        />
      </div>
    </NavigationMenu.Root>
  )
})

Component.displayName = "NavigationMenu-${version}"

export default Component
`;
};

// Generate each version
VERSIONS.forEach(version => {
  const content = TEMPLATE(version);
  const filePath = path.join(TARGET_DIR, `${COMPONENT_NAME}-${version}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated ${COMPONENT_NAME}-${version}.tsx`);
});

// Generate index.tsx
const indexContent = `/**
 * NavigationMenu Component - Dynamic Renderer
 * Generated by script
 */

import React, { lazy, Suspense } from 'react';

// Fallback types if file doesn't exist
type NavigationMenuVersion = string;
interface NavigationMenuProps {
  version?: NavigationMenuVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
  children?: React.ReactNode;
  content?: React.ReactNode;
  [key: string]: any;
}

// Config import
let componentConfig: any = { versions: {} };
try {
  // @ts-ignore
  // componentConfig = require('../../config/components/${COMPONENT_NAME}.json');
} catch (e) {
  // console.warn('Config not found for ${COMPONENT_NAME}');
}

// Dynamic imports for versions
const versionComponents: Record<string, any> = {
${VERSIONS.map(v => `  '${v}': lazy(() => import('./${COMPONENT_NAME}-${v}')),`).join('\n')}
};

// Loading Skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 w-full h-10 rounded" />
);

// Fallback Component
const FallbackComponent = React.forwardRef<HTMLElement, NavigationMenuProps>(({ 
  children, 
  className = '',
  version,
  ...props 
}, ref) => (
  <div ref={ref as any} className={\`p-4 border border-dashed border-red-500/50 bg-red-500/10 \${className}\`} {...props}>
    <span className="text-xs text-red-400 font-mono">Missing: {version}</span>
    {children}
  </div>
));
FallbackComponent.displayName = 'FallbackNavigationMenu';

// Main Component
const NavigationMenuBase = React.forwardRef<HTMLElement, NavigationMenuProps>(({ 
  version = 'angular-corner',
  ...props 
}, ref) => {
  const VersionComponent = versionComponents[version];
  
  if (!VersionComponent) {
    return <FallbackComponent ref={ref} version={version} {...props} />;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <VersionComponent ref={ref} {...props} />
    </Suspense>
  );
});
NavigationMenuBase.displayName = 'NavigationMenu';

export const NavigationMenu = NavigationMenuBase;

export default NavigationMenu;
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');

// Update main index.ts export
const mainIndexInitPath = path.join(__dirname, '../src/ui/index.ts');
let mainIndexContent = fs.readFileSync(mainIndexInitPath, 'utf8');

// Check if already exported
if (!mainIndexContent.includes("export * from './components/navigation-menu'")) {
    // Add to components section
    const exportStatement = "export * from './components/navigation-menu';";
    // Find a good place to insert (e.g. after native-select)
    if (mainIndexContent.includes("export * from './components/native-select';")) {
        mainIndexContent = mainIndexContent.replace(
            "export * from './components/native-select';",
            "export * from './components/native-select';\n" + exportStatement
        );
    } else {
        // Append to end if specific place not found
        mainIndexContent += `\n${exportStatement}`;
    }
    fs.writeFileSync(mainIndexInitPath, mainIndexContent);
    console.log('Updated src/ui/index.ts with export');
}

console.log('NavigationMenu regeneration complete.');
