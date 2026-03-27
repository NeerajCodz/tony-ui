/**
 * Tabs Showcase
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/handlers/tabs';
import { ShowcaseTemplate } from '../_components';

const TABS_TYPES = ['default'];

export function TabsShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Tabs"
      availableTypes={TABS_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Tabs
          version={version}
          variant={variant}
          effects={effects}
          defaultValue="tab1"
          className="w-full max-w-sm"
        >
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </Tabs>
      )}
    />
  );
}

export default TabsShowcase;
