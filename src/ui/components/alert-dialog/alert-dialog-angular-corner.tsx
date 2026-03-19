import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../lib/utils';
import { useAlertDialogContext } from './index';
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
    overlay: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-0 bg-gray-950 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] clip-path-shards",
    title: "text-xl font-bold font-mono tracking-wide uppercase",
    description: "text-sm opacity-80 font-mono",
    action: "clip-path-step font-bold tracking-wider hover:brightness-125 transition-all text-black",
    cancel: "clip-path-step font-bold tracking-wider hover:bg-white/10 transition-all border-0 bg-black/40",
  },
  'default': {
    overlay: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
    title: "text-lg font-semibold",
    description: "text-sm text-muted-foreground",
    action: "",
    cancel: "mt-2 sm:mt-0",
  }
};

const getStyles = (v: any) => versionStyles[v as keyof typeof versionStyles] || versionStyles['default'];

export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => {
    const { version } = useAlertDialogContext();
    const styles = getStyles(version);
    return (
      <AlertDialogPrimitive.Overlay
        ref={ref}
        className={cn(styles.overlay, className)}
        {...props}
      />
    );
});
Overlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export const Content = React.forwardRef(({ className, children, ...props }: any, ref: any) => {
    const { version, variant } = useAlertDialogContext();
    const styles = getStyles(version);
    const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
    const Icon = variantIcons[variant as keyof typeof variantIcons] || variantIcons.default;
    
    // Dynamic styles
    const glowStyle = {
        filter: `drop-shadow(0 0 1px var(--${color}-500, ${color})) drop-shadow(0 0 15px rgba(var(--${color}-rgb), 0.3))`
    };

  return (
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(styles.content, `text-${color}-50`, className)}
      style={glowStyle}
      {...props}
    >
        {/* Background grid or pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20 pointer-events-none" />
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-80" style={{ borderColor: `var(--${color}-500)`}} />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-80" style={{ borderColor: `var(--${color}-500)`}} />
        
        {/* Header Icon */}
         <div className="absolute -top-3 -left-3 p-2 bg-black border z-10 clip-path-step" style={{ borderColor: `var(--${color}-500)` }}>
            <Icon className="w-6 h-6" style={{ color: `var(--${color}-400)` }} />
         </div>

         <div className="pt-4">
           {children}
         </div>
    </AlertDialogPrimitive.Content>
  );
});
Content.displayName = AlertDialogPrimitive.Content.displayName;

export const Title = React.forwardRef(({ className, ...props }: any, ref: any) => {
  const { version, variant } = useAlertDialogContext();
  const styles = getStyles(version);
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn(styles.title, `text-${color}-100`, className)}
      {...props}
    />
  );
});
Title.displayName = AlertDialogPrimitive.Title.displayName;

export const Description = React.forwardRef(({ className, ...props }: any, ref: any) => {
  const { version, variant } = useAlertDialogContext();
  const styles = getStyles(version);
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn(styles.description, `text-${color}-300`, className)}
      {...props}
    />
  );
});
Description.displayName = AlertDialogPrimitive.Description.displayName;

export const Action = React.forwardRef(({ className, ...props }: any, ref: any) => {
  const { version, variant } = useAlertDialogContext();
  const styles = getStyles(version);
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={cn("inline-flex h-10 items-center justify-center px-6 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", styles.action, className)}
      style={{ backgroundColor: `var(--${color}-500)` }}
      {...props}
    />
  );
});
Action.displayName = AlertDialogPrimitive.Action.displayName;

export const Cancel = React.forwardRef(({ className, ...props }: any, ref: any) => {
  const { version, variant } = useAlertDialogContext();
  const styles = getStyles(version);
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={cn("inline-flex h-10 items-center justify-center px-6 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", styles.cancel, className)}
      style={{ color: `var(--${color}-400)`, borderColor: `var(--${color}-800)` }}
      {...props}
    />
  );
});
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName;
