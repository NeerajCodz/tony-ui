import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CARD_VERSION_CONFIGS, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from '../../ui';
import type { CardType, CardVariant, CardVersion } from '../../ui';

export function UICardPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // All available options
  const themes = ['cyan', 'dark', 'light'] as const;
  const variants: CardVariant[] = ['neutral', 'success', 'warning', 'info', 'destructive'];
  const types: CardType[] = ['default', 'outline', 'solid'];
  
  // All 12 card versions
  const versions: CardVersion[] = [
    'angular-corner',
    'holo-frame',
    'data-panel',
    'circuit-board',
    'quantum-gate',
    'tactical-hud',
    'energy-shield',
    'terminal-window',
    'matrix-grid',
    'glass-morphism',
    'tech-panel',
    'neon'
  ];

  // State from URL params or defaults
  const [currentTheme, setCurrentTheme] = useState<typeof themes[number]>(
    (searchParams.get('theme') as typeof themes[number]) || 'cyan'
  );
  const [currentType, setCurrentType] = useState<CardType>(
    (searchParams.get('type') as CardType) || 'default'
  );
  const [currentVariant, setCurrentVariant] = useState<CardVariant>(
    (searchParams.get('variant') as CardVariant) || 'neutral'
  );
  const [animated, setAnimated] = useState<boolean>(
    searchParams.get('animated') !== 'false'
  );

  // Sync URL params when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('theme', currentTheme);
    params.set('type', currentType);
    params.set('variant', currentVariant);
    params.set('animated', String(animated));
    setSearchParams(params, { replace: true });
  }, [currentTheme, currentType, currentVariant, animated, setSearchParams]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="min-h-screen p-8" style={{ 
      backgroundColor: 'hsl(var(--background))',
      color: 'hsl(var(--text-base))',
      fontFamily: '"Orbitron", "Rajdhani", monospace'
    }}>
      {/* Header with futuristic font */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-[0.15em] uppercase" 
            style={{ 
              color: 'hsl(var(--primary-base))',
              textShadow: '0 0 30px hsl(var(--primary-base) / 0.4)',
              fontFamily: '"Orbitron", monospace',
              fontWeight: 900
            }}>
          ⬢ CYBER CARD SYSTEM ⬢
        </h1>
        <p className="text-sm tracking-widest uppercase opacity-70" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
          12 UNIQUE SHAPES × 3 TYPES × 5 VARIANTS = 180 COMBINATIONS
        </p>
      </div>

      {/* Filter Controls */}
      <div className="space-y-6 p-6 mb-8 relative" style={{
        backgroundColor: 'hsl(var(--surface-base) / 0.4)',
        border: '1px solid hsl(var(--primary-base) / 0.3)',
        clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
        backdropFilter: 'blur(8px)'
      }}>
        <h3 className="text-base font-black uppercase tracking-[0.2em] mb-4" style={{ 
          color: 'hsl(var(--primary-base))',
          fontFamily: '"Orbitron", monospace'
        }}>
          ▸ SYSTEM CONTROLS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Theme Selector */}
          <div>
            <label htmlFor="theme-select" className="block text-[10px] font-bold mb-2 tracking-[0.15em] uppercase opacity-70">
              THEME
            </label>
            <select
              id="theme-select"
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value as typeof themes[number])}
              className="w-full p-2.5 text-sm font-bold tracking-wide uppercase"
              style={{
                backgroundColor: 'hsl(var(--surface-base) / 0.8)',
                border: '1px solid hsl(var(--primary-base) / 0.4)',
                color: 'hsl(var(--text-base))',
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                fontFamily: '"Rajdhani", sans-serif'
              }}
            >
              {themes.map(theme => (
                <option key={theme} value={theme}>{theme.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Type Selector */}
          <div>
            <label htmlFor="type-select" className="block text-[10px] font-bold mb-2 tracking-[0.15em] uppercase opacity-70">
              TYPE
            </label>
            <select
              id="type-select"
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value as CardType)}
              className="w-full p-2.5 text-sm font-bold tracking-wide uppercase"
              style={{
                backgroundColor: 'hsl(var(--surface-base) / 0.8)',
                border: '1px solid hsl(var(--primary-base) / 0.4)',
                color: 'hsl(var(--text-base))',
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                fontFamily: '"Rajdhani", sans-serif'
              }}
            >
              {types.map(type => (
                <option key={type} value={type}>{type.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Variant Selector */}
          <div>
            <label htmlFor="variant-select" className="block text-[10px] font-bold mb-2 tracking-[0.15em] uppercase opacity-70">
              VARIANT
            </label>
            <select
              id="variant-select"
              value={currentVariant}
              onChange={(e) => setCurrentVariant(e.target.value as CardVariant)}
              className="w-full p-2.5 text-sm font-bold tracking-wide uppercase"
              style={{
                backgroundColor: 'hsl(var(--surface-base) / 0.8)',
                border: '1px solid hsl(var(--primary-base) / 0.4)',
                color: 'hsl(var(--text-base))',
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                fontFamily: '"Rajdhani", sans-serif'
              }}
            >
              {variants.map(variant => (
                <option key={variant} value={variant}>{variant.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Animate Toggle */}
          <div>
            <label className="block text-[10px] font-bold mb-2 tracking-[0.15em] uppercase opacity-70">
              ANIMATE
            </label>
            <button
              onClick={() => setAnimated(!animated)}
              className="w-full p-2.5 font-black tracking-[0.15em] uppercase text-sm transition-all duration-300"
              style={{
                backgroundColor: animated ? 'hsl(var(--primary-base))' : 'hsl(var(--surface-base) / 0.8)',
                border: '1px solid hsl(var(--primary-base))',
                color: animated ? 'hsl(var(--background))' : 'hsl(var(--primary-base))',
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                boxShadow: animated ? '0 0 20px hsl(var(--primary-base) / 0.5)' : 'none',
                fontFamily: '"Orbitron", monospace'
              }}
            >
              {animated ? '⬢ ACTIVE' : '⬡ INACTIVE'}
            </button>
          </div>
        </div>
      </div>

      {/* Card Grid - All 12 versions */}
      <section>
        <h3 className="text-xl font-black mb-6 uppercase tracking-[0.2em]" style={{ 
          color: 'hsl(var(--primary-base))',
          textShadow: '0 0 15px hsl(var(--primary-base) / 0.3)',
          fontFamily: '"Orbitron", monospace'
        }}>
          ▸ ALL CARD VERSIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {versions.map((version, idx) => {
            const config = CARD_VERSION_CONFIGS[version];
            return (
              <Card 
                key={`${version}-${animated}-${idx}`}
                version={version}
                type={currentType}
                variant={currentVariant}
                animated={animated}
              >
                <CardHeader>
                  <CardTitle style={{ 
                    fontFamily: '"Orbitron", monospace',
                    fontWeight: 900,
                    letterSpacing: '0.1em'
                  }}>
                    {config?.name || version}
                  </CardTitle>
                  <CardDescription style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                    {config?.description || 'Cyber HUD card variant'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-[10px] opacity-50 space-y-0.5 uppercase tracking-wider" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                    <div>VERSION: {version}</div>
                    <div>TYPE: {currentType}</div>
                    <div>VARIANT: {currentVariant}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Shadcn-style API Example */}
      <section className="mt-12">
        <h3 className="text-xl font-black mb-6 uppercase tracking-[0.2em]" style={{ 
          color: 'hsl(var(--primary-base))',
          fontFamily: '"Orbitron", monospace'
        }}>
          ▸ SHADCN-STYLE API
        </h3>
        <div className="max-w-md">
          <Card version="angular-corner" type={currentType} variant={currentVariant} animated={animated}>
            <CardHeader>
              <CardTitle style={{ fontFamily: '"Orbitron", monospace', fontWeight: 900 }}>
                System Status
              </CardTitle>
              <CardDescription style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                Real-time monitoring dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                <div className="flex justify-between">
                  <span className="opacity-60">CPU Usage</span>
                  <span className="font-mono font-bold">47%</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Memory</span>
                  <span className="font-mono font-bold">8.2 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Network</span>
                  <span className="font-mono font-bold" style={{ color: 'hsl(var(--success-base))' }}>● Online</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                      style={{ 
                        backgroundColor: 'hsl(var(--primary-base) / 0.15)',
                        border: '1px solid hsl(var(--primary-base) / 0.5)',
                        color: 'hsl(var(--primary-base))',
                        clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                        fontFamily: '"Orbitron", monospace'
                      }}>
                View Details
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Usage Info */}
      <section className="mt-12 p-6" style={{
        backgroundColor: 'hsl(var(--surface-base) / 0.3)',
        border: '1px solid hsl(var(--primary-base) / 0.15)',
        clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
      }}>
        <h3 className="text-lg font-black mb-4 uppercase tracking-[0.15em]" style={{ 
          color: 'hsl(var(--primary-base))',
          fontFamily: '"Orbitron", monospace'
        }}>
          ▸ USAGE
        </h3>
        <pre className="text-xs opacity-70 overflow-x-auto p-4 rounded" style={{ 
          backgroundColor: 'hsl(var(--surface-base) / 0.5)',
          fontFamily: 'monospace'
        }}>
{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/ui';

<Card version="angular-corner" type="default" variant="neutral" animated>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here...
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
        </pre>
      </section>
    </div>
  );
}

