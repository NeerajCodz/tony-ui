import React, { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '../../ui';
import { Terminal, ShieldAlert } from 'lucide-react';

export function AlertPage() {
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
            Alert <span className="text-gray-600 text-2xl">// Notification</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic alert messages. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[200px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 items-center justify-center w-full">
                <Alert version={version as any}>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>System Status</AlertTitle>
                  <AlertDescription>
                    All systems nominal. Grid synchronization complete.
                  </AlertDescription>
                </Alert>

                <Alert version={version as any} variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>Breach Detected</AlertTitle>
                  <AlertDescription>
                    Unauthorized access attempt in Sector 7G. Lockdown initiated.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
