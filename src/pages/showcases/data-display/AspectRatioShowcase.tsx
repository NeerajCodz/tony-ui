/**
 * AspectRatio Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import AspectRatio from '@/ui/handlers/aspect-ratio';

const ASPECT_RATIO_TYPES = ['default'];

// Map generic Version to AspectRatioVersion (only 5 supported)
const ASPECT_RATIO_VERSION_MAP: Record<string, 'angular-corner' | 'circuit-board' | 'data-panel' | 'holo-frame' | 'neon'> = {
  'default': 'angular-corner',
  'angular-corner': 'angular-corner',
  'border': 'circuit-board',
  'circuit-board': 'circuit-board',
  'compact': 'neon',
  'data-panel': 'data-panel',
  'energy-shield': 'holo-frame',
  'ghost': 'neon',
  'glass-morphism': 'holo-frame',
  'holo-frame': 'holo-frame',
  'large': 'data-panel',
  'matrix-grid': 'circuit-board',
  'neon': 'neon',
  'padding': 'angular-corner',
  'quantum-gate': 'circuit-board',
  'pill': 'neon',
  'tactical-hud': 'data-panel',
  'tech-panel': 'data-panel',
  'terminal-window': 'circuit-board',
};

// Map generic Variant to AspectRatioVariant
const ASPECT_RATIO_VARIANT_MAP: Record<string, 'primary' | 'neutral' | 'destructive' | 'success' | 'warning' | 'info'> = {
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

export function AspectRatioShowcase() {
  return (
    <ShowcaseTemplate
      componentName="AspectRatio"
      availableTypes={ASPECT_RATIO_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <div className="w-[200px]">
          <AspectRatio version={ASPECT_RATIO_VERSION_MAP[version] || 'angular-corner'} variant={ASPECT_RATIO_VARIANT_MAP[variant] || 'neutral'} effects={effects} ratio={16 / 9}>
            <div className="flex h-full items-center justify-center bg-muted rounded-md">
              <span className="text-sm">16:9</span>
            </div>
          </AspectRatio>
        </div>
      )}
    />
  );
}

export default AspectRatioShowcase;
