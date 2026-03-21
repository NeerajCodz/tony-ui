import * as React from 'react';

// Define the shape of our color theme
type ColorTheme = Record<string, string>;

interface VersionColorContextType {
  colors: ColorTheme;
  updateColors: (newColors: ColorTheme) => void;
}

const VersionColorContext = React.createContext<VersionColorContextType | undefined>(undefined);

export function useVersionColors() {
  const context = React.useContext(VersionColorContext);
  if (context === undefined) {
    throw new Error('useVersionColors must be used within a VersionColorProvider');
  }
  return context;
}

export { VersionColorContext };
