/**
 * Button Showcase
 * Displays all button versions with interactive controls
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Button } from '@/ui/handlers/button';
import type { Version, Variant } from '@/ui/types/common';

// Button-specific types
const BUTTON_TYPES = ['default', 'solid', 'outline', 'ghost', 'inverse', 'contrast', 'soft'];

export function ButtonShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Button"
      availableTypes={BUTTON_TYPES}
      defaultType="solid"
      renderComponent={({ version, type, variant, effects }) => (
        <Button
          version={version}
          uiType={type}
          variant={variant}
          effects={effects}
        >
          Click Me
        </Button>
      )}
    />
  );
}

export default ButtonShowcase;
