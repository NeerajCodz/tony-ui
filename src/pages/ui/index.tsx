/**
 * UI Components Index Page
 * Navigation hub for all cyber-styled components
 */

import { Link } from 'react-router-dom';
import { uiComponentRegistry } from './registry';

const statusColors = {
  ready: 'hsl(var(--success-base))',
};

export function UIIndexPage() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 font-mono">
      <header className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-4"
          style={{
            color: 'hsl(var(--primary-base))',
            textShadow: '0 0 30px hsl(var(--primary-base) / 0.5)',
          }}
        >
          ◈ CYBER UI SYSTEM ◈
        </h1>
        <p className="text-lg tracking-wide" style={{ color: 'hsl(var(--text-muted))' }}>
          Futuristic HUD/FUI Component Library
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs">
          <span style={{ color: statusColors.ready }}>● {uiComponentRegistry.length} READY</span>
          <span style={{ color: 'hsl(var(--text-muted))' }}>
            › {uiComponentRegistry.reduce((sum, c) => sum + c.versions, 0)} VERSIONS
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {uiComponentRegistry.map((component) => (
          <Link key={component.slug} to={`/ui/${component.slug}`} className="group relative block transition-all duration-300">
            <div
              className="relative p-5 h-full transition-all duration-300 group-hover:scale-[1.02]"
              style={{
                backgroundColor: 'hsl(var(--surface-base) / 0.3)',
                border: '2px solid hsl(var(--primary-base) / 0.5)',
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-black tracking-wide uppercase" style={{ color: 'hsl(var(--text-base))' }}>
                    {component.name}
                  </h3>
                </div>
                <div className="text-xs opacity-70">{component.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
