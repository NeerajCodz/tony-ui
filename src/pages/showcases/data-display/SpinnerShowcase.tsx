/**
 * Spinner Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import Spinner from '@/ui/handlers/spinner';
import type { SpinnerVersion, SpinnerVariant } from '@/ui/types/components/feedback';

const SPINNER_TYPES = ['default', 'outline'];

// Map generic Version to SpinnerVersion
const SPINNER_VERSION_MAP: Record<string, SpinnerVersion> = {
  'default': 'rotating-hexagon',
  'angular-corner': 'circuit-trace',
  'border': 'radar-sweep',
  'circuit-board': 'quantum-particles',
  'compact': 'terminal-cursor',
  'data-panel': 'energy-ring',
  'energy-shield': 'matrix-code',
  'ghost': 'plasma-orb',
  'glass-morphism': 'data-burst',
  'holo-frame': 'holographic-ring',
  'large': 'rotating-hexagon',
  'matrix-grid': 'matrix-code',
  'neon': 'energy-ring',
  'padding': 'rotating-hexagon',
  'quantum-gate': 'quantum-particles',
  'pill': 'rotating-hexagon',
  'tactical-hud': 'circuit-trace',
  'tech-panel': 'radar-sweep',
  'terminal-window': 'terminal-cursor',
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
          version={SPINNER_VERSION_MAP[version] || 'rotating-hexagon'}
          variant={SPINNER_VARIANT_MAP[variant] || 'neutral'}
          effects={effects}
        />
      )}
    />
  );
}

export default SpinnerShowcase;
