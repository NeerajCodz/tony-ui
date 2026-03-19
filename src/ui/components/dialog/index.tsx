/**
 * Dialog Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';

// --- Types ---
type DialogVersion = 
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

interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
  version?: DialogVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface DialogContextValue {
  version: DialogVersion;
  variant: DialogProps['variant'];
  type: DialogProps['type'];
  versionModule: any;
}

const DialogContext = createContext<DialogContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
  versionModule: null,
});

const useDialogContext = () => useContext(DialogContext);

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: DialogVersion) => {
  switch (version) {
    case 'angular-corner': return import('./dialog-angular-corner.tsx');
    case 'holo-frame': return import('./dialog-holo-frame.tsx');
    case 'data-panel': return import('./dialog-data-panel.tsx');
    case 'circuit-board': return import('./dialog-circuit-board.tsx');
    case 'quantum-gate': return import('./dialog-quantum-gate.tsx');
    case 'tactical-hud': return import('./dialog-tactical-hud.tsx');
    case 'energy-shield': return import('./dialog-energy-shield.tsx');
    case 'terminal-window': return import('./dialog-terminal-window.tsx');
    case 'matrix-grid': return import('./dialog-matrix-grid.tsx');
    case 'neon-outline': return import('./dialog-neon-outline.tsx');
    default: return import('./dialog-angular-corner.tsx');
  }
};

// --- Main Component ---
const Dialog = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}: DialogProps) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <DialogContext.Provider value={{ version, variant, type, versionModule }}>
      <DialogPrimitive.Root {...props}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
};
Dialog.displayName = 'Dialog';

// --- Subcomponents ---

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => {
  const { versionModule } = useDialogContext();
  if (versionModule?.Overlay) {
    const OverlayComponent = versionModule.Overlay;
    return <OverlayComponent ref={ref} className={className} {...props} />;
  }
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => {
  const { versionModule, variant } = useDialogContext();
  
  return (
    <DialogPortal>
      <DialogOverlay />
      {versionModule?.Content ? (
        <versionModule.Content ref={ref} className={className} variant={variant} {...props}>
          {children}
        </versionModule.Content>
      ) : (
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-cyan-500/30 bg-gray-950 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      )}
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props }, ref) => {
  const { versionModule } = useDialogContext();
  if (versionModule?.Title) {
    const TitleComponent = versionModule.Title;
    return <TitleComponent ref={ref} className={className} {...props} />;
  }
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight text-cyan-50", className)}
      {...props}
    />
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props }, ref) => {
  const { versionModule } = useDialogContext();
  if (versionModule?.Description) {
    const DescriptionComponent = versionModule.Description;
    return <DescriptionComponent ref={ref} className={className} {...props} />;
  }
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-gray-400", className)}
      {...props}
    />
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// --- Exports ---
const DialogNamespace = Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});

export { 
  DialogNamespace as Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
export default DialogNamespace;

