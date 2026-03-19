import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { TooltipProps } from '@radix-ui/react-tooltip'; // or custom types
import { Skeleton } from '../skeleton';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  // We don't necessarily load a Root component implementation because Radix Root is just state.
  // BUT we need to pass the version context to children (Trigger, Content).
  // AND we might want to wrap the whole thing in the VersionContext provider.
  
  return (
    <VersionContext.Provider value={version}>
      <TooltipPrimitive.Root {...props}>
        {children}
      </TooltipPrimitive.Root>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(`./tooltip-${version}.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

Tooltip.Trigger = createSubComponent('Trigger', 'TooltipTrigger');
Tooltip.Content = createSubComponent('Content', 'TooltipContent');
// Provider is usually global, but we can re-export it.
Tooltip.Provider = TooltipProvider;

export default Tooltip;

