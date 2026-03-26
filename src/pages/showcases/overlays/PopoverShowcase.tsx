/**
 * Popover Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui/handlers/popover';
import { Button } from '@/ui/handlers/button';

const POPOVER_TYPES = ['default', 'floating'];

export function PopoverShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Popover"
      availableTypes={POPOVER_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <Popover>
          <PopoverTrigger asChild>
            <Button version={version} variant="outline" size="sm">
              Open
            </Button>
          </PopoverTrigger>
          <PopoverContent version={version} variant={variant} effects={effects}>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Popover Title</h4>
              <p className="text-sm text-muted-foreground">
                Popover content here.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      )}
    />
  );
}

export default PopoverShowcase;
