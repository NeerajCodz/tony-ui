/**
 * Toggle Showcase
 * Displays all toggle versions with interactive controls
 */

import { Toggle } from '@/ui/handlers/toggle';
import { Bold } from 'lucide-react';
import { ShowcaseTemplate } from '../_components';

// Toggle types
const TOGGLE_TYPES = ['default', 'outline', 'solid'];

export function ToggleShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Toggle"
      availableTypes={TOGGLE_TYPES}
      defaultType="outline"
      columns={4}
      renderComponent={({ version, type, variant, effects }) => (
        <Toggle version={version} uiType={type} variant={variant} effects={effects}>
          <Bold className="h-4 w-4" />
        </Toggle>
      )}
    />
  );
}

export default ToggleShowcase;
