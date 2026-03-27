/**
 * RadioGroup Showcase
 */

import { RadioGroup, RadioGroupItem } from '@/ui/handlers/radio-group';
import { ShowcaseTemplate } from '../_components';

const RADIO_TYPES = ['default', 'outline'];

export function RadioGroupShowcase() {
  return (
    <ShowcaseTemplate
      componentName="RadioGroup"
      availableTypes={RADIO_TYPES}
      defaultType="default"
      renderComponent={({ version, variant, effects }) => (
        <RadioGroup version={version} variant={variant} effects={effects} defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id={`r1-${version}`} />
            <label htmlFor={`r1-${version}`} className="text-sm">Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id={`r2-${version}`} />
            <label htmlFor={`r2-${version}`} className="text-sm">Option 2</label>
          </div>
        </RadioGroup>
      )}
    />
  );
}

export default RadioGroupShowcase;
