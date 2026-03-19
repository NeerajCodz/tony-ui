/**
 * Alert Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// --- Types ---
type AlertVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: AlertVersion;
  variant?: 'default' | 'destructive';
}

// --- Context ---
interface AlertContextValue {
  version: AlertVersion;
  versionModule: any;
}

const AlertContext = createContext<AlertContextValue>({
  version: 'angular-corner',
  versionModule: null,
});

const useAlertContext = () => useContext(AlertContext);

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: AlertVersion) => {
  switch (version) {
    case 'angular-corner': return import('./alert-angular-corner.tsx');
    case 'holo-frame': return import('./alert-holo-frame.tsx');
    case 'data-panel': return import('./alert-data-panel.tsx');
    case 'circuit-board': return import('./alert-circuit-board.tsx');
    case 'quantum-gate': return import('./alert-quantum-gate.tsx');
    case 'tactical-hud': return import('./alert-tactical-hud.tsx');
    case 'energy-shield': return import('./alert-energy-shield.tsx');
    case 'terminal-window': return import('./alert-terminal-window.tsx');
    case 'matrix-grid': return import('./alert-matrix-grid.tsx');
    case 'neon-outline': return import('./alert-neon-outline.tsx');
    default: return import('./alert-angular-corner.tsx');
  }
};

// --- Main Component ---
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ 
  version = 'angular-corner', 
  className,
  variant,
  children,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  if (!versionModule) {
    return <div role="alert" className={cn("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", className)} {...props} />;
  }
  
  const Component = versionModule.default;

  return (
    <AlertContext.Provider value={{ version, versionModule }}>
      <Component ref={ref} variant={variant} className={className} {...props}>
        {children}
      </Component>
    </AlertContext.Provider>
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription };
export default Alert;

