/**
 * ShowcaseTemplate Component
 * Base template for all component showcases
 * Combines header controls and version grid
 */

import React, { useState, useCallback } from 'react';
import { ShowcaseHeader } from './ShowcaseHeader';
import { VersionGrid, ALL_VERSIONS } from './VersionGrid';
import type { Version, Variant } from '@/ui/types/common';

export interface ShowcaseTemplateProps {
  /** Component name for display */
  componentName: string;
  
  /** Available types for this component */
  availableTypes: string[];
  
  /** Default type */
  defaultType?: string;
  
  /** Available variants (optional, defaults to common variants) */
  availableVariants?: Variant[];
  
  /** Default variant */
  defaultVariant?: Variant;
  
  /** Render function for each version */
  renderComponent: (props: {
    version: Version;
    type: string;
    variant: Variant;
    effects?: string;
  }) => React.ReactNode;
  
  /** Grid columns (3, 4, or 5) */
  columns?: 3 | 4 | 5;
  
  /** Custom versions list (defaults to ALL_VERSIONS) */
  versions?: Version[];
}

export function ShowcaseTemplate({
  componentName,
  availableTypes,
  defaultType,
  availableVariants,
  defaultVariant = 'default',
  renderComponent,
  columns = 4,
  versions = ALL_VERSIONS,
}: ShowcaseTemplateProps) {
  // State
  const [selectedType, setSelectedType] = useState(defaultType || availableTypes[0]);
  const [selectedVariant, setSelectedVariant] = useState<Variant>(defaultVariant);
  const [effectsEnabled, setEffectsEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState('initial');

  // Animation handlers
  const handleAnimateIn = useCallback(() => {
    setIsAnimating(true);
    setAnimationKey(`animate-in-${Date.now()}`);
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  const handleAnimateOut = useCallback(() => {
    setIsAnimating(true);
    setAnimationKey(`animate-out-${Date.now()}`);
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  // Effects toggle
  const handleEffectsToggle = useCallback(() => {
    setEffectsEnabled((prev) => !prev);
  }, []);

  // Render component with current settings
  const renderWithSettings = useCallback(
    (version: Version) => {
      return renderComponent({
        version,
        type: selectedType,
        variant: selectedVariant,
        effects: effectsEnabled ? 'glow neon-pulse' : undefined,
      });
    },
    [renderComponent, selectedType, selectedVariant, effectsEnabled]
  );

  return (
    <div className="w-full flex flex-col items-center px-8 py-12">
      <ShowcaseHeader
        componentName={componentName}
        availableTypes={availableTypes}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        availableVariants={availableVariants}
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
        isAnimating={isAnimating}
        onAnimateIn={handleAnimateIn}
        onAnimateOut={handleAnimateOut}
        effectsEnabled={effectsEnabled}
        onEffectsToggle={handleEffectsToggle}
      />

      <VersionGrid
        versions={versions}
        renderComponent={renderWithSettings}
        isAnimating={isAnimating}
        animationKey={animationKey}
        columns={columns}
      />
    </div>
  );
}
