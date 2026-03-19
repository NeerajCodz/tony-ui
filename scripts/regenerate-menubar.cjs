const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'menubar';
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
import * as Menubar from "@radix-ui/react-menubar"
import { cn } from "../../utils/component-helpers"
import { File, Edit, View, ChevronRight } from "lucide-react"

interface MenubarProps {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
  className?: string
  content?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, MenubarProps>(({
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
  const itemClass = "group flex items-center h-8 px-3 text-sm outline-none cursor-pointer transition-colors hover:bg-white/10 hover:text-white text-gray-400 rounded-sm";

  return (
    <Menubar.Root className="flex bg-transparent">
      <Menubar.Menu>
        <Menubar.Trigger asChild>
          {children || <button className="px-4 py-2 border rounded">File</button>}
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content 
            className={cn(
              "min-w-[200px] z-50 overflow-hidden rounded-md p-1 animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
              className
            )}
            style={{
              ...styles,
              clipPath: '${clipPath}',
              color: \`hsl(var(--\${color}-foreground))\`
            }}
            sideOffset={5}
            align="start"
          >
             {content || (
               <>
                 <Menubar.Item className={itemClass}>
                   <File className="mr-2 h-4 w-4" />
                   <span>New Tab</span>
                   <div className="ml-auto text-xs opacity-50">⌘T</div>
                 </Menubar.Item>
                 <Menubar.Item className={itemClass}>
                   <File className="mr-2 h-4 w-4" />
                   <span>New Window</span>
                   <div className="ml-auto text-xs opacity-50">⌘N</div>
                 </Menubar.Item>
                 <Menubar.Separator className="h-px bg-white/10 my-1" />
                 <Menubar.Sub>
                   <Menubar.SubTrigger className={cn(itemClass, "justify-between")}>
                     <span>Share</span>
                     <ChevronRight className="h-4 w-4" />
                   </Menubar.SubTrigger>
                   <Menubar.Portal>
                     <Menubar.SubContent
                       className="min-w-[160px] z-50 overflow-hidden rounded-md p-1"
                       style={styles}
                       sideOffset={2}
                       alignOffset={-5}
                     >
                       <Menubar.Item className={itemClass}>
                         <span>Email link</span>
                       </Menubar.Item>
                       <Menubar.Item className={itemClass}>
                         <span>Messages</span>
                       </Menubar.Item>
                     </Menubar.SubContent>
                   </Menubar.Portal>
                 </Menubar.Sub>
               </>
             )}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      
      {!children && (
        <Menubar.Menu>
          <Menubar.Trigger className="px-4 py-2 border rounded ml-2">Edit</Menubar.Trigger>
          <Menubar.Portal>
             <Menubar.Content className="min-w-[200px] z-50 overflow-hidden rounded-md p-1" style={styles}>
                <Menubar.Item className={itemClass}>
                   <Edit className="mr-2 h-4 w-4" />
                   <span>Undo</span>
                </Menubar.Item>
             </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      )}
    </Menubar.Root>
  )
})

Component.displayName = "Menubar-${version}"

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
 * Menubar Component - Dynamic Renderer
 * Generated by script
 */

import React, { lazy, Suspense } from 'react';

// Fallback types if file doesn't exist
type MenubarVersion = string;
interface MenubarProps {
  version?: MenubarVersion;
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
const FallbackComponent = React.forwardRef<HTMLElement, MenubarProps>(({ 
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
FallbackComponent.displayName = 'FallbackMenubar';

// Main Component
const MenubarBase = React.forwardRef<HTMLElement, MenubarProps>(({ 
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
MenubarBase.displayName = 'Menubar';

export const Menubar = MenubarBase;

export default Menubar;
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');

// Update main index.ts export
const mainIndexInitPath = path.join(__dirname, '../src/ui/index.ts');
let mainIndexContent = fs.readFileSync(mainIndexInitPath, 'utf8');

// Check if already exported
if (!mainIndexContent.includes("export * from './components/menubar'")) {
    // Add to components section
    const exportStatement = "export * from './components/menubar';";
    // Find a good place to insert (e.g. after item)
    if (mainIndexContent.includes("export * from './components/item';")) {
        mainIndexContent = mainIndexContent.replace(
            "export * from './components/item';",
            "export * from './components/item';\n" + exportStatement
        );
    } else {
        // Append to end if specific place not found
        mainIndexContent += `\n${exportStatement}`;
    }
    fs.writeFileSync(mainIndexInitPath, mainIndexContent);
    console.log('Updated src/ui/index.ts with export');
}

console.log('Menubar regeneration complete.');
