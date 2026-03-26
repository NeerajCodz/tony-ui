/**
 * Switch Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Switch } from '@/ui/handlers/switch';

const SWITCH_TYPES = ['default', 'outline'];

export function SwitchShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Switch"
      availableTypes={SWITCH_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <div className="flex items-center gap-2">
          <Switch
            version={version}
            variant={variant}
            effects={effects}
            id={`switch-${version}`}
          />
          <label htmlFor={`switch-${version}`} className="text-sm">Toggle</label>
        </div>
      )}
    />
  );
}

export default SwitchShowcase;
