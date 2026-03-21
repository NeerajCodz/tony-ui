import * as React from 'react';
import defaultTheme from '@/ui/config/components/default.json';
import { VersionColorContext } from '@/ui/hooks/useVersionColors';

interface VersionColorProviderProps {
  children: React.ReactNode;
  initialTheme?: Record<string, string>;
}

export function VersionColorProvider({ 
  children, 
  initialTheme = defaultTheme.theme 
}: VersionColorProviderProps) {
  const [colors, setColors] = React.useState(initialTheme);

  // Apply CSS variables to the root element (or a specific container if preferred)
  React.useEffect(() => {
    const root = document.documentElement;
    
    Object.entries(colors).forEach(([key, value]) => {
      // Assuming values are HSL strings like "240 10% 3.9%"
      // We set them as is, since Tailwind uses them via hsl(var(--variable))
      root.style.setProperty(key, value);
    });

    // Cleanup function (optional, but good practice if provider unmounts/changes)
    return () => {
      Object.keys(colors).forEach((key) => {
        root.style.removeProperty(key);
      });
    };
  }, [colors]);

  const updateColors = React.useCallback((newColors: Record<string, string>) => {
    setColors(prev => ({ ...prev, ...newColors }));
  }, []);

  return (
    <VersionColorContext.Provider value={{ colors, updateColors }}>
      {children}
    </VersionColorContext.Provider>
  );
}
