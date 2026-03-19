import React, { useState } from 'react';
import { Menubar } from '../../ui';

export function MenubarPage() {
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
            Menubar <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic versions of the Menubar component. 
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {versions.map(version => (
            <div key={version} className='p-6 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-4'>
              <h3 className='text-sm font-mono text-cyan-400 mb-2'>{version}</h3>
              <div className='flex items-center justify-center min-h-[100px] w-full'>
                 <Menubar 
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                  className='w-full max-w-[400px]'
                >
                  <Menubar.Menu>
                    <Menubar.Trigger>File</Menubar.Trigger>
                    <Menubar.Content>
                      <Menubar.Item>
                        New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
                      </Menubar.Item>
                      <Menubar.Item>
                        New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
                      </Menubar.Item>
                      <Menubar.Item disabled>New Incognito Window</Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Sub>
                        <Menubar.SubTrigger>Share</Menubar.SubTrigger>
                        <Menubar.Portal>
                          <Menubar.SubContent>
                            <Menubar.Item>Email link</Menubar.Item>
                            <Menubar.Item>Messages</Menubar.Item>
                            <Menubar.Item>Notes</Menubar.Item>
                          </Menubar.SubContent>
                        </Menubar.Portal>
                      </Menubar.Sub>
                      <Menubar.Separator />
                      <Menubar.Item>
                        Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
                      </Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Menu>
                  <Menubar.Menu>
                    <Menubar.Trigger>Edit</Menubar.Trigger>
                    <Menubar.Content>
                      <Menubar.Item>
                        Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
                      </Menubar.Item>
                      <Menubar.Item>
                        Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
                      </Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Sub>
                        <Menubar.SubTrigger>Find</Menubar.SubTrigger>
                        <Menubar.Portal>
                          <Menubar.SubContent>
                            <Menubar.Item>Search the web</Menubar.Item>
                            <Menubar.Separator />
                            <Menubar.Item>Find...</Menubar.Item>
                            <Menubar.Item>Find Next</Menubar.Item>
                            <Menubar.Item>Find Previous</Menubar.Item>
                          </Menubar.SubContent>
                        </Menubar.Portal>
                      </Menubar.Sub>
                      <Menubar.Separator />
                      <Menubar.Item>Cut</Menubar.Item>
                      <Menubar.Item>Copy</Menubar.Item>
                      <Menubar.Item>Paste</Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Menu>
                  <Menubar.Menu>
                    <Menubar.Trigger>View</Menubar.Trigger>
                    <Menubar.Content>
                      <Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
                      <Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
                      <Menubar.Separator />
                      <Menubar.Item inset>
                        Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
                      </Menubar.Item>
                      <Menubar.Item disabled inset>
                        Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
                      </Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Item inset>Hide Sidebar</Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Menu>
                  <Menubar.Menu>
                    <Menubar.Trigger>Profiles</Menubar.Trigger>
                    <Menubar.Content>
                      <Menubar.RadioGroup value='benoit'>
                        <Menubar.RadioItem value='andy'>Andy</Menubar.RadioItem>
                        <Menubar.RadioItem value='benoit'>Benoit</Menubar.RadioItem>
                        <Menubar.RadioItem value='Luis'>Luis</Menubar.RadioItem>
                      </Menubar.RadioGroup>
                      <Menubar.Separator />
                      <Menubar.Item inset>Edit...</Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Item inset>Add Profile...</Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Menu>
                </Menubar>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
