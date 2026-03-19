const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'sidebar';
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
      clipPath = 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)';
      break;
    default:
      clipPath = 'inset(0 0 0 0 round 0 8px 8px 0)';
  }

  return `
import * as React from "react"
import { cn } from "../../utils/component-helpers"
import { LayoutDashboard, Users, Settings, Database, Activity, LogOut } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, SidebarProps>(({
  version = '${version}',
  variant = 'primary',
  type = 'default',
  children,
  className,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = () => {
    const baseColor = \`hsl(var(--\${color}-base))\`;
    switch(type) {
      case 'outline': return { borderRight: \`1px solid \${baseColor}\`, background: 'black' };
      case 'solid': return { background: \`hsl(var(--\${color}-base) / 0.05)\`, border: 'none' };
      default: return { 
        background: 'rgba(10, 10, 15, 0.6)', 
        borderRight: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
        backdropFilter: 'blur(8px)'
      };
    }
  };

  const styles = getTypeStyles();
  const itemClass = "group flex items-center h-10 px-3 text-sm font-medium rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer mb-1";

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col w-[240px] h-full min-h-[500px] relative overflow-hidden",
        className
      )}
      style={{
        ...styles,
        // clipPath: '${clipPath}', // Clip path might cut off content on sidebar
      }}
      {...props}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded bg-[hsl(var(--\${color}-base))]" style={{ backgroundColor: \`hsl(var(--\${color}-base))\` }} />
          <span className="font-bold tracking-wider uppercase text-lg">CYBER<span style={{ color: \`hsl(var(--\${color}-base))\` }}>HUD</span></span>
        </div>
        
        {children || (
          <div className="flex flex-col gap-1">
             <div className="text-xs font-mono opacity-50 mb-2 uppercase tracking-widest pl-3">Main Menu</div>
             <div className={cn(itemClass, "bg-white/10 text-white")}>
               <LayoutDashboard className="mr-3 h-4 w-4" style={{ color: \`hsl(var(--\${color}-base))\` }} />
               Dashboard
             </div>
             <div className={itemClass}>
               <Users className="mr-3 h-4 w-4" />
               Team
             </div>
             <div className={itemClass}>
               <Activity className="mr-3 h-4 w-4" />
               Activity
             </div>
             
             <div className="text-xs font-mono opacity-50 mb-2 mt-6 uppercase tracking-widest pl-3">System</div>
             <div className={itemClass}>
               <Database className="mr-3 h-4 w-4" />
               Database
             </div>
             <div className={itemClass}>
               <Settings className="mr-3 h-4 w-4" />
               Settings
             </div>
          </div>
        )}
      </div>
      
      <div className="mt-auto p-6 border-t border-white/5">
         <div className={itemClass}>
           <LogOut className="mr-3 h-4 w-4 text-red-400" />
           Logout
         </div>
         <div className="text-xs text-center mt-4 opacity-30 font-mono">
           v.{version}
         </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-[hsl(var(--\${color}-base))] to-transparent" style={{ background: \`linear-gradient(to bottom, hsl(var(--\${color}-base)), transparent)\` }} />
    </div>
  )
})

Component.displayName = "Sidebar-${version}"

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
 * Sidebar Component - Dynamic Renderer
 * Generated by script
 */

import React, { lazy, Suspense } from 'react';

// Fallback types if file doesn't exist
type SidebarVersion = string;
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SidebarVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
  children?: React.ReactNode;
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
  <div className="animate-pulse bg-muted/20 w-[240px] h-full rounded" />
);

// Fallback Component
const FallbackComponent = React.forwardRef<HTMLElement, SidebarProps>(({ 
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
FallbackComponent.displayName = 'FallbackSidebar';

// Main Component
const SidebarBase = React.forwardRef<HTMLElement, SidebarProps>(({ 
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
SidebarBase.displayName = 'Sidebar';

export const Sidebar = SidebarBase;

export default Sidebar;
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');

// Update main index.ts export
const mainIndexInitPath = path.join(__dirname, '../src/ui/index.ts');
let mainIndexContent = fs.readFileSync(mainIndexInitPath, 'utf8');

// Check if already exported
if (!mainIndexContent.includes("export * from './components/sidebar'")) {
    // Add to components section
    const exportStatement = "export * from './components/sidebar';";
    // Find a good place to insert (e.g. after resizable)
    if (mainIndexContent.includes("export * from './components/resizable';")) {
        mainIndexContent = mainIndexContent.replace(
            "export * from './components/resizable';",
            "export * from './components/resizable';\n" + exportStatement
        );
    } else {
        // Append to end if specific place not found
        mainIndexContent += `\n${exportStatement}`;
    }
    fs.writeFileSync(mainIndexInitPath, mainIndexContent);
    console.log('Updated src/ui/index.ts with export');
}

console.log('Sidebar regeneration complete.');
