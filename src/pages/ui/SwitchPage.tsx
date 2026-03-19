import React, { useState } from 'react';
import { Switch, Label } from '../../ui';

export function SwitchPage() {
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
            Switch <span className="text-gray-600 text-2xl">// Component Showcase</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic toggle switches. 
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
            <div key={version} className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[200px] items-center justify-center">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 justify-center w-full max-w-[250px]">
                <div className="flex items-center justify-between space-x-2">
                  <Label 
                    htmlFor={`power-${version}`}
                    className="flex flex-col space-y-1 text-sm font-medium leading-none text-gray-300"
                  >
                    <span>Main Power</span>
                    <span className="text-xs font-normal text-gray-500">Core reactor system</span>
                  </Label>
                  <Switch 
                    id={`power-${version}`}
                    version={version as any} 
                    variant={currentVariant}
                    type={currentType}
                  />
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Label 
                    htmlFor={`shields-${version}`}
                    className="flex flex-col space-y-1 text-sm font-medium leading-none text-gray-300"
                  >
                    <span>Shields</span>
                    <span className="text-xs font-normal text-gray-500">Defense matrix</span>
                  </Label>
                  <Switch 
                    id={`shields-${version}`}
                    version={version as any} 
                    variant={currentVariant}
                    type={currentType}
                    defaultChecked
                  />
                </div>

                 <div className="flex items-center justify-between space-x-2">
                  <Label 
                    htmlFor={`weapons-${version}`}
                    className="flex flex-col space-y-1 text-sm font-medium leading-none text-gray-500"
                  >
                    <span>Weapons</span>
                    <span className="text-xs font-normal text-gray-600">Locked by admin</span>
                  </Label>
                  <Switch 
                    id={`weapons-${version}`}
                    version={version as any} 
                    variant={currentVariant}
                    type={currentType}
                    disabled
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
