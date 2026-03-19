const fs = require('fs');
const path = require('path');

const COMPONENT_NAME = 'date-picker';
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
const TYPES_FILE = path.join(__dirname, `../src/ui/types/components/inputs.ts`); // Assuming it belongs to inputs

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Helper to generate the component file content
const TEMPLATE = (version) => {
  const componentName = `DatePicker${version.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}`;
  
  // Custom styles based on version
  let clipPath = 'none';
  let borderStyle = '';
  
  switch (version) {
    case 'angular-corner':
      clipPath = 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)';
      break;
    case 'holo-frame':
      borderStyle = 'double';
      break;
    case 'data-panel':
      clipPath = 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)';
      break;
    // Add more specific styles per version if needed
    default:
      clipPath = 'inset(0 0 0 0 round 4px)';
  }

  // Escape backticks for the template string
  return `
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"

import { cn } from "../../utils/component-helpers"
import { Calendar } from "../calendar"

interface DatePickerProps {
  date?: Date
  setDate?: (date: Date | undefined) => void
  className?: string
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  placeholder?: string
  animated?: boolean
}

const Component = React.forwardRef<HTMLDivElement, DatePickerProps>(({
  date,
  setDate,
  className,
  version = '${version}',
  variant = 'neutral',
  type = 'default',
  placeholder = "Pick a date",
  animated = true,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = () => {
    const baseColor = \`hsl(var(--\${color}-base))\`;
    switch(type) {
      case 'outline': return { border: \`1px solid \${baseColor}\`, background: 'transparent' };
      case 'solid': return { background: \`hsl(var(--\${color}-base) / 0.1)\`, border: 'none' };
      case 'ghost': return { background: 'transparent', border: 'none' };
      default: return { 
        background: \`hsl(var(--\${color}-base) / 0.05)\`, 
        border: \`1px solid hsl(var(--\${color}-base) / 0.3)\` 
      };
    }
  };

  const styles = getTypeStyles();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          ref={ref as any}
          className={cn(
            "flex h-10 w-full items-center justify-start text-left font-normal transition-all duration-200",
            "hover:bg-[hsl(var(--primary-base)/0.1)] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary-base))]",
            !date && "text-muted-foreground",
            animated && "active:scale-[0.98]",
            className
          )}
          style={{
            ...styles,
            clipPath: '${clipPath}',
            fontFamily: 'var(--font-mono)',
            padding: '0 1rem',
            color: \`hsl(var(--\${color}-foreground))\`
          }}
          {...props}
        >
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
          
          {/* Decorative Corner for Tech feel */}
          <div className="absolute right-0 top-0 h-2 w-2 border-t border-r border-[hsl(var(--primary-base)/0.5)]" />
          <div className="absolute left-0 bottom-0 h-2 w-2 border-b border-l border-[hsl(var(--primary-base)/0.5)]" />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0 bg-black/90 border border-[hsl(var(--primary-base)/0.3)] backdrop-blur-xl" 
        align="start"
        sideOffset={5}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate as any}
          initialFocus
          variant={variant}
          version={version} // Pass the same version to calendar to match style
        />
      </PopoverContent>
    </Popover>
  )
})

Component.displayName = "DatePicker-${version}"

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
 * DatePicker Component - Dynamic Renderer
 * Generated by script
 */

import React, { lazy, Suspense } from 'react';

// Fallback types if file doesn't exist
type DatePickerVersion = string;
interface DatePickerProps {
  version?: DatePickerVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
  date?: Date;
  setDate?: (date: Date | undefined) => void;
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
const FallbackComponent = React.forwardRef<HTMLElement, DatePickerProps>(({ 
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
FallbackComponent.displayName = 'FallbackDatePicker';

// Main Component
const DatePickerBase = React.forwardRef<HTMLElement, DatePickerProps>(({ 
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
DatePickerBase.displayName = 'DatePicker';

export const DatePicker = DatePickerBase;

export default DatePicker;
`;

fs.writeFileSync(path.join(TARGET_DIR, 'index.tsx'), indexContent);
console.log('Generated index.tsx');

// Update main index.ts export
const mainIndexInitPath = path.join(__dirname, '../src/ui/index.ts');
let mainIndexContent = fs.readFileSync(mainIndexInitPath, 'utf8');

// Check if already exported
if (!mainIndexContent.includes("export * from './components/date-picker'")) {
    // Add to components section
    const exportStatement = "export * from './components/date-picker';";
    // Find a good place to insert (e.g. after data-table)
    if (mainIndexContent.includes("export * from './components/data-table';")) {
        mainIndexContent = mainIndexContent.replace(
            "export * from './components/data-table';",
            "export * from './components/data-table';\n" + exportStatement
        );
    } else {
        // Append to end if specific place not found
        mainIndexContent += `\n${exportStatement}`;
    }
    fs.writeFileSync(mainIndexInitPath, mainIndexContent);
    console.log('Updated src/ui/index.ts with export');
}

console.log('DatePicker regeneration complete.');
