import React, { useState } from 'react';
import { Tabs } from '../../ui';

export function TabsPage() {
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

  // Default props for valid rendering
  const defaultProps = {};

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter">
            Tabs <span className="text-gray-600 text-2xl">// Component Showcase</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic versions of the Tabs component. 
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

        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {versions.map(version => (
                <div key={version} className="p-6 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-4">
                  <h3 className="text-sm font-mono text-cyan-400 mb-2">{version}</h3>
                  <div className="min-h-[200px] w-full">
                    <Tabs 
                      version={version} 
                      variant={currentVariant}
                      type={currentType}
                      defaultValue="system"
                      className="w-full"
                    >
                      <Tabs.List>
                         <Tabs.Trigger value="system">SYSTEM</Tabs.Trigger>
                         <Tabs.Trigger value="network">NETWORK</Tabs.Trigger>
                         <Tabs.Trigger value="security">SECURITY</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.Content value="system" className="min-h-[120px] flex flex-col items-center justify-center bg-black/20 mt-4 rounded border border-white/5 p-4">
                        <div className="text-center space-y-2">
                           <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest">System Status</div>
                           <div className="text-2xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">OPERATIONAL</div>
                           <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden mt-2 mx-auto">
                             <div className="w-[85%] h-full bg-emerald-500 animate-pulse"></div>
                           </div>
                        </div>
                      </Tabs.Content>
                      <Tabs.Content value="network" className="min-h-[120px] bg-black/40 mt-4 rounded border border-white/5 p-4 font-mono text-xs text-cyan-400/80 space-y-1">
                        <div className="flex justify-between border-b border-cyan-500/20 pb-1 mb-2"><span>INTERFACE</span><span>STATUS</span></div>
                        <div className="flex justify-between text-emerald-400"><span>ETH-0</span><span>CONNECTED</span></div>
                        <div className="flex justify-between text-emerald-400"><span>WLAN-1</span><span>CONNECTED</span></div>
                        <div className="flex justify-between text-yellow-400"><span>VPN-0</span><span>RECONNECTING</span></div>
                      </Tabs.Content>
                      <Tabs.Content value="security" className="min-h-[120px] bg-black/40 mt-4 rounded border border-white/5 p-4 font-mono text-xs space-y-2">
                        <div className="flex items-center gap-2 text-red-400">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                          <span>THREAT LEVEL: ELEVATED</span>
                        </div>
                        <div className="p-2 bg-red-950/20 border border-red-500/20 rounded text-red-300">
                          FIREWALL: ACTIVE<br/>
                          INTRUSION: MONITORING
                        </div>
                      </Tabs.Content>
                    </Tabs>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
}
