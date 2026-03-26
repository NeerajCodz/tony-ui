/**
 * Badge Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Badge } from '@/ui/handlers/badge';

const BADGE_TYPES = ['default', 'solid', 'outline', 'soft'];

export function BadgeShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Badge"
      availableTypes={BADGE_TYPES}
      defaultType="solid"
      columns={5}
      renderComponent={({ version, type, variant, effects }) => (
        <Badge
          version={version}
          effects={effects}
        >
          New
        </Badge>
      )}
    />
  );
}

export default BadgeShowcase;
