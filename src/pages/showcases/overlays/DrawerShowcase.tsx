/**
 * Drawer Showcase
 */

import { Button } from '@/ui/handlers/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/ui/handlers/drawer';
import { ShowcaseTemplate } from '../_components';

const DRAWER_TYPES = ['default', 'bottom'];

export function DrawerShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Drawer"
      availableTypes={DRAWER_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <Drawer>
          <DrawerTrigger asChild>
            <Button version={version} variant="outline" size="sm">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent version={version} variant={variant} effects={effects}>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>
                Drawer description and content.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm">Drawer content area.</p>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    />
  );
}

export default DrawerShowcase;
