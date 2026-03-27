/**
 * Toggle Group Showcase
 * Displays all toggle-group versions with interactive controls
 */

import { ToggleGroup, ToggleGroupItem } from '@/ui/handlers/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';
import { ShowcaseTemplate } from '../_components';

// Toggle Group types
const TOGGLE_GROUP_TYPES = ['default', 'outline', 'solid'];

export function ToggleGroupShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Toggle Group"
      availableTypes={TOGGLE_GROUP_TYPES}
      defaultType="outline"
      columns={3}
      renderComponent={({ version, type, variant, effects }) => (
        <ToggleGroup
          version={version}
          uiType={type}
          variant={variant}
          effects={effects}
          type="multiple"
          defaultValue={["bold"]}
        >
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      )}
    />
  );
}

export default ToggleGroupShowcase;
