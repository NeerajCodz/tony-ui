/**
 * Collapsible Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/ui/handlers/collapsible';
import { Button } from '@/ui/handlers/button';

const COLLAPSIBLE_TYPES = ['default'];

export function CollapsibleShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Collapsible"
      availableTypes={COLLAPSIBLE_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, type, variant, effects }) => (
        <Collapsible version={version} variant={variant} effects={effects} className="w-full max-w-sm">
          <CollapsibleTrigger asChild>
            <Button version={version} variant={variant} type="outline" size="sm">
              Toggle Section
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 p-4 border border-cyber-blue/30 text-sm">
            This is collapsible content that can be toggled.
          </CollapsibleContent>
        </Collapsible>
      )}
    />
  );
}

export default CollapsibleShowcase;
