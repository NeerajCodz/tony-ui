/**
 * Sheet Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui/handlers/sheet';
import { Button } from '@/ui/handlers/button';

const SHEET_TYPES = ['default', 'side'];

export function SheetShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Sheet"
      availableTypes={SHEET_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <Sheet>
          <SheetTrigger asChild>
            <Button version={version} variant="outline" size="sm">
              Open Sheet
            </Button>
          </SheetTrigger>
          <SheetContent version={version} variant={variant} effects={effects} side="right">
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                Sheet description and content goes here.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm">Sheet content area.</p>
            </div>
          </SheetContent>
        </Sheet>
      )}
    />
  );
}

export default SheetShowcase;
