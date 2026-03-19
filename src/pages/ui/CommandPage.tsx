import React, { useState, useEffect } from 'react';
import { Command } from '../../ui';
import { cn } from '../../lib/utils';
import { Calendar, Smile, Calculator, User, CreditCard, Settings } from 'lucide-react';

export function CommandPage() {
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
  const [open, setOpen] = useState(false);

  // Keyboard shortcut to open dialog
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter'>
            Command <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic command palettes. 
            Fully dynamic with 10 unique geometric styles.
            Press <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'><span className='text-xs'>⌘</span>K</kbd> to open global command.
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {versions.map(version => (
            <div key={version} className='p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[400px]'>
              <h3 className='text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2'>{version}</h3>
              <div className='flex justify-center w-full px-4 h-full'>
                 <Command 
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                  className='rounded-lg border shadow-md w-full max-w-[450px]'
                >
                  <Command.Input placeholder='Type a command or search...' />
                  <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading='Suggestions'>
                      <Command.Item>
                        <Calendar className='mr-2 h-4 w-4' />
                        <span>Calendar</span>
                      </Command.Item>
                      <Command.Item>
                        <Smile className='mr-2 h-4 w-4' />
                        <span>Search Emoji</span>
                      </Command.Item>
                      <Command.Item>
                        <Calculator className='mr-2 h-4 w-4' />
                        <span>Calculator</span>
                      </Command.Item>
                    </Command.Group>
                    <Command.Separator />
                    <Command.Group heading='Settings'>
                      <Command.Item>
                        <User className='mr-2 h-4 w-4' />
                        <span>Profile</span>
                        <Command.Shortcut>⌘P</Command.Shortcut>
                      </Command.Item>
                      <Command.Item>
                        <CreditCard className='mr-2 h-4 w-4' />
                        <span>Billing</span>
                        <Command.Shortcut>⌘B</Command.Shortcut>
                      </Command.Item>
                      <Command.Item>
                        <Settings className='mr-2 h-4 w-4' />
                        <span>Settings</span>
                        <Command.Shortcut>⌘S</Command.Shortcut>
                      </Command.Item>
                    </Command.Group>
                  </Command.List>
                </Command>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Global Command Dialog Example */}
      <Command.Dialog open={open} onOpenChange={setOpen} version='holo-frame'>
        <Command.Input placeholder='Type a command or search...' />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading='Suggestions'>
            <Command.Item>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  );
}
