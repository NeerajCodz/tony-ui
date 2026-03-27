/**
 * Menubar Showcase
 */

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/ui/handlers/menubar';
import { ShowcaseTemplate } from '../_components';

const MENUBAR_TYPES = ['default'];

export function MenubarShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Menubar"
      availableTypes={MENUBAR_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Menubar version={version} variant={variant} effects={effects}>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New</MenubarItem>
              <MenubarItem>Open</MenubarItem>
              <MenubarItem>Save</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
    />
  );
}

export default MenubarShowcase;
