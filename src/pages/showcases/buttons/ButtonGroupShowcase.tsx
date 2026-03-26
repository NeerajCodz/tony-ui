/**
 * Button Group Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { ButtonGroup } from '@/ui/handlers/button-group';
import { Button } from '@/ui/handlers/button';

const BUTTON_GROUP_TYPES = ['default'];

export function ButtonGroupShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Button Group"
      availableTypes={BUTTON_GROUP_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <ButtonGroup version={version} variant={variant} effects={effects}>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      )}
    />
  );
}

export default ButtonGroupShowcase;
