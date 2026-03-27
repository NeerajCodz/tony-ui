/**
 * AnalogClock Showcase
 */

import AnalogClock from '@/ui/handlers/analog-clock';
import { ShowcaseTemplate } from '../_components';

const ANALOG_CLOCK_TYPES = ['default', 'minimal'];

// Map generic Version to AnalogClockVersion (3 types: default, minimal, technical)
const ANALOG_CLOCK_VERSION_MAP: Record<string, 'default' | 'minimal' | 'technical'> = {
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

// Map generic Variant to AnalogClockVariant
const ANALOG_CLOCK_VARIANT_MAP: Record<string, 'primary' | 'neutral' | 'destructive' | 'success' | 'warning' | 'info'> = {
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

export function AnalogClockShowcase() {
  return (
    <ShowcaseTemplate
      componentName="AnalogClock"
      availableTypes={ANALOG_CLOCK_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <AnalogClock
          version={ANALOG_CLOCK_VERSION_MAP[version] || 'default'}
          variant={ANALOG_CLOCK_VARIANT_MAP[variant] || 'neutral'}
          effects={effects}
          size={'md' as any}
        />
      )}
    />
  );
}

export default AnalogClockShowcase;
