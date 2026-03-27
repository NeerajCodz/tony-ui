/**
 * Typography Showcase
 */

import { Typography } from '@/ui/handlers/typography';
import { ShowcaseTemplate } from '../_components';

const TYPOGRAPHY_TYPES = ['h1', 'h2', 'h3', 'h4', 'p', 'lead'];

export function TypographyShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Typography"
      availableTypes={TYPOGRAPHY_TYPES}
      defaultType="p"
      columns={3}
      renderComponent={({ version, type, variant, effects }) => {
        // Map type to Typography component
        const Component = 
          type === 'h1' ? Typography.H1 :
          type === 'h2' ? Typography.H2 :
          type === 'h3' ? Typography.H3 :
          type === 'h4' ? Typography.H4 :
          type === 'lead' ? Typography.Lead :
          Typography.P;

        return (
          <Component
            version={version}
            variant={variant}
            effects={effects}
          >
            Sample Text
          </Component>
        );
      }}
    />
  );
}

export default TypographyShowcase;
