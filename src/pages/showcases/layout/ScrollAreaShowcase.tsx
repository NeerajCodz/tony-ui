/**
 * ScrollArea Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { ScrollArea } from '@/ui/handlers/scroll-area';

const SCROLL_AREA_TYPES = ['default', 'horizontal'];

export function ScrollAreaShowcase() {
  return (
    <ShowcaseTemplate
      componentName="ScrollArea"
      availableTypes={SCROLL_AREA_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <ScrollArea version={version} variant={variant} effects={effects} className="h-[200px] w-[250px] rounded-md border p-4">
          <div className="space-y-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="text-sm">
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    />
  );
}

export default ScrollAreaShowcase;
