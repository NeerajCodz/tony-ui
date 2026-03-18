/**
 * Theme Type Definitions
 * This file defines all theme-related types for light/dark/system modes
 * Source: dynamic_theme.md - Theme mode architecture
 */

/**
 * Theme Mode Options
 */
export type ThemeMode = 'system' | 'light' | 'dark' | 'cyan';

/**
 * Individual Theme Definition from themes.json
 */
export interface ThemeDefinition {
  no: number;
  id: string;
  name: string;
  icon_name: string;
  enabled: boolean;
  color?: string;
}

/**
 * Complete Theme Configuration from themes.json
 */
export interface ThemesConfigFile {
  default: string;
  themes: ThemeDefinition[];
}

/**
 * Theme Context Value Type
 */
export interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  themes: ThemeDefinition[];
  currentTheme: ThemeDefinition | null;
}

/**
 * System Preference (from prefers-color-scheme)
 */
export type SystemColorScheme = 'light' | 'dark' | 'no-preference';
