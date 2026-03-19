import React, { useState, useEffect } from 'react';
import { Menu, X, Settings2, RotateCcw } from 'lucide-react';

export type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';
export type ComponentVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'destructive';
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ShowcaseState {
  type: ComponentType;
  variant: ComponentVariant;
  size: ComponentSize;
  loading: boolean;
  disabled: boolean;
}

interface ShowcaseControlsProps {
  initialState?: Partial<ShowcaseState>;
  onChange: (state: ShowcaseState) => void;
  className?: string;
}

const types: ComponentType[] = ['default', 'solid', 'outline', 'ghost', 'inverse', 'contrast', 'soft'];
const variants: ComponentVariant[] = ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'destructive'];
const sizes: ComponentSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export function ShowcaseControls({ initialState, onChange, className = '' }: ShowcaseControlsProps) {
  const [state, setState] = useState<ShowcaseState>({
    type: 'default',
    variant: 'default',
    size: 'md',
    loading: false,
    disabled: false,
    ...initialState,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onChange(state);
  }, [state, onChange]);

  const handleChange = (key: keyof ShowcaseState, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setState({
      type: 'default',
      variant: 'default',
      size: 'md',
      loading: false,
      disabled: false,
    });
  };

  return (
    <div className={`sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border p-4 ${className}`}>
      <div className="flex items-center justify-between lg:justify-start gap-4">
        
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <Settings2 className="w-5 h-5" />
          <span className="hidden sm:inline">Controls</span>
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex flex-wrap items-center gap-4 flex-1">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted-foreground">Type</label>
            <select
              value={state.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted-foreground">Variant</label>
            <select
              value={state.variant}
              onChange={(e) => handleChange('variant', e.target.value)}
              className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {variants.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted-foreground">Size</label>
            <select
              value={state.size}
              onChange={(e) => handleChange('size', e.target.value)}
              className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="h-8 w-px bg-border mx-2" />

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={state.loading}
                onChange={(e) => handleChange('loading', e.target.checked)}
                className="h-4 w-4 rounded border-primary text-primary shadow focus:ring-primary"
              />
              Loading
            </label>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={state.disabled}
                onChange={(e) => handleChange('disabled', e.target.checked)}
                className="h-4 w-4 rounded border-primary text-primary shadow focus:ring-primary"
              />
              Disabled
            </label>
          </div>
          
          <div className="flex-1" />
          
          <button 
            onClick={handleReset}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Reset controls"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Controls */}
      {isOpen && (
        <div className="lg:hidden pt-4 mt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted-foreground">Type</label>
            <select
              value={state.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
            >
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted-foreground">Variant</label>
            <select
              value={state.variant}
              onChange={(e) => handleChange('variant', e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
            >
              {variants.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted-foreground">Size</label>
            <select
              value={state.size}
              onChange={(e) => handleChange('size', e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
            >
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={state.loading}
                onChange={(e) => handleChange('loading', e.target.checked)}
                className="h-4 w-4 rounded border-primary text-primary shadow focus:ring-primary"
              />
              Loading
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={state.disabled}
                onChange={(e) => handleChange('disabled', e.target.checked)}
                className="h-4 w-4 rounded border-primary text-primary shadow focus:ring-primary"
              />
              Disabled
            </label>
          </div>
          
           <button 
            onClick={handleReset}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            <RotateCcw className="w-4 h-4" /> Reset Defaults
          </button>
        </div>
      )}
    </div>
  );
}
