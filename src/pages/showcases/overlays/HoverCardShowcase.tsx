/**
 * HoverCard Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/ui/handlers/hover-card';
import { Button } from '@/ui/handlers/button';

const HOVER_CARD_TYPES = ['default'];

export function HoverCardShowcase() {
  return (
    <ShowcaseTemplate
      componentName="HoverCard"
      availableTypes={HOVER_CARD_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button version={version} variant="link" size="sm">
              @username
            </Button>
          </HoverCardTrigger>
          <HoverCardContent version={version} variant={variant} effects={effects}>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">@username</h4>
              <p className="text-sm">
                User profile information appears here on hover.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
    />
  );
}

export default HoverCardShowcase;
