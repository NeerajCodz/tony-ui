/**
 * Checkbox Showcase
 */

import { Checkbox } from '@/ui/handlers/checkbox';
import { ShowcaseTemplate } from '../_components';

const CHECKBOX_TYPES = ['default', 'outline'];

export function CheckboxShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Checkbox"
      availableTypes={CHECKBOX_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <div className="flex items-center gap-2">
          <Checkbox
            version={version}
            variant={variant}
            effects={effects}
            id={`checkbox-${version}`}
          />
          <label htmlFor={`checkbox-${version}`} className="text-sm">Check me</label>
        </div>
      )}
    />
  );
}

export default CheckboxShowcase;
