/**
 * Select Showcase
 */

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/handlers/select';
import { ShowcaseTemplate } from '../_components';

const SELECT_TYPES = ['default', 'outline'];

export function SelectShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Select"
      availableTypes={SELECT_TYPES}
      defaultType="default"
      renderComponent={({ version, variant, effects }) => (
        <Select>
          <SelectTrigger version={version} variant={variant} effects={effects} className="w-[180px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent version={version}>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
}

export default SelectShowcase;
