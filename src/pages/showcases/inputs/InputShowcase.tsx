/**
 * Input Showcase
 */

import Input from '@/ui/handlers/input';
import type { InputVariant } from '@/ui/types/components/inputs';
import { ShowcaseTemplate } from '../_components';

const INPUT_TYPES = ['default', 'filled', 'outline', 'underlined'];

// Map generic Variant to InputVariant
const INPUT_VARIANT_MAP: Record<string, InputVariant> = {
  'primary': 'neutral',
  'secondary': 'neutral',
  'destructive': 'destructive',
  'outline': 'neutral',
  'ghost': 'neutral',
  'success': 'success',
  'warning': 'warning',
  'info': 'info',
  'default': 'neutral',
};

export function InputShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Input"
      availableTypes={INPUT_TYPES}
      defaultType="outline"
      renderComponent={({ version, type, variant, effects }) => (
        <Input
          version={version}
          uiType={type}
          variant={INPUT_VARIANT_MAP[variant] || 'neutral'}
          effects={effects}
          placeholder="Enter text..."
        />
      )}
    />
  );
}

export default InputShowcase;
