import React, { useState } from 'react';
import { Drawer } from '../../ui';
import { Button } from '../../ui/components/button'; // Assuming Button component exists
import { cn } from '../../lib/utils';
import { Minus, Plus, BarChart3, TrendingUp, TrendingDown, Target } from 'lucide-react';

export function DrawerPage() {
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
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter'>
            Drawer <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic bottom drawers. 
            Fully dynamic with 10 unique geometric styles.
            Using <code>vaul</code> primitive.
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
            <div key={version} className='p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[200px] items-center justify-center'>
              <h3 className='text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2 w-full text-center'>{version}</h3>
              
              <Drawer version={version} variant={currentVariant} type={currentType}>
                <Drawer.Trigger asChild>
                  <Button variant='outline' className='w-full max-w-xs font-mono border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30'>
                    OPEN DRAWER
                  </Button>
                </Drawer.Trigger>
                <Drawer.Content>
                  <div className='mx-auto w-full max-w-sm'>
                    <Drawer.Header>
                      <Drawer.Title>Move Goal</Drawer.Title>
                      <Drawer.Description>Set your daily activity goal.</Drawer.Description>
                    </Drawer.Header>
                    <div className='p-4 pb-0'>
                      <div className='flex items-center justify-center space-x-2'>
                        <Button
                          variant='outline'
                          size='icon'
                          className='h-8 w-8 shrink-0 rounded-full'
                          onClick={() => onClick(-10)}
                          disabled={goal <= 200}
                        >
                          <Minus className='h-4 w-4' />
                          <span className='sr-only'>Decrease</span>
                        </Button>
                        <div className='flex-1 text-center'>
                          <div className='text-7xl font-bold tracking-tighter font-mono text-cyan-400'>
                            {goal}
                          </div>
                          <div className='text-[0.70rem] uppercase text-muted-foreground'>
                            Calories/day
                          </div>
                        </div>
                        <Button
                          variant='outline'
                          size='icon'
                          className='h-8 w-8 shrink-0 rounded-full'
                          onClick={() => onClick(10)}
                          disabled={goal >= 400}
                        >
                          <Plus className='h-4 w-4' />
                          <span className='sr-only'>Increase</span>
                        </Button>
                      </div>
                      <div className='mt-3 h-[120px] w-full'>
                        {/* Mock Chart Area */}
                        <div className='flex items-end justify-between h-full w-full gap-1 pt-4'>
                            {[40, 60, 45, 70, 50, 80, 60, 90, 75, 50].map((h, i) => (
                                <div key={i} className='bg-cyan-500/20 hover:bg-cyan-500/50 transition-colors w-full rounded-t-sm' style={{ height: `${h}%` }} />
                            ))}
                        </div>
                      </div>
                    </div>
                    <Drawer.Footer>
                      <Button>Submit</Button>
                      <Drawer.Close asChild>
                        <Button variant='outline'>Cancel</Button>
                      </Drawer.Close>
                    </Drawer.Footer>
                  </div>
                </Drawer.Content>
              </Drawer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
