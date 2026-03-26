/**
 * Sonner Showcase (Toast notifications)
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Button } from '@/ui/handlers/button';
import { toast } from 'sonner';

const SONNER_TYPES = ['default'];

export function SonnerShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Sonner (Toast)"
      availableTypes={SONNER_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <Button
          version={version}
          variant="outline"
          size="sm"
          onClick={() => {
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
            });
          }}
        >
          Show Toast
        </Button>
      )}
    />
  );
}

export default SonnerShowcase;
