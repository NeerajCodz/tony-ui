import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../../ui';
import { Label } from '../../ui';

export function RadioGroupPage() {
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
            Radio Group <span className="text-gray-600 text-2xl">// Selection</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic radio selection groups. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[200px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 items-center justify-center w-full">
                <RadioGroup version={version as any} defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id={`option-one-${version}`} />
                    <Label version={version as any} htmlFor={`option-one-${version}`}>Tactical</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id={`option-two-${version}`} />
                    <Label version={version as any} htmlFor={`option-two-${version}`}>Stealth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id={`option-three-${version}`} />
                    <Label version={version as any} htmlFor={`option-three-${version}`}>Assault</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
