import React, { useState } from 'react';
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastAction } from '../../ui';
import { Button } from '../../ui';

export function ToastPage() {
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

  // We need to manage state for each toast version individually for the showcase
  const [openToasts, setOpenToasts] = useState<Record<string, boolean>>({});

  const toggleToast = (version: string) => {
    setOpenToasts(prev => ({ ...prev, [version]: true }));
    // Auto close is handled by Toast component or custom timer, 
    // but here we just toggle it open. Radix handles duration.
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter">
            Toast <span className="text-gray-600 text-2xl">// Temporary Alert</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Cyber-aesthetic toast notifications. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {versions.map(version => (
            <div key={version} className="relative p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-6 min-h-[300px] items-center justify-center overflow-hidden">
              <h3 className="text-lg font-mono text-cyan-400 w-full border-b border-gray-800 pb-2 mb-auto">{version}</h3>
              
              <div className="flex-1 flex flex-col gap-6 items-center justify-center w-full z-10">
                <Button version={version as any} onClick={() => toggleToast(version)}>
                   Trigger Notification
                </Button>
              </div>

              {/* Toast Context for this specific card */}
              <ToastProvider swipeDirection="right">
                  <Toast 
                      version={version as any} 
                      open={openToasts[version]} 
                      onOpenChange={(open) => setOpenToasts(prev => ({...prev, [version]: open}))}
                      className="w-full"
                  >
                      <div className="grid gap-1">
                          <ToastTitle>System Update</ToastTitle>
                          <ToastDescription>Patch 2.4.1 applied successfully.</ToastDescription>
                      </div>
                      <ToastAction altText="Undo" asChild>
                         <Button version={version as any} size="sm" variant="outline">Undo</Button>
                      </ToastAction>
                  </Toast>
                  
                  <ToastViewport className="absolute bottom-0 right-0 top-auto flex-col p-4 gap-2 w-full m-0 z-[50]" />
              </ToastProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
