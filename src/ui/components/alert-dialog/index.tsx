/**
 * AlertDialog Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../lib/utils';
import { Button } from '../../components/button'; 

// --- Types ---
type AlertDialogVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon';

interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  version?: AlertDialogVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface AlertDialogContextValue {
  version: AlertDialogVersion;
  variant: AlertDialogProps['variant'];
  type: AlertDialogProps['type'];
  versionModule: any;
}

const AlertDialogContext = createContext<AlertDialogContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
  versionModule: null,
});

export const useAlertDialogContext = () => useContext(AlertDialogContext);

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: AlertDialogVersion) => {
  switch (version) {
    case 'angular-corner': return import('./alert-dialog-angular-corner.tsx');
    case 'holo-frame': return import('./alert-dialog-holo-frame.tsx');
    case 'data-panel': return import('./alert-dialog-data-panel.tsx');
    case 'circuit-board': return import('./alert-dialog-circuit-board.tsx');
    case 'quantum-gate': return import('./alert-dialog-quantum-gate.tsx');
    case 'tactical-hud': return import('./alert-dialog-tactical-hud.tsx');
    case 'energy-shield': return import('./alert-dialog-energy-shield.tsx');
    case 'terminal-window': return import('./alert-dialog-terminal-window.tsx');
    case 'matrix-grid': return import('./alert-dialog-matrix-grid.tsx');
    case 'neon': return import('./alert-dialog-neon.tsx');
    default: return import('./alert-dialog-angular-corner.tsx');
  }
};

// --- Main Component ---
const AlertDialog = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}: AlertDialogProps) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <AlertDialogContext.Provider value={{ version, variant, type, versionModule }}>
      <AlertDialogPrimitive.Root {...props}>
        {children}
      </AlertDialogPrimitive.Root>
    </AlertDialogContext.Provider>
  );
};
AlertDialog.displayName = 'AlertDialog';

// --- Subcomponents ---

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>((props, ref) => {
  const { versionModule } = useAlertDialogContext();
  if (!versionModule?.Overlay) {
    return <div className="fixed inset-0 bg-black/50" />;
  }
  const OverlayComponent = versionModule.Overlay;
  return <OverlayComponent ref={ref} {...props} />;
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>((props, ref) => {
  const { versionModule } = useAlertDialogContext();
  if (!versionModule?.Content) {
    return <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-900 p-6 rounded" />;
  }
  
  const ContentComponent = versionModule.Content;
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <ContentComponent ref={ref} {...props} />
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>((props, ref) => {
  const { versionModule } = useAlertDialogContext();
  if (!versionModule?.Title) return null;
  const TitleComponent = versionModule.Title;
  return <TitleComponent ref={ref} {...props} />;
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>((props, ref) => {
  const { versionModule } = useAlertDialogContext();
  if (!versionModule?.Description) return null;
  const DescriptionComponent = versionModule.Description;
  return <DescriptionComponent ref={ref} {...props} />;
});
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Action>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>((props, ref) => {
  const { versionModule } = useAlertDialogContext();
  if (!versionModule?.Action) return <button>Confirm</button>;
  const ActionComponent = versionModule.Action;
  return <ActionComponent ref={ref} {...props} />;
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<React.ElementRef<typeof AlertDialogPrimitive.Cancel>, React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>((props, ref) => {
  const { versionModule } = useAlertDialogContext();
  if (!versionModule?.Cancel) return <button>Cancel</button>;
  const CancelComponent = versionModule.Cancel;
  return <CancelComponent ref={ref} {...props} />;
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// --- Exports ---
const AlertDialogNamespace = Object.assign(AlertDialog, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});

export { AlertDialogNamespace as AlertDialog };
export default AlertDialogNamespace;

