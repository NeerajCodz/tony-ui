import React, { useState } from 'react';
import { DropdownMenu } from '../../ui';
import { 
  Cloud, 
  CreditCard, 
  Github, 
  Keyboard, 
  LifeBuoy, 
  LogOut, 
  Mail, 
  MessageSquare, 
  Plus, 
  PlusCircle, 
  Settings, 
  User, 
  UserPlus, 
  Users 
} from 'lucide-react';

export function DropdownMenuPage() {
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
            Dropdown Menu <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic versions of the Dropdown Menu component. 
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
                 <DropdownMenu 
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <DropdownMenu.Trigger asChild>
                    <button className='px-4 py-2 border border-cyan-500/50 text-cyan-500 rounded hover:bg-cyan-500/10 transition-colors font-mono uppercase tracking-wider text-sm'>
                      Open Menu
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content className='w-56'>
                    <DropdownMenu.Label>My Account</DropdownMenu.Label>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <User className='mr-2 h-4 w-4' />
                        <span>Profile</span>
                        <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <CreditCard className='mr-2 h-4 w-4' />
                        <span>Billing</span>
                        <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <Settings className='mr-2 h-4 w-4' />
                        <span>Settings</span>
                        <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <Keyboard className='mr-2 h-4 w-4' />
                        <span>Keyboard shortcuts</span>
                        <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <Users className='mr-2 h-4 w-4' />
                        <span>Team</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                          <UserPlus className='mr-2 h-4 w-4' />
                          <span>Invite users</span>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.SubContent>
                            <DropdownMenu.Item>
                              <Mail className='mr-2 h-4 w-4' />
                              <span>Email</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                              <MessageSquare className='mr-2 h-4 w-4' />
                              <span>Message</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>
                              <PlusCircle className='mr-2 h-4 w-4' />
                              <span>More...</span>
                            </DropdownMenu.Item>
                          </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Sub>
                      <DropdownMenu.Item>
                        <Plus className='mr-2 h-4 w-4' />
                        <span>New Team</span>
                        <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>
                      <Github className='mr-2 h-4 w-4' />
                      <span>GitHub</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                      <LifeBuoy className='mr-2 h-4 w-4' />
                      <span>Support</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item disabled>
                      <Cloud className='mr-2 h-4 w-4' />
                      <span>API</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>
                      <LogOut className='mr-2 h-4 w-4' />
                      <span>Log out</span>
                      <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
