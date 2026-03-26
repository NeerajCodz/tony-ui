/**
 * Label Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Label } from '@/ui/handlers/label';

const LABEL_TYPES = ['default'];

export function LabelShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Label"
      availableTypes={LABEL_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <Label version={version} variant={variant} effects={effects}>
          Label Text
        </Label>
      )}
    />
  );
}

export default LabelShowcase;
