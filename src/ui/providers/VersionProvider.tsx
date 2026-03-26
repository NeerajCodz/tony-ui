import React, { useState, useMemo } from 'react';
import type { Version } from '../types/common';
import { VersionContext } from '../core/version-context';

export interface VersionProviderProps {
  children: React.ReactNode;
  defaultVersion?: Version;
}

export function VersionProvider({ 
  children, 
  defaultVersion = 'default' 
}: VersionProviderProps) {
  const [version, setVersion] = useState<Version>(defaultVersion);

  const value = useMemo(() => ({
    version,
    setVersion
  }), [version]);

  return (
    <VersionContext.Provider value={value}>
      {children}
    </VersionContext.Provider>
  );
}

// Re-export hook for convenience
export { useVersion } from '../core/version-context';
