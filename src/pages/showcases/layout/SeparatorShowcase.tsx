/**
 * Separator Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Separator } from '@/ui/handlers/separator';

const SEPARATOR_TYPES = ['default'];

export function SeparatorShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Separator"
      availableTypes={SEPARATOR_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <div className="w-full">
          <Separator
            version={version}
            variant={variant}
            effects={effects}
          />
        </div>
      )}
    />
  );
}

export default SeparatorShowcase;
