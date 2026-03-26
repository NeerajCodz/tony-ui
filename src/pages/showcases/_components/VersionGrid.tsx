/**
 * VersionGrid Component
 * Displays all versions of a component in a responsive grid layout
 * with animation support
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Version } from '@/ui/types/common';
import { staggerContainerVariant, staggerItemVariant } from './animations';

export interface VersionGridProps {
  versions: Version[];
  renderComponent: (version: Version) => React.ReactNode;
  isAnimating: boolean;
  animationKey: string;
  columns?: 3 | 4 | 5;
}

const ALL_VERSIONS: Version[] = [
  'angular-corner',
  'border',
  'circuit-board',
  'compact',
  'data-panel',
  'default',
  'energy-shield',
  'ghost',
  'glass-morphism',
  'holo-frame',
  'large',
  'matrix-grid',
  'neon',
  'padding',
  'quantum-gate',
  'pill',
  'tactical-hud',
  'tech-panel',
  'terminal-window',
];

export function VersionGrid({
  versions = ALL_VERSIONS,
  renderComponent,
  isAnimating,
  animationKey,
  columns = 4,
}: VersionGridProps) {
  const gridColsClass = {
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  }[columns];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`grid ${gridColsClass} gap-6 w-full max-w-[1600px]`}
      >
        {versions.map((version) => (
          <motion.div
            key={version}
            variants={staggerItemVariant}
            className="group relative"
          >
            {/* Version Label */}
            <div className="absolute -top-3 left-4 z-10 px-3 py-1 bg-cyber-panel border border-cyber-blue/30 backdrop-blur-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyber-blue">
                {version}
              </span>
            </div>

            {/* Component Container */}
            <div className="relative bg-cyber-panel/30 border border-cyber-blue/20 p-8 min-h-[200px] flex items-center justify-center overflow-hidden transition-all group-hover:border-cyber-blue/40 group-hover:bg-cyber-panel/40">
              {/* Background Grid Effect */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(#00aaff 1px, transparent 1px), linear-gradient(90deg, #00aaff 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Render Component */}
              <div className="relative z-10 w-full flex items-center justify-center">
                {renderComponent(version)}
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-blue/30" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-blue/30" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-blue/30" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-blue/30" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export { ALL_VERSIONS };
