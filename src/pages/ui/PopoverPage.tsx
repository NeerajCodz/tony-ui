import React, { useState } from 'react';
import { Popover } from '../../ui';

export function PopoverPage() {
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
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter'>
            Popover <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic versions of the Popover component. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className='sticky top-4 z-10 bg-gray-900/90 backdrop-blur border border-gray-800 p-4 rounded-xl mb-8 shadow-2xl flex flex-wrap gap-6 items-center'>
          <div>
            <label className='block text-xs font-mono text-cyan-500 mb-1'>VARIANT</label>
            <select 
              value={currentVariant}
              onChange={(e) => setCurrentVariant(e.target.value)}
              className='bg-gray-950 border border-gray-700 rounded px-3 py-1 text-sm focus:border-cyan-500 outline-none min-w-[120px]'
            >
              {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className='block text-xs font-mono text-cyan-500 mb-1'>TYPE</label>
            <select 
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value)}
              className='bg-gray-950 border border-gray-700 rounded px-3 py-1 text-sm focus:border-cyan-500 outline-none min-w-[120px]'
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {versions.map(version => (
            <div key={version} className='p-6 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-4'>
              <h3 className='text-sm font-mono text-cyan-400 mb-2'>{version}</h3>
              <div className='flex items-center justify-center min-h-[100px]'>
                 <Popover 
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <Popover.Trigger asChild>
                    <button className='px-4 py-2 border border-cyan-500/50 text-cyan-500 rounded hover:bg-cyan-500/10 transition-colors font-mono uppercase tracking-wider text-sm'>
                      Open Popover
                    </button>
                  </Popover.Trigger>
                  <Popover.Content className='w-80'>
                    <div className='flex flex-col gap-4'>
                      <div className='space-y-2'>
                        <h4 className='font-medium leading-none font-mono uppercase text-cyan-400'>Dimensions</h4>
                        <p className='text-sm text-gray-400'>Set the dimensions for the layer.</p>
                      </div>
                      <div className='grid gap-2'>
                        <div className='grid grid-cols-3 items-center gap-4'>
                          <label className='text-xs uppercase font-mono text-gray-500'>Width</label>
                          <input className='col-span-2 h-8 bg-black/50 border border-gray-700 rounded px-2 text-sm text-white' defaultValue='100%' />
                        </div>
                        <div className='grid grid-cols-3 items-center gap-4'>
                          <label className='text-xs uppercase font-mono text-gray-500'>Max. H</label>
                          <input className='col-span-2 h-8 bg-black/50 border border-gray-700 rounded px-2 text-sm text-white' defaultValue='300px' />
                        </div>
                      </div>
                    </div>
                  </Popover.Content>
                </Popover>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
