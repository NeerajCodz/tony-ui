import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';
import { X, Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal } from 'lucide-react';

// Icons map
const variantIcons = {
  default: Terminal,
  neutral: Terminal,
  primary: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: AlertOctagon,
  info: Info
};

// Colors map for borders and glows
const variantColors = {
  default: 'cyan',
  neutral: 'slate',
  primary: 'cyan',
  success: 'emerald',
  warning: 'amber',
  destructive: 'red',
  info: 'blue'
};

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    overlay: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
    content: "fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border-t-2 bg-gray-950 clip-path-bevel-top",
    title: "text-lg font-semibold leading-none tracking-tight font-mono",
    description: "text-sm font-mono opacity-70",
  },
  'holo-frame': {
    overlay: "fixed inset-0 bg-cyan-900/20 backdrop-blur-md",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border-t-2 bg-gray-900/90 shadow-[0_-5px_20px_rgba(var(--primary-rgb),0.2)]",
    title: "text-lg font-bold drop-shadow-[0_0_5px_rgba(var(--primary-rgb),0.8)]",
    description: "text-sm opacity-80",
  },
  'data-panel': {
    overlay: "fixed inset-0 bg-gray-950/80",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col border-t-4 bg-gray-950",
    title: "text-lg font-bold uppercase tracking-widest",
    description: "text-sm font-mono opacity-60",
  },
  'circuit-board': {
    overlay: "fixed inset-0 bg-black/70 bg-[url('/patterns/circuit.svg')] bg-opacity-10",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border-t border-dashed bg-gray-950 bg-[url('/patterns/circuit.svg')]",
    title: "text-lg font-semibold",
    description: "text-sm",
  },
  'default': {
    overlay: "fixed inset-0 bg-black/80",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-muted-foreground",
  }
};

const getStyles = (v: any) => versionStyles[v as keyof typeof versionStyles] || versionStyles['default'];

export const Overlay = React.forwardRef(({ className, version = 'angular-corner', ...props }: any, ref: any) => {
  const styles = getStyles(version);
  return (
    <DrawerPrimitive.Overlay
        ref={ref}
        className={cn(styles.overlay, className)}
        {...props}
    />
  );
});
Overlay.displayName = DrawerPrimitive.Overlay.displayName;

export const Content = React.forwardRef(({ className, children, version = 'angular-corner', variant = 'primary', ...props }: any, ref: any) => {
  const styles = getStyles(version);
  // Default to primary/cyan if not found
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  const Icon = variantIcons[variant as keyof typeof variantIcons] || variantIcons.default;
  
  // Use explicit style for dynamic colors to ensure they work without JIT pre-scanning
  const dynamicStyle = {
      borderColor: `var(--${color}-500, ${color})`,
      '--tw-shadow-color': `var(--${color}-500, ${color})`
  };

  // Also include tailwind classes as best effort
  const colorClasses = `border-${color}-500 text-${color}-50`;

  return (
    <DrawerPrimitive.Content
        ref={ref}
        className={cn(styles.content, colorClasses, className)}
        style={dynamicStyle}
        {...props}
    >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted/20" />
        
        {/* Variant Icon Badge */}
        <div 
          className="absolute top-6 right-6 p-2 rounded-full border bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" 
          style={{ borderColor: `var(--${color}-500)`, color: `var(--${color}-400)` }}
        >
             <Icon className="w-5 h-5" />
        </div>

        {children}
    </DrawerPrimitive.Content>
  );
});
Content.displayName = DrawerPrimitive.Content.displayName;

export const Title = React.forwardRef(({ className, version = 'angular-corner', variant = 'primary', ...props }: any, ref: any) => {
  const styles = getStyles(version);
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn(styles.title, `text-${color}-100`, className)}
        {...props}
    />
  );
});
Title.displayName = DrawerPrimitive.Title.displayName;

export const Description = React.forwardRef(({ className, version = 'angular-corner', variant = 'primary', ...props }: any, ref: any) => {
  const styles = getStyles(version);
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return (
    <DrawerPrimitive.Description
        ref={ref}
        className={cn(styles.description, `text-${color}-400/70`, className)}
        {...props}
    />
  );
});
Description.displayName = DrawerPrimitive.Description.displayName;
