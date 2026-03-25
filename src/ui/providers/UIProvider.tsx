'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ColorProvider } from './ColorProvider';

export interface UIProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  defaultMode?: 'light' | 'dark' | 'system';
}

export const UIProvider: React.FC<UIProviderProps> = ({
  children,
  defaultTheme = 'cyan',
  defaultMode = 'system',
}) => {
  return (
    <ThemeProvider defaultMode={defaultMode}>
      <ColorProvider defaultTheme={defaultTheme}>
        {children}
      </ColorProvider>
    </ThemeProvider>
  );
};

export default UIProvider;
