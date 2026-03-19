/**
 * Dialog Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { Version, Variant } from '../types/common';

// Types
export type DialogVersion = Version;
export type DialogVariant = Variant;

export interface DialogProps {
  version?: DialogVersion;
  variant?: DialogVariant;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

// Loading helper
const loadVersionModule = async (version: DialogVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/dialog/dialog-angular-corner.tsx');
    case 'holo-frame': return import('../components/dialog/dialog-holo-frame.tsx');
    case 'data-panel': return import('../components/dialog/dialog-data-panel.tsx');
    case 'circuit-board': return import('../components/dialog/dialog-circuit-board.tsx');
    case 'quantum-gate': return import('../components/dialog/dialog-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/dialog/dialog-tactical-hud.tsx');
    case 'energy-shield': return import('../components/dialog/dialog-energy-shield.tsx');
    case 'terminal-window': return import('../components/dialog/dialog-terminal-window.tsx');
    case 'matrix-grid': return import('../components/dialog/dialog-matrix-grid.tsx');
    case 'neon-outline': return import('../components/dialog/dialog-neon-outline.tsx');
    default: return import('../components/dialog/dialog-angular-corner.tsx');
  }
};

// Context
interface DialogContextValue {
  version: DialogVersion;
  variant: DialogVariant;
  versionModule: any;
}

const DialogContext = createContext<DialogContextValue>({
  version: 'angular-corner',
  variant: 'default',
  versionModule: null,
});

const useDialogContext = () => useContext(DialogContext);

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="animate-pulse bg-gray-800/50 rounded w-[450px] h-[250px]" />
  </div>
);

// Main Component
const DialogRoot: React.FC<DialogProps> = ({
  version = 'angular-corner',
  variant = 'default',
  open,
  onOpenChange,
  children,
}) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <DialogContext.Provider value={{ version, variant, versionModule }}>
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
};

// Subcomponents
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant } = useDialogContext();

  if (versionModule?.DialogOverlay) {
    const Component = versionModule.DialogOverlay;
    return <Component ref={ref} variant={variant} className={className} {...props} />;
  }

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
      {...props}
    />
  );
});
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className = '', children, ...props }, ref) => {
  const { versionModule, variant } = useDialogContext();

  if (versionModule?.DialogContent) {
    const Component = versionModule.DialogContent;
    return (
      <DialogPortal>
        <DialogOverlay />
        <Component ref={ref} variant={variant} className={className} {...props}>
          {children}
        </Component>
      </DialogPortal>
    );
  }

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant } = useDialogContext();

    if (versionModule?.DialogHeader) {
      const Component = versionModule.DialogHeader;
      return <Component ref={ref} variant={variant} className={className} {...props} />;
    }

    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}
        {...props}
      />
    );
  }
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant } = useDialogContext();

    if (versionModule?.DialogFooter) {
      const Component = versionModule.DialogFooter;
      return <Component ref={ref} variant={variant} className={className} {...props} />;
    }

    return (
      <div
        ref={ref}
        className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
        {...props}
      />
    );
  }
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant } = useDialogContext();

  if (versionModule?.DialogTitle) {
    const Component = versionModule.DialogTitle;
    return <Component ref={ref} variant={variant} className={className} {...props} />;
  }

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={`text-lg font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
});
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant } = useDialogContext();

  if (versionModule?.DialogDescription) {
    const Component = versionModule.DialogDescription;
    return <Component ref={ref} variant={variant} className={className} {...props} />;
  }

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    />
  );
});
DialogDescription.displayName = 'DialogDescription';

// Composite export
export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Close: DialogClose,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
});

export {
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
export default Dialog;
