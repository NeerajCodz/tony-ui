import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';
import { ContextMenuProps } from '@radix-ui/react-context-menu';
import { Skeleton } from '../skeleton';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

// Context to share version across subcomponents
const VersionContext = createContext<string>('angular-corner');

export const ContextMenu = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any) => {
  return (
    <VersionContext.Provider value={version}>
      <ContextMenuPrimitive.Root {...props}>
        {children}
      </ContextMenuPrimitive.Root>
    </VersionContext.Provider>
  );
};

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  return ({ children, ...props }: any) => {
    const version = useContext(VersionContext);
    const Component = useMemo(() => lazy(() => import(`./context-menu-${version}.tsx`).then(module => ({ default: module[exportName] }))), [version]);

    return (
      <Suspense fallback={name === 'Content' ? null : <span className="opacity-50">{children}</span>}>
        <Component {...props}>{children}</Component>
      </Suspense>
    );
  };
};

ContextMenu.Trigger = ContextMenuPrimitive.Trigger; // Trigger is usually wrapping div, no style
ContextMenu.Content = createSubComponent('Content', 'ContextMenuContent');
ContextMenu.Item = createSubComponent('Item', 'ContextMenuItem');
ContextMenu.CheckboxItem = createSubComponent('CheckboxItem', 'ContextMenuCheckboxItem');
ContextMenu.RadioItem = createSubComponent('RadioItem', 'ContextMenuRadioItem');
ContextMenu.Label = createSubComponent('Label', 'ContextMenuLabel');
ContextMenu.Separator = createSubComponent('Separator', 'ContextMenuSeparator');
ContextMenu.Shortcut = createSubComponent('Shortcut', 'ContextMenuShortcut');
ContextMenu.Group = ContextMenuPrimitive.Group;
ContextMenu.Portal = ContextMenuPrimitive.Portal;
ContextMenu.Sub = ContextMenuPrimitive.Sub;
ContextMenu.SubContent = createSubComponent('SubContent', 'ContextMenuSubContent');
ContextMenu.SubTrigger = createSubComponent('SubTrigger', 'ContextMenuSubTrigger');
ContextMenu.RadioGroup = ContextMenuPrimitive.RadioGroup;

export default ContextMenu;

