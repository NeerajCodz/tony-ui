import React, { useState } from 'react';
import { Dialog, Button } from '../../ui';

export function DialogPage() {
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
            Dialog <span className="text-gray-600 text-2xl">// Component Showcase</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic modal dialogs. 
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
                <Dialog 
                  version={version as any} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <Dialog.Trigger asChild>
                    <button className="px-6 py-3 border border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10 transition-all font-mono uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                      Open Module
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>System Configuration</Dialog.Title>
                      <Dialog.Description>
                        Modify core parameters for the {version} subsystem. Changes will be applied immediately.
                      </Dialog.Description>
                    </Dialog.Header>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right text-sm text-gray-400">
                          Power Level
                        </label>
                        <input id="name" defaultValue="100%" className="col-span-3 bg-black/50 border border-gray-700 p-2 text-sm text-white" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-right text-sm text-gray-400">
                          Frequency
                        </label>
                        <input id="username" defaultValue="500THz" className="col-span-3 bg-black/50 border border-gray-700 p-2 text-sm text-white" />
                      </div>
                    </div>
                    <Dialog.Footer>
                      <button type="submit" className="bg-cyan-600 text-white px-4 py-2 text-sm hover:bg-cyan-700">
                        Save Changes
                      </button>
                    </Dialog.Footer>
                  </Dialog.Content>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
