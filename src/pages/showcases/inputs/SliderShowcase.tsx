/**
 * Slider Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Slider } from '@/ui/handlers/slider';

const SLIDER_TYPES = ['default', 'outline'];

export function SliderShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Slider"
      availableTypes={SLIDER_TYPES}
      defaultType="default"
      renderComponent={({ version, variant, effects }) => (
        <Slider
          version={version}
          variant={variant}
          effects={effects}
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full"
        />
      )}
    />
  );
}

export default SliderShowcase;
