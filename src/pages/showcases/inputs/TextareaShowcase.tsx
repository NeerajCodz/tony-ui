/**
 * Textarea Showcase
 */

import { Textarea } from '@/ui/handlers/textarea';
import { ShowcaseTemplate } from '../_components';

const TEXTAREA_TYPES = ['default', 'filled', 'outline'];

export function TextareaShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Textarea"
      availableTypes={TEXTAREA_TYPES}
      defaultType="outline"
      renderComponent={({ version, variant, effects }) => (
        <Textarea
          version={version}
          variant={variant}
          effects={effects}
          placeholder="Enter multi-line text..."
          rows={3}
        />
      )}
    />
  );
}

export default TextareaShowcase;
