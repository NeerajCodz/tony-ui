/**
 * Spinner Showcase
 */

import Spinner from '@/ui/handlers/spinner';
import type { SpinnerVariant } from '@/ui/types/components/feedback';
import type { Version } from '@/ui/types/common';
import { ShowcaseTemplate } from '../_components';

const SPINNER_TYPES = ['default', 'outline'];

const SPINNER_VERSION_MAP: Record<Version, Version> = {
  'angular-corner': 'angular-corner',
  border: 'border',
  'circuit-board': 'circuit-board',
  compact: 'compact',
  'data-panel': 'data-panel',
  default: 'default',
  'energy-shield': 'energy-shield',
  ghost: 'ghost',
  'glass-morphism': 'glass-morphism',
  'holo-frame': 'holo-frame',
  large: 'large',
  'matrix-grid': 'matrix-grid',
  neon: 'neon',
  padding: 'padding',
  'quantum-gate': 'quantum-gate',
  pill: 'pill',
  'tactical-hud': 'tactical-hud',
  'tech-panel': 'tech-panel',
  'terminal-window': 'terminal-window',
};

// Map generic Variant to SpinnerVariant
const SPINNER_VARIANT_MAP: Record<string, SpinnerVariant> = {
  'primary': 'primary',
  'secondary': 'neutral',
  'destructive': 'destructive',
  'outline': 'neutral',
  'ghost': 'neutral',
  'success': 'success',
  'warning': 'warning',
  'info': 'info',
  'default': 'neutral',
};

export function SpinnerShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Spinner"
      availableTypes={SPINNER_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <Spinner
          version={SPINNER_VERSION_MAP[version]}
          variant={SPINNER_VARIANT_MAP[variant] || 'neutral'}
          effects={effects}
        />
      )}
    />
  );
}

export default SpinnerShowcase;
