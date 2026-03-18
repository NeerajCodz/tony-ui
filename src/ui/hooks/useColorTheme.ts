/**
 * useColors Hook
 * Access color system from components
 */

import { useContext } from 'react';
import { ColorContext } from '../providers/ColorProvider.js';

export function useColors() {
  const context = useContext(ColorContext);
  
  if (!context) {
    throw new Error('useColors must be used within ColorProvider');
  }
  
  return context;
}

/**
 * useTheme Hook
 * Access theme mode from components
 */

import { ThemeContext } from '../providers/ThemeProvider.js';

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

/**
 * useCSSVariable Hook
 * Get a specific CSS variable value
 */

export function useCSSVariable(variableName: string): string {
  const { variables } = useColors();
  return variables[`--${variableName}`] || '';
}

/**
 * Helper to get HSL value from color type and state
 */
export function useColorValue(colorType: string, state: string = 'base'): string {
  return useCSSVariable(`${colorType}-${state}`);
}
