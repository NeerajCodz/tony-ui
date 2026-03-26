/**
 * ShowcaseHeader Component
 * Interactive controls for component showcases
 * - Type selector (component-specific types)
 * - Variant selector (global variants)
 * - Animate In/Out buttons
 * - Effects toggle
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, Rewind, Sparkles, SparklesIcon } from 'lucide-react';
import type { Variant } from '@/ui/types/common';

export interface ShowcaseHeaderProps {
  componentName: string;
  
  // Type controls
  availableTypes: string[];
  selectedType: string;
  onTypeChange: (type: string) => void;
  
  // Variant controls
  availableVariants?: Variant[];
  selectedVariant: Variant;
  onVariantChange: (variant: Variant) => void;
  
  // Animation controls
  isAnimating: boolean;
  onAnimateIn: () => void;
  onAnimateOut: () => void;
  
  // Effects controls
  effectsEnabled: boolean;
  onEffectsToggle: () => void;
}

const DEFAULT_VARIANTS: Variant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'destructive',
  'info',
  'neutral',
];

export function ShowcaseHeader({
  componentName,
  availableTypes,
  selectedType,
  onTypeChange,
  availableVariants = DEFAULT_VARIANTS,
  selectedVariant,
  onVariantChange,
  isAnimating,
  onAnimateIn,
  onAnimateOut,
  effectsEnabled,
  onEffectsToggle,
}: ShowcaseHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[1600px] mb-8"
    >
      {/* Component Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-black tracking-tight text-cyber-blue uppercase">
          {componentName}
        </h1>
        <p className="text-sm text-cyber-blue/60 mt-2 tracking-wider">
          Displaying all versions with interactive controls
        </p>
      </div>

      {/* Controls Grid */}
      <div className="bg-cyber-panel/50 border border-cyber-blue/30 p-6 rounded-lg backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-cyber-blue/80 uppercase tracking-widest">
              Type
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => onTypeChange(type)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedType === type
                      ? 'bg-cyber-blue text-cyber-dark'
                      : 'bg-cyber-panel/50 text-cyber-blue/70 hover:bg-cyber-blue/10 border border-cyber-blue/30'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Variant Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-cyber-blue/80 uppercase tracking-widest">
              Variant
            </label>
            <div className="flex flex-wrap gap-2">
              {availableVariants.slice(0, 4).map((variant) => (
                <button
                  key={variant}
                  onClick={() => onVariantChange(variant)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedVariant === variant
                      ? 'bg-cyber-blue text-cyber-dark'
                      : 'bg-cyber-panel/50 text-cyber-blue/70 hover:bg-cyber-blue/10 border border-cyber-blue/30'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
            {availableVariants.length > 4 && (
              <select
                value={selectedVariant}
                onChange={(e) => onVariantChange(e.target.value as Variant)}
                className="w-full bg-cyber-panel border border-cyber-blue/30 text-cyber-blue text-xs px-3 py-2 rounded focus:outline-none focus:border-cyber-blue uppercase tracking-wider font-bold"
              >
                {availableVariants.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Animation Controls */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-cyber-blue/80 uppercase tracking-widest">
              Animation
            </label>
            <div className="flex gap-2">
              <button
                onClick={onAnimateIn}
                disabled={isAnimating}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-panel/50 text-cyber-blue border border-cyber-blue/30 hover:bg-cyber-blue/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">In</span>
              </button>
              <button
                onClick={onAnimateOut}
                disabled={isAnimating}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-panel/50 text-cyber-blue border border-cyber-blue/30 hover:bg-cyber-blue/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Rewind size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Out</span>
              </button>
            </div>
          </div>

          {/* Effects Toggle */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-cyber-blue/80 uppercase tracking-widest">
              Effects
            </label>
            <button
              onClick={onEffectsToggle}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 transition-all ${
                effectsEnabled
                  ? 'bg-cyber-blue text-cyber-dark'
                  : 'bg-cyber-panel/50 text-cyber-blue border border-cyber-blue/30 hover:bg-cyber-blue/10'
              }`}
            >
              {effectsEnabled ? <Sparkles size={16} /> : <SparklesIcon size={16} />}
              <span className="text-xs font-bold uppercase tracking-wider">
                {effectsEnabled ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
