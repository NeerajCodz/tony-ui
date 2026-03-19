import React, { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../../ui/components/resizable';
import { cn } from '../../lib/utils';
import { Code, Terminal, Play, Settings } from 'lucide-react';

export function ResizablePage() {
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
            Resizable <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic resizable panels. 
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

        <div className='grid grid-cols-1 gap-12'>
          {versions.map(version => (
            <div key={version} className='p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[400px]'>
              <h3 className='text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2'>{version}</h3>
              
              <div className='h-[300px] w-full border border-gray-800 rounded overflow-hidden'>
                <ResizablePanelGroup 
                  direction='horizontal' 
                  className='w-full rounded-lg border'
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
                    <div className='flex h-full flex-col items-center justify-center p-6 bg-gray-950/50'>
                      <div className='flex flex-col items-center gap-2'>
                        <Terminal className='h-8 w-8 text-cyan-500' />
                        <span className='font-semibold text-cyan-100'>Sidebar</span>
                        <span className='text-xs text-muted-foreground text-center'>Files, Explorer, Search</span>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={75}>
                    <ResizablePanelGroup direction='vertical'>
                      <ResizablePanel defaultSize={70}>
                        <div className='flex h-full items-center justify-center p-6 bg-gray-900/20'>
                          <div className='flex flex-col items-center gap-2'>
                            <Code className='h-8 w-8 text-cyan-500' />
                            <span className='font-semibold text-cyan-100'>Editor</span>
                            <span className='text-xs text-muted-foreground text-center'>Code editing area</span>
                          </div>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle withHandle />
                      <ResizablePanel defaultSize={30}>
                        <div className='flex h-full items-center justify-center p-6 bg-gray-950/50'>
                          <div className='flex flex-col items-center gap-2'>
                            <Play className='h-8 w-8 text-cyan-500' />
                            <span className='font-semibold text-cyan-100'>Terminal</span>
                            <span className='text-xs text-muted-foreground text-center'>Output, Console, Logs</span>
                          </div>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
