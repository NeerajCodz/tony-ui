/**
 * ColorProvider Component
 * Loads colors.json, manages color themes, and injects CSS variables
 * Source: dynamic_theme.md - Provider architecture pattern
 */

import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { ColorsConfigFile, ColorVariables, ThemeColors } from '../types/colors.d.js';
import colorsConfig from '../config/colors.json';
import semanticConfig from '../config/semantic.json';
import { getVersionCssVariables } from '../core/version-token-loader';

function toHslColor(value?: string, fallback = '0 0% 0%'): string {
  if (!value) return `hsl(${fallback})`;
  const trimmed = value.trim();
  if (trimmed.startsWith('hsl(') || trimmed.startsWith('rgb(') || trimmed.startsWith('#')) {
    return trimmed;
  }
  return `hsl(${trimmed})`;
}

/**
 * Color Context - Provides color data and setters to entire app
 */
export const ColorContext = createContext<{
  colors: ThemeColors | null;
  variables: ColorVariables;
  currentTheme: string;
  setTheme: (themeId: string) => void;
  config: ColorsConfigFile;
} | null>(null);

interface ColorProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
}

/**
 * Generate CSS variables from color values
 * Converts HSL strings to CSS custom properties
 */
function generateColorVariables(colors: ThemeColors): ColorVariables {
  const variables: ColorVariables = {};

  // Primary, secondary, accent, muted, solid, input, surface, container
  const colorTypes = ['primary', 'secondary', 'accent', 'muted', 'solid', 'input', 'surface', 'container'] as const;
  
  colorTypes.forEach((colorType) => {
    const colorValues = colors[colorType];
    const states = ['base', 'background', 'foreground', 'hover', 'border', 'ring', 'active'] as const;
    
    states.forEach((state) => {
      const varName = `--${colorType}-${state}`;
      variables[varName] = colorValues[state];
    });
  });

  return variables;
}

/**
 * Inject CSS variables into document root
 */
function injectCSSVariables(variables: ColorVariables) {
  const root = document.documentElement;
  
  Object.entries(variables).forEach(([varName, hslValue]) => {
    root.style.setProperty(varName, hslValue);
  });
}

/**
 * ColorProvider - Manages color theme configuration
 */
export const ColorProvider: React.FC<ColorProviderProps> = ({ 
  children, 
  defaultTheme = 'cyan' 
}) => {
  const config = colorsConfig as ColorsConfigFile;
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [colors, setColors] = useState<ThemeColors | null>(null);
  const [variables, setVariables] = useState<ColorVariables>({});

  // Find and load the selected theme
  useEffect(() => {
    const themeConfig = config.themes.find(t => t.id === currentTheme);
    if (themeConfig && themeConfig.colors && themeConfig.colors.length > 0) {
      const themeColors = themeConfig.colors[0]; // Get first color definition
      setColors(themeColors);
      
      // Generate and inject CSS variables
      const vars = generateColorVariables(themeColors);
      
      // Inject standard aliases for compatibility
      vars['--background'] = themeColors.surface.background;
      vars['--foreground'] = themeColors.surface.foreground;
      vars['--text-base'] = themeColors.surface.foreground;
      vars['--text-muted'] = themeColors.muted.foreground;
      vars['--border-base'] = themeColors.surface.border;

      // Inject design-system aliases used throughout components (`--df-*`)
      vars['--df-bg'] = toHslColor(themeColors.surface.background);
      vars['--df-background'] = vars['--df-bg'];
      vars['--df-surface'] = toHslColor(themeColors.container.background || themeColors.surface.background);
      vars['--df-text'] = toHslColor(themeColors.surface.foreground);
      vars['--df-foreground'] = vars['--df-text'];
      vars['--df-border'] = toHslColor(themeColors.surface.border);
      vars['--df-ring'] = toHslColor(themeColors.primary.ring || themeColors.accent.ring);
      vars['--df-muted'] = toHslColor(themeColors.muted.background);
      vars['--df-muted-text'] = toHslColor(themeColors.text.roles.secondary);
      vars['--df-muted-foreground'] = vars['--df-muted-text'];
      vars['--df-secondary'] = toHslColor(themeColors.secondary.base);
      vars['--df-accent'] = toHslColor(themeColors.accent.base);
      vars['--df-accent-hover'] = toHslColor(themeColors.accent.hover);
      vars['--df-accent-foreground'] = toHslColor(themeColors.accent.foreground);
      vars['--df-success'] = toHslColor('142 70% 50%');
      vars['--df-warning'] = toHslColor('41 100% 55%');
      vars['--df-destructive'] = toHslColor('0 100% 60%');
      vars['--df-error'] = vars['--df-destructive'];

      // Inject all version token variables so any rendered version component
      // has the full token namespace available globally.
      const allVersions = [
        'default',
        'angular-corner',
        'border',
        'circuit-board',
        'compact',
        'data-panel',
        'energy-shield',
        'ghost',
        'glass-morphism',
        'holo-frame',
        'honey-comb',
        'large',
        'matrix-grid',
        'neon',
        'padding',
        'quantum-gate',
        'raised',
        'tactical-hud',
        'tech-panel',
        'terminal-window',
      ] as const;

      for (const version of allVersions) {
        const tokenMap = getVersionCssVariables(version);
        Object.entries(tokenMap).forEach(([key, value]) => {
          vars[key] = value;
        });
      }
       
      // Also inject semantic colors from semantic.json
      const semanticColors = (semanticConfig as any).semantic;
      if (semanticColors && Array.isArray(semanticColors)) {
        semanticColors.forEach((sc: any) => {
          if (sc.enabled && sc.colors) {
            const states = ['base', 'background', 'foreground', 'hover', 'border', 'ring', 'active'] as const;
            states.forEach((state) => {
              vars[`--${sc.id}-${state}`] = sc.colors[state];
            });
            // Also mirror semantic colors to df aliases when available
            if (sc.id === 'success') vars['--df-success'] = toHslColor(sc.colors.base);
            if (sc.id === 'warning') vars['--df-warning'] = toHslColor(sc.colors.base);
            if (sc.id === 'destructive') {
              vars['--df-destructive'] = toHslColor(sc.colors.base);
              vars['--df-error'] = toHslColor(sc.colors.base);
            }
          }
        });
      }
      
      setVariables(vars);
      injectCSSVariables(vars);
      
      // Save preference
      localStorage.setItem('color-theme', currentTheme);
    }
  }, [currentTheme, config]);

  const handleSetTheme = useCallback((themeId: string) => {
    const exists = config.themes.some(t => t.id === themeId && t.enabled);
    if (exists) {
      setCurrentTheme(themeId);
    }
  }, [config]);

  const value = useMemo(() => ({
    colors,
    variables,
    currentTheme,
    setTheme: handleSetTheme,
    config,
  }), [colors, variables, currentTheme, handleSetTheme, config]);

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
