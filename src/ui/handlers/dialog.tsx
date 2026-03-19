'use client';

/**
 * Dialog Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect, useMemo } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { Version, Variant, VariantColors } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

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

// Dynamic module loader - NO hardcoded versions
const loadDialogModule = async (version: Version) => {
  try {
    return await import(`../components/dialog/dialog-${version}.tsx`);
  } catch {
    try {
      return await import(`../components/default/dialog.tsx`);
    } catch {
      return null;
    }
  }
};

// Dynamic config loader
const loadDialogConfig = async (version: Version) => {
  try {
    const module = await import(`../config/components/${version}/dialog.tsx`);
    return module.dialogConfig || module.default;
  } catch {
    try {
      const module = await import(`../config/components/default/dialog.tsx`);
      return module.dialogConfig || module.default;
    } catch {
      return null;
    }
  }
};

// Context
interface DialogContextValue {
  version: DialogVersion;
  variant: DialogVariant;
  versionModule: any;
  colors: VariantColors;
  config: any;
}

const DialogContext = createContext<DialogContextValue>({
  version: 'default',
  variant: 'default',
  versionModule: null,
  colors: {} as VariantColors,
  config: null,
});

const useDialogContext = () => useContext(DialogContext);

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="animate-pulse bg-muted/50 rounded w-[450px] h-[250px]" />
  </div>
);

// Main Component
const DialogRoot: React.FC<DialogProps> = ({
  version = 'default',
  variant = 'default',
  open,
  onOpenChange,
  children,
}) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const [config, setConfig] = useState<any>(null);
  
  // Dynamically load version module
  useEffect(() => {
    loadDialogModule(version).then(setVersionModule);
  }, [version]);
  
  // Dynamically load config
  useEffect(() => {
    loadDialogConfig(version).then(setConfig);
  }, [version]);
  
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);

  return (
    <DialogContext.Provider value={{ version, variant, versionModule, colors, config }}>
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
  const { versionModule, variant, colors } = useDialogContext();

  if (versionModule?.DialogOverlay || versionModule?.Overlay) {
    const Component = versionModule.DialogOverlay || versionModule.Overlay;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={className}
      {...props}
    />
  );
});
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className = '', children, ...props }, ref) => {
  const { versionModule, variant, colors, config } = useDialogContext();

  if (versionModule?.DialogContent || versionModule?.Content) {
    const Component = versionModule.DialogContent || versionModule.Content;
    return (
      <DialogPortal>
        <DialogOverlay />
        <Component ref={ref} variant={variant} colors={colors} config={config} className={className} {...props}>
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
        className={className}
        {...props}
      >
        {children}
        <DialogPrimitive.Close>
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
    const { versionModule, variant, colors } = useDialogContext();

    if (versionModule?.DialogHeader || versionModule?.Header) {
      const Component = versionModule.DialogHeader || versionModule.Header;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <div
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    const { versionModule, variant, colors } = useDialogContext();

    if (versionModule?.DialogFooter || versionModule?.Footer) {
      const Component = versionModule.DialogFooter || versionModule.Footer;
      return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
    }

    return (
      <div
        ref={ref}
        className={className}
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
  const { versionModule, variant, colors } = useDialogContext();

  if (versionModule?.DialogTitle || versionModule?.Title) {
    const Component = versionModule.DialogTitle || versionModule.Title;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={className}
      {...props}
    />
  );
});
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, colors } = useDialogContext();

  if (versionModule?.DialogDescription || versionModule?.Description) {
    const Component = versionModule.DialogDescription || versionModule.Description;
    return <Component ref={ref} variant={variant} colors={colors} className={className} {...props} />;
  }

  return (
    <DialogPrimitive.Description
      ref={ref}
      className={className}
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
