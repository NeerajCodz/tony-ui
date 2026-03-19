const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'dropdown-menu';
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
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { cn } from "../../utils/component-helpers"
import { User, Settings, Lock, LogOut, ChevronRight } from "lucide-react"

interface DropdownMenuProps {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
  className?: string
  content?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, DropdownMenuProps>(({
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
  const itemClass = "group flex items-center h-9 px-3 text-sm outline-none cursor-pointer transition-colors hover:bg-white/10 hover:text-white text-gray-400";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children || <button className="px-4 py-2 border rounded">Open Menu</button>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className={cn(
            "min-w-[200px] z-50 overflow-hidden rounded-md animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
            className
          )}
          style={{
            ...styles,
            clipPath: '${clipPath}',
            color: \`hsl(var(--\${color}-foreground))\`
          }}
          sideOffset={5}
        >
           {content || (
             <>
               <div className="px-3 py-2 text-xs font-mono opacity-50 uppercase tracking-wider border-b border-white/10 mb-1">
                 {version}
               </div>
               <DropdownMenu.Item className={itemClass}>
                 <User className="mr-2 h-4 w-4" />
                 <span>Profile</span>
               </DropdownMenu.Item>
               <DropdownMenu.Item className={itemClass}>
                 <Settings className="mr-2 h-4 w-4" />
                 <span>Settings</span>
               </DropdownMenu.Item>
               <DropdownMenu.Sub>
                 <DropdownMenu.SubTrigger className={cn(itemClass, "justify-between")}>
                   <div className="flex items-center">
                     <Lock className="mr-2 h-4 w-4" />
                     <span>Security</span>
                   </div>
                   <ChevronRight className="h-4 w-4" />
                 </DropdownMenu.SubTrigger>
                 <DropdownMenu.Portal>
                   <DropdownMenu.SubContent
                     className="min-w-[160px] z-50 overflow-hidden rounded-md p-1"
                     style={styles}
                     sideOffset={2}
                     alignOffset={-5}
                   >
                     <DropdownMenu.Item className={itemClass}>
                       <span>2FA Enabled</span>
                     </DropdownMenu.Item>
                     <DropdownMenu.Item className={itemClass}>
                       <span>Logs</span>
                     </DropdownMenu.Item>
                   </DropdownMenu.SubContent>
                 </DropdownMenu.Portal>
               </DropdownMenu.Sub>
               <div className="h-px bg-white/10 my-1" />
               <DropdownMenu.Item className={cn(itemClass, "text-red-400 hover:text-red-300 hover:bg-red-900/20")}>
                 <LogOut className="mr-2 h-4 w-4" />
                 <span>Logout</span>
               </DropdownMenu.Item>
             </>
           )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
})

Component.displayName = "DropdownMenu-${version}"

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
 * DropdownMenu Component - Dynamic Renderer
 * Generated by script
 */

import React, { lazy, Suspense } from 'react';

// Fallback types if file doesn't exist
type DropdownMenuVersion = string;
interface DropdownMenuProps {
  version?: DropdownMenuVersion;
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
const FallbackComponent = React.forwardRef<HTMLElement, DropdownMenuProps>(({ 
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
FallbackComponent.displayName = 'FallbackDropdownMenu';

// Main Component
const DropdownMenuBase = React.forwardRef<HTMLElement, DropdownMenuProps>(({ 
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
DropdownMenuBase.displayName = 'DropdownMenu';

export const DropdownMenu = DropdownMenuBase;

export default DropdownMenu;
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');

// Update main index.ts export
const mainIndexInitPath = path.join(__dirname, '../src/ui/index.ts');
let mainIndexContent = fs.readFileSync(mainIndexInitPath, 'utf8');

// Check if already exported
if (!mainIndexContent.includes("export * from './components/dropdown-menu'")) {
    // Add to components section
    const exportStatement = "export * from './components/dropdown-menu';";
    // Find a good place to insert (e.g. after drawer)
    if (mainIndexContent.includes("export * from './components/drawer';")) {
        mainIndexContent = mainIndexContent.replace(
            "export * from './components/drawer';",
            "export * from './components/drawer';\n" + exportStatement
        );
    } else {
        // Append to end if specific place not found
        mainIndexContent += `\n${exportStatement}`;
    }
    fs.writeFileSync(mainIndexInitPath, mainIndexContent);
    console.log('Updated src/ui/index.ts with export');
}

console.log('DropdownMenu regeneration complete.');
