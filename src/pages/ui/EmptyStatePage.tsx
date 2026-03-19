import React, { useState } from 'react';
import { EmptyState, Button } from '../../ui';

export function EmptyStatePage() {
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
    'neon-outline',
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter">
            Empty State <span className="text-gray-600 text-2xl">// Placeholder</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic empty states. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[400px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 items-center justify-center w-full">
                <EmptyState 
                    version={version as any}
                    title="No Signals Detected"
                    description="The scanning array has returned zero results in this sector."
                    action={
                        <Button version={version as any} size="sm">
                            Initiate Deep Scan
                        </Button>
                    }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
