import React, { useState, useEffect } from 'react';
import { Progress } from '../../ui';

export function ProgressPage() {
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

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter">
            Progress <span className="text-gray-600 text-2xl">// Loader</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic progress bars. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[200px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 items-center justify-center w-full px-4">
                 <div className="w-full flex justify-between text-xs font-mono text-gray-500 mb-1">
                    <span>LOADING...</span>
                    <span>{progress}%</span>
                 </div>
                 <Progress version={version as any} value={progress} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
