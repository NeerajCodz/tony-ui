import React, { useState } from 'react';
import { AlertDialog } from '../../ui';

export function AlertDialogPage() {
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

  const variants = ['neutral', 'primary', 'success', 'warning', 'info', 'destructive'];
  const types = ['default', 'outline', 'solid', 'ghost'];

  const [currentVariant, setCurrentVariant] = useState<any>('primary');
  const [currentType, setCurrentType] = useState<any>('default');

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter">
            AlertDialog <span className="text-gray-600 text-2xl">// Component Showcase</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic alert dialogs. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="sticky top-4 z-10 bg-gray-900/90 backdrop-blur border border-gray-800 p-4 rounded-xl mb-8 shadow-2xl flex flex-wrap gap-6 items-center">
          <div>
            <label className="block text-xs font-mono text-cyan-500 mb-1">VARIANT</label>
            <select 
              value={currentVariant}
              onChange={(e) => setCurrentVariant(e.target.value)}
              className="bg-gray-950 border border-gray-700 rounded px-3 py-1 text-sm focus:border-cyan-500 outline-none min-w-[120px]"
            >
              {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono text-cyan-500 mb-1">TYPE</label>
            <select 
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value)}
              className="bg-gray-950 border border-gray-700 rounded px-3 py-1 text-sm focus:border-cyan-500 outline-none min-w-[120px]"
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[300px]">
              <h3 className="text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2">{version}</h3>
              
              <div className="flex-1 flex items-center justify-center">
                <AlertDialog 
                  version={version as any} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <AlertDialog.Trigger asChild>
                    <button className="px-6 py-3 border border-red-500/50 text-red-500 hover:bg-red-500/10 transition-all font-mono uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]">
                      Initiate Purge
                    </button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content>
                    <AlertDialog.Header>
                      <AlertDialog.Title>Warning: Data Purge</AlertDialog.Title>
                      <AlertDialog.Description>
                        This action will permanently erase all sector data. This cannot be undone.
                      </AlertDialog.Description>
                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                      <AlertDialog.Cancel>Abort</AlertDialog.Cancel>
                      <AlertDialog.Action>Confirm Purge</AlertDialog.Action>
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
