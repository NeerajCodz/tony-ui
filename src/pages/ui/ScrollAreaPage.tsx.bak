import React, { useState } from 'react';
import { ScrollArea } from '../../ui';

const tags = Array.from({ length: 50 }).map(
  (_, i) => `v1.2.0-beta.${i + 1}`
);

export function ScrollAreaPage() {
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
            Scroll Area <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic scroll containers. 
            Fully dynamic with 10 unique geometric styles.
            Custom scrollbars per version.
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {versions.map(version => (
            <div key={version} className='p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[300px] items-center justify-center'>
              <h3 className='text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2 w-full text-center'>{version}</h3>
              
              <ScrollArea 
                version={version} 
                variant={currentVariant} 
                type={currentType}
                className='h-72 w-48 rounded-md border border-gray-800 bg-gray-950'
              >
                <div className='p-4'>
                  <h4 className='mb-4 text-sm font-medium leading-none text-cyan-300'>Tags</h4>
                  {tags.map((tag) => (
                    <React.Fragment key={tag}>
                      <div className='text-sm font-mono text-gray-400 hover:text-cyan-400 cursor-pointer py-1'>
                        {tag}
                      </div>
                      <div className='my-2 h-px bg-gray-800/50' />
                    </React.Fragment>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
