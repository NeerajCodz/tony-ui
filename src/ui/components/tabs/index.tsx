import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { TabsProps } from '../../types/components/tabs';
import { Skeleton } from '../skeleton';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const Tabs = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: TabsProps) => {
  const Component = useMemo(() => lazy(() => import(`./tabs-${version}.tsx`).then(module => ({ default: module.TabsRoot }))), [version]);

  return (
    <VersionContext.Provider value={version}>
      <Suspense fallback={<Skeleton className="h-full w-full opacity-20" />}>
        <Component version={version} variant={variant} type={type} {...props}>
          {children}
        </Component>
      </Suspense>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(`./tabs-${version}.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={<Skeleton className="h-10 w-full opacity-20" />}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

Tabs.List = createSubComponent('List', 'TabsList');
Tabs.Trigger = createSubComponent('Trigger', 'TabsTrigger');
Tabs.Content = createSubComponent('Content', 'TabsContent');

export default Tabs;

