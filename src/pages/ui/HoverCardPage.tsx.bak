import React, { useState } from 'react';
import { HoverCard, Button, Avatar, AvatarImage, AvatarFallback } from '../../ui';
import { cn } from '../../lib/utils';
import { CalendarDays } from 'lucide-react';

export function HoverCardPage() {
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
            Hover Card <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic hover preview cards. 
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {versions.map(version => (
            <div key={version} className='p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[200px] items-center justify-center'>
              <h3 className='text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2 w-full text-center'>{version}</h3>
              
              <HoverCard version={version} variant={currentVariant} type={currentType}>
                <HoverCard.Trigger asChild>
                  <Button variant='link' className='text-cyan-400 underline decoration-cyan-500/30 hover:decoration-cyan-500'>
                    @nextjs
                  </Button>
                </HoverCard.Trigger>
                <HoverCard.Content className='w-80'>
                  <div className='flex justify-between space-x-4'>
                    <Avatar>
                      <AvatarImage src='https://github.com/vercel.png' />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <h4 className='text-sm font-semibold text-cyan-100'>@nextjs</h4>
                      <p className='text-sm text-muted-foreground'>
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className='flex items-center pt-2'>
                        <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                        <span className='text-xs text-muted-foreground'>
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCard.Content>
              </HoverCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
