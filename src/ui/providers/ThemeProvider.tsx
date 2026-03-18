/**
 * ThemeProvider Component
 * Manages light/dark/system theme modes and syncs with system preferences
 * Source: dynamic_theme.md - Theme mode provider pattern
 */

import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { ThemeMode, ThemesConfigFile, ThemeContextValue } from '../types/themes.d.js';
import themesConfig from '../config/themes.json';

/**
 * Theme Context - Provides theme mode and setters
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

/**
 * Get system color scheme preference
 */
function getSystemColorScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Apply theme to document
 */
function applyThemeToDocument(mode: ThemeMode) {
  const root = document.documentElement;
  
  if (mode === 'system') {
    const systemScheme = getSystemColorScheme();
    root.setAttribute('data-theme', systemScheme);
  } else {
    root.setAttribute('data-theme', mode);
  }
}

/**
 * ThemeProvider - Manages light/dark/system theme modes
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'system',
  storageKey = 'theme-mode',
}) => {
  const config = themesConfig as ThemesConfigFile;
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  // Load saved preference from storage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as ThemeMode | null;
    if (saved && config.themes.some(t => t.id === saved && t.enabled)) {
      setMode(saved);
    }
  }, [storageKey, config]);

  // Apply theme to document
  useEffect(() => {
    applyThemeToDocument(mode);
    localStorage.setItem(storageKey, mode);
  }, [mode, storageKey]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (mode === 'system') {
        applyThemeToDocument('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const handleSetMode = useCallback((newMode: ThemeMode) => {
    const exists = config.themes.some(t => t.id === newMode && t.enabled);
    if (exists) {
      setMode(newMode);
    }
  }, [config]);

  const currentTheme = useMemo(() => {
    return config.themes.find(t => t.id === mode) || null;
  }, [mode, config]);

  const value: ThemeContextValue = useMemo(() => ({
    mode,
    setMode: handleSetMode,
    themes: config.themes,
    currentTheme,
  }), [mode, handleSetMode, config, currentTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
