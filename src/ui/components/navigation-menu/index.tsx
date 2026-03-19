import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { Skeleton } from '../../handlers/skeleton';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const NavigationMenu = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  const Component = useMemo(() => lazy(() => import(`../../components/${version}/navigation-menu.tsx`).then(module => ({ default: module.NavigationMenuRoot }))), [version]);

  return (
    <VersionContext.Provider value={version}>
      <Suspense fallback={<Skeleton className="h-10 w-full opacity-20" />}>
        <Component {...props}>{children}</Component>
      </Suspense>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(`../../components/${version}/navigation-menu.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

NavigationMenu.List = createSubComponent('List', 'NavigationMenuList');
NavigationMenu.Item = NavigationMenuPrimitive.Item; // Item is usually just a wrapper
NavigationMenu.Trigger = createSubComponent('Trigger', 'NavigationMenuTrigger');
NavigationMenu.Content = createSubComponent('Content', 'NavigationMenuContent');
NavigationMenu.Link = NavigationMenuPrimitive.Link;
NavigationMenu.Indicator = createSubComponent('Indicator', 'NavigationMenuIndicator');
NavigationMenu.Viewport = createSubComponent('Viewport', 'NavigationMenuViewport'); // Usually internal to Root, but can be exposed

export default NavigationMenu;

