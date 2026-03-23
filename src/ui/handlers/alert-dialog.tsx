/**
 * AlertDialog Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type { Version, Variant, StyleComponentType } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type AlertDialogVersion = Version;
export type AlertDialogVariant = Variant;

export interface AlertDialogProps {
  version?: AlertDialogVersion;
  variant?: AlertDialogVariant;
  type?: StyleComponentType;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

// Context
interface AlertDialogContextValue {
  version: AlertDialogVersion;
  variant: AlertDialogVariant;
  type: StyleComponentType;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const AlertDialogContext = createContext<AlertDialogContextValue>({
  version: 'angular-corner',
  variant: 'default',
  type: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useAlertDialogContext = () => useContext(AlertDialogContext);

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="animate-pulse bg-gray-800/50 rounded w-[400px] h-[200px]" />
  </div>
);

// Main Component
const AlertDialogRoot: React.FC<AlertDialogProps> = ({
  version = 'angular-corner',
  variant = 'default',
  type = 'default',
  open,
  onOpenChange,
  children,
}) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'alert-dialog', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <AlertDialogContext.Provider value={{ version, variant, type, colors, versionModule }}>
      <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        {children}
      </AlertDialogPrimitive.Root>
    </AlertDialogContext.Provider>
  );
};

// Subcomponents
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>((props, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();
  
  if (!versionModule) {
    return (
      <AlertDialogPrimitive.Overlay
        ref={ref}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        {...props}
      />
    );
  }

  const Component = versionModule.AlertDialogOverlay || versionModule.Overlay;
  return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
});
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>((props, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (!versionModule) {
    return <LoadingSkeleton />;
  }

  const Component = versionModule.AlertDialogContent || versionModule.Content;
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = 'AlertDialogContent';

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (versionModule?.AlertDialogHeader) {
    const Component = versionModule.AlertDialogHeader;
    return <Component ref={ref} variant={variant} type={type} colors={colors} className={className} {...props} />;
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
      {...props}
    />
  );
});
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (versionModule?.AlertDialogFooter) {
    const Component = versionModule.AlertDialogFooter;
    return <Component ref={ref} variant={variant} type={type} colors={colors} className={className} {...props} />;
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
      {...props}
    />
  );
});
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>((props, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (versionModule?.AlertDialogTitle) {
    const Component = versionModule.AlertDialogTitle;
    return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
  }

  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className="text-lg font-semibold"
      {...props}
    />
  );
});
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>((props, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (versionModule?.AlertDialogDescription) {
    const Component = versionModule.AlertDialogDescription;
    return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
  }

  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className="text-sm text-muted-foreground"
      {...props}
    />
  );
});
AlertDialogDescription.displayName = 'AlertDialogDescription';

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>((props, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (versionModule?.AlertDialogAction) {
    const Component = versionModule.AlertDialogAction;
    return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
  }

  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
      {...props}
    />
  );
});
AlertDialogAction.displayName = 'AlertDialogAction';

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>((props, ref) => {
  const { versionModule, variant, type, colors } = useAlertDialogContext();

  if (versionModule?.AlertDialogCancel) {
    const Component = versionModule.AlertDialogCancel;
    return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
  }

  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className="mt-2 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground sm:mt-0"
      {...props}
    />
  );
});
AlertDialogCancel.displayName = 'AlertDialogCancel';

// Composite export
export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});

export {
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
export default AlertDialog;
