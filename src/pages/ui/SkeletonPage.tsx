import React, { useState } from 'react';
import { Skeleton } from '../../ui';

export function SkeletonPage() {
  const versions = [
    'angular-corner',
    'holo-frame',
    'data-panel',
    'circuit-board',
    'quantum-gate',
    'tactical-hud',
    'energy-shield',
    'terminal-window',
    'matrix-grid',
    'neon',
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter">
            Skeleton <span className="text-gray-600 text-2xl">// Loading Placeholder</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic skeleton loaders. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[200px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-4 items-center justify-center w-full max-w-[250px]">
                 <div className="flex items-center space-x-4 w-full">
                    <Skeleton version={version as any} className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton version={version as any} className="h-4 w-[200px]" />
                      <Skeleton version={version as any} className="h-4 w-[150px]" />
                    </div>
                 </div>
                 <div className="space-y-2 w-full mt-4">
                     <Skeleton version={version as any} className="h-32 w-full" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
