/**
 * ColorProvider Component
 * Loads colors.json, manages color themes, and injects CSS variables
 * Source: dynamic_theme.md - Provider architecture pattern
 */

import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { ColorsConfigFile, ColorVariables, ThemeColors } from '../types/colors.d.js';
import colorsConfig from '../config/colors.json';
import semanticConfig from '../config/semantic.json';

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
      
      // Also inject semantic colors from semantic.json
      const semanticColors = (semanticConfig as any).semantic;
      if (semanticColors && Array.isArray(semanticColors)) {
        semanticColors.forEach((sc: any) => {
          if (sc.enabled && sc.colors) {
            const states = ['base', 'background', 'foreground', 'hover', 'border', 'ring', 'active'] as const;
            states.forEach((state) => {
              vars[`--${sc.id}-${state}`] = sc.colors[state];
            });
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
