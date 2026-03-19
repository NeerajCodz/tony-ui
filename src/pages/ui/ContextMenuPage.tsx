import React, { useState } from 'react';
import { ContextMenu } from '../../ui';

export function ContextMenuPage() {
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

  const variants = ['neutral', 'primary', 'success', 'warning', 'info', 'destructive'];
  const types = ['default', 'outline', 'solid', 'ghost'];

  const [currentVariant, setCurrentVariant] = useState<any>('primary');
  const [currentType, setCurrentType] = useState<any>('default');

  return (
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter'>
            Context Menu <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic versions of the Context Menu component. 
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
                 <ContextMenu 
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <ContextMenu.Trigger className='flex h-[150px] w-full items-center justify-center rounded-md border border-dashed border-gray-700 text-sm text-gray-500 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors cursor-pointer select-none bg-black/20'>
                    Right Click Here
                  </ContextMenu.Trigger>
                  <ContextMenu.Content className='w-64'>
                    <ContextMenu.Item inset>
                      Back
                      <ContextMenu.Shortcut>⌘[']</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                    <ContextMenu.Item inset disabled>
                      Forward
                      <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                    <ContextMenu.Item inset>
                      Reload
                      <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
                    </ContextMenu.Item>
                    <ContextMenu.Sub>
                      <ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
                      <ContextMenu.Portal>
                        <ContextMenu.SubContent className='w-48'>
                          <ContextMenu.Item>
                            Save Page As...
                            <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
                          </ContextMenu.Item>
                          <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
                          <ContextMenu.Item>Name Window...</ContextMenu.Item>
                          <ContextMenu.Separator />
                          <ContextMenu.Item>Developer Tools</ContextMenu.Item>
                        </ContextMenu.SubContent>
                      </ContextMenu.Portal>
                    </ContextMenu.Sub>
                    <ContextMenu.Separator />
                    <ContextMenu.CheckboxItem checked inset>
                      Show Bookmarks Bar
                      <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
                    </ContextMenu.CheckboxItem>
                    <ContextMenu.CheckboxItem inset>Show Full URLs</ContextMenu.CheckboxItem>
                    <ContextMenu.Separator />
                    <ContextMenu.RadioGroup value='pedro'>
                      <ContextMenu.Label inset>People</ContextMenu.Label>
                      <ContextMenu.Separator />
                      <ContextMenu.RadioItem value='pedro'>
                        Pedro Duarte
                      </ContextMenu.RadioItem>
                      <ContextMenu.RadioItem value='colm'>Colm Tuite</ContextMenu.RadioItem>
                    </ContextMenu.RadioGroup>
                  </ContextMenu.Content>
                </ContextMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
