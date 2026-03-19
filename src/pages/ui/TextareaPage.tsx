import React, { useState } from 'react';
import { Textarea } from '../../ui';
import { Button } from '../../ui';

export function TextareaPage() {
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
            Textarea <span className="text-gray-600 text-2xl">// Multi-line Input</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic text areas for extended data entry. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[300px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 items-center justify-center w-full">
                <div className="w-full max-w-xs space-y-2">
                   <label className="text-xs font-mono text-gray-500 uppercase">Mission Brief</label>
                   <Textarea 
                      version={version as any} 
                      placeholder="Enter mission parameters..."
                      rows={4}
                    />
                </div>

                <Button version={version as any} size="sm" className="w-full max-w-xs mt-2">
                   Submit Report
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
