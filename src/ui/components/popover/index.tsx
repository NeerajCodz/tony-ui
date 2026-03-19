'use client';

import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { VariantColors } from '@/ui/types/common';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const Popover = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  return (
    <VersionContext.Provider value={version}>
      <PopoverPrimitive.Root {...props}>
        {children}
      </PopoverPrimitive.Root>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(`../../components/${version}/popover.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = createSubComponent('Content', 'PopoverContent');
// Popover typically has Close, Anchor etc, but Trigger/Content are main ones.
// We can add Anchor if needed, but for now stick to basics.

export const PopoverTrigger = Popover.Trigger;
export const PopoverContent = Popover.Content;

export default Popover;
