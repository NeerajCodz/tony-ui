'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ColorProvider } from './ColorProvider';
import { VersionProvider } from './VersionProvider';
import type { Version } from '../types/common';

export interface UIProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  defaultMode?: 'light' | 'dark' | 'system';
  defaultVersion?: Version;
}

export const UIProvider: React.FC<UIProviderProps> = ({
  children,
  defaultTheme = 'cyan',
  defaultMode = 'system',
  defaultVersion = 'default',
}) => {
  return (
    <VersionProvider defaultVersion={defaultVersion}>
      <ThemeProvider defaultMode={defaultMode}>
        <ColorProvider defaultTheme={defaultTheme}>
          {children}
        </ColorProvider>
      </ThemeProvider>
    </VersionProvider>
  );
};

export default UIProvider;
