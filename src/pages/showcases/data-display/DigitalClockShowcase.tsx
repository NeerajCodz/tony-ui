/**
 * DigitalClock Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import DigitalClock from '@/ui/handlers/digital-clock';

const DIGITAL_CLOCK_TYPES = ['default', '24h'];

// Map generic Version to DigitalClockVersion
const DIGITAL_CLOCK_VERSION_MAP: Record<string, 'default' | 'minimal' | 'technical'> = {
  'default': 'default',
  'angular-corner': 'minimal',
  'border': 'default',
  'circuit-board': 'technical',
  'compact': 'minimal',
  'data-panel': 'technical',
  'energy-shield': 'default',
  'ghost': 'minimal',
  'glass-morphism': 'default',
  'holo-frame': 'default',
  'large': 'default',
  'matrix-grid': 'technical',
  'neon': 'default',
  'padding': 'default',
  'quantum-gate': 'technical',
  'pill': 'minimal',
  'tactical-hud': 'technical',
  'tech-panel': 'technical',
  'terminal-window': 'minimal',
};

// Map generic Variant to DigitalClockVariant
const DIGITAL_CLOCK_VARIANT_MAP: Record<string, 'primary' | 'neutral' | 'destructive' | 'success' | 'warning' | 'info'> = {
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

export function DigitalClockShowcase() {
  return (
    <ShowcaseTemplate
      componentName="DigitalClock"
      availableTypes={DIGITAL_CLOCK_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <DigitalClock
          version={DIGITAL_CLOCK_VERSION_MAP[version] || 'default'}
          variant={DIGITAL_CLOCK_VARIANT_MAP[variant] || 'neutral'}
          effects={effects}
        />
      )}
    />
  );
}

export default DigitalClockShowcase;
