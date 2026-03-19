import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { MenubarProps } from '@radix-ui/react-menubar';
import { Skeleton } from '../../handlers/skeleton';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const Menubar = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  const Component = useMemo(() => lazy(() => import(`../../components/${version}/menubar.tsx`).then(module => ({ default: module.MenubarRoot }))), [version]);

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
    const Component = useMemo(() => lazy(() => import(`../../components/${version}/menubar.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

Menubar.Menu = MenubarPrimitive.Menu;
Menubar.Trigger = createSubComponent('Trigger', 'MenubarTrigger');
Menubar.Content = createSubComponent('Content', 'MenubarContent');
Menubar.Item = createSubComponent('Item', 'MenubarItem');
Menubar.CheckboxItem = createSubComponent('CheckboxItem', 'MenubarCheckboxItem');
Menubar.RadioItem = createSubComponent('RadioItem', 'MenubarRadioItem');
Menubar.Label = createSubComponent('Label', 'MenubarLabel');
Menubar.Separator = createSubComponent('Separator', 'MenubarSeparator');
Menubar.Shortcut = createSubComponent('Shortcut', 'MenubarShortcut');
Menubar.Group = MenubarPrimitive.Group;
Menubar.Portal = MenubarPrimitive.Portal;
Menubar.Sub = MenubarPrimitive.Sub;
Menubar.SubContent = createSubComponent('SubContent', 'MenubarSubContent');
Menubar.SubTrigger = createSubComponent('SubTrigger', 'MenubarSubTrigger');
Menubar.RadioGroup = MenubarPrimitive.RadioGroup;

export default Menubar;

