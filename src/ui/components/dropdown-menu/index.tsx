import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { Skeleton } from '../skeleton';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const DropdownMenu = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  return (
    <VersionContext.Provider value={version}>
      <DropdownMenuPrimitive.Root {...props}>
        {children}
      </DropdownMenuPrimitive.Root>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(`./dropdown-menu-${version}.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

DropdownMenu.Trigger = createSubComponent('Trigger', 'DropdownMenuTrigger');
DropdownMenu.Content = createSubComponent('Content', 'DropdownMenuContent');
DropdownMenu.Item = createSubComponent('Item', 'DropdownMenuItem');
DropdownMenu.CheckboxItem = createSubComponent('CheckboxItem', 'DropdownMenuCheckboxItem');
DropdownMenu.RadioItem = createSubComponent('RadioItem', 'DropdownMenuRadioItem');
DropdownMenu.Label = createSubComponent('Label', 'DropdownMenuLabel');
DropdownMenu.Separator = createSubComponent('Separator', 'DropdownMenuSeparator');
DropdownMenu.Shortcut = createSubComponent('Shortcut', 'DropdownMenuShortcut');
DropdownMenu.Group = DropdownMenuPrimitive.Group;
DropdownMenu.Portal = DropdownMenuPrimitive.Portal;
DropdownMenu.Sub = DropdownMenuPrimitive.Sub;
DropdownMenu.SubContent = createSubComponent('SubContent', 'DropdownMenuSubContent');
DropdownMenu.SubTrigger = createSubComponent('SubTrigger', 'DropdownMenuSubTrigger');
DropdownMenu.RadioGroup = DropdownMenuPrimitive.RadioGroup;

export default DropdownMenu;

