/**
 * Badge Showcase
 */

import { Badge } from '@/ui/handlers/badge';
import { ShowcaseTemplate } from '../_components';

const BADGE_TYPES = ['default', 'solid', 'outline', 'soft'];

export function BadgeShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Badge"
      availableTypes={BADGE_TYPES}
      defaultType="solid"
      columns={5}
      renderComponent={({ version, effects }) => (
        <Badge
          version={version}
          effects={effects}
        >
          New
        </Badge>
      )}
    />
  );
}

export default BadgeShowcase;
