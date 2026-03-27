/**
 * Progress Showcase
 */

import { Progress } from '@/ui/handlers/progress';
import { ShowcaseTemplate } from '../_components';

const PROGRESS_TYPES = ['default'];

export function ProgressShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Progress"
      availableTypes={PROGRESS_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Progress
          version={version}
          variant={variant}
          effects={effects}
          value={65}
          className="w-64"
        />
      )}
    />
  );
}

export default ProgressShowcase;
